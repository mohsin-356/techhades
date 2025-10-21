"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setMessage(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    if (res.ok) {
      setStatus("success");
      setMessage("Thank you! We'll get back to you shortly.");
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours."
      });
      form.reset();
    } else {
      setStatus("error");
      const { error } = await res.json().catch(() => ({ error: "Something went wrong." }));
      setMessage(error || "Something went wrong.");
      toast.error("Failed to send message", {
        description: error || "Please try again later."
      });
    }
  }

  return (
    <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <MotionDiv variant="fadeInUp" className="text-center mb-12">
        <Badge variant="glow" className="mb-4">
          <Mail className="w-3 h-3 mr-1" />
          Get In Touch
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-display text-foreground mb-4">Contact Us</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          Let's discuss your project. We typically reply within 24 hours.
        </p>
      </MotionDiv>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <MotionDiv variant="fadeInLeft" className="lg:col-span-2">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-brand" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Name</label>
                    <input 
                      name="name" 
                      className="w-full rounded-lg bg-foreground/5 border border-foreground/10 px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" 
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="w-full rounded-lg bg-foreground/5 border border-foreground/10 px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" 
                      placeholder="your@email.com"
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    name="message" 
                    rows={6} 
                    className="w-full rounded-lg bg-foreground/5 border border-foreground/10 px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none" 
                    placeholder="Tell us about your project..."
                    required 
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    variant="glow"
                    size="lg"
                    className="min-w-[140px]"
                  >
                    {status === "loading" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {message && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex items-center gap-2 text-sm ${
                        status === "success" ? "text-emerald-500" : "text-red-500"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <AlertCircle className="w-4 h-4" />
                      )}
                      {message}
                    </motion.div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </MotionDiv>

        {/* Contact Info */}
        <MotionDiv variant="fadeInRight" className="space-y-6">
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand" />
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <Mail className="w-5 h-5 text-brand" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-foreground/70">hello@techhades.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <Phone className="w-5 h-5 text-brand" />
                  <div>
                    <div className="text-sm font-medium">WhatsApp</div>
                    <div className="text-sm text-foreground/70">+00 000 0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                  <MapPin className="w-5 h-5 text-brand" />
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm text-foreground/70">Global Remote Team</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Response Time</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">Email</span>
                  <Badge variant="glass">&lt; 24h</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">WhatsApp</span>
                  <Badge variant="glass">&lt; 2h</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">Project Call</span>
                  <Badge variant="glow">Same Day</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
