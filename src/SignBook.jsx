import { useEffect, useState } from "react";
import SignCard from "./SignCard.jsx";

function SignBook() {
    const [signs, setSigns] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Correct initialization
    const [filterLesson, setFilterLesson] = useState(''); // Correct initialization
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhYzMxMDRlZmZkNGQ2MzBmNTI1MjMiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTc0MjM5NTg4MSwiZXhwIjoxNzQyNDEzODgxfQ.tuMoX7bX0oKQvqJNLuSsxPgv3euIs-EWmFF6hczq_tw";

    async function loadData(lesson) {
        const url = lesson
            ? `http://145.24.223.113:8000/signs/filtered?lesson=${lesson}`
            : "http://145.24.223.113:8000/signs";

        try {
            const response = await fetch(url, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                // Log the response status for better debugging
                console.error(`Error: ${response.status} - ${response.statusText}`);
                return;  // Exit the function if the response is not OK
            }

            const data = await response.json();
            setSigns(data.items || []);
        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    }


    useEffect(() => {
        loadData(filterLesson);
    }, [filterLesson]);

    // Zoekfunctie
    const searchSigns = signs.filter((sign) =>
        sign.translation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Groeperen van gebaren op basis van les
    const groupedSigns = signs.reduce((acc, sign) => {
        const lesson = sign.lesson || "Onbekend"; // Als 'lesson' ontbreekt, gebruik 'Onbekend'
        if (!acc[lesson]) {
            acc[lesson] = [];
        }
        acc[lesson].push(sign);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-background p-10">
            <h1 className="text-4xl font-kulim font-semibold italic uppercase text-center mb-10 text-brown-700">
                Gebarenboek
            </h1>

            {/* Container voor filter en zoekbalk*/}
            <div className="sticky top-2 flex justify-between mb-8 space-x-4">
                <div className="w-1/4">
                    <select
                        id="lessonFilter"
                        value={filterLesson}
                        onChange={(e) => setFilterLesson(e.target.value)}
                        className="w-full focus:outline-blue-700 p-3 border-2 border-headerBlue text-black bg-white rounded-full font-kulim"
                    >
                        <option value="">Alle lessen</option>
                        <option value="1">Les 1</option>
                        <option value="2">Les 2</option>
                        <option value="3">Les 3</option>
                        <option value="4">Les 4</option>
                        <option value="5">Les 5</option>
                        <option value="6">Les 6</option>
                        <option value="7">Les 7</option>
                    </select>
                </div>

                <div className="w-3/4 relative">
                    <input
                        type="text"
                        placeholder="Zoek een woord... "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 border-2 border-headerBlue focus:outline-blue-700 bg-white rounded-full font-kulim"
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {searchTerm ? (
                searchSigns.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-kulim">
                        {searchSigns.map((sign) => (
                            <SignCard key={sign.id} sign={sign} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 text-lg font-kulim">
                        Geen gebaren gevonden...
                    </div>
                )
            ) : (

                Object.keys(groupedSigns).length > 0 ? (
                    Object.keys(groupedSigns).map((lesson) => (
                        <div key={lesson} className="mb-12">
                            <h2 className="text-2xl font-bold font-kulim mb-6">Les {lesson}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {groupedSigns[lesson].map((sign) => (
                                    <SignCard key={sign.id} sign={sign} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-600 text-lg font-kulim">
                        Gebaren zijn aan het laden...
                    </div>
                )
            )}
        </div>
    );
}

export default SignBook;