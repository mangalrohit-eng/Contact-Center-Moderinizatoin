'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent('CES Next Modernization Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:contact@accenture.com?subject=${subject}&body=${body}`;
    
    // Open mailto
    window.location.href = mailtoLink;
    
    // Show confirmation
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-acc-purple">Touch</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-2xl mx-auto">
            Ready to modernize your contact center with CES Next and Agentic AI? Let's talk.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-acc-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-acc-gray-400">
                Your message has been opened in your email client. Please send when ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-acc-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-3 text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-acc-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-3 text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-acc-gray-400 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-3 text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-acc-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-3 text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple resize-none"
                  placeholder="Tell us about your contact center modernization needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-acc-gray-400">contact@accenture.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-acc-gray-400">1-877-889-9009</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-acc-gray-400">Global Delivery Centers</p>
          </div>
        </div>
      </div>
    </div>
  );
}


