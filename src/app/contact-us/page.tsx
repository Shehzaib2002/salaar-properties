"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { submitEnquiry } from "../actions";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitEnquiry(formData);
    
    if (result.error) {
      setErrorMessage(result.error);
      setStatus("error");
    } else {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 px-6">
      <div className="container mx-auto max-w-[1200px]">
        <h1 className="text-4xl md:text-5xl font-light text-brand mb-16 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-light text-brand mb-6">Get in Touch</h2>
            <p className="text-muted mb-10 font-light">
              Our property advisors are ready to assist you with your real estate journey in Lahore.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand mt-1" />
                <div>
                  <h4 className="font-semibold text-brand mb-1 uppercase tracking-wider text-xs">Office</h4>
                  <p className="text-muted text-sm">DHA Phase 6, Main Boulevard<br/>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand mt-1" />
                <div>
                  <h4 className="font-semibold text-brand mb-1 uppercase tracking-wider text-xs">Phone</h4>
                  <p className="text-muted text-sm">+92 42 111 222 333</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand mt-1" />
                <div>
                  <h4 className="font-semibold text-brand mb-1 uppercase tracking-wider text-xs">Email</h4>
                  <p className="text-muted text-sm">info@salaarproperties.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface border border-border p-8">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50/50 border border-green-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent</h3>
                <p className="text-green-700 text-sm">Thank you for your interest. Our advisors will contact you shortly.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-green-600 font-medium hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input required type="text" name="name" placeholder="Full Name" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand" />
                <input required type="email" name="email" placeholder="Email Address" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand" />
                <input required type="tel" name="phone" placeholder="Phone Number" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand" />
                <textarea required name="message" placeholder="Message" rows={4} className="border-b border-border py-3 bg-transparent outline-none focus:border-brand resize-none"></textarea>
                
                {status === "error" && <p className="text-red-500 text-sm">{errorMessage}</p>}
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-brand text-white py-4 font-semibold uppercase tracking-wider text-sm mt-4 hover:bg-brand/90 transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
