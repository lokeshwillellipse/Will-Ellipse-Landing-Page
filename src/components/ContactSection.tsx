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
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Let's Build Together
          </h2>
          <p className="text-primary/60 text-base sm:text-lg">
            Ready to bring your vision to life? Get in touch with our team
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg shadow-primary/5">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@gmail.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-primary mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave us your message ..."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-primary/10 bg-transparent text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-cream py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* CTA Card */}
            <div className=" border border-solid border-primary/10 bg-secondary rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg shadow-primary/5">
              <h3 className="text-xl sm:text-xl font-semibold text-primary mb-3 sm:mb-4">
                Have a build in mind? Let us know
              </h3>
              <p className="text-primary/60 text-sm sm:text-base">
                Join the future of Drone Technology. Our team is ready to
                transform your ideas into reality.
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg shadow-primary/5">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <a
                  href="mailto:office@willellipse.com"
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm text-primary/60 mb-0.5 sm:mb-1">
                      Email
                    </span>
                    <span className="text-primary font-normal text-sm sm:text-base">
                      office@willellipse.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919384181281"
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm text-primary/60 mb-0.5 sm:mb-1">
                      Phone
                    </span>
                    <span className="text-primary font-normal text-sm sm:text-base">
                      +91 9384181281
                    </span>
                  </div>
                </a>

                <a className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm text-primary/60 mb-0.5 sm:mb-1">
                      Address
                    </span>
                    <span className="text-primary font-normal leading-relaxed text-sm sm:text-base">
                      1207, Block - A Gopalan Olympia,
                      <br />
                      Kumbalgodu, Kengeri,
                      <br />
                      Bangalore - 560074
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
