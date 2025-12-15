import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 italic">
            Let's Build Together
          </h2>
          <p className="text-primary/60 text-lg">
            Ready to bring your vision to life? Get in touch with our team
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-lg shadow-primary/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave us your message ..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-cream py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-card rounded-3xl p-8 shadow-lg shadow-primary/5">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Have a build in mind? Let us know
              </h3>
              <p className="text-primary/60">
                Join the future of Drone Technology. Our team is ready to
                transform your ideas into reality.
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="bg-card rounded-3xl p-8 shadow-lg shadow-primary/5">
              <h3 className="text-xl font-bold text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:office@willellipse.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary/60 mb-1">
                      Email
                    </span>
                    <span className="text-primary font-medium">
                      office@willellipse.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919384181281"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary/60 mb-1">
                      Phone
                    </span>
                    <span className="text-primary font-medium">
                      +91 9384181281
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary/60 mb-1">
                      Address
                    </span>
                    <span className="text-primary font-medium leading-relaxed">
                      1207, Block - A Gopalan Olympia,
                      <br />
                      Kumbalgodu, Kengeri,
                      <br />
                      Bangalore - 560074
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;