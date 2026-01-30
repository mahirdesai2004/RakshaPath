import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Clock, MapPin, CheckCircle, AlertTriangle, Phone } from 'lucide-react';

const RouteComparison = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Animate score from 0 to 82
        const interval = setInterval(() => {
            setScore(prev => {
                if (prev >= 82) {
                    clearInterval(interval);
                    return 82;
                }
                return prev + 2;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fade-in" style={{
            height: '90vh',
            display: 'flex',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative'
        }}>
            {/* Floating SOS Button */}
            <button
                onClick={() => navigate('/sos')}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--color-sos)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(41, 128, 185, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    animation: 'pulse-sos 2s infinite'
                }}
            >
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>SOS</span>
            </button>

            <style>{`
        @keyframes pulse-sos {
          0% { box-shadow: 0 0 0 0 rgba(41, 128, 185, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(41, 128, 185, 0); }
          100% { box-shadow: 0 0 0 0 rgba(41, 128, 185, 0); }
        }
      `}</style>

            {/* Left Panel: Route Info */}
            <div className="glass-panel" style={{
                flex: '1',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                overflowY: 'auto'
            }}>
                {/* Header */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Recommended Route</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)' }}>
                        <span style={{ fontWeight: 600 }}>Home</span>
                        <span>→</span>
                        <span style={{ fontWeight: 600 }}>Library</span>
                    </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={18} color="var(--color-primary)" />
                        <span style={{ fontWeight: 600 }}>12 min</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={18} color="var(--color-primary)" />
                        <span style={{ fontWeight: 600 }}>1.2 km</span>
                    </div>
                </div>

                {/* Safety Score Card */}
                <div style={{
                    background: 'rgba(255,255,255,0.6)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.5)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Overall Safety Score</span>
                        <Shield size={24} color="var(--color-safe)" />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-safe)', lineHeight: 1 }}>
                            {score}
                        </span>
                        <span style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', paddingBottom: '6px' }}>/ 100</span>
                    </div>

                    <div style={{ width: '100%', height: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                            width: `${score}%`,
                            height: '100%',
                            background: 'var(--color-safe)',
                            transition: 'width 0.1s linear'
                        }} />
                    </div>
                </div>

                {/* Explanation */}
                <div style={{
                    background: 'rgba(74, 144, 226, 0.1)',
                    padding: '1rem',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    lineHeight: 1.5
                }}>
                    <p>This route stays on <strong>well-lit commercial roads</strong> and avoids isolated streets after 9 PM.</p>
                </div>

                {/* Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-safe)' }}>
                    <CheckCircle size={20} />
                    <span style={{ fontWeight: 600 }}>You are on the safest available route.</span>
                </div>

                <button style={{
                    marginTop: 'auto',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    background: 'rgba(255,255,255,0.5)'
                }}>
                    View details
                </button>
            </div>

            {/* Right Panel: Map Placeholder */}
            <div className="glass-panel" style={{
                flex: '1.5',
                background: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Abstract Map Graphic (CSS only) */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'url("https://www.transparenttextures.com/patterns/cubes.png"), #f0f0f0',
                    opacity: 0.5
                }} />

                {/* Route Line Mock */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <path
                        d="M 100 400 Q 250 350 300 200 T 500 100"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="10 5"
                    />
                    <path
                        d="M 100 400 Q 250 350 300 200 T 500 100"
                        fill="none"
                        stroke="rgba(74, 144, 226, 0.3)"
                        strokeWidth="14"
                        strokeLinecap="round"
                    />
                    <circle cx="100" cy="400" r="8" fill="var(--color-text-main)" />
                    <circle cx="500" cy="100" r="8" fill="var(--color-primary)" />
                </svg>

                <span style={{
                    position: 'relative',
                    background: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                }}>
                    Live Navigation Active
                </span>
            </div>
        </div>
    );
};

export default RouteComparison;
