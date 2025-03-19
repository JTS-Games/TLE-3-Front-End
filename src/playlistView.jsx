import { useState, useEffect } from "react";
import { useParams } from "react-router";

function PlaylistView() {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhYjAxNTVmN2I5NzgyMjU1MDg0MTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDIzODUxNzMsImV4cCI6MTc0MjQwMzE3M30.xZWGo1-_PRWmbOleHMeWu0trg3V4-6rrFVttSJXrZJY";

        fetch(`http://145.24.223.113:8000/playlist/${id}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched playlist data:", data);

                if (data.gebaren && data.gebaren.length > 0) {
                    setPlaylist(data); // Zet de volledige data in playlist
                } else {
                    setPlaylist(null); // Geen gebaren beschikbaar
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching playlist:", error);
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center">Laden...</p>;
    if (error) return <p className="text-center text-red-500">Fout: {error}</p>;
    if (!playlist) return <p className="text-center text-gray-500">Geen gebaren gevonden in deze playlist.</p>;

    return (
        <div className="container mx-auto pl-4">
            <div className="flex items-center mb-[2vw]">
                <h1 className="text-3xl font-bold ">{playlist.naam} ({playlist.gebaren.length})</h1> {/* Naam van de playlist */}
                <button className='flex justify-center items-center w-[3.5vw] h-[3.5vw] rounded-full bg-green-400 ml-[1.5vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[2vw] pl-[0.15vw]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                </button>
            </div>
            {/* Itereer over elk gebaar in de playlist en maak een vakje voor elk */}
            <div className="grid  grid-cols-4 gap-[2vw] mb-[3vw]">
                {playlist.gebaren.map((gebaar, index) => (
                    <div key={index} className="flex flex-col gap-[0.7vw] items-center align-middle justify-between bg-white rounded-lg shadow-md pt-[1vw] pl-[1.5vw] pr-[1.5vw] pb-[1vw] ">
                        <h2 className="text-lg font-semibold">{gebaar.translation}</h2>
                        <p className="text-gray-600 text-sm mb-[1.5vw] text-center">{gebaar.explanation}</p>
                        <div className="flex gap-4 justify-evenly">
                            <button className='flex justify-center items-center  rounded-full bg-correct'>
                                <p className=" text-sm p-[0.6vw] text-nowrap">Bekijk in woordenboek</p>
                            </button>
                            <button className='flex justify-center items-center  rounded-full bg-incorrect'>
                                <p className=" text-sm p-[0.6vw] text-nowrap">Gebaar verwijderen</p>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlaylistView;
