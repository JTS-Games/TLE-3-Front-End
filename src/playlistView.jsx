import { useState, useEffect } from "react";
import { useParams } from "react-router";

function PlaylistView() {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Q5M2Y4OGQ0ZGJhMzVhM2NiZTZlMjQiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc0MjI5MDgyNCwiZXhwIjoxNzQyMzA4ODI0fQ.zcsYolAWYmuJFFvAX2GLy8IUKZIGf7KhmMgyUJTSHTU";

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
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{playlist.naam}</h1> {/* Naam van de playlist */}

            {/* Itereer over elk gebaar in de playlist en maak een vakje voor elk */}
            <div className="grid  grid-cols-4 gap-[2vw]">
                {playlist.gebaren.map((gebaar, index) => (
                    <div key={index} className="flex flex-col gap-[0.7vw] items-center align-middle justify-between bg-white rounded-lg shadow-md pt-[1vw] pl-[1.5vw] pr-[1.5vw] pb-[1vw] ">
                        <h2 className="text-lg font-semibold">{gebaar.translation}</h2>
                        <p className="text-gray-600 text-sm mb-2 text-center">{gebaar.explanation}</p>
                        <div className="flex gap-4 justify-evenly">
                            <button className='flex justify-center items-center  rounded-full bg-correct'>
                                <p className=" text-sm p-[0.5vw] text-nowrap">Bekijk in woordenboek</p>
                            </button>
                            <button className='flex justify-center items-center  rounded-full bg-incorrect'>
                                <p className=" text-sm p-[0.5vw] text-nowrap">Gebaar verwijderen</p>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlaylistView;
