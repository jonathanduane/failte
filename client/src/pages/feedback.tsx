import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageSquare, Star, MapPin, Radio, CheckCircle, User, Mail, Heart } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertFeedbackSubmissionSchema, type InsertFeedbackSubmission } from "@shared/schema";

const formSchema = insertFeedbackSubmissionSchema.extend({
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to feedback collection to submit"
  })
});

export default function FeedbackPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      location: "",
      radioModel: "",
      experienceRating: "",
      consent: false
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertFeedbackSubmission) => {
      const response = await apiRequest("/api/feedback-submissions", "POST", data);
      return response;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for helping us improve the DAB+ trial experience.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/feedback-submissions"] });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem submitting your feedback. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutation.mutate(data);
  };

  const feedbackAreas = [
    {
      icon: Radio,
      title: "Audio Quality",
      description: "How does the digital sound compare to FM radio? Notice any improvements in clarity or interference?",
      color: "bg-blue-600"
    },
    {
      icon: MapPin,
      title: "Coverage Areas",
      description: "Where have you successfully received DAB+ signals? Any dead spots or strong reception areas?",
      color: "bg-green-600"
    },
    {
      icon: MessageSquare,
      title: "User Experience",
      description: "How easy is it to tune into DAB+ stations? Any issues with your radio or setup process?",
      color: "bg-purple-600"
    },
    {
      icon: Star,
      title: "Overall Satisfaction",
      description: "Would you recommend DAB+ to others? What would make the experience even better?",
      color: "bg-orange-600"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 rounded-2xl p-12">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Your feedback is invaluable to the success of the DAB+ trial. We'll use your insights to improve the digital radio experience for everyone.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="mr-4">
                Submit More Feedback
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                Return to Home
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Share Your <span className="text-primary">DAB+ Experience</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your feedback shapes the future of digital radio in Ireland. Help us understand what's working well and what we can improve.
          </p>
        </div>
      </div>

      {/* Feedback Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We'd Love to Hear About</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your insights in these key areas help us deliver the best possible DAB+ experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedbackAreas.map((area, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`${area.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <area.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Card className="p-8">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Listener Feedback Form</h2>
            <p className="text-gray-600">
              Help us make DAB+ even better for everyone across Ireland
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Your Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location *
                </Label>
                <Input
                  id="location"
                  placeholder="City/County where you listen"
                  {...form.register("location")}
                />
                {form.formState.errors.location && (
                  <p className="text-sm text-red-600">{form.formState.errors.location.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="radioModel" className="flex items-center">
                  <Radio className="w-4 h-4 mr-2" />
                  Radio Model (Optional)
                </Label>
                <Input
                  id="radioModel"
                  placeholder="Make and model of your DAB+ radio"
                  {...form.register("radioModel")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceRating">Overall Experience Rating *</Label>
              <Select onValueChange={(value) => form.setValue("experienceRating", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Rate your DAB+ experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent - Exceeded expectations</SelectItem>
                  <SelectItem value="very-good">Very Good - Better than FM</SelectItem>
                  <SelectItem value="good">Good - Similar to FM quality</SelectItem>
                  <SelectItem value="fair">Fair - Some improvements needed</SelectItem>
                  <SelectItem value="poor">Poor - Significant issues</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.experienceRating && (
                <p className="text-sm text-red-600">{form.formState.errors.experienceRating.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Detailed Feedback *</Label>
              <Textarea
                id="message"
                placeholder="Please share your thoughts on audio quality, coverage, ease of use, favorite stations, any issues encountered, and suggestions for improvement..."
                className="min-h-[150px]"
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-sm text-red-600">{form.formState.errors.message.message}</p>
              )}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How we use your feedback:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technical improvements to transmission quality and coverage</li>
                <li>• Content and programming decisions for the multiplex</li>
                <li>• Future planning for DAB+ rollout across Ireland</li>
                <li>• Reporting to ComReg on trial success and user satisfaction</li>
              </ul>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                checked={form.watch("consent")}
                onCheckedChange={(checked) => form.setValue("consent", checked as boolean)}
              />
              <Label htmlFor="consent" className="text-sm">
                I consent to FáilteDAB collecting and using this feedback to improve the DAB+ trial service. *
              </Label>
            </div>
            {form.formState.errors.consent && (
              <p className="text-sm text-red-600">{form.formState.errors.consent.message}</p>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting Feedback..." : "Submit Feedback"}
            </Button>
          </form>
        </Card>
      </div>

      <Footer />
    </div>
  );
}