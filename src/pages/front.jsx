import React, { useState } from 'react';
import TeacherDayCard from './Greeting';

const InteractiveDoor = () => {
    const [isOpening, setIsOpening] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const handleOpenDoor = () => {
        setIsOpening(true);
        setTimeout(() => {
            setIsOpened(true);
        }, 1000);
    };

    if (isOpened) {
        return <TeacherDayCard />;
    }

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 animate-pulse"></div>

            {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="absolute w-2 h-2 bg-yellow-300/40 rounded-full animate-pulse" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${2 + Math.random() * 3}s`, }}></div>
            ))}

            <div className="relative">
                <div className="relative w-80 h-96 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-lg shadow-2xl">
                    
                    <div className="absolute inset-2 border-4 border-amber-700 rounded-t-lg"></div>
                    
                    <div className={`absolute left-2 top-2 w-36 h-full bg-gradient-to-br from-amber-600 to-amber-800 transition-all duration-1000 ease-in-out origin-left ${isOpening ? 'transform rotate-y-90 scale-x-0' : ''} ${isOpened ? 'opacity-0' : ''}`} style={{
                        transformStyle: 'preserve-3d', perspective: '1000px',
                    }}>

                        <div className="absolute top-4 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute top-24 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute bottom-24 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute bottom-4 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-600 rounded-full shadow-lg"></div>
                    </div>

                    <div className={`absolute right-2 top-2 w-36 h-full bg-gradient-to-bl from-amber-600 to-amber-800 transition-all duration-1000 ease-in-out origin-right ${isOpening ? 'transform -rotate-y-90 scale-x-0' : ''} ${isOpened ? 'opacity-0' : ''}`} style={{ transformStyle: 'preserve-3d', perspective: '1000px',}}>

                        <div className="absolute top-4 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute top-24 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute bottom-24 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute bottom-4 left-4 right-4 h-16 bg-amber-700/50 rounded border border-amber-600"></div>
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-600 rounded-full shadow-lg"></div>

                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-stone-600"></div>

                </div>

                {isOpening && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 opacity-0 animate-fade-in rounded-t-lg"></div>
                )}

                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ left: `${-10 + Math.cos((i * Math.PI * 2) / 8) * 200}px`, top: `${200 + Math.sin((i * Math.PI * 2) / 8) * 200}px`, animationDelay: `${i * 0.3}s`, animationDuration: '2s', }} ></div>
                ))}
            </div>

            <div className="mt-16">
                <button onClick={handleOpenDoor} disabled={isOpening} className={` relative px-8 py-4 text-lg font-bold text-white rounded-full transition-all duration-300 transform hover:scale-105 ${isOpening ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg hover:shadow-xl'}`}>

                    {!isOpening && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    )}

                    <span className="relative z-10">
                        {isOpening ? 'Opening...' : 'Click Here to Open Door'}
                    </span>

                    {!isOpening && Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-70" style={{ left: `${20 + i * 20}%`, top: `${10 + (i % 2) * 80}%`, animationDelay: `${i * 0.5}s`, }} ></div>
                    ))}
                </button>
            </div>

            {isOpening && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="text-white text-xl font-semibold animate-pulse">Entering the magical realm...</div>
                </div>
            )}

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes rotate-y-90 {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-90deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
        
        .rotate-y-90 {
          transform: rotateY(-90deg);
        }
        
        .-rotate-y-90 {
          transform: rotateY(90deg);
        }
      `}</style>
        </div>
    );
};

export default InteractiveDoor;
