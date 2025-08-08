import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertFeedbackSubmission } from "@shared/schema";

export default function FeedbackSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertFeedbackSubmission>({
    name: "",
    email: "",
    location: "",
    radioModel: "",
    experienceRating: "",
    message: "",
    consent: false
  });

  const feedbackMutation = useMutation({
    mutationFn: async (data: InsertFeedbackSubmission) => {
      const response = await apiRequest("POST", "/api/feedback", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback about the DAB+ trial.",
      });
      setFormData({
        name: "",
        email: "",
        location: "",
        radioModel: "",
        experienceRating: "",
        message: "",
        consent: false
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.location || !formData.experienceRating || !formData.message || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and accept the consent checkbox.",
        variant: "destructive",
      });
      return;
    }
    feedbackMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertFeedbackSubmission, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Your Voice <span className="text-accent">Matters</span>
          </h2>
          <p className="text-xl text-gray-600">
            Help shape the future of digital radio in Ireland. Your feedback and experiences with the DAB+ trial 
            will provide valuable insights for future licensing decisions.
          </p>
        </div>
        
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="feedback-name">Name *</Label>
                  <Input 
                    id="feedback-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="feedback-email">Email *</Label>
                  <Input 
                    id="feedback-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input 
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="County/City where you're listening"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="radio-model">DAB+ Radio Model (Optional)</Label>
                <Input 
                  id="radio-model"
                  value={formData.radioModel || ""}
                  onChange={(e) => handleInputChange("radioModel", e.target.value)}
                  placeholder="Brand and model of your DAB+ radio"
                />
              </div>
              
              <div>
                <Label htmlFor="experience-rating">Overall Experience *</Label>
                <Select value={formData.experienceRating} onValueChange={(value) => handleInputChange("experienceRating", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="feedback-message">Your Feedback *</Label>
                <Textarea 
                  id="feedback-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please share your experience with DAB+ trial - signal quality, station selection, ease of use, any issues encountered, suggestions for improvement..."
                  rows={6}
                  required
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                  required
                />
                <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I consent to FáilteDAB using my feedback for trial evaluation and future licensing considerations. 
                  Personal information will be handled in accordance with data protection regulations. *
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg"
                disabled={feedbackMutation.isPending}
              >
                {feedbackMutation.isPending ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Feedback <MessageCircle className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
