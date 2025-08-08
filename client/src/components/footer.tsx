import { Building2, Mail, Radio, Award, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: "About DAB+", section: "about" },
    { label: "Coverage Map", section: "coverage" },
    { label: "For Broadcasters", section: "broadcasters" },
    { label: "Send Feedback", section: "feedback" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const contactInfo = [
    {
      icon: Building2,
      title: "Foothold Communications Limited",
      subtitle: "Licensed DAB+ Trial Operator",
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "info@failtedab.ie",
      subtitle: "General Inquiries",
      color: "text-accent"
    },
    {
      icon: Radio,
      title: "broadcasters@failtedab.ie",
      subtitle: "Broadcaster Participation",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Licensed by ComReg",
      subtitle: "365-Day Trial Period",
      color: "text-accent"
    }
  ];

  return (
    <footer id="contact" className="bg-neutral-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-primary px-4 py-2 rounded inline-block mb-6">
              <img 
                src="https://failtedab.ie/wp-content/uploads/2024/11/White-logo-no-background-1-1024x230.png"
                alt="FáilteDAB Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              FáilteDAB is bringing the future of digital radio to Ireland through high-quality DAB+ broadcasting. 
              Licensed by ComReg and operated by Foothold Communications Limited.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className={`${contact.color} mt-1 h-5 w-5 flex-shrink-0`} />
                    <div>
                      <p className="font-medium">{contact.title}</p>
                      <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FáilteDAB / Foothold Communications Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 lg:mt-0">
              Trial Service | Licensed by ComReg | Starting Late Spring 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
