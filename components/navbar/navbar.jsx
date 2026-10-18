"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Track open states for mobile accordions
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [mobileSportsOpen, setMobileSportsOpen] = useState(false);
  const [mobileCasualOpen, setMobileCasualOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  // Close everything when the main mobile menu closes
  const toggleMainMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setMobileCategoriesOpen(false);
      setMobileSportsOpen(false);
      setMobileCasualOpen(false);
      setMobileWorkOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        
        {/* Brand Logo Section */}
        <Link href="/" className="text-decoration-none" onClick={() => setIsOpen(false)}>
          <div className="logoWrapper">
            <div className="logoMain">
              <span className="logoAWC">AWC</span>
              <div className="logoBox">
                <span className="textActivewear">Activewear</span>
                <span className="textCustom">Custom</span>
              </div>
            </div>
            <span className="logoSubtext">Cresiveline Uniform Brand</span>
          </div>
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button className="mobileToggle" onClick={toggleMainMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Core Navigation Links */}
        <ul className={`navMenu ${isOpen ? 'menuOpen' : ''}`}>
          <li className="navItem">
            <Link href="/" className="navLink activeLink" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about" className="navLink" onClick={() => setIsOpen(false)}>About us</Link>
          </li>
          
          {/* Categories Main Dropdown Drop Track */}
          <li className={`navItem ${mobileCategoriesOpen ? 'mobileExpanded' : ''}`}>
            <span 
              className="navLink" 
              onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
            >
              Categories <ChevronDown size={14} className="arrowIcon" />
            </span>
            
            {/* Level 1 Dropdown Menu */}
            <ul className={`dropdownMenu ${mobileCategoriesOpen ? 'showMobileMenu' : ''}`}>
              
              {/* Sports Wear Nested Stack */}
              <li className={`dropdownItem ${mobileSportsOpen ? 'mobileExpanded' : ''}`}>
                <div className="mobileLinkRow">
                  <Link href="/categories/sports" className="dropdownLink" onClick={() => setIsOpen(false)}>
                    Sports wear
                  </Link>
                  <span className="subMenuToggle" onClick={() => setMobileSportsOpen(!mobileSportsOpen)}>
                    <ChevronRight size={14} className="arrowIcon" />
                  </span>
                </div>
                
                {/* Level 2 Submenu */}
                <ul className={`subMenu ${mobileSportsOpen ? 'showMobileMenu' : ''}`}>
                  <li><Link href="/categories/sports/cricket" className="dropdownLink" onClick={() => setIsOpen(false)}>Cricket</Link></li>
                  <li><Link href="/categories/sports/football" className="dropdownLink" onClick={() => setIsOpen(false)}>Football</Link></li>
                  <li><Link href="/categories/sports/basketball" className="dropdownLink" onClick={() => setIsOpen(false)}>Basketball</Link></li>
                  <li><Link href="/categories/sports/cycling" className="dropdownLink" onClick={() => setIsOpen(false)}>Cycling</Link></li>
                  <li><Link href="/categories/sports/baseball" className="dropdownLink" onClick={() => setIsOpen(false)}>Baseball</Link></li>
                </ul>
              </li>

              {/* Casual Wear Nested Stack */}
              <li className={`dropdownItem ${mobileCasualOpen ? 'mobileExpanded' : ''}`}>
                <div className="mobileLinkRow">
                  <Link href="/categories/casual" className="dropdownLink" onClick={() => setIsOpen(false)}>
                    Casual wear
                  </Link>
                  <span className="subMenuToggle" onClick={() => setMobileCasualOpen(!mobileCasualOpen)}>
                    <ChevronRight size={14} className="arrowIcon" />
                  </span>
                </div>
                
                {/* Level 2 Submenu */}
                <ul className={`subMenu ${mobileCasualOpen ? 'showMobileMenu' : ''}`}>
                  <li><Link href="/categories/casual/t-shirt" className="dropdownLink" onClick={() => setIsOpen(false)}>T-shirt</Link></li>
                  <li><Link href="/categories/casual/hoodies" className="dropdownLink" onClick={() => setIsOpen(false)}>Hoodies</Link></li>
                </ul>
              </li>

              <li className="dropdownItem">
                <Link href="/categories/gym" className="dropdownLink" onClick={() => setIsOpen(false)}>Gym wear</Link>
              </li>

              {/* Work Wear Nested Stack */}
              <li className={`dropdownItem ${mobileWorkOpen ? 'mobileExpanded' : ''}`}>
                <div className="mobileLinkRow">
                  <Link href="/categories/work" className="dropdownLink" onClick={() => setIsOpen(false)}>
                    Work wear
                  </Link>
                  <span className="subMenuToggle" onClick={() => setMobileWorkOpen(!mobileWorkOpen)}>
                    <ChevronRight size={14} className="arrowIcon" />
                  </span>
                </div>
                
                {/* Level 2 Submenu */}
                <ul className={`subMenu ${mobileWorkOpen ? 'showMobileMenu' : ''}`}>
                  <li><Link href="/categories/work/academic" className="dropdownLink" onClick={() => setIsOpen(false)}>Academic</Link></li>
                  <li><Link href="/categories/work/corporate" className="dropdownLink" onClick={() => setIsOpen(false)}>Corporate wear</Link></li>
                  <li><Link href="/categories/work/industrial" className="dropdownLink" onClick={() => setIsOpen(false)}>Industrial wear</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="navItem">
            <Link href="/catalogues" className="navLink" onClick={() => setIsOpen(false)}>Catalogues</Link>
          </li>
          <li className="navItem">
            <Link href="/gallery" className="navLink" onClick={() => setIsOpen(false)}>Gallery</Link>
          </li>
          <li className="navItem">
            <Link href="/contact" className="navLink" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>

          {/* Inject CTA inside Mobile drawer layout view */}
          <li className="navItem mobileCtaWrapper">
            <Link href="/quote" className="quoteBtn" onClick={() => setIsOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Desktop Only CTA Area Box */}
        <div className="quoteWrapper">
          <Link href="/quote" className="quoteBtn">
            Get a Quote
          </Link>
        </div>

      </div>
    </nav>
  );
}
