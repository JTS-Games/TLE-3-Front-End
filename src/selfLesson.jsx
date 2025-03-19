import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router";


function SelfLesson() {
    const navigate = useNavigate();
    const params = useParams();
    const [signs, setSigns] = useState([]);
    const [sign, setSign] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isStartPopup, setIsStartPopup] = useState(true);
    const [isEndPopup, setIsEndPopup] = useState(false);
    const [isProgressBar, setIsProgressBar] = useState(false);
    const [isExtraButton, setIsExtraButton] = useState(false);
    const [signNumber, setSignNumber] = useState([]);
    const [originalSignNumber, setOriginalSignNumber] = useState([]);

    function handleBackButton() {
        navigate('/');
    }

    function handleHintButton(event) {
        event.preventDefault();
        setIsHint(!isHint);
        console.log(isHint);
        setIsExtraButton(true);
    }

    const [isHint, setIsHint] = useState(false);

    const [formData, setFormData] = useState({
        answer: '',
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //loads data
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(`http://145.24.223.113:8000/signs/filtered?lesson=${params.id}&method=SHUFFLE`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2RhYTAxZDVmN2I5NzgyMjU1MDgzMTEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDIzODEwODUsImV4cCI6MTc0MjM5OTA4NX0._jTa3ykJUnoyxU6R0APqXIkJG3M-q65V2dP5xYG9CZE`},
        });
        const data = await response.json();
        setSigns(data);
        setOriginalSignNumber(data.items.length);
    }

    //Handles button
    async function handleSubmitButton(event) {
        event.preventDefault();
        if (formData.answer.toLowerCase() === sign.translation.toLowerCase()) {
            correctAnswer()
        } else {
            incorrectAnswer()
        }
    }
    async function handleCorrectButton(event) {
        event.preventDefault();
        correctAnswer()
    }

    async function handleIncorrectButton(event) {
        event.preventDefault();
        incorrectAnswer()
    }

    function questionList() {
        if (signs.items.length > 0) {
            console.log(signs.items[0]);
            setSign(signs.items[0]);
            setSignNumber(signs.items.length)
            signs.items.shift()
        } else {
            setIsEndPopup(true);
        }
    }

    function correctAnswer() {
        setIsCorrect(true);
    }

    function incorrectAnswer() {
        setIsIncorrect(true);
    }

    function handleNextButton() {
        setIsCorrect(false);
        setIsIncorrect(false);
        setIsHint(false);
        setIsExtraButton(false);
        formData.answer=""
            questionList()
    }

    function handlePopupButton() {
        setIsStartPopup(false);
        setIsProgressBar(true);
        questionList()
    }

    return (
        <main>
                {isStartPopup && (
                    <section className="flex flex-col w-[100%] h-screen bg-background justify-center items-center">
                        <div>
                            <h1 className="text-4xl pb-40">Doe de gebaren van les {params.id} zelf na.</h1>
                        </div>
                        <div>
                            <button onClick={handlePopupButton}
                                    className="drop-shadow-md bg-button h-22 py-8 px-32 rounded-full">Start les
                            </button>
                        </div>
                    </section>
                )}
            {isEndPopup && (
                <section className="flex flex-col w-[100%] h-screen bg-background justify-center items-center">
                    <div>
                        <h1 className="text-4xl pb-40">Je hebt les {params.id} gehaald!</h1>
                    </div>
                    <div>
                        <button onClick={handleBackButton}
                                className="drop-shadow-md bg-correct h-22 py-8 px-32 rounded-full">Terug naar lesoverzicht
                        </button>
                    </div>
                </section>
            )}
            {isProgressBar && (
                <section className="flex items-center p-10">
                    <div>
                        <button onClick={handleBackButton} className="w-10 h-10 mx-0 lg:mx-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="size-10">
                                <path d="M15.75 19.5 8.25 12l7.5-7.5"/>
                            </svg>
                        </button>
                    </div>
                    {/* Old progress bar*/}
                    {/*<div className="flex w-[80%] ml-4 lg:ml-20 flex-col gap-4">*/}
                    {/*    <progress className="drop-shadow-md bg-offwhite rounded-full h-12"*/}
                    {/*              value={(originalSignNumber - signNumber) / originalSignNumber} onChange={handleInputChange}/>*/}
                    {/*</div>*/}
                    <div className="flex w-[80%] ml-4 lg:ml-20 flex-col gap-4">
                        <progress
                            className="drop-shadow-md bg-offwhite rounded-full h-12 w-full"
                            value={(originalSignNumber - signNumber) / originalSignNumber}
                            max="1"
                            style={{
                                WebkitAppearance: "none",
                                appearance: "none",
                            }}
                        />
                        <style>
                            {`
      progress::-webkit-progress-bar {
        background-color: #f8f8f8;
        border-radius: 100px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      }
      progress::-webkit-progress-value {
        background-color: #4CAF50;
        border-radius: 100px;
      }
    `}
                        </style>
                    </div>
                    <div className="flex items-center justify-center px-10">
                        <p> {(originalSignNumber - signNumber)} / {originalSignNumber}</p>
                    </div>
                </section>
            )}
            <section>
                <div className="flex flex-col lg:flex-row justify-center p-10 gap-10">
                    {isHint && (
                        <div>
                            <div>
                                <img alt="gebaar" className="h-[36vh] rounded-[50px]" src={sign.gif}></img>
                            </div>
                        </div>
                    )}
                    <div className="text-6xl">
                        <p>{sign.translation}</p>
                    </div>
                </div>
            </section>
            {isProgressBar && (
            <section>
                <form
                    className="flex items-center justify-center p-10 lg:gap-[5%] gap-10 mt-10 lg:mt-10 sticky flex-col pb-96">
                    {!isExtraButton && (
                        <div className="text-3xl pb-10">
                            <p>Doe dit woord na in gebarentaal</p>
                        </div>
                    )}
                    {isExtraButton &&(
                        <div className="text-3xl pb-10">
                            <p>Heb je dit gebaar correct nagedaan?</p>
                        </div>
                    )}
                    {!isHint && (
                        <div className="flex items-center py-10">
                            <button onClick={handleHintButton}
                                    className="drop-shadow-md bg-button  py-8 px-32 rounded-full">Laat video zien
                            </button>
                        </div>
                    )}


                    {isExtraButton && (
                        <div className="flex items-center justify-center px-10 flex-row gap-10">
                            <div>
                                <button type="submit" onClick={handleIncorrectButton}
                                        className="drop-shadow-md bg-incorrect py-8 px-28 rounded-full text-white">Ik doe dit gebaar incorrect
                                </button>
                            </div>
                            <div>
                                <button type="submit" onClick={handleCorrectButton}
                                        className="drop-shadow-md bg-correct py-8 px-28 rounded-full">Ik doe dit gebaar correct
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </section>
            )}
            {isCorrect && (
                <section className="flex sticky bottom-0 w-[100%] justify-center">
                    <div
                        className="flex flex-col gap-10 lg:flex-row w-[100%] justify-between py-16 px-32 bg-correct rounded-t-[50px]">
                        <div className="flex items-center">
                            <p className="text-4xl lg:text-6xl">Correct!</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div>
                                <button onClick={handleNextButton}
                                        className="drop-shadow-md bg-button py-8 px-32 rounded-full">Volgende vraag
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {isIncorrect && (
                <section className="flex sticky bottom-0 w-[100%] justify-center">
                    <div
                        className="flex flex-col gap-10 lg:flex-row w-[100%] justify-between py-16 px-32 bg-incorrect rounded-t-[50px]">
                        <div className="flex items-center text-white">
                            <p className="text-4xl lg:text-6xl">Incorrect</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div>
                                <button onClick={handleNextButton}
                                        className="drop-shadow-md bg-button py-8 px-32 rounded-full">Volgende vraag
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

export default SelfLesson;