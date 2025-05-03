import React from 'react';
import resumeData from '../data/resumeData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-2/5">
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">I'm open to job opportunities where I can contribute, learn, and grow. Feel free to reach out if you have a fitting opportunity.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-200 mb-1">Phone</h4>
                    <a 
                      href={`tel:${resumeData.phone}`} 
                      className="text-lg hover:underline transition-all"
                    >
                      {resumeData.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-200 mb-1">Email</h4>
                    <a 
                      href={`mailto:${resumeData.email}`} 
                      className="text-lg hover:underline transition-all"
                    >
                      {resumeData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-200 mb-1">Location</h4>
                    <p className="text-lg">{resumeData.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {resumeData.socialLinks.map((link, index) => {
                    // Import the icon dynamically
                    const IconComponent = React.lazy(() => import('lucide-react').then(mod => ({ 
                      default: mod[link.icon as keyof typeof mod] 
                    })));

                    return (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300"
                        aria-label={link.name}
                      >
                        <React.Suspense fallback={<div className="w-5 h-5"></div>}>
                          <IconComponent className="w-5 h-5" />
                        </React.Suspense>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:w-3/5">
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Job opportunity"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <span className="mr-2">Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;