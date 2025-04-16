import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const ContactWithSocialMedia = () => {
  const companyInfo = {
    name: "Study Culture",
    address: "III Floor, Union Bank Building, Seaport - Airport Road Kakkanad",
    city: "Kochi",
    state: "Kerala",
    zip: "682030",
    country: "India",
    phone: "+91 8921240680",
    email: "kochi@studyculture.io"
  };

  const socialMedia = [
    { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61571738754271", label: "Facebook", color: "hover:text-blue-600" },
    { icon: FaInstagram, link: "https://www.instagram.com/studyculture.io_kochi?igsh=cTQ1cmZmNDd2d3ht ", label: "Instagram", color: "hover:text-pink-600" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Address Section */}
        <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{companyInfo.name}</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MdLocationOn className="text-2xl text-gray-600 mt-1" />
              <div>
                <p className="text-gray-700">{companyInfo.address}</p>
                <p className="text-gray-700">{companyInfo.city}, {companyInfo.state} {companyInfo.zip}</p>
                <p className="text-gray-700">{companyInfo.country}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MdPhone className="text-2xl text-gray-600" />
              <a href={`tel:${companyInfo.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                {companyInfo.phone}
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <MdEmail className="text-2xl text-gray-600" />
              <a href={`mailto:${companyInfo.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                {companyInfo.email}
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-gray-600 transform hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9641723091963!2d76.33996507376462!3d10.019815272696032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5146f6ce97%3A0xe9a735d6365b0da9!2sUnion%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1744654795838!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactWithSocialMedia;