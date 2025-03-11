import React, { useState, useEffect } from 'react';
import {useParams} from "react-router";

function Lesson() {

    function handleBackButton() {
        setIsCorrect(false);
        setIsIncorrect(false);
    }

    function handleHintButton(event) {
        event.preventDefault();
        setIsHint(!isHint);
        console.log(isHint);
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

    const params=useParams();

    const [sign, setSign] = useState([]);

    //loads data
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(`http://145.24.223.113:8000/signs/filtered?lesson=${params.id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setSign(data);
    }


    //Handles button
    async function handleSubmitButton(event) {
        event.preventDefault();
        console.log(sign)
        if(formData.answer.toLowerCase() === sign.translation.toLowerCase()) {
            // console.log("correct")
            // console.log(sign.translation);
            // console.log(formData.answer);
            correctAnswer()
        } else {
            // console.log("incorrect")
            // console.log(sign.translation);
            // console.log(formData.answer);
            incorrectAnswer()
        }
    }

    const [isCorrect, setIsCorrect] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);

    function correctAnswer() {
        setIsCorrect(true);
    }

    function incorrectAnswer() {
        setIsIncorrect(true);
    }

    return (
        <main>
            <section className="flex items-center p-10">
                <div>
                    <button onClick={handleBackButton} className="w-10 h-10 mx-0 lg:mx-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-10">
                            <path d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                </div>
                <div className="flex w-[80%] ml-4 lg:ml-20 flex-col gap-4">
                    <progress className="drop-shadow-md bg-offwhite rounded-full h-14" value={0.2}/>
                </div>
            </section>
            <section>
                <div className="flex justify-center p-10 gap-10">
                    {isHint && (
                        <div className="flex w-[30%] justify-between max-h-[40vh] py-48 px-32 bg-button rounded-[50px] text-4xl">
                            <div className="flex flex-col">
                                <div>
                                    <p>Omschrijving:</p>
                                </div>
                                <div>
                                    <p>{sign.explanation}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
                        <img alt="gebaar" className="max-h-[40vh] rounded-[50px]" src={sign.gif}></img>
                    </div>
                </div>
            </section>
            <section>
                <form className="flex items-center justify-center p-10 lg:gap-44 gap-10 mt-0 lg:mt-14 sticky flex-col lg:flex-row">
                    <div>
                        <input className="drop-shadow-md bg-button py-24 lg:py-10 px-5 lg:px-80 rounded-[50px] lg:rounded-full" value={formData.answer}
                               type="text" id="answer"
                               name="answer" required onChange={handleInputChange}
                               placeholder="voer hier uw antwoord in"></input>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmitButton}
                                className="drop-shadow-md bg-correct py-10 px-28 lg:px-32 rounded-full">Check
                        </button>
                    </div>
                </form>
            </section>
            {isCorrect && (
                <section className="flex sticky bottom-0 w-[100%] justify-center">
                    <div className="flex w-[100%] justify-between py-24 px-32 bg-correct rounded-t-[100px]">
                        <div className="flex items-center">
                            <p className="text-8xl">Correct!</p>
                        </div>
                        <div className="flex items-center">
                            <p>Dit gebaar betekent inderdaad {sign.translation}</p>
                        </div>
                        <div>
                            <button className="drop-shadow-md bg-button py-10 px-32 rounded-full">Volgende vraag</button>
                        </div>
                    </div>
                </section>
            )}
            {isIncorrect && (
                <section className="flex sticky bottom-0 w-[100%] justify-center">
                    <div className="flex w-[100%] justify-between py-24 px-32 bg-incorrect rounded-t-[100px]">
                        <div className="flex items-center text-white">
                            <p className="text-8xl">Incorrect</p>
                        </div>
                        <div className="flex items-center gap-10">
                            <div className="flex items-center">
                                <button onClick={handleHintButton} className="drop-shadow-md bg-correct py-10 px-32 rounded-full">Laat antwoord zien</button>
                            </div>
                            <div>
                                <button className="drop-shadow-md bg-button py-10 px-32 rounded-full">Volgende vraag </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

export default Lesson;