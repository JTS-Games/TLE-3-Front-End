import React, { useState, useEffect } from 'react';
import {useParams} from "react-router";

function Lesson() {
    function handleBackButton() {
        alert('You clicked me!');
    }

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
        const response = await fetch(`http://145.24.223.113:8000/signs/${params.id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setSign(data);
        console.log(data);
    }

    //Handles button
    async function handleSubmitButton(event) {
        event.preventDefault();
        if(formData.answer.toLowerCase() === sign.translation.toLowerCase()) {
            console.log("correct")
            console.log(sign.translation);
            console.log(formData.answer);
            correctAnswer()

        } else {
            console.log("incorrect")
            console.log(sign.translation);
            console.log(formData.answer);
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
            <section className="flex items-center justify-between p-10">
                <div>
                    <button onClick={handleBackButton} className="w-10 h-10 mx-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-10">
                            <path d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                </div>
                <div className="flex w-full flex-col gap-4">
                    <progress className="drop-shadow-md rounded-full h-14" value={0}/>
                </div>
            </section>
            <section>
                <div className="flex items-center justify-center p-10">
                    <img className="max-w-3xl" src={sign.gif}></img>
                </div>
            </section>
            <section>
                <form className="flex items-center justify-center p-10 gap-44 mt-14 sticky">
                    <div>
                        <input className="drop-shadow-md bg-button py-10 px-80 rounded-full" value={formData.answer}
                               type="text" id="answer"
                               name="answer" required onChange={handleInputChange}
                               placeholder="voer hier uw antwoord in"></input>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmitButton}
                                className="drop-shadow-md bg-correct py-10 px-32 rounded-full">Check
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
                                <button className="drop-shadow-md bg-correct py-10 px-32 rounded-full">Ga naar woordenboek</button>
                            </div>
                            <div>
                                <button className="drop-shadow-md bg-button py-10 px-32 rounded-full">Volgende vraag
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

export default Lesson;