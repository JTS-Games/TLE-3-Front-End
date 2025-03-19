import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeComponent = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Swipeable settings for mobile
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(), // Swipe left for next word
        onSwipedRight: () => handlePrev(), // Swipe right for previous word
    });

    // Handle Next Button
    const handleNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Handle Previous Button
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-background">
            <div
                {...handlers} // Attach swipeable handlers to this div
                className="relative flex flex-col items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg"
            >
                {/* Word Display */}
                <h2 className="text-3xl font-semibold text-brown-700">{words[currentIndex]}</h2>

                {/* Desktop Buttons */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
                    <button
                        onClick={handlePrev}
                        className="bg-headerBlue text-white rounded-full p-3 text-2xl"
                        disabled={currentIndex === 0}
                    >
                        &lt; Prev
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-headerBlue text-white rounded-full p-3 text-2xl"
                        disabled={currentIndex === words.length - 1}
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SwipeComponent;
