import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CheckCircle2, AlertCircle, Loader2, Send, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

export const DemoForm = ({ onSuccess, isModal = false, preselectedService = 'Election Management Software' }) => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    org: '',
    constituency: '',
    service: preselectedService,
    preferredContact: 'Phone Call',
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
    'Vidhan Sabha Election Software',
    'Mahanagarpalika Election Software',
    'Nagar Parishad & Nagar Panchayat Software',
    'Municipal Ward / Prabhag Election Software',
    'Zilla Parishad & Panchayat Samiti Software',
    'Gram Panchayat Election Software',
    'Graduate Constituency Election Software',
    "Teachers' Constituency Election Software",
    'Vidhan Parishad & Rajya Sabha Software',
    'Voter Database & Slip Management',
    'Social Media War Room',
    'Paid Digital Campaigning',
    'Political Promotional Documentaries',
    'LED Van Campaigning',
    'Bulk SMS & Voice Call Broadcasting',
    'WhatsApp Business Promotions',
    'Other Custom Campaign Solution'
  ];

  const contactMethods = [
    'Phone Call',
    'WhatsApp',
    'In-Person Meeting at Pune Office',
    'Email'
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
      // Simulate enterprise CRM dispatch latency
      await new Promise(resolve => setTimeout(resolve, 850));

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

      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      setSubmitError('Unable to process enquiry at this moment. Please call +91-9604001344 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hello Mastermind Media Team,\nI have requested an election consultation.\nName: ${formData.fullName}\nMobile: ${formData.mobile}\nService: ${formData.service}\nConstituency: ${formData.constituency || 'Maharashtra'}\nPlease contact me.`
    );
    return `https://wa.me/919604001344?text=${text}`;
  };

  if (isSubmitted) {
    return (
      <div className="form-success-card" role="alert" aria-live="polite">
        <div className="success-icon-wrap">
          <CheckCircle2 size={44} className="text-success" />
        </div>
        <h3 className="success-title">Consultation Request Received</h3>
        <p className="success-message">
          Thank you, <strong>{formData.fullName}</strong>. Our senior political technology specialist will contact you via <strong>{formData.preferredContact}</strong> at <strong>+91-{formData.mobile}</strong> within 2 business hours.
        </p>

        <div className="success-actions-box">
          <a
            href={getWhatsAppDirectLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-royal"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <MessageCircle size={18} />
            <span>Connect on WhatsApp for Instant Access</span>
          </a>

          <a
            href="tel:+919604001344"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Phone size={16} />
            <span>Call War Room Desk: +91 96040 01344</span>
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
              preferredContact: 'Phone Call',
              message: '',
              consent: true,
              websiteHoneypot: ''
            });
          }}
          className="reset-form-link"
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
            placeholder="office@candidate.in"
            className={`field-input ${errors.email ? 'has-error' : ''}`}
            autoComplete="email"
          />
          {errors.email && <span className="field-error-msg">{errors.email}</span>}
        </div>

        <div className="form-field-group">
          <label htmlFor={`org-${isModal ? 'modal' : 'page'}`} className="field-label">
            Organization / Campaign Name <span className="optional-tag">(Optional)</span>
          </label>
          <input
            type="text"
            id={`org-${isModal ? 'modal' : 'page'}`}
            name="org"
            value={formData.org}
            onChange={handleChange}
            placeholder="e.g. Campaign Office / Consultant"
            className="field-input"
          />
        </div>
      </div>

      {/* Row 3: Constituency / District & Service Interested In */}
      <div className="form-row-two-col">
        <div className="form-field-group">
          <label htmlFor={`constituency-${isModal ? 'modal' : 'page'}`} className="field-label">
            Constituency / District <span className="optional-tag">(Optional)</span>
          </label>
          <input
            type="text"
            id={`constituency-${isModal ? 'modal' : 'page'}`}
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
            placeholder="e.g. Pune, Nagpur, Kolhapur AC"
            className="field-input"
          />
        </div>

        <div className="form-field-group">
          <label htmlFor={`service-${isModal ? 'modal' : 'page'}`} className="field-label">
            Service Interested In <span className="required-star">*</span>
          </label>
          <select
            id={`service-${isModal ? 'modal' : 'page'}`}
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="field-select"
          >
            {serviceOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Preferred Contact Method */}
      <div className="form-field-group">
        <label className="field-label">
          Preferred Contact Method <span className="optional-tag">(Optional)</span>
        </label>
        <div className="contact-methods-radio-group">
          {contactMethods.map((method, idx) => (
            <label key={idx} className="radio-pill-label">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={formData.preferredContact === method}
                onChange={handleChange}
                className="radio-native"
              />
              <span className="radio-pill-text">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Row 5: Message / Requirements */}
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

      {/* Submit Button */}
      <div className="form-submit-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-royal btn-lg form-submit-btn"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="spin-animation" />
              <span>Processing Request...</span>
            </>
          ) : (
            <>
              <span>Request a Consultation</span>
              <Send size={18} />
            </>
          )}
        </button>

        <div className="form-privacy-note">
          <ShieldCheck size={14} className="text-royal" />
          <span>Zero spam • 100% confidential voter roll handling</span>
        </div>
      </div>
    </form>
  );
};
