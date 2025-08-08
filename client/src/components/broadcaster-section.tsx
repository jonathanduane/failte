import { useState } from "react";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertBroadcasterSignup } from "@shared/schema";

export default function BroadcasterSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertBroadcasterSignup>({
    stationName: "",
    licenseNumber: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: ""
  });

  const signupMutation = useMutation({
    mutationFn: async (data: InsertBroadcasterSignup) => {
      const response = await apiRequest("POST", "/api/broadcaster-signup", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Thank you for your interest in the DAB+ trial. We'll be in touch soon.",
      });
      setFormData({
        stationName: "",
        licenseNumber: "",
        contactPerson: "",
        email: "",
        phone: "",
        message: ""
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
    if (!formData.stationName || !formData.licenseNumber || !formData.contactPerson || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    signupMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertBroadcasterSignup, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      title: "Expand Your Reach",
      description: "Access new audiences and extend your broadcasting footprint across Ireland."
    },
    {
      title: "Superior Audio Quality",
      description: "Deliver your content in crystal-clear digital quality to discerning listeners."
    },
    {
      title: "Future-Proof Technology",
      description: "Position your station at the forefront of broadcasting innovation in Ireland."
    },
    {
      title: "Trial Participation",
      description: "Be part of the evaluation process that will shape the future of Irish radio."
    }
  ];

  return (
    <section id="broadcasters" className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Calling All Irish <span className="text-accent">Broadcasters</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            FáilteDAB invites all Coimisiún na Meán licensed radio operators to participate in this groundbreaking trial 
            and maximize diversity of choice for listeners.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Join the Digital Revolution</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-blue-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Broadcaster Signup Form */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Express Your Interest</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="station-name">Station Name *</Label>
                  <Input 
                    id="station-name"
                    value={formData.stationName}
                    onChange={(e) => handleInputChange("stationName", e.target.value)}
                    placeholder="Your Radio Station Name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="license-number">License Number *</Label>
                  <Input 
                    id="license-number"
                    value={formData.licenseNumber}
                    onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                    placeholder="Coimisiún na Meán License Number"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-person">Contact Person *</Label>
                  <Input 
                    id="contact-person"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                    placeholder="Full Name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="contact@yourstation.ie"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+353 1 234 5678"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message"
                    value={formData.message || ""}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your station and interest in DAB+ trial..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg"
                  disabled={signupMutation.isPending}
                >
                  {signupMutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Interest <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
