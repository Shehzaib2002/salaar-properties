import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
            <form className="flex flex-col gap-5">
              <input type="text" placeholder="Full Name" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand" />
              <input type="email" placeholder="Email Address" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand" />
              <input type="tel" placeholder="Phone Number" className="border-b border-border py-3 bg-transparent outline-none focus:border-brand" />
              <textarea placeholder="Message" rows={4} className="border-b border-border py-3 bg-transparent outline-none focus:border-brand resize-none"></textarea>
              <button type="button" className="bg-brand text-white py-4 font-semibold uppercase tracking-wider text-sm mt-4 hover:bg-brand/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
