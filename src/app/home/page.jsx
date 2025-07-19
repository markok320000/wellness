import React from 'react';

const GreetingPill = () => (
    <div className="flex justify-center py-4">
        <div className="bg-[#613EEA] text-white text-sm font-semibold py-2 px-6 rounded-full">
            Good Morning
        </div>
    </div>
);

const HeroSection = () => (
    <div className="relative mx-4 h-56 rounded-2xl overflow-hidden flex flex-col justify-end p-6 text-white shadow-lg">
        <img
            src="https://picsum.photos/seed/familydinner/800/600"
            alt="Family dinner"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200">
                TODAY’S RECOMMENDATION
            </h2>
            <p className="mt-2 text-lg leading-snug">
                Gather around for a warm, joyful family dinner—laughter, love, and memories shared together nightly.
            </p>
        </div>
    </div>
);

const MoodSlider = () => (
    <div className="p-4 mx-4 mt-6 bg-[#2a2830] rounded-2xl">
        <p className="text-center font-medium text-gray-300 mb-4">How do you feel today?</p>
        <div className="flex items-center gap-4">
            <span className="text-3xl">😢</span>
            <div className="flex-grow bg-gray-700 h-2 rounded-full flex items-center">
                <div className="w-1/2 h-full bg-[#613EEA] rounded-l-full"></div>
                <div className="relative">
                    <div className="w-5 h-5 bg-white rounded-full border-4 border-[#613EEA] shadow-md"></div>
                </div>
            </div>
            <span className="text-3xl">🙂</span>
        </div>
    </div>
);

const GridItem = ({ className, children, imgSrc, altText }) => (
    <div className={`relative rounded-2xl overflow-hidden h-40 flex items-end p-4 text-white font-bold text-lg shadow-md ${className}`}>
        <img src={imgSrc} alt={altText} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

const ContentGrid = () => (
    <div className="p-4 mt-6 grid grid-cols-2 gap-4">
        <GridItem className="col-span-2" imgSrc="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" altText="Doctor">
            Specialists
        </GridItem>
        <div className="relative col-span-1 rounded-2xl overflow-hidden h-40 flex items-end p-4 text-white font-bold text-lg shadow-md">
            <img src="https://picsum.photos/seed/leaf/400/400" alt="Leaf" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-green-900/30 backdrop-blur-sm"></div>
            <div className="relative z-10">
                Wellness Blog
            </div>
        </div>
        <div className="relative col-span-1 rounded-2xl overflow-hidden h-40 flex items-end p-4 text-white font-bold text-lg shadow-md">
            <img src="https://picsum.photos/seed/weights/400/400" alt="Weights" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm"></div>
            <div className="relative z-10">
                My Diary
            </div>
        </div>
    </div>
);

const HomeScreen = () => {
    return (
        <div>
            <GreetingPill />
            <HeroSection />
            <MoodSlider />
            <ContentGrid />
        </div>
    );
};

export default HomeScreen;
