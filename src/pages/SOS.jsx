import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, CheckCircle, X } from 'lucide-react';

const SOS = () => {
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(true);

    // Mock Contacts
    const contacts = [
        { name: "Mom", number: "+91 98765 43210", status: "Notified" },
        { name: "Rahul (Brother)", number: "+91 91234 56789", status: "Notified" },
        { name: "Police Control", number: "100", status: "Connected" }
    ];

    return (
        <div className="fade-in" style={{
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(41, 128, 185, 0.1) 0%, rgba(80, 227, 194, 0.1) 100%)',
            borderRadius: '20px',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pulse */}
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(41, 128, 185, 0.05) 0%, transparent 70%)',
                animation: 'pulse-bg 4s infinite ease-in-out'
            }} />

            <style>{`
        @keyframes pulse-bg {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>

            {/* Main Status */}
            <div style={{ zIndex: 1, textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--color-sos)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 4px 20px rgba(41, 128, 185, 0.3)'
                }}>
                    <CheckCircle size={40} color="white" />
                </div>
                <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1rem', fontSize: '2rem' }}>
                    You’re not alone.
                </h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
                    Help has been notified. Location sharing is active.
                </p>
            </div>

            {/* Contacts List */}
            <div className="glass-panel" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '1.5rem',
                marginBottom: '2rem'
            }}>
                {contacts.map((contact, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 0',
                        borderBottom: index !== contacts.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                background: '#eee',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Phone size={16} color="var(--color-text-muted)" />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>{contact.name}</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{contact.number}</p>
                            </div>
                        </div>
                        <span style={{
                            fontSize: '0.8rem',
                            color: 'var(--color-safe)',
                            fontWeight: 600,
                            background: 'rgba(46, 204, 113, 0.1)',
                            padding: '4px 8px',
                            borderRadius: '12px'
                        }}>
                            {contact.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* End SOS Button */}
            <button
                onClick={() => navigate('/report')}
                style={{
                    background: 'transparent',
                    border: '2px solid var(--color-text-muted)',
                    color: 'var(--color-text-muted)',
                    padding: '14px 32px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-text-main)';
                    e.currentTarget.style.color = 'var(--color-text-main)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-text-muted)';
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                }}
            >
                <X size={20} /> End SOS & Report Incident
            </button>

        </div>
    );
};

export default SOS;
