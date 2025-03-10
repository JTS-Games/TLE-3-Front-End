function Playlists (){
    return (
        <>
            <div className='flex ml-[5vw] text-3xl font-bold mb-[2vw]'>
                <h1>Mijn playlists</h1>
            </div>

                <div className='flex items-center justify-between bg-white w-[90vw] mr-[5vw] ml-[5vw] rounded-lg shadow-md h-[7.5vw] mb-[1.25vw]'>

                    <div className='flex'>
                        <button className='flex justify-center items-center w-[4vw] h-[4vw]  rounded-full bg-green-400 ml-[3vw]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white"  color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[2vw] pl-[0.15vw]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </button>

                        <p className='ml-[2vw] flex justify-center items-center font-bold'>Playlist 1</p>
                        <p className='pl-[0.5vw] flex justify-center items-center'>(12 gebaren)</p>
                    </div>
                    <div className='flex gap-[2vw] mr-[3vw]'>
                        <button className='flex justify-center items-center py-3 px-6  rounded-full bg-correct '>
                            <p>Gebaren toevoegen</p>
                        </button>
                        <button className='flex justify-center items-center py-3 px-6  rounded-full bg-incorrect '>
                            <p>Playlist verwijderen</p>
                        </button>
                    </div>




                </div>

            <div className='flex items-center justify-between bg-white w-[90vw] mr-[5vw] ml-[5vw] rounded-lg shadow-md h-[7.5vw] mb-[1.25vw]'>

                <div className='flex'>
                    <button className='flex justify-center items-center w-[4vw] h-[4vw]  rounded-full bg-green-400 ml-[3vw]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white"  color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[2vw] pl-[0.15vw]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                    </button>

                    <p className='ml-[2vw] flex justify-center items-center font-bold'>Playlist 2</p>
                    <p className='pl-[0.5vw] flex justify-center items-center'>(16 gebaren)</p>
                </div>
                <div className='flex gap-[2vw] mr-[3vw]'>
                    <button className='flex justify-center items-center py-3 px-6  rounded-full bg-correct '>
                        <p>Gebaren toevoegen</p>
                    </button>
                    <button className='flex justify-center items-center py-3 px-6  rounded-full bg-incorrect '>
                        <p>Playlist verwijderen</p>
                    </button>
                </div>




            </div>

            <div className='flex items-center justify-between bg-white w-[90vw] mr-[5vw] ml-[5vw] rounded-lg shadow-md h-[7.5vw] mb-[1.25vw]'>

                <div className='flex'>
                    <button className='flex justify-center items-center w-[4vw] h-[4vw]  rounded-full bg-green-400 ml-[3vw]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white"  color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[2vw] pl-[0.15vw]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                    </button>

                    <p className='ml-[2vw] flex justify-center items-center font-bold'>Playlist 3</p>
                    <p className='pl-[0.5vw] flex justify-center items-center'>(12 gebaren)</p>
                </div>
                <div className='flex gap-[2vw] mr-[3vw]'>
                    <button className='flex justify-center items-center py-3 px-6  rounded-full bg-correct '>
                        <p>Gebaren toevoegen</p>
                    </button>
                    <button className='flex justify-center items-center py-3 px-6  rounded-full bg-incorrect '>
                        <p>Playlist verwijderen</p>
                    </button>
                </div>




            </div>





        </>

    )
}




export default Playlists