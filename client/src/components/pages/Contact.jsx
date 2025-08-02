import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaEdit,
} from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/api";

function Contact() {
  const [ContactUs, setContactUs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUs((previousdata) => ({ ...previousdata, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(ContactUs);
    try {
      const res = await api.post("/public/contactUs", ContactUs);
      toast.success(res.data.message);
      setContactUs({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} ${
          error.response?.data.message || ""
        }`
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-red-700 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our event planning services? We'd love to hear
            from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-red-700 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-red-100 mb-8">
              Ready to make your event unforgettable? Let's start planning
              together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-red-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-red-100">info@eventplanner.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-red-100">
                    123 Event Street
                    <br />
                    Planning City, PC 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 relative">
              <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-400/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <FaUser className="inline mr-2 text-red-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={ContactUs.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <FaEnvelope className="inline mr-2 text-red-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={ContactUs.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <FaPhone className="inline mr-2 text-red-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={ContactUs.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <FaEdit className="inline mr-2 text-red-600" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={ContactUs.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <FaEdit className="inline mr-2 text-red-600" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={ContactUs.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your event or ask any questions..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-red-50 rounded-xl border border-red-100">
              <h3 className="font-semibold text-gray-800 mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-sm text-gray-600">
                We typically respond to all inquiries within 2-4 hours during
                business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
