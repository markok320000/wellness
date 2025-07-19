import React from 'react';

const Dashboard = () => {
    // Sample mood data for the chart
    const moodData = [65, 58, 72, 45, 68, 75, 82, 70, 63, 78, 85, 72, 68, 90, 76];
    const sleepData = [6.5, 7.2, 5.8, 8.0, 6.9, 7.5, 8.3, 6.2, 7.1, 6.8, 7.7, 6.0, 7.3, 7.8, 6.9];

    const statsCards = [
        {
            title: "Therapy Sessions",
            value: "6/31",
            emoji: "😕",
            description: "This Month"
        },
        {
            title: "Meditation Time",
            value: "3h",
            emoji: "🙂",
            description: "This Week"
        },
        {
            title: "Screen Time",
            value: "32h",
            emoji: "😄",
            description: "Daily Average"
        },
        {
            title: "Sleep Quality",
            value: "7.2/10",
            emoji: "😊",
            description: "Last 7 Days"
        }
    ];

    return (
        <div className="min-h-screen bg-[#1D1B20] text-white p-4 pb-8">
            {/* Header */}
            <div className="mb-8 pt-4">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            </div>

            {/* Stats Cards Section */}
            <div className="mb-8">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    {statsCards.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-[200px] bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 shadow-lg flex-shrink-0"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-3xl">{card.emoji}</div>
                                <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium text-green-100 opacity-90">
                                    {card.title}
                                </h3>
                                <div className="text-2xl font-bold text-white">
                                    {card.value}
                                </div>
                                <p className="text-xs text-green-200 opacity-75">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-white mb-2">Mood Tracking</h2>
                    <p className="text-sm text-gray-400">Daily mood scores over time</p>
                </div>

                <div className="h-64 w-full relative overflow-hidden">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-4">
                        <span>100</span>
                        <span>80</span>
                        <span>60</span>
                        <span>40</span>
                        <span>20</span>
                        <span>0</span>
                    </div>

                    {/* Chart area */}
                    <div className="ml-8 h-full relative">
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="border-t border-gray-700/30 w-full"></div>
                            ))}
                        </div>

                        {/* Chart line */}
                        <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polyline
                                fill="none"
                                stroke="#228CA3"
                                strokeWidth="0.5"
                                points={moodData.map((value, index) => {
                                    const x = (index / (moodData.length - 1)) * 100;
                                    const y = 100 - value;
                                    return `${x},${y}`;
                                }).join(' ')}
                            />
                            {/* Data points */}
                            {moodData.map((value, index) => {
                                const x = (index / (moodData.length - 1)) * 100;
                                const y = 100 - value;
                                return (
                                    <circle
                                        key={index}
                                        cx={x}
                                        cy={y}
                                        r="1"
                                        fill="#228CA3"
                                        className="hover:r-2 transition-all duration-200"
                                    />
                                );
                            })}
                        </svg>
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-400 mt-2">
                        <span>1</span>
                        <span>5</span>
                        <span>10</span>
                        <span>15</span>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                    <span>Day 1</span>
                    <span className="text-[#228CA3] font-medium">Feeling Score (0-100)</span>
                    <span>Day 15</span>
                </div>
            </div>

            {/* Bottom spacing for mobile navigation */}
            <div className="h-6"></div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-white mb-2">Sleep Time</h2>
                    <p className="text-sm text-gray-400">Hours slept each day</p>
                </div>

                <div className="h-64 w-full relative overflow-hidden">
                    {/* Y-axis for sleep (10h max) */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-4">
                        <span>10h</span><span>8h</span><span>6h</span><span>4h</span><span>2h</span><span>0h</span>
                    </div>

                    <div className="ml-8 h-full relative">
                        <div className="absolute inset-0 flex flex-col justify-between">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="border-t border-gray-700/30 w-full"></div>
                            ))}
                        </div>

                        <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polyline
                                fill="none"
                                stroke="#EAB308"
                                strokeWidth="0.5"
                                points={sleepData.map((v, i) => {
                                    const x = (i / (sleepData.length - 1)) * 100;
                                    const y = 100 - (v * 10); // 10h = top
                                    return `${x},${y}`;
                                }).join(' ')}
                            />
                            {sleepData.map((v, i) => {
                                const x = (i / (sleepData.length - 1)) * 100;
                                const y = 100 - (v * 10);
                                return (
                                    <circle
                                        key={i}
                                        cx={x}
                                        cy={y}
                                        r="1"
                                        fill="#EAB308"
                                        className="hover:r-2 transition-all duration-200"
                                    />
                                );
                            })}
                        </svg>
                    </div>

                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-400 mt-2">
                        <span>1</span><span>5</span><span>10</span><span>15</span>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                    <span>Day 1</span>
                    <span className="text-[#EAB308] font-medium">Sleep Duration (hours)</span>
                    <span>Day 15</span>
                </div>
            </div>

            {/* Bottom spacing for mobile nav */}
            <div className="h-16"></div>
        </div>
    );
};

export default Dashboard;