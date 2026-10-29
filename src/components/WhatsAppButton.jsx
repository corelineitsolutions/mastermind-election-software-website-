import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const WhatsAppButton = () => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic message based on chosen language
  const getWhatsAppMessage = () => {
    if (language === 'mr') {
      return encodeURIComponent('नमस्कार मास्टरमाइंड मीडिया टीम, मला निवडणूक व्यवस्थापन सॉफ्टवेअर आणि प्रचार सेवांविषयी माहिती हवी आहे.');
    }
    if (language === 'hi') {
      return encodeURIComponent('नमस्ते मास्टरमाइंड मीडिया टीम, मुझे चुनाव प्रबंधन सॉफ्टवेयर और प्रचार सेवाओं के बारे में जानकारी चाहिए।');
    }
    return encodeURIComponent('Hello Mastermind Media Team, I would like to know more about your election software and campaign services.');
  };

  const getTooltipText = () => {
    if (language === 'mr') return 'व्हॉट्सॲपवर संपर्क साधा';
    if (language === 'hi') return 'व्हाट्सएप पर संपर्क करें';
    return 'Chat on WhatsApp';
  };

  const whatsappUrl = `https://wa.me/919604001344?text=${getWhatsAppMessage()}`;

  return (
    <div 
      className="floating-whatsapp-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip / Label for Desktop */}
      <div className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`} aria-hidden="true">
        <span className="tooltip-badge">Online</span>
        <span className="tooltip-text">{getTooltipText()}</span>
      </div>

      {/* Pulsing radar waves */}
      <div className="whatsapp-pulse-ring" aria-hidden="true" />
      <div className="whatsapp-pulse-ring-delayed" aria-hidden="true" />

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat on WhatsApp with Mastermind Media (+91 96040 01344)"
        title="Chat on WhatsApp (+91 96040 01344)"
      >
        {/* Authentic Official WhatsApp SVG */}
        <svg 
          viewBox="0 0 32 32" 
          className="whatsapp-svg-icon"
          fill="currentColor"
          width="32" 
          height="32"
          aria-hidden="true"
        >
          <path d="M16.002 0C7.165 0 0 7.164 0 16.001c0 2.824.738 5.578 2.14 7.999L.073 32l8.225-2.025a15.932 15.932 0 0 0 7.704 1.979h.007c8.835 0 16-7.164 16-16.002.001-4.275-1.66-8.293-4.686-11.319C24.298 1.666 20.279 0 16.002 0zm0 29.333h-.006a13.313 13.313 0 0 1-6.78-1.854l-.486-.289-5.042 1.242 1.346-4.912-.317-.504a13.305 13.305 0 0 1-2.046-7.014c0-7.355 5.984-13.339 13.337-13.339 3.564 0 6.914 1.389 9.432 3.908a13.26 13.26 0 0 1 3.903 9.432c-.001 7.356-5.986 13.33-13.341 13.33zm7.319-9.986c-.401-.2-2.373-1.171-2.74-1.305-.367-.134-.634-.2-.9.2-.267.401-1.035 1.305-1.269 1.572-.234.267-.468.301-.869.1-.401-.2-1.693-.624-3.225-1.99-1.192-1.063-1.997-2.376-2.231-2.777-.234-.401-.025-.618.176-.818.181-.18.401-.468.602-.702.2-.234.267-.401.401-.669.134-.267.067-.501-.033-.702-.1-.2-.9-2.172-1.235-2.973-.326-.782-.658-.675-.902-.688l-.769-.013c-.267 0-.702.1-1.069.501-.367.401-1.403 1.37-1.403 3.341 0 1.971 1.437 3.875 1.637 4.143.2.267 2.827 4.316 6.848 6.052.956.413 1.703.66 2.285.845.96.305 1.834.262 2.525.159.77-.115 2.373-.97 2.707-1.905.334-.936.334-1.738.234-1.905-.1-.167-.367-.267-.768-.468z" />
        </svg>

        {/* Mobile text badge on expand */}
        <span className="whatsapp-floating-label">WhatsApp</span>
      </a>
    </div>
  );
};

