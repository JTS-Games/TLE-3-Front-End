import { useParams, useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";  // Import react-swipeable
import SwipeComponent from './component/signBookNavigation.jsx';  // Importing SwipeComponent

function SignDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [signs, setSigns] = useState([]);  // Store all signs
    const [currentSignIndex, setCurrentSignIndex] = useState(null);  // Track current sign
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhOTE1MDVmN2I5NzgyMjU1MDgwNTQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDIzNzcyOTYsImV4cCI6MTc0MjM5NTI5Nn0.-EUFTc910M6IuP2Hw2FAV1V38GtN-HaIldVben9shck";

    // Fetch all signs from the API
    async function loadData() {
        try {
            const response = await fetch(`http://145.24.223.113:8000/signs`, {
                headers: {
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            console.log(data); // Log the data to see its structure

            // Check if the data contains an items array
            if (data && Array.isArray(data.items)) {
                const items = data.items;
                setSigns(items);

                // Find the current sign using string comparison for the id
                const signIndex = items.findIndex(sign => sign.id === id);
                setCurrentSignIndex(signIndex);
            } else {
                console.error('Data does not contain an items array:', data);
            }
        } catch (error) {
            console.error('Error occurred', error);
        }
    }

    // Load data when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
        loadData();
    }, [id]);

    // Update the current index whenever the signs or id changes
    useEffect(() => {
        if (signs.length > 0) {
            const signIndex = signs.findIndex(sign => sign.id === id);
            setCurrentSignIndex(signIndex);
        }
    }, [id, signs]);

    const isPlaceholder = (imageUrl) => {
        return imageUrl.includes("placeholder");
    };

    const handleImageError = (e) => {
        e.target.src = "path/to/placeholder-image.jpg"; // Provide a fallback image URL
    };

    // Swipe handlers for next and previous
    const handleNext = () => {
        if (currentSignIndex !== null && currentSignIndex < signs.length - 1) {
            const nextIndex = currentSignIndex + 1;
            navigate(`/signs/${signs[nextIndex].id}`);
        }
    };

    const handlePrev = () => {
        if (currentSignIndex !== null && currentSignIndex > 0) {
            const prevIndex = currentSignIndex - 1;
            navigate(`/signs/${signs[prevIndex].id}`);
        }
    };

    // Swipeable component setup
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,  // Swipe left -> Next
        onSwipedRight: handlePrev,  // Swipe right -> Previous
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,  // Enable mouse swipe for testing
    });

    // Show a loading message if signs are not loaded yet
    if (!signs || signs.length === 0 || currentSignIndex === null) {
        return (
            <div className="text-center text-brown-700 text-lg font-kulim">
                Gebaren worden geladen...
            </div>
        );
    }

    // Get the current sign
    const sign = signs[currentSignIndex];

    return (
        <main {...swipeHandlers} className="min-h-screen bg-background py-2 flex flex-col items-center sm:items-center">
            <div className="absolute top-2/3 left-10 transform -translate-y-14 z-10 hidden sm:block">
                <button
                    onClick={handlePrev}
                    className="pt-2 p-3 items-center text-2xl text-brown-700 bg-headerBlue rounded-full text-white border-2 hover:text-brown-900 focus:outline-none"
                >
                    {"<"}
                </button>
            </div>

            <div className="absolute top-2/3 right-10 transform -translate-y-14 z-20 hidden sm:block">
                <button
                    onClick={handleNext}
                    className=" p-3 items-center text-2xl bg-headerBlue rounded-full text-white border-2 focus:outline-none"
                >
                    {">"}
                </button>
            </div>

            {/* Wrapper for back button and content */}
            <div className="p-2 w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 flex flex-col sm:flex-row sm:justify-center">
                <div className="mb-5 sm:mb-0 flex justify-center items-center w-full">
                    {sign && (
                        <div className="bg-white rounded-lg shadow-lg p-6 flex justify-center flex-col sm:flex-row w-full sm:w-auto sm:max-w-5xl relative">
                            {/* Close Button in the top-right corner of the white box */}
                            <div className="absolute top-4 right-4 bg-incorrect rounded-full flex justify-center items-center z-10">
                                <Link to="/signBook">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0502 12.0503L21.9497 21.9497M12.0502 21.9497L21.9497 12.0503" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                            {/* Left-side: Translation, Explanation, and Video */}
                            <div className="md:w-2/3 flex flex-col">
                                <div className="flex items-center mb-4">

                                    {/* Translation and Explanation */}
                                    <div className="ml-6">
                                        <h1 className="text-2xl md:text-3xl text-brown-700 font-semibold font-kulim mb-2">
                                            {sign.translation}
                                        </h1>
                                        <h2 className="text-xl md:text-2xl text-brown-600 mb-4 font-kulim">
                                            {sign.explanation}
                                        </h2>
                                    </div>
                                </div>

                                {/* Video */}
                                <div className="w-full mb-4">
                                    <video
                                        key={sign.id}
                                        autoPlay
                                        className="w-full rounded-lg shadow-lg"
                                        controls
                                    >
                                        <source src={sign.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            {/* Right-side: Hand- and Mouth shapes */}
                            <div className="md:w-1/3 flex flex-col mt-4 mb-4 sm:mt-0 sm:ml-6">
                                {/* Handvormen */}
                                <div>
                                    <h1 className="text-2xl font-semibold font-kulim text-brown-700 mb-2">
                                        Handvormen:
                                    </h1>

                                    <div className="flex flex-wrap gap-2">
                                        {/* Left-hand shapes */}
                                        {sign.handShapesL && sign.handShapesL.length > 0 && sign.handShapesL.map((shape, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <img
                                                    className="w-auto h-20 sm:h-28 object-contain"
                                                    src={shape.imageUrl}
                                                    alt={`Left Hand Shape: ${shape.shape}`} // Alt tekst
                                                />
                                                <p className="text-brown-600 font-kulim mt-1">{shape.shape}</p> {/* Handvorm tekst */}
                                            </div>
                                        ))}

                                        {/* Right-hand shapes */}
                                        {sign.handShapesR && sign.handShapesR.length > 0 && sign.handShapesR.map((shape, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <img
                                                    className="w-auto h-20 sm:h-28 object-contain transform scale-x-[-1]"
                                                    src={shape.imageUrl}
                                                    alt={`Right Hand Shape: ${shape.shape}`} // Alt tekst
                                                />
                                                <p className="text-brown-600 font-kulim mt-1">{shape.shape}</p> {/* Handvorm tekst */}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mouthvormen */}
                                <div className=" gap-4">
                                    <h1 className="text-2xl font-semibold font-kulim text-brown-700 mt-2 mb-2">
                                        Mondvorm:
                                    </h1>
                                    {sign.mouthShape.map((shape, index) => (
                                        <div key={index} className="flex flex-col items-start">
                                            {!isPlaceholder(shape.imageUrl) ? (
                                                <>
                                                    <img
                                                        className="w-auto h-20 sm:h-28 object-contain font-kulim"
                                                        src={shape.imageUrl}
                                                        alt={`${shape.shape}`}
                                                        onError={handleImageError}
                                                    />
                                                    <p className="text-brown-600 font-kulim mt-1">{`${shape.shape}`}</p>
                                                </>
                                            ) : (
                                                <p className="text-brown-600 font-kulim">{`${shape.shape}`}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {!sign && (
                <div className="text-center text-brown-700 text-lg font-kulim">Gebaar is aan het laden...</div>
            )}
        </main>
    );
}

export default SignDetail;
