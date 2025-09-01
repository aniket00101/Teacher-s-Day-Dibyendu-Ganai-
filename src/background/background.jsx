import React, { useState, useEffect } from 'react';

const AnimatedGreetingCard = () => {
    const [sparkles, setSparkles] = useState([]);
    const [confetti, setConfetti] = useState([]);

    useEffect(() => {
        const generateSparkles = () => {
            const newSparkles = Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                delay: Math.random() * 2,
                duration: Math.random() * 3 + 2,
            }));
            setSparkles(newSparkles);
        };

        const generateConfetti = () => {
            const newConfetti = Array.from({ length: 15 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: -10,
                rotation: Math.random() * 360,
                color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][Math.floor(Math.random() * 6)],
                delay: Math.random() * 3,
            }));
            setConfetti(newConfetti);
        };

        generateSparkles();
        generateConfetti();

        const sparkleInterval = setInterval(generateSparkles, 5000);
        const confettiInterval = setInterval(generateConfetti, 8000);

        return () => {
            clearInterval(sparkleInterval);
            clearInterval(confettiInterval);
        };
    }, []);

    const Sparkle = ({ sparkle }) => (
        <div className="absolute pointer-events-none" style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%`, animationDelay: `${sparkle.delay}s`, }}>

            <div className="animate-ping" style={{ width: `${sparkle.size}px`, height: `${sparkle.size}px`, animationDuration: `${sparkle.duration}s`, }}>
                <div className="w-full h-full bg-yellow-300 rounded-full opacity-75"></div>
            </div>

            <div className="absolute top-0 left-0 animate-pulse" style={{ width: `${sparkle.size}px`, height: `${sparkle.size}px`, animationDelay: `${sparkle.delay + 0.5}s`, }}>

                <div className="w-full h-full bg-white rounded-full"></div>

            </div>

        </div>
    );

    const ConfettiPiece = ({ piece }) => (

        <div className="absolute w-3 h-3 animate-bounce opacity-80" style={{ left: `${piece.x}%`, top: `${piece.y}%`, backgroundColor: piece.color, transform: `rotate(${piece.rotation}deg)`, animationDelay: `${piece.delay}s`, animationDuration: '4s', animationTimingFunction: 'ease-out', }}
        ></div>

    );

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 animate-pulse"></div>

            {sparkles.map((sparkle) => (
                <Sparkle key={sparkle.id} sparkle={sparkle} />
            ))}

            {confetti.map((piece) => (
                <ConfettiPiece key={piece.id} piece={piece} />
            ))}

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">

                <div className="absolute top-20 left-10">
                    <div className="w-8 h-8 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }}>⭐</div>
                </div>

                <div className="absolute top-32 right-16">
                    <div className="w-6 h-6 text-pink-300 animate-bounce" style={{ animationDelay: '1s' }}>🎈</div>
                </div>

                <div className="absolute bottom-32 left-16">
                    <div className="w-8 h-8 text-purple-300 animate-pulse" style={{ animationDelay: '2s' }}>🎁</div>
                </div>

                <div className="absolute bottom-40 right-20">
                    <div className="w-6 h-6 text-green-300 animate-bounce" style={{ animationDelay: '1.5s' }}>🎉</div>
                </div>

                <div className="absolute top-16 right-8">

                    <div className="flex space-x-2">
                        <div className="w-8 h-10 bg-red-400 rounded-full animate-float shadow-lg"></div>
                        <div className="w-8 h-10 bg-blue-400 rounded-full animate-float shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-8 h-10 bg-green-400 rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="flex space-x-2 mt-1">
                        <div className="w-0.5 h-16 bg-gray-400"></div>
                        <div className="w-0.5 h-16 bg-gray-400"></div>
                        <div className="w-0.5 h-16 bg-gray-400"></div>
                    </div>

                </div>

                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 via-yellow-400 to-red-400 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="absolute">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{
                            left: `${Math.cos((i * Math.PI * 2) / 8) * 80 + 50}px`,
                            top: `${Math.sin((i * Math.PI * 2) / 8) * 80 + 50}px`, animationDelay: `${i * 0.2}s`, animationDuration: '2s',
                        }}></div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }
      `}</style>
        </div>
    );
};

export default AnimatedGreetingCard;