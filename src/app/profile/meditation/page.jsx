'use client';
import React, { useEffect, useState } from 'react';
import { Leaf, Pause, X, ArrowLeft } from 'lucide-react';
import Confetti from 'react-confetti';
import { useRouter } from 'next/navigation';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function MeditationScreen() {
    const [isCompleted, setIsCompleted] = useState(false);
    const [progress, setProgress] = useState(35);
    const { width, height } = useWindowSize();
    const router = useRouter();

    // Simulate progress animation
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 0;
                return prev + 0.5;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    const navigateToDashboard = () => {
        router.push('/profile');
    };

    if (isCompleted) {
        return (
            <div
                className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
                style={{ backgroundColor: '#1D1B20' }}
            >
                {/* Confetti Celebration */}
                <Confetti width={width} height={height} numberOfPieces={400} recycle={false} />

                {/* Soft Glow Ring */}
                <div className="absolute w-96 h-96 rounded-full bg-green-500 opacity-20 blur-3xl animate-pulse"></div>

                {/* Completion Card */}
                <div className="relative w-full max-w-md bg-gradient-to-br from-green-600/70 to-green-400/30 backdrop-blur-xl rounded-3xl p-10 text-center shadow-2xl border border-white/20 animate-fade-in">
                    {/* Close Button */}
                    <button
                        onClick={navigateToDashboard}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Content */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-extrabold text-white tracking-wider drop-shadow-md">
                            🎉 DAY 15 / 31 COMPLETED
                        </h1>
                        <p className="text-white/90 text-base leading-relaxed">
                            You’re showing incredible dedication. Keep the rhythm going — every breath counts.
                        </p>
                        <div className="text-green-200 text-sm italic mt-4">
                            See you tomorrow for another peaceful session 🌿
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1D1B20' }}>
            <div className="flex gap-2 ml-4 pt-4">
                <button
                    onClick={navigateToDashboard}
                    className="text-white hover:text-gray-300 transition-colors flex"
                >
                    <ArrowLeft size={28} />
                </button>
                <h1 className="flex text-3xl  font-bold text-white">Meditation</h1>
            </div>
            <div className="grow flex flex-col justify-center items-center p-4 gap-6">
                {/* Main Meditation Card */}
                <div className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg">
                    {/* Green Bush Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="h-32 w-32 bg-green-100 rounded-full flex items-center justify-center">
                            <Leaf size={64} className="text-green-600" />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-black text-center mb-8">
                        Meditation
                    </h1>

                    {/* Audio Progress Bar */}
                    <div className="mb-8">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>{Math.floor(progress * 0.3)}:30</span>
                            <span>10:00</span>
                        </div>
                    </div>

                    {/* Pause Button */}
                    <div className="flex justify-center">
                        <button
                            className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors shadow-lg"
                        >
                            <Pause size={24} fill="currentColor" />
                        </button>
                    </div>
                </div>

                {/* Complete Button */}
                <button
                    onClick={handleComplete}
                    className="w-full max-w-sm bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
                >
                    Complete
                </button>
            </div>
        </div>
    );
}
