import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required.';
    if (!formData.message.trim()) newErrors.message = 'Please provide a message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    showToast('Inquiry recorded in prototype demo mode', 'success');
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
            Get In Touch
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-neutral-950">
            Contact Fashion Martinez
          </h1>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Have questions about sizing, Tapstitch garments, or your shopping bag? Reach out and our team will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 border border-neutral-200 shadow-xs space-y-6">
              <h2 className="font-editorial text-lg font-bold uppercase text-neutral-900 border-b border-neutral-200 pb-3">
                Direct Channels
              </h2>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-neutral-100 text-neutral-900 rounded-xs shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Email Support</h4>
                  <a 
                    href="mailto:contact@fashionmartinez.com" 
                    className="text-xs text-neutral-600 hover:text-black mt-0.5 block font-mono"
                  >
                    contact@fashionmartinez.com
                  </a>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Official inquiry inbox</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-neutral-100 text-neutral-900 rounded-xs shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Phone</h4>
                  <p className="text-xs text-neutral-600 mt-0.5 font-mono">(555) 123-4567</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Mon–Fri 9am–5pm PST</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-neutral-100 text-neutral-900 rounded-xs shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Response Window</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">1–2 business days</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-neutral-100 border border-neutral-200 text-xs text-neutral-600">
              <p className="font-semibold text-neutral-900 uppercase tracking-wider mb-1">
                Fulfillment Verification
              </p>
              <p className="leading-relaxed text-[11px]">
                Garments are produced and fulfilled through Tapstitch print-on-demand infrastructure. Tracking numbers update as soon as packages pass pre-shipment inspection.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 border border-neutral-200 shadow-xs">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-editorial text-xl font-bold uppercase text-neutral-950 mb-2">
                    Send A Message
                  </h2>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@example.com"
                      className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Sizing advice, Order question, or Collaboration"
                      className="w-full text-xs p-3 border border-neutral-300 bg-neutral-50 focus:bg-white focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we assist you today?"
                      className={`w-full text-xs p-3 border bg-neutral-50 focus:bg-white focus:outline-none ${
                        errors.message ? 'border-red-500' : 'border-neutral-300 focus:border-black'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#111111] hover:bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center pt-1">
                    Frontend prototype mode. Form submissions are simulated locally.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold uppercase text-neutral-900">
                    Message Received
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. In this interactive design prototype, your submission was validated and logged locally. In live production, inquiries dispatch directly to contact@fashionmartinez.com.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 hover:bg-black transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
