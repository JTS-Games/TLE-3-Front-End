import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

function Playlists() {
    const [data, setData] = useState([]);
    const [playlistName, setPlaylistName] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleCreatePlaylist = () => {
        if (!playlistName.trim()) {
            alert("Voer een naam in voor de playlist!");
            return;
        }

        const token = localStorage.getItem("responseToken")

        fetch("http://145.24.223.113:8000/playlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ playlist_naam: playlistName })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(newPlaylist => {
                console.log("Playlist aangemaakt:", newPlaylist);
                setData([...data, newPlaylist]); // Nieuwe playlist toevoegen aan de lijst
                setPlaylistName(""); // Invoerveld leegmaken
                setSuccessMessage("Playlist succesvol aangemaakt! ✅");

                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000);
            })
            .catch(error => console.error("Error creating playlist:", error));
    };

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhYjAxNTVmN2I5NzgyMjU1MDg0MTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDIzODUxNzMsImV4cCI6MTc0MjQwMzE3M30.xZWGo1-_PRWmbOleHMeWu0trg3V4-6rrFVttSJXrZJY";

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

    const handleDelete = (id, name) => {
        const isConfirmed = window.confirm(`Weet je zeker dat je de playlist "${name}" wilt verwijderen?`);

        if (isConfirmed) {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhYjAxNTVmN2I5NzgyMjU1MDg0MTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDIzODUxNzMsImV4cCI6MTc0MjQwMzE3M30.xZWGo1-_PRWmbOleHMeWu0trg3V4-6rrFVttSJXrZJY";

            fetch(`http://145.24.223.113:8000/playlist/${id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    setData(data.filter(playlist => playlist.id !== id));
                })
                .catch(error => console.error("Error deleting playlist:", error));
        }
    };

    return (
        <>
            {successMessage && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition-opacity duration-500">
                    {successMessage}
                </div>
            )}
            <div className='flex justify-between ml-[5vw] mr-[5vw] text-3xl font-bold mb-[2vw]'>
                <div className="flex items-center justify-between gap-10 mt-4">
                    <h1>Playlists</h1>
                </div>
                <div className='flex gap-[1.5vw]'>
                    <input
                        type="text"
                        placeholder="Naam playlist"
                        value={playlistName}
                        onChange={(e) => setPlaylistName(e.target.value)}
                        className="border rounded-full px-2 py-1 text-lg font-normal"
                    />
                    <button
                        onClick={handleCreatePlaylist}
                        className="bg-correct px-4 py-1 rounded-full text-lg"
                    >
                        Playlist aanmaken
                    </button>
                </div>
            </div>

            {data.length === 0 ? (
                <p className="text-center text-gray-500">Geen playlists gevonden.</p>
            ) : (
                data.map((playlist, index) => (
                    <div key={index} className='flex items-center justify-between bg-white w-[90vw] mr-[5vw] ml-[5vw] rounded-lg shadow-md h-[12vh] mb-[1.25vw]'>
                        <div className='flex'>
                            <button
                                onClick={() => navigate(`/playplaylist/${playlist.id}`)}
                                className='flex justify-center items-center w-[3.5vw] h-[3.5vw] rounded-full bg-green-400 ml-[3vw] hover:bg-green-700'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" color="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[2vw] pl-[0.15vw]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            </button>

                            {/* Gebruik <Link> om te navigeren naar de PlaylistView */}
                            <Link to={`/playlist/${playlist.id}`} className="ml-[2vw] flex justify-center items-center font-bold hover:underline">
                                {playlist.naam}
                            </Link>

                            <p className='pl-[0.5vw] flex justify-center items-center text-sm'>
                                ({playlist.gebaren.length} gebaren)
                            </p>
                        </div>
                        <div className='flex gap-[2vw] mr-[3vw]'>
                            <Link to="/signBook">
                                <button className='flex justify-center items-center py-3 px-6 rounded-full bg-correct'>
                                    <p className="text-sm">Gebaren toevoegen</p>
                                </button>
                            </Link>

                            <button
                                onClick={() => handleDelete(playlist.id, playlist.naam)}
                                className='flex justify-center items-center py-3 px-6 rounded-full bg-incorrect'
                            >
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
