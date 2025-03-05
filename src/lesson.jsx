function lesson() {
    return (
        <main>
            <div className="flex items-center justify-between p-10">
                <div>
                    <button className="w-10 h-10 mx-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-10">
                            <path strokelinecap="round" strokelinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                </div>
                <div className="flex w-full flex-col gap-4">
                    <progress className="rounded-full h-14" value={0.3}/>
                </div>
            </div>
        </main>
    );
}

export default lesson;