function PlaylistView() {
    return (
        <>
            <div className='flex items-center ml-[5vw] text-3xl font-bold mb-[2vw]'>
                <h1>Naam Playlist (les ...)</h1>
                <button className='flex justify-center items-center w-[4vw] h-[4vw]  rounded-full bg-green-400 ml-[1vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white"  color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[2vw] pl-[0.15vw]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-[5vw]">
                {/* Playlist Item */}
                <div className='bg-white rounded-lg shadow-md p-8 flex flex-col '>
                    <div className='flex items-center justify-center'>


                        <div className='flex gap-[0.5vw] '>
                            <p className='font-bold text-lg'>Gebaar naam</p>
                            <p className='text-lg'>(les ...)</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 mt-6'>
                        <button className='flex-1 py-2 px-4 rounded-full bg-correct text-center text-lg'>
                            Bekijk in woordenboek
                        </button>
                        <button className='flex-1 py-2 px-4 rounded-full bg-incorrect text-center text-lg'>
                           Verwijder uit playlist
                        </button>
                    </div>
                </div>

                {/* Hier kun je extra playlists mappen als je dynamische data toevoegt */}
            </div>
        </>
    );
}

export default PlaylistView;
