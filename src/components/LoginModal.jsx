import React, { useState } from 'react';
import { X, Lock, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const LoginModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [role, setRole] = useState('candidate');
  const [accessCode, setAccessCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState(null);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setMessage({ type: 'error', text: 'Please enter your registered 10-digit mobile number.' });
      return;
    }
    // Simulation
    setMessage({ 
      type: 'info', 
      text: 'OTP sent to ' + mobile + '. For authorized credentials or workspace activation, please contact Pune War Room Admin at +91-9604001344.' 
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" style={{ maxWidth: '480px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div style={{ padding: '2.5rem 2rem 2rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ 
              width: '3.5rem', 
              height: '3.5rem', 
              borderRadius: '50%', 
              background: 'rgba(255, 141, 2, 0.1)', 
              color: 'var(--color-orange-red)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1rem auto' 
            }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
              Authorized Portal Access
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
              Master Mind Election Software War Room
            </p>
          </div>

          <div style={{ display: 'flex', background: '#F3F4F6', borderRadius: '8px', padding: '0.25rem', marginBottom: '1.25rem' }}>
            <button
              type="button"
              onClick={() => setRole('candidate')}
              style={{
                flex: 1,
                padding: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                borderRadius: '6px',
                background: role === 'candidate' ? '#FFFFFF' : 'transparent',
                color: role === 'candidate' ? 'var(--color-navy-dark)' : '#6B7280',
                boxShadow: role === 'candidate' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Candidate / Admin
            </button>
            <button
              type="button"
              onClick={() => setRole('karyakarta')}
              style={{
                flex: 1,
                padding: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                borderRadius: '6px',
                background: role === 'karyakarta' ? '#FFFFFF' : 'transparent',
                color: role === 'karyakarta' ? 'var(--color-navy-dark)' : '#6B7280',
                boxShadow: role === 'karyakarta' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Booth Karyakarta
            </button>
          </div>

          {message && (
            <div style={{ 
              padding: '0.75rem', 
              borderRadius: '6px', 
              fontSize: '0.8125rem', 
              marginBottom: '1rem',
              background: message.type === 'error' ? '#FEE2E2' : '#EFF6FF',
              color: message.type === 'error' ? '#B91C1C' : '#1D4ED8'
            }}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label className="form-label">Registered Mobile Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+91 98765 43210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Workspace Access PIN / OTP</label>
              <input
                type="password"
                className="form-input"
                placeholder="6-digit security PIN"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
              <span>Sign In to War Room</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>
              Need new workspace setup or forgot access credentials?{' '}
              <a href="tel:+919604001344" style={{ color: 'var(--color-orange-red)', fontWeight: 700 }}>
                Call +91-9604001344
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
