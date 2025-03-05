function Profile() {
    return (
<>
    <div className='flex justify-center text-3xl font-bold mb-[2vw]'>
        <h1>My profile</h1>
    </div>
    <div className='flex justify-end mr-[5vw] mb-[2vw]'>
        <p>Gebruiker123</p>
    </div>
    <div className='flex flex-row justify-between'>
        <div className='bg-white w-[40vw] h-auto pt-[2vw] pb-[2vw] ml-[5vw] rounded-lg shadow-md'>
            <p className='ml-[2vw]'>Gebruikersnaam</p>

        </div>
        <div className='bg-white w-[40vw] h-auto pt-[2vw] pb-[2vw] mr-[5vw] rounded-lg shadow-md'>
            <p className='ml-[2vw]'>Gebruikersnaam 2</p>

        </div>
    </div>
</>

    )
}

export default Profile;