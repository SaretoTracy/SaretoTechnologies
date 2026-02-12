import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "saretotechnologies@gmail.com",
      link: "mailto:saretotechnologies@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+254 715 691 186",
      link: "tel:+254715691186",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Alternative",
      value: "+254 745 939 721",
      link: "tel:+254745939721",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Nairobi, Kenya",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ fullName: "", email: "", message: "" });

      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    } catch (err) {
      console.error(err);
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in">
         <div className="inline-block mb-4">
            <span className="text-red-500 font-semibold text-sm tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
              Contact Us
            </span>
          </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's <span className="text-red-500">Connect</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Drop me a message
          and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* CONTACT INFO */}
        <div className="lg:w-96 space-y-6 animate-slide-in-left">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-red-500/10">
            <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-400 text-sm mb-8">
              Feel free to reach out anytime. I'm always open to discussing new
              projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <InfoItem key={i} {...info} index={i} />
              ))}
            </div>
          </div>

        
        </div>

        {/* FORM */}
        <div className="flex-1 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 md:p-10 rounded-2xl border border-zinc-800 backdrop-blur-sm shadow-lg animate-slide-in-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Send me a <span className="text-red-500">Message</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below and I'll respond within 24 hours
          </p>

          {formStatus.submitted && (
            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-xl mb-6 animate-fade-in shadow-lg shadow-green-500/10">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">
                Message sent successfully! I'll get back to you soon.
              </span>
            </div>
          )}

          {formStatus.error && (
            <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6 animate-fade-in shadow-lg shadow-red-500/10">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">
                Failed to send message. Please try again.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full p-4 rounded-xl bg-black/50 border ${
                    errors.fullName ? "border-red-500" : "border-zinc-800"
                  } focus:border-red-500 outline-none transition-all duration-300 text-white placeholder-gray-500 hover:border-zinc-700`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full p-4 rounded-xl bg-black/50 border ${
                    errors.email ? "border-red-500" : "border-zinc-800"
                  } focus:border-red-500 outline-none transition-all duration-300 text-white placeholder-gray-500 hover:border-zinc-700`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message"
                className={`w-full p-4 rounded-xl bg-black/50 border ${
                  errors.message ? "border-red-500" : "border-zinc-800"
                } focus:border-red-500 outline-none resize-none transition-all duration-300 text-white placeholder-gray-500 hover:border-zinc-700`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formStatus.submitting}
              className="group relative flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto overflow-hidden shadow-lg hover:shadow-red-500/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                {formStatus.submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

function InfoItem({ icon, label, value, link, index }) {
  const content = (
    <div
      className="flex items-center gap-4 bg-black/30 p-4 rounded-xl border border-zinc-800 hover:border-red-500 transition-all duration-300 group cursor-pointer hover:bg-black/50 hover:shadow-lg hover:shadow-red-500/5"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-sm text-gray-200 font-medium truncate group-hover:text-white transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block">
      {content}
    </a>
  ) : (
    content
  );
}