import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Clock, MapPin, CheckCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

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

    // Mock Route Data (Start: Mumbai Library, End: Home mockup)
    const positionStart = [19.0760, 72.8777]; // Mumbai coordinates mock
    const positionEnd = [19.0860, 72.8877];

    // A slightly curved "safe" path
    const routePath = [
        [19.0760, 72.8777],
        [19.0780, 72.8790],
        [19.0800, 72.8820],
        [19.0830, 72.8850],
        [19.0860, 72.8877]
    ];

    return (
        <div className="fade-in responsive-row" style={{
            height: '90vh',
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
                    zIndex: 1000, // Leaflet uses high z-index
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
        .leaflet-container {
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
      `}</style>

            {/* Left Panel: Route Info */}
            <div className="glass-panel" style={{
                flex: '1',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                overflowY: 'auto',
                zIndex: 2 // Ensure above map if overlapped
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

            {/* Right Panel: Real Map */}
            <div className="glass-panel" style={{
                flex: '1.5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px',
                padding: 0 // Remove padding for full map
            }}>
                <MapContainer
                    center={[19.0810, 72.8827]}
                    zoom={15}
                    scrollWheelZoom={true}
                    zoomControl={false}
                >
                    {/* Tile Layer: OpenStreetMap */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    {/* Markers */}
                    <Marker position={positionStart}>
                        <Popup>Start Point</Popup>
                    </Marker>
                    <Marker position={positionEnd}>
                        <Popup>Destination</Popup>
                    </Marker>

                    {/* Safe Route Polyline */}
                    <Polyline
                        positions={routePath}
                        pathOptions={{ color: 'var(--color-primary)', weight: 6, opacity: 0.8 }}
                    />
                    {/* Safety shadow for polyline */}
                    <Polyline
                        positions={routePath}
                        pathOptions={{ color: 'rgba(74, 144, 226, 0.2)', weight: 14 }}
                    />
                </MapContainer>

                {/* Navigation Pill */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 1000
                }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-safe)', boxShadow: '0 0 0 2px rgba(46, 204, 113, 0.3)' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Live Navigation</span>
                </div>
            </div>
        </div>
    );
};

export default RouteComparison;
