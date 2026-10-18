import Link from 'next/link';
import { Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './topbar.css'; // Make sure this path points to your CSS file correctly

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        
        {/* Left Side: Contact Number */}
        <div className="phoneSection">
          <Phone size={16} className="phoneIcon" />
          <Link href="tel:+971543827979" className="phoneNumber">
            +971 54 382 7979
          </Link>
        </div>

        {/* Right Side: Media Platforms */}
        <div className="socialsSection">
          <Link 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="iconCircle"
            aria-label="Facebook"
          >
            <FaFacebookF size={14} />
          </Link>

          <Link 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="iconCircle"
            aria-label="Instagram"
          >
            <FaInstagram size={14} />
          </Link>

          <Link 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="iconCircle"
            aria-label="YouTube"
          >
            <FaYoutube size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
