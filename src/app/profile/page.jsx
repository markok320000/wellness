'use client';
import { Headphones, Play } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function ProfileScreen() {
    // Initialize the Next.js router
    const router = useRouter();

    /**
     * Handles the click event on a card and navigates to the /meditation page.
     */
    const handleCardClick = () => {
        router.push('/profile/meditation');
    };

    return (
        <div className="min-h-screen bg-[#1D1B20] text-white p-6">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                    Your Activities
                </h1>
                <p className="text-sm italic text-gray-400">
                    Consistency is key to creating positive habits!
                </p>
            </div>

            {/* Active Items Section */}
            <div className="pt-4">
                <h2 className="text-xl font-semibold text-white mb-6">
                    Active Items
                </h2>

                <div className="flex gap-4 overflow-x-scroll snap-x snap-mandatory pb-4 scrollbar-hide">
                    {/* Card 1 - Relaxing Meditation */}
                    <div
                        onClick={handleCardClick}
                        className="min-w-[90%] snap-center relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>

                        <div className="relative z-10 h-40 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Relaxing Meditation
                                </h3>
                                <p className="text-blue-100 text-sm">
                                    7 Day Audio and Video Series
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-white/20 rounded-full p-3">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Sleep Meditation */}
                    <div
                        onClick={handleCardClick}
                        className="min-w-[90%] snap-center relative bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer">
                        <div className="absolute top-0 left-0 w-28 h-28 bg-white/10 rounded-full -translate-y-14 -translate-x-14"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 translate-x-10"></div>
                        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/5 rounded-full"></div>

                        <div className="relative z-10 h-40 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Sleep Meditation
                                </h3>
                                <p className="text-green-100 text-sm">
                                    7 Day Audio Series
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-white/20 rounded-full p-3">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Mindful Breathing */}
                    <div
                        onClick={handleCardClick}
                        className="min-w-[90%] snap-center relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer">
                        <div className="absolute top-0 right-1/3 w-24 h-24 bg-white/10 rounded-full -translate-y-12"></div>
                        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-white/5 rounded-full translate-y-16"></div>

                        <div className="relative z-10 h-40 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Mindful Breathing
                                </h3>
                                <p className="text-purple-100 text-sm">
                                    Daily Practice Guide
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-white/20 rounded-full p-3">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Activities Section */}
            <div className="pt-8">
                <h2 className="text-xl font-semibold text-white mb-6">
                    Recommended Activities
                </h2>

                <div className="flex gap-4 overflow-x-scroll snap-x snap-mandatory pb-4 scrollbar-hide">
                    {/* Recommended Card 1 - Tropical Relax */}
                    <div
                        onClick={handleCardClick}
                        className="min-w-[90%] snap-center relative bg-gradient-to-br from-green-400 to-lime-600 rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-12 -translate-y-12"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-10 translate-y-10"></div>
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

                        <div className="relative z-10 h-48 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Tropical Relax
                                </h3>
                                <p className="text-lime-100 text-sm mb-4">
                                    Guided Audio Journey
                                </p>
                                <button
                                    onClick={(e) => {
                                        // Prevent the card's click event from firing when the button is clicked
                                        e.stopPropagation();
                                        // Add button-specific logic here if needed
                                        handleCardClick()
                                    }}
                                    className="bg-white text-green-800 font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-lime-100 transition">
                                    <Play className="w-4 h-4" />
                                    Play Now
                                </button>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-white/20 rounded-full p-3">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Card 2 - Focus Booster */}
                    <div
                        onClick={handleCardClick}
                        className="min-w-[90%] snap-center relative bg-gradient-to-br from-yellow-500 to-amber-700 rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer">
                        <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-14 translate-x-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-10 -translate-x-6"></div>
                        <div className="absolute top-1/4 left-1/4 w-14 h-14 bg-white/5 rounded-full"></div>

                        <div className="relative z-10 h-48 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Focus Booster
                                </h3>
                                <p className="text-yellow-100 text-sm">
                                    Music for Concentration
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-white/20 rounded-full p-3">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Card 3 - Energy Boost */}
                    <div
                        onClick={handleCardClick}
                        className="min-w-[90%] snap-center relative bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl p-6 shadow-xl overflow-hidden cursor-pointer">
                        <div className="absolute top-0 left-1/2 w-24 h-24 bg-white/10 rounded-full -translate-x-1/2 -translate-y-14"></div>
                        <div className="absolute bottom-0 right-1/3 w-20 h-20 bg-white/5 rounded-full translate-y-10"></div>

                        <div className="relative z-10 h-48 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Energy Boost
                                </h3>
                                <p className="text-red-100 text-sm">
                                    5-Min Wake Up Sessions
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-white/20 rounded-full p-3">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
