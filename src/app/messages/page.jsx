'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const TherapyMessagesUI = () => {
    const router = useRouter();

    const sessionData = [
        {
            id: 1,
            doctorName: "Dr. Who",
            description: "Therapy Session",
            participants: "5+ participants",
            avatars: ["👨‍⚕️", "👩", "👨"]
        },
        {
            id: 2,
            doctorName: "Dr. Smith",
            description: "Group Therapy",
            participants: "8+ participants",
            avatars: ["👩‍⚕️", "👨", "👩"]
        },
        {
            id: 3,
            doctorName: "Dr. Grey",
            description: "Family Session",
            participants: "3+ participants",
            avatars: ["👨‍⚕️", "👨", "👩"]
        }
    ];

    const messageData = [
        {
            id: 1,
            name: "Dr. Smith",
            message: "Let's check in tomorrow at 3pm...",
            date: "July 18",
            avatar: "👩‍⚕️"
        },
        {
            id: 2,
            name: "Family Group",
            message: "Dinner tonight? 😋",
            date: "July 18",
            avatar: "👨‍👩‍👧‍👦"
        },
        {
            id: 3,
            name: "Dr. Grey",
            message: "How are you feeling today?",
            date: "July 17",
            avatar: "👨‍⚕️"
        },
        {
            id: 4,
            name: "Support Group",
            message: "Don't forget the session this weekend.",
            date: "July 16",
            avatar: "👥"
        },
        {
            id: 5,
            name: "Dr. Who",
            message: "It's okay to feel off some days.",
            date: "July 15",
            avatar: "👨‍⚕️"
        },
        {
            id: 6,
            name: "Mom",
            message: "Proud of you ❤️",
            date: "July 14",
            avatar: "👩"
        }
    ];

    return (
        <div className="min-h-screen bg-[#1D1B20] text-white p-6">
            {/* Active Therapy Sessions Section */}
            <div className="mb-8">
                <h2 className="text-lg font-bold text-white mb-4">Active Therapy Sessions</h2>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {sessionData.map((session) => (
                        <div key={session.id} className="bg-zinc-900 rounded-lg p-4 shadow-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {/* Profile Image Group */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex -space-x-2">
                                            {session.avatars.map((avatar, index) => (
                                                <div
                                                    key={index}
                                                    className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-sm"
                                                    style={{ zIndex: session.avatars.length - index }}
                                                >
                                                    {avatar}
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-400 mt-1">{session.participants}</span>
                                    </div>

                                    {/* Session Info */}
                                    <div>
                                        <h3 className="font-bold text-white">{session.doctorName}</h3>
                                        <p className="text-sm text-gray-400">{session.description}</p>
                                    </div>
                                </div>

                                {/* Join Button */}
                                <Button
                                    className="bg-[#613EEA] hover:bg-[#363EEA] text-white px-4 py-2 rounded-full text-sm"
                                    onClick={() => router.push('/messages/call')}
                                >
                                    Join Session
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Messages Section */}
            <div>
                <h2 className="text-lg font-bold text-white mb-4 mt-8">Messages</h2>
                <div className="space-y-3">
                    {messageData.map((message) => (
                        <div key={message.id} className="bg-zinc-800 rounded-lg p-4 shadow">
                            <div className="flex items-center space-x-3">
                                {/* Profile Picture */}
                                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                                    <span className="text-lg">{message.avatar}</span>
                                </div>

                                {/* Message Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-white text-sm">{message.name}</h4>
                                        <span className="text-xs text-gray-500">{message.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-300 truncate">{message.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TherapyMessagesUI;
