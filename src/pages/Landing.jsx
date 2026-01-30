import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div style={{
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <div className={`glass-panel fade-in`} style={{
                padding: '3rem',
                textAlign: 'center',
                maxWidth: '400px',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out'
            }}>
                {/* Animated Icon */}
                <div style={{
                    position: 'relative',
                    marginBottom: '1rem'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: -10,
                        background: 'var(--color-primary)',
                        borderRadius: '50%',
                        opacity: 0.2,
                        animation: 'pulse 3s infinite'
                    }} />
                    <Shield
                        size={64}
                        color="var(--color-primary)"
                        strokeWidth={1.5}
                        fill="rgba(74, 144, 226, 0.1)"
                    />
                </div>

                {/* Title & Tagline */}
                <div>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: 'var(--color-text-main)',
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.5px'
                    }}>
                        RakshaPath
                    </h1>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.1rem',
                        lineHeight: 1.5
                    }}>
                        A safer path. A calmer journey.<br />
                        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Designed to help women feel protected.</span>
                    </p>
                </div>

                {/* Actions */}
                <div style={{ width: '100%', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button
                        onClick={() => navigate('/plan')}
                        style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            boxShadow: '0 4px 14px rgba(74, 144, 226, 0.4)',
                            transition: 'transform 0.2s',
                            width: '100%'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Get Started
                    </button>

                    <button style={{
                        color: 'var(--color-text-muted)',
                        fontWeight: 500
                    }}>
                        I already have an account
                    </button>
                </div>

                {/* Footer Microcopy */}
                <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    opacity: 0.7,
                    marginTop: '1rem'
                }}>
                    <span role="img" aria-label="lock">🔒</span> Your location is private and shared only when you choose.
                </p>
            </div>

            <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.1; }
          100% { transform: scale(0.95); opacity: 0.2; }
        }
      `}</style>
        </div>
    );
};

export default Landing;
