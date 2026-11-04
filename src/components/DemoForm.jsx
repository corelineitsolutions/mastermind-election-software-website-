import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';

export const DemoForm = ({ onSuccess, isModal = false, preselectedService = 'Election Management Software' }) => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    org: '',
    constituency: '',
    service: preselectedService,
    preferredContact: 'WhatsApp',
    message: '',
    consent: true,
    websiteHoneypot: '' // Anti-spam honeypot
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const serviceOptions = [
    'Lok Sabha Election Software',
    'Rajya Sabha Election Software',
    'Vidhan Sabha Election Software',
    'Vidhan Parishad (MLC) Election Software',
    'Graduate & Teacher Constituency Election Software',
    'Municipal Corporation (Mahanagarpalika) Election Software',
    'Municipal Council (Nagar Parishad) Election Software',
    'Nagar Panchayat Election Software',
    'Zilla Parishad Election Software',
    'Panchayat Samiti Election Software',
    'Gram Panchayat Election Software',
    'Voter Database & Slip Management',
    'Social Media War Room',
    'Paid Digital Campaigning',
    'Bulk SMS & Voice Call Broadcasting',
    'Other Custom Campaign Solution'
  ];

  // Strictly only WhatsApp, Email, and Phone Call
  const contactMethods = [
    'WhatsApp',
    'Email',
    'Phone Call'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }

    const cleanPhone = formData.mobile.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to allow Mastermind Media to contact you regarding your campaign enquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const buildWhatsAppMessage = () => {
    return (
      `*New Election Software & Consultation Request*\n` +
      `----------------------------------------\n` +
      `👤 *Name:* ${formData.fullName.trim()}\n` +
      `📱 *Mobile:* +91 ${formData.mobile.trim()}\n` +
      (formData.email.trim() ? `📧 *Email:* ${formData.email.trim()}\n` : '') +
      (formData.org.trim() ? `🏛️ *Party / Campaign:* ${formData.org.trim()}\n` : '') +
      `📍 *Constituency:* ${formData.constituency.trim() || 'Maharashtra'}\n` +
      `🗳️ *Service / Election:* ${formData.service}\n` +
      `💬 *Preferred Contact:* ${formData.preferredContact}\n` +
      (formData.message.trim() ? `📝 *Message:* ${formData.message.trim()}\n` : '') +
      `----------------------------------------\n` +
      `_Sent from Mastermind Media Election Portal_`
    );
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(buildWhatsAppMessage());
    return `https://wa.me/919604001344?text=${text}`;
  };

  const getEmailDirectLink = () => {
    const subject = encodeURIComponent(`Election Consultation Request - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Mastermind Media Team,\n\nI have submitted a consultation request for election software:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email || 'Not provided'}\n` +
      `Party / Campaign: ${formData.org || 'Not provided'}\n` +
      `Constituency: ${formData.constituency || 'Maharashtra'}\n` +
      `Service: ${formData.service}\n` +
      `Message: ${formData.message || 'None'}\n\n` +
      `Please contact me at your earliest convenience.`
    );
    return `mailto:contact@mastermindmedias.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Silently ignore bot submission if honeypot is filled
    if (formData.websiteHoneypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const waUrl = getWhatsAppDirectLink();

      // Persist enquiry securely in browser storage
      try {
        const existing = JSON.parse(localStorage.getItem('mastermind_enquiries') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('mastermind_enquiries', JSON.stringify(existing));
      } catch (storageErr) {
        // Fallback for private browsing
      }

      // Immediately open WhatsApp with the formatted consultation details
      window.open(waUrl, '_blank');

      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      setSubmitError('Unable to open WhatsApp automatically. Please click the button below to connect on WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-success-card" role="alert" aria-live="polite">
        <div className="success-icon-wrap" style={{ background: '#ECFDF5', color: '#10B981' }}>
          <CheckCircle2 size={44} />
        </div>
        <h3 className="success-title">
          {language === 'mr' 
            ? 'सल्लामसलत विनंती व्हॉट्सॲपवर पाठवली!'
            : language === 'hi'
            ? 'परामर्श अनुरोध व्हाट्सएप पर भेजा गया!'
            : 'Consultation Request Forwarded to WhatsApp!'}
        </h3>
        <p className="success-message">
          {language === 'mr' ? (
            <>धन्यवाद, <strong>{formData.fullName}</strong>. आपली माहिती आमच्या अधिकृत व्हॉट्सॲप वॉर रूम (<strong>+९१ ९६०४० ०१३४४</strong>) वर पाठवण्यात आली आहे. आमचे तज्ज्ञ आपल्याशी तत्काळ संपर्क साधतील.</>
          ) : language === 'hi' ? (
            <>धन्यवाद, <strong>{formData.fullName}</strong>. आपका विवरण हमारे आधिकारिक व्हाट्सएप वॉर रूम (<strong>+91 96040 01344</strong>) पर भेज दिया गया है। हमारे विशेषज्ञ आपसे शीघ्र संपर्क करेंगे।</>
          ) : (
            <>Thank you, <strong>{formData.fullName}</strong>. Your consultation details have been forwarded to our official WhatsApp War Room at <strong>+91 96040 01344</strong>. Our senior director will connect with you shortly.</>
          )}
        </p>

        {/* Strictly ONLY WhatsApp, Email, and Contact Number */}
        <div className="success-actions-box" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
          <a
            href={getWhatsAppDirectLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', background: '#25D366', borderColor: '#25D366', color: '#FFFFFF' }}
          >
            <MessageCircle size={18} />
            <span>Open WhatsApp Chat Directly</span>
          </a>

          <a
            href={getEmailDirectLink()}
            className="btn btn-royal"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Mail size={16} />
            <span>Send via Email: contact@mastermindmedias.com</span>
          </a>

          <a
            href="tel:+919604001344"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Phone size={16} />
            <span>Call Helpline: +91 96040 01344</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              mobile: '',
              email: '',
              org: '',
              constituency: '',
              service: preselectedService,
              preferredContact: 'WhatsApp',
              message: '',
              consent: true,
              websiteHoneypot: ''
            });
          }}
          className="reset-form-link"
          style={{ marginTop: '1.25rem', display: 'inline-block' }}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="lead-enquiry-form">
      {/* Honeypot field for bot filtering (hidden from users) */}
      <input
        type="text"
        name="websiteHoneypot"
        value={formData.websiteHoneypot}
        onChange={handleChange}
        tabIndex="-1"
        autoComplete="off"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      {submitError && (
        <div className="form-error-banner" role="alert">
          <AlertCircle size={18} />
          <span>{submitError}</span>
        </div>
      )}

      {/* Row 1: Full Name & Mobile Number */}
      <div className="form-row-two-col">
        <div className="form-field-group">
          <label htmlFor={`fullName-${isModal ? 'modal' : 'page'}`} className="field-label">
            Full Name <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id={`fullName-${isModal ? 'modal' : 'page'}`}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patil"
            className={`field-input ${errors.fullName ? 'has-error' : ''}`}
            required
            autoComplete="name"
          />
          {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
        </div>

        <div className="form-field-group">
          <label htmlFor={`mobile-${isModal ? 'modal' : 'page'}`} className="field-label">
            Mobile Number <span className="required-star">*</span>
          </label>
          <div className="phone-input-wrap">
            <span className="phone-prefix">+91</span>
            <input
              type="tel"
              id={`mobile-${isModal ? 'modal' : 'page'}`}
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="98765 43210"
              maxLength="14"
              className={`field-input phone-field ${errors.mobile ? 'has-error' : ''}`}
              required
              autoComplete="tel"
            />
          </div>
          {errors.mobile && <span className="field-error-msg">{errors.mobile}</span>}
        </div>
      </div>

      {/* Row 2: Email Address & Organization / Campaign Name */}
      <div className="form-row-two-col">
        <div className="form-field-group">
          <label htmlFor={`email-${isModal ? 'modal' : 'page'}`} className="field-label">
            Email Address <span className="optional-tag">(Optional)</span>
          </label>
          <input
            type="email"
            id={`email-${isModal ? 'modal' : 'page'}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. candidate@domain.com"
            className={`field-input ${errors.email ? 'has-error' : ''}`}
            autoComplete="email"
          />
          {errors.email && <span className="field-error-msg">{errors.email}</span>}
        </div>

        <div className="form-field-group">
          <label htmlFor={`org-${isModal ? 'modal' : 'page'}`} className="field-label">
            Political Party / Campaign Organization <span className="optional-tag">(Optional)</span>
          </label>
          <input
            type="text"
            id={`org-${isModal ? 'modal' : 'page'}`}
            name="org"
            value={formData.org}
            onChange={handleChange}
            placeholder="e.g. Independent / Party Name"
            className="field-input"
          />
        </div>
      </div>

      {/* Row 3: Constituency & Election / Service Type */}
      <div className="form-row-two-col">
        <div className="form-field-group">
          <label htmlFor={`constituency-${isModal ? 'modal' : 'page'}`} className="field-label">
            Constituency / City / District <span className="optional-tag">(Optional)</span>
          </label>
          <input
            type="text"
            id={`constituency-${isModal ? 'modal' : 'page'}`}
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
            placeholder="e.g. Pune City / Baramati / Nashik"
            className="field-input"
          />
        </div>

        <div className="form-field-group">
          <label htmlFor={`service-${isModal ? 'modal' : 'page'}`} className="field-label">
            Service or Election Level Needed
          </label>
          <select
            id={`service-${isModal ? 'modal' : 'page'}`}
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="field-select"
          >
            {serviceOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Preferred Contact Method - Strictly WhatsApp, Email, Phone Call */}
      <div className="form-field-group">
        <label className="field-label">
          Preferred Contact Method
        </label>
        <div className="radio-pills-row">
          {contactMethods.map((method) => (
            <label key={method} className={`radio-pill-item ${formData.preferredContact === method ? 'selected' : ''}`}>
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={formData.preferredContact === method}
                onChange={handleChange}
                className="radio-native"
              />
              <span className="radio-pill-text">
                {method === 'WhatsApp' ? '💬 WhatsApp' : method === 'Email' ? '📧 Email' : '📞 Phone Call'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Row 5: Message / Specific Requirements */}
      <div className="form-field-group">
        <label htmlFor={`message-${isModal ? 'modal' : 'page'}`} className="field-label">
          Message / Specific Requirements <span className="optional-tag">(Optional)</span>
        </label>
        <textarea
          id={`message-${isModal ? 'modal' : 'page'}`}
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Brief details about your voter count, election timeline, or services needed..."
          className="field-textarea"
        />
      </div>

      {/* Row 6: Consent Checkbox */}
      <div className="form-consent-group">
        <label className="checkbox-custom-label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="checkbox-native"
          />
          <span className="checkbox-box" />
          <span className="checkbox-text">
            I authorize Mastermind Media to contact me regarding election software and campaign solutions. All campaign data is kept strictly confidential under non-disclosure standards. <span className="required-star">*</span>
          </span>
        </label>
        {errors.consent && <span className="field-error-msg">{errors.consent}</span>}
      </div>

      {/* Submit Button - Directly sends to WhatsApp */}
      <div className="form-submit-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg form-submit-btn"
          style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #FF6A00 0%, #EA580C 100%)', boxShadow: '0 8px 24px rgba(234, 88, 12, 0.35)' }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="spin-animation" />
              <span>Forwarding to WhatsApp...</span>
            </>
          ) : (
            <>
              <MessageCircle size={18} />
              <span>Request a Consultation (Sends to WhatsApp)</span>
              <Send size={18} />
            </>
          )}
        </button>

        <div className="form-privacy-note">
          <ShieldCheck size={14} className="text-royal" />
          <span>Zero spam • 100% confidential voter roll handling • Direct WhatsApp dispatch</span>
        </div>
      </div>
    </form>
  );
};
