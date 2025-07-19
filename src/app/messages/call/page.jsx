'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mic, MicOff, Phone, Speaker, ArrowLeft } from 'lucide-react';

export default function CallPage() {
    const router = useRouter();
    const [isMuted, setIsMuted] = useState(false);
    const [isSpeakerOn, setIsSpeakerOn] = useState(false);
    const [callDuration, setCallDuration] = useState(32); // Start at 32 seconds

    // Simulate call timer
    useEffect(() => {
        const interval = setInterval(() => {
            setCallDuration(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };

    const handleEndCall = () => {
        router.push('/messages');
    };

    const handleSpeakerToggle = () => {
        setIsSpeakerOn(!isSpeakerOn);
    };

    const handleBack = () => {
        router.push('/messages');
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source
                    src="https://videos.pexels.com/video-files/4053048/4053048-uhd_2560_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Back Button + Call Status */}
            <div className="absolute top-8 left-6 z-10 flex items-center space-x-2 cursor-pointer" onClick={handleBack}>
                <ArrowLeft className="w-5 h-5 text-white" />
                <span className="text-white/90 text-sm font-medium">Back</span>
            </div>

            {/* Pulse Animation for Active Call */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center space-x-2 text-white/90 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Call in progress</span>
                </div>
            </div>

            {/* UI Controls Container */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 px-6">
                {/* Call Duration */}
                <div className="mb-8">
                    <div className="text-white text-2xl font-semibold text-center">
                        {formatDuration(callDuration)}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-8">
                    {/* Mute */}
                    <button
                        onClick={handleMuteToggle}
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                            isMuted ? 'bg-red-500/80' : 'bg-white/20'
                        } backdrop-blur-sm`}
                    >
                        {isMuted ? (
                            <MicOff className="w-6 h-6 text-white" />
                        ) : (
                            <Mic className="w-6 h-6 text-white" />
                        )}
                    </button>

                    {/* End Call */}
                    <button
                        onClick={handleEndCall}
                        className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg"
                    >
                        <Phone className="w-8 h-8 text-white transform rotate-[135deg]" />
                    </button>

                    {/* Speaker */}
                    <button
                        onClick={handleSpeakerToggle}
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                            isSpeakerOn ? 'bg-blue-500/80' : 'bg-white/20'
                        } backdrop-blur-sm`}
                    >
                        <Speaker className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Status Indicators */}
                <div className="mt-6 flex items-center justify-center space-x-4 text-white/80 text-sm">
                    {isMuted && (
                        <div className="flex items-center space-x-1">
                            <MicOff className="w-4 h-4" />
                            <span>Muted</span>
                        </div>
                    )}
                    {isSpeakerOn && (
                        <div className="flex items-center space-x-1">
                            <Speaker className="w-4 h-4" />
                            <span>Speaker</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
