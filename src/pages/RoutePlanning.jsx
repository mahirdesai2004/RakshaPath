import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, Sun, Moon, ArrowRight } from 'lucide-react';

const RoutePlanning = () => {
    const navigate = useNavigate();
    const [isNight, setIsNight] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleCompare = () => {
        if (from && to) {
            navigate('/compare');
        }
    };

    return (
        <div className="fade-in" style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '2rem 1rem',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/* Header */}
            <h1 style={{
                fontSize: '1.8rem',
                color: 'var(--color-text-main)',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                Where would you like to go safely?
            </h1>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                {/* Input Fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div style={{ position: 'relative' }}>
                        <MapPin
                            size={20}
                            color="var(--color-primary)"
                            style={{ position: 'absolute', top: '14px', left: '12px', zIndex: 1 }}
                        />
                        <input
                            type="text"
                            placeholder="Current Location"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            style={{ paddingLeft: '44px' }}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Navigation
                            size={20}
                            color="var(--color-secondary)"
                            style={{ position: 'absolute', top: '14px', left: '12px', zIndex: 1 }}
                        />
                        <input
                            type="text"
                            placeholder="Destination"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            style={{ paddingLeft: '44px' }}
                        />
                    </div>

                    {/* Time Toggle */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(255,255,255,0.5)',
                        padding: '12px',
                        borderRadius: '12px',
                        marginTop: '0.5rem'
                    }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Time of travel</span>
                        <div style={{ display: 'flex', gap: '0.5rem', background: '#eee', padding: '4px', borderRadius: '20px' }}>
                            <button
                                onClick={() => setIsNight(false)}
                                style={{
                                    background: !isNight ? 'white' : 'transparent',
                                    padding: '6px 12px',
                                    borderRadius: '16px',
                                    boxShadow: !isNight ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '0.85rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Sun size={14} color="#F5A623" /> Day
                            </button>
                            <button
                                onClick={() => setIsNight(true)}
                                style={{
                                    background: isNight ? 'var(--color-text-main)' : 'transparent',
                                    color: isNight ? 'white' : 'inherit',
                                    padding: '6px 12px',
                                    borderRadius: '16px',
                                    boxShadow: isNight ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '0.85rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Moon size={14} /> Night
                            </button>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleCompare}
                        disabled={!from || !to}
                        style={{
                            marginTop: '1.5rem',
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            boxShadow: '0 4px 14px rgba(74, 144, 226, 0.4)',
                            transition: 'all 0.2s',
                            opacity: (from && to) ? 1 : 0.6,
                            cursor: (from && to) ? 'pointer' : 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}
                    >
                        Compare Routes <ArrowRight size={18} />
                    </button>

                </div>
            </div>

            {!from && !to && (
                <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', opacity: 0.7 }}>
                    Enter locations to see safety scores.
                </p>
            )}
        </div>
    );
};

export default RoutePlanning;
