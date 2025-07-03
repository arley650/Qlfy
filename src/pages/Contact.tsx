

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required").min(3, "Subject must be at least 3 characters"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    form.reset();
  };

  const bubblePositions = [
    { width: 80, height: 80, left: 10, top: 15, duration: 8 },
    { width: 120, height: 120, left: 75, top: 25, duration: 12 },
    { width: 60, height: 60, left: 45, top: 10, duration: 6 },
    { width: 100, height: 100, left: 20, top: 70, duration: 10 },
    { width: 90, height: 90, left: 85, top: 60, duration: 9 },
  ];

  return (
    <>
      <style>
        {`
          @keyframes bubble-rise {
            0% {
              transform: translateY(100vh);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-200px);
              opacity: 0;
            }
          }
          .bubble-animation {
            animation: bubble-rise linear infinite;
          }
        `}
      </style>
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Scroll Progress Bar */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-2 h-64 bg-blue-200 rounded-full z-50">
          <div 
            className="bg-blue-600 rounded-full transition-all duration-300 ease-out w-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Bubble background */}
        <div className="absolute inset-0 pointer-events-none">
          {bubblePositions.map((bubble, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-100 opacity-30 bubble-animation"
              style={{
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                left: `${bubble.left}%`,
                animationDuration: `${bubble.duration}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Contact Form Section */}
        <div className="flex-1 p-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Write us a message
              </h1>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="rounded-lg border-gray-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="rounded-lg border-gray-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What is this about?"
                            className="rounded-lg border-gray-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your message (optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            className="h-32 rounded-lg border-gray-300 resize-none"
                            placeholder="Tell us more about your inquiry..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-8 py-3"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

