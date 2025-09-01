import React from "react";
import AnimatedGreetingCard from "../background/background";

const TeacherDayCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <AnimatedGreetingCard />
      </div>

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-600 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-10 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-10 right-1/2 w-56 h-56 bg-indigo-700 rounded-full filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute text-white text-xl top-10 left-10 animate-ping">✨</span>
        <span className="absolute text-yellow-300 text-lg top-32 right-20 animate-bounce">🌟</span>
        <span className="absolute text-white text-2xl bottom-20 left-1/4 animate-pulse">✨</span>
        <span className="absolute text-yellow-400 text-xl bottom-32 right-1/3 animate-ping delay-300">🌟</span>
      </div>

      <div className="rounded-3xl shadow-2xl p-8 max-w-md w-full relative animate-fadeInSlow bg-black/40 backdrop-blur-lg border border-purple-600/50 ring-2 ring-purple-700/40 z-20">

        <div className="flex justify-center mb-6">
          <img src="./photo.png" alt="Teacher" className="rounded-3xl w-32 h-32 object-cover filter" />
        </div>

        <div className="absolute top-4 left-4 animate-bounce">
          <span role="img" aria-label="flower" className="text-3xl">🌸</span>
        </div>

        <div className="absolute top-4 right-4 animate-pulse">
          <span role="img" aria-label="candle" className="text-3xl">🕯️</span>
        </div>

        <div className="absolute bottom-4 left-12 animate-spin-slow">
          <span role="img" aria-label="flower" className="text-4xl">🌺</span>
        </div>

        <h1 className="text-4xl font-bold text-purple-300 mb-4 animate-pulse text-center">Happy Teacher's Day!</h1>

        <p className="text-xl text-gray-200 mb-6 text-center">Dear <span className="font-semibold text-pink-400">Dibyendu Ganai Sir</span>,</p>

        <p className="text-center italic text-lg text-gray-200 mb-8 animate-fadeInSlow">"Teaching is the one profession that creates all other professions."<br />"A good teacher can inspire hope, ignite imagination, and instill a love of learning."</p>

        <div className="flex justify-center space-x-4 mb-6">
          <span role="img" aria-label="apple" className="text-4xl animate-bounce">🍎</span>
          <span role="img" aria-label="books" className="text-4xl animate-bounce delay-100">📚</span>
          <span role="img" aria-label="star" className="text-4xl animate-bounce delay-200">⭐</span>
          <span role="img" aria-label="heart" className="text-4xl animate-bounce delay-300">❤️</span>
        </div>

        <p className="text-center p-3 font-semibold text-purple-200 text-lg animate-pulse">Thank you for shaping minds and touching hearts!</p>

        <p className="absolute bottom-2 right-6 text-gray-300 text-lg italic tracking-wide">From:- Aniket Das</p>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        @keyframes fadeInSlow {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 2s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TeacherDayCard;
