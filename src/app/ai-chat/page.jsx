'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';

const AIPsychologistChat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "I'm feeling overwhelmed today.",
            sender: "user",
            timestamp: "2:34 PM"
        },
        {
            id: 2,
            text: "I'm here to help. Can you tell me more about what's troubling you?",
            sender: "ai",
            timestamp: "2:35 PM"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatAreaRef = useRef(null);

    const aiResponses = [
        "That sounds difficult. I'm listening.",
        "It's completely normal to feel that way. Would you like to explore what might be causing these feelings?",
        "Thank you for sharing that with me. How long have you been experiencing this?",
        "I can hear the pain in your words. You're being very brave by talking about this.",
        "Let's work through this together. What would feel most helpful right now?",
        "Your feelings are valid and important. Can you tell me more about your support system?"
    ];

    const scrollToBottom = () => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: "user",
            timestamp: getCurrentTime()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response delay
        setTimeout(() => {
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            const aiMessage = {
                id: messages.length + 2,
                text: randomResponse,
                sender: "ai",
                timestamp: getCurrentTime()
            };

            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 800);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col h-screen bg-[#1D1B20] text-white">
            <div className="ml-4 pt-4">
                <h1 className="text-3xl font-bold text-white">Ai Specialist</h1>
            </div>

            {/* Chat Area */}
            <div
                ref={chatAreaRef}
                className="flex-1 overflow-y-auto px-4 py-4 mt-16 mb-20 space-y-4"
            >
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className="max-w-xs sm:max-w-sm">
                            <div
                                className={`px-4 py-3 rounded-2xl shadow-sm ${
                                    message.sender === 'user'
                                        ? 'bg-[#613EEA] text-white rounded-br-md'
                                        : 'bg-zinc-800 text-white rounded-bl-md'
                                }`}
                            >
                                <p className="text-sm leading-relaxed">{message.text}</p>
                            </div>
                            <div className={`mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className="text-xs text-gray-400">{message.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="max-w-xs sm:max-w-sm">
                            <div className="px-4 py-3 bg-zinc-800 rounded-2xl rounded-bl-md shadow-sm">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                            <div className="mt-1 text-left">
                                <span className="text-xs text-gray-400">typing...</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Message Input Section */}
            <div className="max-w-[400px] mx-auto fixed bottom-[90px] left-0 right-0 bg-[#1D1B20] border-t border-zinc-800 px-4 py-3">
                <div className="flex items-end space-x-3">
                    <div className="flex-1">
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full bg-zinc-900 text-white placeholder-gray-400 rounded-2xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#613EEA] focus:ring-opacity-50 max-h-32"
                rows={1}
            />
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="my-auto bg-[#613EEA] hover:bg-[#5a37d4] disabled:bg-gray-600 disabled:cursor-not-allowed rounded-2xl p-3 transition-colors duration-200 shadow-lg"
                    >
                        <Send className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIPsychologistChat;