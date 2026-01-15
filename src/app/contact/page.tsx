"use client";

import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Paperclip, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function ContactPage() {
  const [services, setServices] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [otherText, setOtherText] = useState("");
  const [servicesError, setServicesError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fallbackSucceeded, setFallbackSucceeded] = useState(false);
  const [fallbackSubmitting, setFallbackSubmitting] = useState(false);
  const [state, formspreeHandleSubmit] = useForm("mvzgelkd");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const MAX_FILES = 10;
  const MAX_FILE_BYTES = 25 * 1024 * 1024;
  const MAX_TOTAL_BYTES = 100 * 1024 * 1024;

  const SERVICE_OPTIONS = [
    { value: "Custom Software Development", label: "Custom Software Development" },
    { value: "Website Design & Development", label: "Website Design & Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Hire Developers", label: "Hire Developers" },
    { value: "Other", label: "Other" },
  ];

  const isOtherSelected = useMemo(() => services.includes("Other"), [services]);

  const setSelectedFiles = (next: File[]) => {
    setFiles(next);
    const input = fileInputRef.current;
    if (!input) return;
    if (next.length === 0) {
      input.value = "";
    }
  };

  const getFormspreeErrorMessage = (): string | null => {
    const anyErrors = state.errors as any;
    if (!anyErrors) return null;
    if (typeof anyErrors === "string") return anyErrors;
    if (Array.isArray(anyErrors)) return anyErrors[0]?.message || anyErrors[0] || null;
    if (typeof anyErrors.getFormErrors === "function") {
      const fe = anyErrors.getFormErrors();
      if (Array.isArray(fe) && fe.length) return fe[0]?.message || fe[0] || null;
    }
    const msg = anyErrors?.message;
    return typeof msg === "string" ? msg : null;
  };

  useEffect(() => {
    if (state.succeeded) {
      setSubmitError(null);
      setServicesError(null);
      setSelectedFiles([]);
      setFallbackSucceeded(false);
    }
  }, [state.succeeded]);

  const getFallbackErrorMessage = async (res: Response): Promise<string> => {
    try {
      const data: any = await res.json();
      const msg =
        data?.errors?.[0]?.message ||
        data?.error ||
        data?.message ||
        data?.errors?.[0] ||
        null;
      if (typeof msg === "string" && msg.trim()) return msg;
    } catch {
      // ignore
    }
    return `Request failed (${res.status})`;
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (services.length === 0) {
      setServicesError("Please select at least one service.");
      return;
    }
    setServicesError(null);
    setSubmitError(null);
    setFallbackSucceeded(false);

    let ok = false;
    try {
      const res = await formspreeHandleSubmit(e);
      ok = Boolean((res as any)?.response?.ok);
    } catch {
      ok = false;
    }

    if (ok) {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours."
      });
      setServices([]);
      setSelectedFiles([]);
      setOtherText("");
      setSubmitError(null);
      return;
    }

    // Fallback submit (still frontend-only) to surface exact Formspree error messages (esp. file uploads).
    try {
      setFallbackSubmitting(true);
      const fd = new FormData(e.currentTarget);
      const r = await fetch("https://formspree.io/f/mvzgelkd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: fd,
      });

      if (!r.ok) {
        const msg = await getFallbackErrorMessage(r);
        setSubmitError(msg);
        return;
      }

      setFallbackSucceeded(true);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      setServices([]);
      setSelectedFiles([]);
      setOtherText("");
    } catch {
      const msg = getFormspreeErrorMessage();
      setSubmitError(msg || "Something went wrong. Please try again.");
    } finally {
      setFallbackSubmitting(false);
    }
  }
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714]">
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(67,178,249,0.15),transparent_60%)]" />
          </div>

          <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <MotionDiv variant="fadeInUp" className="text-center max-w-4xl mx-auto">
              <Badge variant="glow" className="mb-6">
                <Mail className="w-3 h-3 mr-1" />
                Get In Touch
              </Badge>
              <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                READY TO <span className="heading-accent">START YOUR PROJECT?</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Let's discuss your project. We typically reply within 24 hours.
              </p>
            </MotionDiv>
          </MotionSection>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <MotionDiv variant="fadeInLeft" className="lg:col-span-2">
              <Card className="bg-background/80 border border-foreground/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-[#43B2F9]" />
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {state.succeeded || fallbackSucceeded ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 text-emerald-500 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Thank you! We&apos;ll get back to you shortly.
                      </div>
                      <div className="text-sm text-foreground/70">
                        We typically reply within 24 hours.
                      </div>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      id="contact-form"
                      action="https://formspree.io/f/mvzgelkd"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-[#94A3B8]" htmlFor="contact-name">Name</label>
                          <input
                            id="contact-name"
                            name="name"
                            className="w-full rounded-lg bg-[rgba(100,103,255,0.08)] border border-[rgba(100,103,255,0.25)] px-4 py-3 outline-none focus:border-[#6467FF] focus:ring-2 focus:ring-[#6467FF]/20 transition-all text-white placeholder:text-[#6B7280]"
                            placeholder="Your name"
                            required
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-[#94A3B8]" htmlFor="contact-email">Work email</label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            className="w-full rounded-lg bg-[rgba(100,103,255,0.08)] border border-[rgba(100,103,255,0.25)] px-4 py-3 outline-none focus:border-[#6467FF] focus:ring-2 focus:ring-[#6467FF]/20 transition-all text-white placeholder:text-[#6B7280]"
                            placeholder="Email address"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                      </div>

                      {/* Services checklist */}
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-[#94A3B8]">Choose what you need help with<span className="text-red-500">*</span></label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {SERVICE_OPTIONS.map((opt) => {
                            const checked = services.includes(opt.value);
                            return (
                              <label key={opt.value} className="flex items-center gap-3 p-3 rounded-lg border border-[rgba(100,103,255,0.25)] hover:bg-[rgba(100,103,255,0.1)] cursor-pointer">
                                <input
                                  type="checkbox"
                                  name="services"
                                  value={opt.value}
                                  className="h-4 w-4 rounded border-foreground/30"
                                  checked={checked}
                                  onChange={(e) => {
                                    setServicesError(null);
                                    setServices((prev) =>
                                      e.target.checked ? [...prev, opt.value] : prev.filter((v) => v !== opt.value)
                                    );
                                  }}
                                />
                                <span className="text-sm text-foreground/90">{opt.label}</span>
                              </label>
                            );
                          })}
                        </div>
                        {isOtherSelected ? (
                          <input
                            name="other_details"
                            value={otherText}
                            onChange={(e) => setOtherText(e.target.value)}
                            className="mt-2 w-full rounded-lg bg-foreground/5 border border-foreground/10 px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                            placeholder="Please specify"
                          />
                        ) : (
                          <input type="hidden" name="other_details" value="" />
                        )}
                        {servicesError && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-sm text-red-500"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {servicesError}
                          </motion.div>
                        )}
                        <ValidationError prefix="Services" field="services" errors={state.errors} />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80" htmlFor="contact-message">Tell us about your needs<span className="text-red-500">*</span></label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={6}
                          className="w-full rounded-lg bg-foreground/5 border border-foreground/10 px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                          placeholder="Message..."
                          required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        {/* Attach files */}
                        <div className="flex items-center gap-3">
                          <input
                            id="attachments"
                            type="file"
                            name="attachment"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                              const list = Array.from(e.target.files || []);
                              if (list.length === 0) {
                                setSelectedFiles([]);
                                return;
                              }

                              if (list.length > MAX_FILES) {
                                toast.error("Too many files", {
                                  description: `You can upload up to ${MAX_FILES} files per message.`,
                                });
                                setSelectedFiles([]);
                                e.currentTarget.value = "";
                                return;
                              }

                              const totalBytes = list.reduce((sum, f) => sum + (f.size || 0), 0);
                              const tooLarge = list.find((f) => (f.size || 0) > MAX_FILE_BYTES);
                              if (tooLarge) {
                                toast.error("File too large", {
                                  description: "Each file must be 25MB or less.",
                                });
                                setSelectedFiles([]);
                                e.currentTarget.value = "";
                                return;
                              }

                              if (totalBytes > MAX_TOTAL_BYTES) {
                                toast.error("Total upload too large", {
                                  description: "Total attachments must be 100MB or less.",
                                });
                                setSelectedFiles([]);
                                e.currentTarget.value = "";
                                return;
                              }

                              setSelectedFiles(list);
                            }}
                            ref={fileInputRef}
                          />
                          <label
                            htmlFor="attachments"
                            title="Up to 10 files, 25MB each (100MB total)"
                            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground cursor-pointer"
                          >
                            <Paperclip className="w-4 h-4" />
                            Attach files
                          </label>
                          {files.length > 0 && (
                            <span className="inline-flex items-center gap-1 text-xs text-foreground/60">
                              {files.length} file(s) selected
                              <button
                                type="button"
                                className="inline-flex items-center justify-center rounded hover:bg-foreground/10"
                                aria-label="Clear selected files"
                                onClick={() => setSelectedFiles([])}
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          )}
                          <span className="sr-only" id="attachments-help">
                            Up to 10 files. Each file must be 25MB or less. Total attachments must be 100MB or less.
                          </span>
                        </div>

                        <Button
                          type="submit"
                          disabled={state.submitting || fallbackSubmitting}
                          variant="primary"
                          size="lg"
                          className="min-w-[140px]"
                        >
                          {state.submitting || fallbackSubmitting ? (
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
                      </div>
                      {(state.errors || submitError) ? (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-sm text-red-500"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {submitError || getFormspreeErrorMessage() || "Something went wrong. Please try again."}
                        </motion.div>
                      ) : null}
                    </form>
                  )}
                </CardContent>
              </Card>
            </MotionDiv>

            {/* Contact Info */}
            <div className="space-y-6">
              <MotionDiv variant="fadeInRight" className="space-y-6">
                <Card className="bg-background/80 border border-foreground/10 shadow-lg">
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
                          <div className="text-sm text-foreground/70">alienmatrix0@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors">
                        <Phone className="w-5 h-5 text-brand" />
                        <div>
                          <div className="text-sm font-medium">WhatsApp</div>
                          <div className="text-sm text-foreground/70">+923091930544</div>
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

                <Card className="bg-background/80 border border-foreground/10 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Response Time</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground/70">Email</span>
                        <Badge variant="outline">&lt; 24h</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground/70">WhatsApp</span>
                        <Badge variant="outline">&lt; 2h</Badge>
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
          </div>

          <div className="mt-20 relative">
            <div className="relative mx-auto max-w-7xl h-[600px] flex items-center justify-center">
              {/* Scattered flags around the center */}
              {[
                { code: "ae", top: "8%", left: "12%", size: "w-16 h-16" },
                { code: "us", top: "15%", left: "6%", size: "w-14 h-14" },
                { code: "gb", top: "28%", left: "4%", size: "w-12 h-12" },
                { code: "sa", top: "45%", left: "8%", size: "w-16 h-16" },
                { code: "kw", top: "58%", left: "12%", size: "w-14 h-14" },
                { code: "de", top: "72%", left: "6%", size: "w-12 h-12" },
                { code: "fr", top: "82%", left: "15%", size: "w-14 h-14" },
                { code: "it", top: "88%", left: "28%", size: "w-12 h-12" },
                { code: "ie", top: "12%", left: "24%", size: "w-12 h-12" },
                { code: "au", top: "6%", left: "35%", size: "w-14 h-14" },
                { code: "es", top: "85%", left: "40%", size: "w-12 h-12" },
                { code: "nl", top: "78%", left: "68%", size: "w-12 h-12" },
                { code: "dk", top: "10%", left: "65%", size: "w-14 h-14" },
                { code: "pk", top: "6%", left: "78%", size: "w-16 h-16" },
                { code: "tr", top: "18%", left: "88%", size: "w-14 h-14" },
                { code: "az", top: "32%", left: "92%", size: "w-12 h-12" },
                { code: "nz", top: "48%", left: "90%", size: "w-16 h-16" },
                { code: "ca", top: "64%", left: "88%", size: "w-14 h-14" },
                { code: "qa", top: "78%", left: "84%", size: "w-12 h-12" },
                { code: "my", top: "88%", left: "72%", size: "w-14 h-14" },
                { code: "jp", top: "85%", left: "54%", size: "w-16 h-16" },
                { code: "fi", top: "18%", left: "76%", size: "w-12 h-12" },
                { code: "gb", top: "72%", left: "18%", size: "w-14 h-14" },
              ].map((flag, i) => (
                <motion.div
                  key={`${flag.code}-${i}`}
                  className="absolute"
                  style={{ top: flag.top, left: flag.left }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -10, 0, 10, 0],
                    x: [0, 5, 0, -5, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 8 + (i % 3) * 2,
                    delay: i * 0.05,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className={`${flag.size} rounded-full overflow-hidden ring-2 ring-white/40 dark:ring-white/20 shadow-xl bg-white`}>
                    <Image
                      src={`https://flagcdn.com/w80/${flag.code}.png`}
                      alt={flag.code}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </motion.div>
              ))}

              {/* Center CTA */}
              <MotionDiv variant="fadeInUp" className="relative z-10 text-center max-w-2xl px-4">
                <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
                  Start Your Journey Today
                </h2>
                <p className="text-foreground/70 text-sm sm:text-base mb-6">
                  We work with clients worldwide. Share your needs and we'll reply within 24 hours.
                </p>
                <Button asChild variant="primary" size="lg">
                  <a href="#contact-form">Schedule a Meeting</a>
                </Button>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
