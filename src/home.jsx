import { useState, useEffect } from "react";
function Leerstof() {
    const [groupedLessons, setGroupedLessons] = useState({});
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhYzMxMDRlZmZkNGQ2MzBmNTI1MjMiLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTc0MjM5NTg4MSwiZXhwIjoxNzQyNDEzODgxfQ.tuMoX7bX0oKQvqJNLuSsxPgv3euIs-EWmFF6hczq_tw";

    async function loadData() {
        try {
            const response = await fetch(
                // "http://145.24.223.113:8000/api/v2/signs",
                "http://145.24.223.113:8000/signs",
                {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

            const data = await response.json();
            const theoryLessons = ["1", "2", "3", "4"];

            const grouped = data.items.reduce((acc, sign) => {
                if (!acc[sign.lesson]) {
                    acc[sign.lesson] = { signs: [], theoryAvailable: false };
                }
                acc[sign.lesson].signs.push(sign);

                if (theoryLessons.includes(sign.lesson.toString())) {
                    acc[sign.lesson].theoryAvailable = true;
                }

                return acc;
            }, {});

            setGroupedLessons(grouped);
        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    }

    async function loadPdf(lessonNumber) {
        try {
            const response = await fetch(
                // `http://145.24.223.113:8000/api/v2/theorybook/${lessonNumber}.pdf`,
                `http://145.24.223.113:8000/theorybook/${lessonNumber}.pdf`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to load PDF. Check token or permissions.");
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setPdfUrl(url);
        } catch (error) {
            console.error("Error loading PDF:", error);
            setPdfUrl(null);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if (selectedLesson && groupedLessons[selectedLesson]?.theoryAvailable) {
            loadPdf(selectedLesson);
        }
    }, [selectedLesson]);

    return (
        <div className="h-screen bg-background px-6 md:px-20 py-10 md:py-20 flex flex-col md:flex-row">
            {/* Left Lesson Section */}
            <div
                className={`md:w-1/4 w-full flex flex-col items-center ${
                    selectedLesson ? "hidden md:flex" : "flex"
                }`}
            >
                {Object.keys(groupedLessons).map((lessonNumber) => (
                    <div
                        key={lessonNumber}
                        onClick={() => setSelectedLesson(lessonNumber)}
                        className={`flex items-center justify-between w-3/4 md:w-full p-4 mb-2 cursor-pointer rounded-lg font-bold transition-all duration-300 ${
                            selectedLesson === lessonNumber
                                ? "bg-[#6494ED] text-[#CCE6FE]"
                                : "bg-[#CCE6FE] hover:bg-blue-200 text-[#6494ED]"
                        }`}
                    >
                        <p className="text-4xl md:text-8xl">{lessonNumber}</p>
                        <p className="text-lg md:text-xl">LEERSTOF</p>
                        <p className=""> {">"} </p>
                    </div>
                ))}
            </div>

            {/* Right Content Section */}
            <div
                className={`w-full md:w-3/4 p-6 bg-background ${
                    selectedLesson ? "block" : "hidden md:block"
                }`}
            >
                {selectedLesson ? (
                    <>
                        {/* Mobile Back Button */}
                        <div
                            className="md:hidden absolute top-4 right-4 bg-incorrect rounded-full flex justify-center items-center z-10">
                            <button onClick={() => setSelectedLesson(null)}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0502 12.0503L21.9497 21.9497M12.0502 21.9497L21.9497 12.0503"
                                          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        {/* Top Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 md:justify-evenly items-center mb-4">
                            <a
                                href={`/lessons/${selectedLesson}`}
                                className="w-full md:w-1/4 text-center bg-[#CCE6FE] text-[#6494ED] px-10 py-6 cursor-pointer rounded-lg font-bold transition-all duration-300"
                            >
                                WOORDEN {">"}
                            </a>
                            <a
                                href={`/test/${selectedLesson}`}
                                className="w-full md:w-1/4 text-center bg-[#CCE6FE] text-[#6494ED] px-10 py-6 cursor-pointer rounded-lg font-bold transition-all duration-300"
                            >
                                OEFENTOETS {">"}
                            </a>
                        </div>

                        {/* Theorie Section */}
                        {/* Desktop View */}
                        {groupedLessons[selectedLesson]?.theoryAvailable && pdfUrl && (
                            <div className="md:flex hidden flex-wrap justify-center bg-[#6494ED] p-6 rounded-lg">
                                <h2 className="text-2xl font-bold text-white mb-4">Theorie</h2>

                                <iframe
                                    src={pdfUrl}
                                    type="application/pdf"
                                    className="w-full h-[500px] md:h-[700px] rounded-lg border hidden md:block"
                                />
                            </div>
                        )}

                        {/* Mobile View */}
                        {groupedLessons[selectedLesson]?.theoryAvailable && pdfUrl && (
                            <div className="md:hidden bg-[#6494ED] p-6 rounded-lg">
                                <div className="md:hidden ">
                                    <a
                                        href={pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center text-[#CCE6FE] px-6 py-4 cursor-pointer rounded-lg font-bold transition-all duration-300"
                                    >
                                        Bekijk Theorie (PDF)
                                    </a>
                                </div>
                            </div>
                        )}

                        {!pdfUrl && groupedLessons[selectedLesson]?.theoryAvailable && (
                            <p className="text-gray-600">Laden van theorie...</p>
                        )}

                    </>
                ) : (
                    <p className="text-lg text-gray-600">Selecteer een les om te beginnen.</p>
                )}
            </div>
        </div>
    );
}

export default Leerstof;