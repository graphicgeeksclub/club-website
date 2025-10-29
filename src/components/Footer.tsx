import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  QrCode,
  ExternalLink,
} from "lucide-react";
import clubLogo from "@/assets/club-logo.png";
import collegeLogo from "@/assets/college-logo.png";
import joinQR from "@/assets/join-qr.png";

export function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/graphic_geeks_geu/",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-500" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "graphicgeeks@geu.ac.in",
      href: "mailto:graphicgeeks@geu.ac.in",
    },
    { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MapPin, text: "Graphic Era University, Dehradun", href: "#" },
  ];

  const quickLinks = [
    { name: "About Club", href: "#intro" },
    { name: "Our Faculty", href: "#faculty" },
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
    { name: "Skills", href: "#skills" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <footer
      id="join"
      className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t"
    >
      {/* Join Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Join Club Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Become part of an amazing community of tech enthusiasts,
              innovators, and future leaders. Start your journey with Graphic
              Geeks today!
            </p>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8"
                >
                  Join Now <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>✓ Free membership</span>
                <span>✓ Exclusive workshops</span>
                <span>✓ Industry connections</span>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="flex justify-center">
            <Card className="glass-card hover:glow-effect transition-all duration-300 max-w-sm w-full">
              <CardContent className="p-8 text-center">
                <QrCode className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Quick Join
                </h3>
                <div className="bg-white p-4 rounded-2xl mb-4 inline-block">
                  <img
                    src={joinQR}
                    alt="Join Club QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  Scan this QR code with your phone to join our WhatsApp group
                  and get instant updates!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={clubLogo} alt="Graphic Geeks" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Graphic Geeks
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tech Innovation Club
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering students with cutting-edge technology skills and
              fostering innovation at Graphic Era University.
            </p>
            <div className="flex items-center space-x-2">
              <img
                src={collegeLogo}
                alt="Graphic Era College"
                className="h-8 w-8"
              />
              <span className="text-sm text-muted-foreground">
                Graphic Era University
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <IconComponent className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground ${social.color} transition-all duration-300 group`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Graphic Geeks - Graphic Era University. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Made with ❤️ by the Graphic Geeks Web Development Team
          </p>
        </div>
      </div>
    </footer>
  );
}
