import React, { useEffect } from 'react';
import { DemoForm } from './DemoForm';
import { X, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const DemoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Book a Free Consultation or Demo">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        <div className="modal-inner-content">
          <div className="modal-header-block">
            <span className="section-eyebrow section-eyebrow-gold">
              <Sparkles size={13} />
              CONFIDENTIAL & TAILORED DEMONSTRATION
            </span>
            <h3 className="modal-title">
              Book a Free Software Demo & Consultation
            </h3>
            <p className="modal-subtitle">
              Schedule a personalized walkthrough of Mastermind Election Software and integrated campaign services for your constituency.
            </p>
          </div>

          <DemoForm onSuccess={() => {}} isModal={true} />
        </div>
      </div>
    </div>
  );
};
