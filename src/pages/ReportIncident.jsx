import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, AlertCircle, FileText, Check, ArrowLeft, Send } from 'lucide-react';

const ReportIncident = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="fade-in" style={{
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(46, 204, 113, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                }}>
                    <Check size={40} color="var(--color-safe)" />
                </div>
                <h2 style={{ marginBottom: '1rem' }}>Thank You.</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                    Your report was submitted anonymously.<br />
                    This helps make our community safer.
                </p>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                >
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <div className="fade-in" style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '2rem 1rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => navigate(-1)} style={{ padding: '8px', cursor: 'pointer' }}>
                    <ArrowLeft size={24} color="var(--color-text-muted)" />
                </button>
                <h1 style={{ fontSize: '1.5rem' }}>Report an Incident</h1>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Location */}
                    <div style={{ position: 'relative' }}>
                        <MapPin
                            size={20}
                            color="var(--color-primary)"
                            style={{ position: 'absolute', top: '14px', left: '12px', zIndex: 1 }}
                        />
                        <input type="text" placeholder="Location" defaultValue="Current Location" required style={{ paddingLeft: '44px' }} />
                    </div>

                    {/* Incident Type */}
                    <div style={{ position: 'relative' }}>
                        <AlertCircle
                            size={20}
                            color="var(--color-warning)"
                            style={{ position: 'absolute', top: '14px', left: '12px', zIndex: 1 }}
                        />
                        <select style={{ paddingLeft: '44px', appearance: 'none' }} required>
                            <option value="" disabled selected>Select Incident Type</option>
                            <option value="lighting">Poor Lighting</option>
                            <option value="harassment">Harassment</option>
                            <option value="isolated">Isolated / Unsafe Area</option>
                            <option value="suspicious">Suspicious Activity</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div style={{ position: 'relative' }}>
                        <FileText
                            size={20}
                            color="var(--color-text-muted)"
                            style={{ position: 'absolute', top: '14px', left: '12px', zIndex: 1 }}
                        />
                        <textarea
                            placeholder="Description (Optional)"
                            rows="4"
                            style={{ paddingLeft: '44px', resize: 'none' }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            background: 'linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%)',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            border: 'none',
                            marginTop: '1rem',
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? 'wait' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 14px rgba(74, 144, 226, 0.4)'
                        }}
                    >
                        {loading ? 'Submitting...' : 'Submit Safety Report'}
                        {!loading && <Send size={18} />}
                    </button>

                </form>
            </div>

            <p style={{
                textAlign: 'center',
                marginTop: '2rem',
                color: 'var(--color-text-muted)',
                fontSize: '0.85rem',
                opacity: 0.8
            }}>
                <span role="img" aria-label="shield">🛡️</span> Reports are anonymous and help improve community safety.
            </p>

        </div>
    );
};

export default ReportIncident;
