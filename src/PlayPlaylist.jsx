import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router";

function Playlist() {
    const navigate = useNavigate();
    const { id } = useParams();

    // In plaats van "signs", laden we de playlist (die een array gebaren bevat)
    const [playlist, setPlaylist] = useState(null);
    const [sign, setSign] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isStartPopup, setIsStartPopup] = useState(true);
    const [isEndPopup, setIsEndPopup] = useState(false);
    const [isProgressBar, setIsProgressBar] = useState(false);
    const [isHint, setIsHint] = useState(false);

    const [formData, setFormData] = useState({ answer: '' });

    // Deze variabelen helpen bij de progress-tracking
    const [signNumber, setSignNumber] = useState(0);
    const [originalSignNumber, setOriginalSignNumber] = useState(0);

    const navigateBack = () => {
        navigate('/');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Laad de playlist met alle gebaren
    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhYjAxNTVmN2I5NzgyMjU1MDg0MTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDIzODUxNzMsImV4cCI6MTc0MjQwMzE3M30.xZWGo1-_PRWmbOleHMeWu0trg3V4-6rrFVttSJXrZJY"; // Vervang dit door je token
        fetch(`http://145.24.223.113:8000/playlist/${id}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched playlist data:", data);
                setPlaylist(data);
                setOriginalSignNumber(data.gebaren.length);
            })
            .catch(error => {
                console.error("Error fetching playlist:", error);
            });
    }, [id]);

    // Vraagt het volgende gebaar op
    const questionList = () => {
        if (playlist && playlist.gebaren.length > 0) {
            // Neem het eerste gebaar en update de state
            setSign(playlist.gebaren[0]);
            setSignNumber(playlist.gebaren.length);
            // Verwijder het eerste gebaar zodat bij de volgende vraag het volgende gebaar komt
            playlist.gebaren.shift();
        } else {
            setIsEndPopup(true);
        }
    };

    const handleSubmitButton = (event) => {
        event.preventDefault();
        if (sign && formData.answer.toLowerCase() === sign.translation.toLowerCase()) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    };

    const correctAnswer = () => {
        setIsCorrect(true);
    };

    const incorrectAnswer = () => {
        setIsIncorrect(true);
    };

    const handleNextButton = () => {
        setIsCorrect(false);
        setIsIncorrect(false);
        setIsHint(false);
        setFormData({ answer: '' });
        questionList();
    };

    const handlePopupButton = () => {
        setIsStartPopup(false);
        setIsProgressBar(true);
        questionList();
    };

    const handleHintButton = () => {
        setIsHint(!isHint);
    };

    return (
        <main>
            {isStartPopup && (
                <section className="flex flex-col w-full h-screen bg-background justify-center items-center">
                    <div>
                        <h1 className="text-4xl pb-40">Leer de gebaren van playlist {id}.</h1>
                    </div>
                    <div>
                        <button onClick={handlePopupButton} className="drop-shadow-md bg-button h-22 py-8 px-32 rounded-full">
                            Start playlist
                        </button>
                    </div>
                </section>
            )}
            {isEndPopup && (
                <section className="flex flex-col w-full h-screen bg-background justify-center items-center">
                    <div>
                        <h1 className="text-4xl pb-40">Je hebt alle gebaren van playlist {id} afgerond!</h1>
                    </div>
                    <div>
                        <button onClick={navigateBack} className="drop-shadow-md bg-correct h-22 py-8 px-32 rounded-full">
                            Terug naar overzicht
                        </button>
                    </div>
                </section>
            )}
            {isProgressBar && (
                <section className="flex items-center p-10">
                    <div>
                        <button onClick={navigateBack} className="w-10 h-10 mx-0 lg:mx-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex w-4/5 ml-4 lg:ml-20 flex-col gap-4">
                        <progress className="drop-shadow-md bg-offwhite rounded-full h-12 w-full"
                                  value={(originalSignNumber - signNumber) / originalSignNumber} max="1"
                                  style={{ WebkitAppearance: "none", appearance: "none" }} />
                        <style>{`
              progress::-webkit-progress-bar {
                background-color: #f8f8f8;
                border-radius: 100px;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
              }
              progress::-webkit-progress-value {
                background-color: #4CAF50;
                border-radius: 100px;
              }
            `}</style>
                    </div>
                    <div className="flex items-center justify-center px-10">
                        <p>{(originalSignNumber - signNumber)} / {originalSignNumber}</p>
                    </div>
                </section>
            )}
            <section>
                <div className="flex flex-col lg:flex-row justify-center p-10 gap-10">
                    {isHint && sign && (
                        <div className="flex max-h-[40vh] py-16 px-16 bg-button rounded-[50px] text-4xl">
                            <div className="flex flex-col">
                                <div>
                                    <p><b>Vertaling:</b></p>
                                </div>
                                <div>
                                    <p>{sign.translation}</p>
                                </div>
                                <div>
                                    <p><b>Omschrijving:</b></p>
                                </div>
                                <div>
                                    <p>{sign.explanation}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
                        {sign && <img alt="gebaar" className="h-[36vh] rounded-[50px]" src={sign.gif} /> }
                    </div>
                </div>
            </section>
            {isProgressBar && (
                <section>
                    <form className="flex items-center justify-center p-10 lg:gap-[5%] gap-10 mt-0 lg:mt-10 sticky flex-col lg:flex-row"
                          onSubmit={handleSubmitButton}>
                        <div>
                            <input
                                className="drop-shadow-md bg-button py-24 lg:py-8 px-[15vw] rounded-[50px] lg:rounded-full"
                                value={formData.answer}
                                type="text"
                                id="answer"
                                name="answer"
                                required
                                onChange={handleInputChange}
                                placeholder="voer hier uw antwoord in" />
                        </div>
                        <div>
                            <button type="submit" className="drop-shadow-md bg-correct py-8 px-28 lg:px-32 rounded-full">
                                Check
                            </button>
                        </div>
                    </form>
                </section>
            )}
            {isCorrect && (
                <section className="flex sticky bottom-0 w-full justify-center">
                    <div className="flex flex-col lg:flex-row w-full justify-between gap-10 py-16 px-32 bg-correct rounded-t-[50px]">
                        <div className="flex items-center">
                            <p className="text-4xl lg:text-6xl">Correct!</p>
                        </div>
                        <div className="flex items-center w-1/2">
                            <p>Dit gebaar betekent inderdaad {sign && sign.translation}</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={handleNextButton} className="flex items-center drop-shadow-md bg-button py-8 px-16 lg:px-32 rounded-full">
                                Volgende vraag
                            </button>
                        </div>
                    </div>
                </section>
            )}
            {isIncorrect && (
                <section className="flex sticky bottom-0 w-full justify-center">
                    <div className="flex flex-col gap-10 lg:flex-row w-full justify-between py-16 px-32 bg-incorrect rounded-t-[50px]">
                        <div className="flex items-center text-white">
                            <p className="text-4xl lg:text-6xl">Incorrect</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div className="flex items-center">
                                <button onClick={handleHintButton} className="drop-shadow-md bg-correct py-8 px-32 rounded-full">
                                    Laat antwoord zien
                                </button>
                            </div>
                            <div>
                                <button onClick={handleNextButton} className="drop-shadow-md bg-button py-8 px-32 rounded-full">
                                    Volgende vraag
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

export default Playlist;
