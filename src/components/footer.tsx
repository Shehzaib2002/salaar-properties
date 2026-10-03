import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase mb-6 inline-block">
              SALAAR
            </Link>
            <p className="text-brand-foreground/70 max-w-sm leading-relaxed text-sm">
              Premium real estate developments and properties designed to deliver architectural excellence and enduring value.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Discover</h4>
            <ul className="space-y-3">
              <li><Link href="/projects" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/properties" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">Properties</Link></li>
              <li><Link href="/locations" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/insights" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-brand-foreground/70 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-foreground/50">
          <p>&copy; {new Date().getFullYear()} Salaar Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
