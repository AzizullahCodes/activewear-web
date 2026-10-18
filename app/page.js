"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaCheck, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Topbar from "@/components/topbar/topbar";
import Navbar from "@/components/navbar/navbar";
import './page.css';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [faqOpen, setFaqOpen] = useState([true, false, false, false]);

  useEffect(() => {
    setIsAnimating(true);
    return () => {};
  }, []);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 1000); 
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen.map((item, idx) => idx === index ? !item : item));
  };

  return (
    <div>
      {/* GLOBAL NAVBAR MODULES */}
      <Topbar /> 
      <Navbar />
      {/* 1. HERO BANNER SECTION */}
      <section className="heroSection">
        <div className="heroBody">
          <div className="heroBgWrapper">
            <img src="/hero-athletes.jpg" alt="Custom Uniform Sportswear" className="heroBgImage" />
            <div className="heroOverlay"></div>
          </div>
          <div className="heroContent">
            {/* Split blocks to prevent server text template mismatches */}
            <h1 className="heroTitle">
              <span className="blockSpan">ACTIVE WEAR CUSTOM YOUR PREMIER</span>
              <span className="blockSpan">CUSTOM UNIFORM SUPPLIER IN DUBAI</span>
            </h1>
          </div>
        </div>
        
        {/* JS Triggered Slow Single-Run Ticker */}
        <div className="tickerStrip">
          <div className={`tickerTrack ${isAnimating ? 'runTickerOnce' : ''}`} onAnimationEnd={handleAnimationEnd}>
            <span className="tickerItem">★ ACTIVE WEAR</span>
            <span className="tickerItem">★ SPORT WEAR</span>
            <span className="tickerItem">★ PRINTING</span>
            <span className="tickerItem">★ DESIGNING</span>
          </div>
        </div>

        {/* Global Floating Action WhatsApp Badge Trigger */}
        {/* Global Floating Action WhatsApp Badge Trigger */}
<Link 
  href="https://wa.me" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="whatsappWidget"
  aria-label="Contact us on WhatsApp"
>
  <div className="whatsappIconCircle">
    <FaWhatsapp size={24} color="#ffffff" />
  </div>
  <span className="whatsappTooltip">Need help?</span>
</Link>
      </section>
      {/* 2. BEST UNIFORM SUPPLIER SHOWCASE */}
      <section className="showcaseSection">
        <div className="showcaseContainer">
          <div className="showcaseGrid">
            <div className="gridLeftCol">
              <div className="showcaseCard mainJerseyCard"><img src="/sports-jersey.jpg" alt="Jersey Kits" className="cardImage" /></div>
            </div>
            <div className="gridRightCol">
              <div className="showcaseCard promoCard"><img src="/promotional-items.jpg" alt="Promo Uniforms" className="cardImage" /></div>
              <div className="showcaseCard workwearCard"><img src="/workwear-uniform.jpg" alt="Workwear Apparel" className="cardImage" /></div>
            </div>
          </div>

          <div className="showcaseContent">
            <h2 className="sectionHeading">
              <span className="blockSpan">Best Uniform</span>
              <span className="blockSpan">Manufacturer & Supplier In</span>
              <span className="blockSpan">Dubai</span>
            </h2>
            <p className="showcaseText">Active Wear Custom stands out as the foremost uniform supplier company in the UAE. It is known for its dedication to providing premium, custom-made, full sublimation sports kits, elegant corporate event attire, and durable industrial wear. Our commitment to exceptional quality craftsmanship enables us to meet a wide array of client requirements effectively.</p>
            <div className="featuresBadgeGrid">
              <div className="badgeItem"><span className="badgeIcon checkIcon"><FaCheck size={10} /></span><span className="badgeText">Custom Designs</span></div>
              <div className="badgeItem"><span className="badgeIcon checkIcon"><FaCheck size={10} /></span><span className="badgeText">Quality Fabric</span></div>
              <div className="badgeItem"><span className="badgeIcon crossIcon">✕</span><span className="badgeText">No Minimum</span></div>
              <div className="badgeItem"><span className="badgeIcon starIcon">★</span><span className="badgeText">Affordable Prices</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="whyChooseSection">
        <div className="whyChooseContainer">
          <div className="whyChooseContent">
            <h2 className="sectionHeading">
              <span className="blockSpan">Why Choose Active Wear</span>
              <span className="blockSpan">Custom for Tailored Uniform</span>
              <span className="blockSpan">Design</span>
            </h2>
            <div className="infoBlock">
              <h3 className="infoSubheading">Our Trendsetting Custom Sports Kits</h3>
              <p className="infoDescription">At Active Wear Custom, our focus extends beyond conventional designs to embrace unparalleled creativity and innovation. As a leading custom kits supplier, our team crafts trendsetting designs that make a statement on and off the field.</p>
            </div>
            <div className="infoBlock">
              <h3 className="infoSubheading">On-Time Delivery, Every Time</h3>
              <p className="infoDescription">Have confidence that your custom jersey uniform orders will consistently arrive on time and in perfect condition, surpassing your expectations every step of the way. We understand the importance of timely delivery.</p>
            </div>
            <div className="infoBlock">
              <h3 className="infoSubheading">No Limits, Only Possibilities</h3>
              <p className="infoDescription">At Active Wear Custom, your premier uniform manufacturer & supplier in Dubai, there are no minimum or maximum order restrictions. Whether you need one piece or a bulk order.</p>
            </div>
          </div>
          <div className="whyChooseGraphicWrapper">
            <div className="studioImageCard"><img src="/designer-studio.jpg" alt="Designer Studio" className="cardImage" /></div>
            <div className="decorativeDotPattern"></div>
          </div>
        </div>
      </section>
      {/* 4. BEST SELLING PRODUCTS GRID */}
      <section className="productsSection">
        <div className="productsContainer">
          <h2 className="productsSectionHeading">Our Best Selling Products</h2>
          <div className="productsGrid">
            <div className="productCard">
              <div className="productImageWrapper"><img src="/casual-wear.jpg" alt="Casual Wear" className="productImage" /></div>
              <div className="productCardFooter"><h3 className="productTitle">CASUAL WEAR</h3></div>
            </div>
            <div className="productCard">
              <div className="productImageWrapper"><img src="/sports-wear.jpg" alt="Sports Wear" className="productImage" /></div>
              <div className="productCardFooter"><h3 className="productTitle">SPORTS WEAR</h3></div>
            </div>
            <div className="productCard">
              <div className="productImageWrapper"><img src="/gym-wear.jpg" alt="Gym Wear" className="productImage" /></div>
              <div className="productCardFooter"><h3 className="productTitle">GYM WEAR</h3></div>
            </div>
            <div className="productCard">
              <div className="productImageWrapper"><img src="/industrial-wear.jpg" alt="Industrial Wear" className="productImage" /></div>
              <div className="productCardFooter"><h3 className="productTitle">INDUSTRIAL WEAR</h3></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS CATALOGUE */}
      <section className="catalogueSection">
        <div className="catalogueContainer">
          <span className="redLabel">Featured Products Catalogue</span>
          <h2 className="catalogueHeading">
            <span className="blockSpan">Discover Custom-Made Product</span>
            <span className="blockSpan">Excellence with AWC</span>
          </h2>
          <p className="catalogueSubtext">Here you will find featured AWC products. Download our catalogues and flyers and get detailed information about our collections. To preview the catalogue, click on the image below for the one of your choice.</p>
          
          <div className="circleItemsGrid">
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-restaurant.png" alt="Restaurant" /></div>
              <span className="circleTitle">Restaurant</span>
            </div>
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-salon.png" alt="Salon & Spa" /></div>
              <span className="circleTitle">Salon & Spa</span>
            </div>
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-bags.png" alt="Bags" /></div>
              <span className="circleTitle">Bags</span>
            </div>
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-bottles.png" alt="Bottles" /></div>
              <span className="circleTitle">Bottles</span>
            </div>
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-caps.png" alt="Caps" /></div>
              <span className="circleTitle">Caps</span>
            </div>
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-towels.png" alt="Towels" /></div>
              <span className="circleTitle">Towels</span>
            </div>
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-logo.png" alt="Sports Logo" /></div>
              <span className="circleTitle">Sports Logo</span>
            </div>
            <div className="circleCard">
              <div className="circleFrame"><img src="/cat-trophy.png" alt="Trophy" /></div>
              <span className="circleTitle">Trophy</span>
            </div>
          </div>
        </div>
      </section>
      {/* 6. HOW TO ORDER PROCESS STRIP */}
      <section className="processSection">
        <div className="processContainer">
          <div className="processHeaderRow">
            <h2 className="processMainHeading">HOW TO ORDER</h2>
            <span className="processSubBadge">OUR HASSLE-FREE PROCESS</span>
          </div>
          
          <div className="stepsFlexGrid">
            <div className="stepBlock">
              <div className="stepIconRow"><img src="/icon-step1.png" alt="Step 1" className="stepIconImage" /></div>
              <h3 className="stepTitle">Step 1</h3>
              <p className="stepText">Submit a design request via the form at the bottom of any jersey/apparel page.</p>
            </div>
            <div className="stepBlock">
              <div className="stepIconRow"><img src="/icon-step2.png" alt="Step 2" className="stepIconImage" /></div>
              <h3 className="stepTitle">Step 2</h3>
              <p className="stepText">Your personal designer will create your customs on your own private webpage.</p>
            </div>
            <div className="stepBlock">
              <div className="stepIconRow"><img src="/icon-step3.png" alt="Step 3" className="stepIconImage" /></div>
              <h3 className="stepTitle">Step 3</h3>
              <p className="stepText">Pick your designs and submit your order via our online form. We'll send an invoice for easy payment.</p>
            </div>
            <div className="stepBlock">
              <div className="stepIconRow"><img src="/icon-step4.png" alt="Step 4" className="stepIconImage" /></div>
              <h3 className="stepTitle">Step 4</h3>
              <p className="stepText">Approve your production art and manufacturing begins. Your order will be shipped via free UPS Ground.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUSTED CLIENT TESTIMONIAL SECTION */}
      <section className="testimonialSection">
        <div className="testimonialContainer">
          <span className="redLabel textCenter">TRUSTED CLIENT</span>
          <h2 className="testimonialHeading">Trusted Around the World</h2>
          
          <div className="sliderViewport">
            <span className="sliderArrow">‹</span>
            <div className="testimonialBodyText">
              "Good quality work. Whenever we have any requirements of sports wear we always choose Cre8iveline because of their quality and also timely delivery."
              <strong className="clientAuthor">Hakimi Sports</strong>
            </div>
            <span className="sliderArrow">›</span>
          </div>
        </div>
      </section>

      {/* 8. BRAND LOGOS CAROUSEL STRIP */}
      <section className="brandsStripSection">
        <div className="brandsStripContainer">
          <span className="brandSectionLabel">TRUSTED 120+ BRAND COMPANY</span>
          <div className="brandLogosRow">
            <img src="/logo-bayut.png" alt="Bayut" className="brandLogoImg" />
            <img src="/logo-dubizzle.png" alt="Dubizzle" className="brandLogoImg" />
            <img src="/logo-plugnpoint.png" alt="Plug n Point" className="brandLogoImg" />
            <img src="/logo-danube.png" alt="Danube Properties" className="brandLogoImg" />
            <img src="/logo-puma.png" alt="Puma" className="brandLogoImg" />
          </div>
          <div className="brandDotsIndicator">
            <span className="dotIndicator"></span>
            <span className="dotIndicator activeDot"></span>
            <span className="dotIndicator"></span>
            <span className="dotIndicator"></span>
            <span className="dotIndicator"></span>
          </div>
        </div>
      </section>

      {/* 9. ATHLETES ORANGE CTA BANNER */}
      <section className="ctaBannerSection">
        <div className="ctaBannerBg">
          <img src="/cta-athletes-banner.jpg" alt="Athletes Banner" className="ctaBgImg" />
          <div className="ctaDarkenerOverlay"></div>
        </div>
        <div className="ctaInnerContent">
          <Link href="/quote" className="ctaQuoteButton">Get A Quote</Link>
        </div>
      </section>
      {/* 10. FREQUENTLY ASKED QUESTION ACCORDION */}
      <section className="faqSection">
        <div className="faqContainer">
          <h2 className="faqMainTitle">Frequently Asked Question</h2>
          
          <div className="accordionWrapper">
            <div className={`faqRowItem ${faqOpen[0] ? 'faqActive' : ''}`}>
              <div className="faqHeaderBlock" onClick={() => toggleFaq(0)}>
                <span className="faqQuestionText">If regular size charts don't fit me perfectly, can you do 'made-to-measure' clothing?</span>
                <span className="faqToggleSign">{faqOpen[0] ? '−' : '+'}</span>
              </div>
              {faqOpen[0] && (
                <div className="faqAnswerBlock">
                  <p>Although we have an extensive list of sizes, if these don't fit, ask us about our personalized initiative, where we can tailor your fitness & sportswear to your exact measurements.</p>
                </div>
              )}
            </div>

            <div className={`faqRowItem ${faqOpen[1] ? 'faqActive' : ''}`}>
              <div className="faqHeaderBlock" onClick={() => toggleFaq(1)}>
                <span className="faqQuestionText">Is there anything I can do to ensure that my design will print well?</span>
                <span className="faqToggleSign">{faqOpen[1] ? '−' : '+'}</span>
              </div>
              {faqOpen[1] && (
                <div className="faqAnswerBlock">
                  <p>To ensure high quality printing outcomes, please provide vectorized graphics files formats (.ai, .eps, or high-res vector PDFs) with all embedded font tracks outlined.</p>
                </div>
              )}
            </div>

            <div className={`faqRowItem ${faqOpen[2] ? 'faqActive' : ''}`}>
              <div className="faqHeaderBlock" onClick={() => toggleFaq(2)}>
                <span className="faqQuestionText">Is there a minimum order quantity and do you offer discounts for bulk purchases?</span>
                <span className="faqToggleSign">{faqOpen[2] ? '−' : '+'}</span>
              </div>
              {faqOpen[2] && (
                <div className="faqAnswerBlock">
                  <p>We have absolutely no minimum order constraints! You can order a single personalized jersey. However, tier discounts scale up automatically on wholesale volume orders.</p>
                </div>
              )}
            </div>

            <div className={`faqRowItem ${faqOpen[3] ? 'faqActive' : ''}`}>
              <div className="faqHeaderBlock" onClick={() => toggleFaq(3)}>
                <span className="faqQuestionText">I want a style that you don't have on your website, can you help me develop something new?</span>
                <span className="faqToggleSign">{faqOpen[3] ? '−' : '+'}</span>
              </div>
              {faqOpen[3] && (
                <div className="faqAnswerBlock">
                  <p>Absolutely! Our graphic apparel engineers can prototype completely unique custom uniform mockups tailored specifically to your visual reference sheets.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER INTEGRATION NAVIGATION */}
      <footer className="footerSection">
        <div className="footerMainGrid">
          <div className="footerBrandColumn">
            <div className="footerLogoMain">
              <span className="fLogoAWC">AWC</span>
              <div className="fLogoBox">
                <span className="fTextActivewear">Activewear</span>
                <span className="fTextCustom">Custom</span>
              </div>
            </div>
            <span className="fLogoSubtext">CRE8IVELINE UNIFORM BRAND</span>
            <p className="footerDescriptionText">Optimise your impact by creating a one-of-a-kind custom design through sublimation printing, this process has many benefits that allows you total freedom when customising your garment.</p>
          </div>

          <div className="footerLinksColumn">
            <h3 className="footerColumnTitle">Quick Links</h3>
            <ul className="footerLinksList">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/catalogues">Catalogues</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footerLinksColumn">
            <h3 className="footerColumnTitle">Categories</h3>
            <ul className="footerLinksList">
              <li><Link href="/categories/sports/baseball">Baseball</Link></li>
              <li><Link href="/categories/sports/basketball">Basketball</Link></li>
              <li><Link href="/categories/sports/cricket">Cricket</Link></li>
              <li><Link href="/categories/sports/football">Football</Link></li>
              <li><Link href="/categories/casual/hoodies">Hoodie</Link></li>
            </ul>
          </div>

          <div className="footerLinksColumn">
            <h3 className="footerColumnTitle">Contact Us</h3>
            <p className="contactDetailRow">✉ info@activewearcustom.com</p>
            <p className="contactDetailRow">📞 +92 54 382 7979 | +971 55 456 7001</p>
            <p className="contactDetailRow">📍 Dubai - United Arab Emirates</p>
            
            <h4 className="followUsHeading">Follow Us</h4>
            <div className="footerSocialIconsRow">
              <Link href="#" className="fSocialBadge"><FaFacebookF size={12} /></Link>
              <Link href="#" className="fSocialBadge"><FaInstagram size={12} /></Link>
              <Link href="#" className="fSocialBadge"><FaYoutube size={12} /></Link>
            </div>
          </div>
        </div>

        <div className="footerBottomCopyrightRow">
          <p>© All Rights Reserved AWC-ACTIVEWEAR CUSTOM By CRE8IVELINE GENERAL TRADING LLC</p>
        </div>
      </footer>
    </div>
  );
}
