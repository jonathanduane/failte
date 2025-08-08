import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Radio, Users, Signal, CheckCircle, Building, Mail, Phone, FileText } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertBroadcasterSignupSchema, type InsertBroadcasterSignup } from "@shared/schema";

const formSchema = insertBroadcasterSignupSchema.extend({
  message: z.string().optional()
});

export default function BroadcastersPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stationName: "",
      licenseNumber: "",
      contactPerson: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertBroadcasterSignup) => {
      const response = await apiRequest("/api/broadcaster-signups", "POST", data);
      return response;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We'll be in touch with you soon about joining the DAB+ trial.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/broadcaster-signups"] });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutation.mutate(data);
  };

  const benefits = [
    {
      icon: Radio,
      title: "Enhanced Audio Quality",
      description: "Deliver CD-quality digital audio to your listeners with superior sound clarity and reduced interference.",
      color: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Expanded Reach",
      description: "Access new audiences across the Leinster region with our high-power transmission network.",
      color: "bg-green-600"
    },
    {
      icon: Signal,
      title: "Reliable Coverage",
      description: "Benefit from our synchronous transmission sites providing consistent, overlapping coverage.",
      color: "bg-purple-600"
    },
    {
      icon: Building,
      title: "Professional Support",
      description: "Work with Foothold Communications' expert team with over 1000 broadcast systems under management.",
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for your interest in joining the FáilteDAB trial. Our team will review your application and contact you soon.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="mr-4">
                Submit Another Application
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Join the <span className="text-primary">DAB+ Trial</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            FáilteDAB welcomes all Irish Coimisiún na Meán licensed radio operators to participate in Ireland's digital radio revolution.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`${benefit.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Card className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Broadcaster Application</h2>
            <p className="text-gray-600">
              Complete this form to express your interest in joining the FáilteDAB multiplex trial service.
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="stationName" className="flex items-center">
                  <Radio className="w-4 h-4 mr-2" />
                  Station Name *
                </Label>
                <Input
                  id="stationName"
                  placeholder="Your radio station name"
                  {...form.register("stationName")}
                />
                {form.formState.errors.stationName && (
                  <p className="text-sm text-red-600">{form.formState.errors.stationName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  License Number *
                </Label>
                <Input
                  id="licenseNumber"
                  placeholder="Coimisiún na Meán license number"
                  {...form.register("licenseNumber")}
                />
                {form.formState.errors.licenseNumber && (
                  <p className="text-sm text-red-600">{form.formState.errors.licenseNumber.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Contact Person *
                </Label>
                <Input
                  id="contactPerson"
                  placeholder="Primary contact name"
                  {...form.register("contactPerson")}
                />
                {form.formState.errors.contactPerson && (
                  <p className="text-sm text-red-600">{form.formState.errors.contactPerson.message}</p>
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
                  placeholder="contact@yourstation.ie"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+353 XX XXX XXXX"
                {...form.register("phone")}
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-red-600">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your station, programming, target audience, and why you'd like to join the DAB+ trial..."
                className="min-h-[120px]"
                {...form.register("message")}
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Our team will review your application within 5 business days</li>
                <li>• We'll contact you to discuss technical requirements and setup</li>
                <li>• Upon approval, we'll schedule your integration into the multiplex</li>
                <li>• You'll receive ongoing support throughout the 365-day trial period</li>
              </ul>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting Application..." : "Submit Application"}
            </Button>
          </form>
        </Card>
      </div>

      <Footer />
    </div>
  );
}