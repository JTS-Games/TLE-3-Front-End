import { useState, useEffect } from "react";
import { Link } from "react-router"; // Gebruik Link voor navigatie

function Playlists() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Q5M2Y4OGQ0ZGJhMzVhM2NiZTZlMjQiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc0MjI5MDgyNCwiZXhwIjoxNzQyMzA4ODI0fQ.zcsYolAWYmuJFFvAX2GLy8IUKZIGf7KhmMgyUJTSHTU";

        fetch("http://145.24.223.113:8000/playlist", {
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
                console.log("Fetched data:", data);
                setData(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <div className='flex ml-[5vw] text-3xl font-bold mb-[2vw]'>
                <h1>Mijn playlists</h1>
            </div>

            {data.length === 0 ? (
                <p className="text-center text-gray-500">Geen playlists gevonden.</p>
            ) : (
                data.map((playlist, index) => (
                    <div key={index} className='flex items-center justify-between bg-white w-[90vw] mr-[5vw] ml-[5vw] rounded-lg shadow-md h-[7.5vw] mb-[1.25vw]'>
                        <div className='flex'>
                            <button className='flex justify-center items-center w-[4vw] h-[4vw] rounded-full bg-green-400 ml-[3vw]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[2vw] pl-[0.15vw]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            </button>

                            {/* Gebruik <Link> om te navigeren naar de PlaylistView */}
                            <Link to={`/playlist/${playlist.id}`} className="ml-[2vw] flex justify-center items-center font-bold text-blue-500 hover:underline">
                                {playlist.naam}
                            </Link>

                            <p className='pl-[0.5vw] flex justify-center items-center text-sm'>(
                                {playlist.gestureCount ? playlist.gestureCount : 0} gebaren)
                            </p>
                        </div>
                        <div className='flex gap-[2vw] mr-[3vw]'>
                            <button className='flex justify-center items-center py-3 px-6 rounded-full bg-correct'>
                                <p className=" text-sm">Gebaren toevoegen</p>
                            </button>
                            <button className='flex justify-center items-center py-3 px-6 rounded-full bg-incorrect'>
                                <p className="text-sm">Playlist verwijderen</p>
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default Playlists;
