import { Link, useParams, useNavigate} from "react-router";
import { useEffect, useState } from "react";


function SignDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [sign, setSign] = useState(null);

    async function loadData() {
        try {
            const response = await fetch(`http://145.24.223.113:8000/signs/${id}`, {
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            setSign(data);
        } catch (error) {
            console.error('Error occurred ', error);
            navigate("/404");
        }
    }

    useEffect(() => {
        loadData();
    }, [id]);

    return (
        <main className="min-h-screen bg-background py-5 flex flex-col items-center">
            <button
                onClick={() => navigate(-1)}
                className="self-start ml-5 mb-5 p-2 text-lg text-brown-700 bg-transparent border-0 hover:text-brown-900 focus:outline-none"
            >
                {"<"} Terug
            </button>
            {sign ? (
                <div className=" p-8 rounded-lg w-full sm:w-4/5 lg:w-2/3 xl:w-1/2">
                    <video
                        className="w-full rounded-lg shadow-lg mb-4"
                        controls
                    >
                        <source src={sign.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <h1 className="text-4xl text-brown-700 font-semibold font-kulim mb-4">{sign.translation}</h1>
                    <h2 className="text-xl text-brown-600 mb-6 font-kulim">{sign.explanation}</h2>
                    <div>
                        <h1 className="text-2xl font-semibold font-kulim mt-2">Handvormen:</h1>
                        <div className="flex space-x-4"> {/* Flex container with spacing between images */}
                            <img className="max-w-3xl font-kulim " src={sign.handShapesL} alt="Handvorm links" />
                            <img className="max-w-3xl font-kulim" src={sign.handShapesR} alt="Handvorm rechts" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mt-2 font-kulim">Mondvorm:</h1>
                        <img className="max-w-3xl font-kulim" src={sign.mouthShape} alt="Mondvorm"></img>
                    </div>
                </div>
            ) : (
                <div className="text-center text-brown-700 text-lg font-kulim">Gebaar is aan het laden...</div>
            )}
        </main>
    );
}

export default SignDetail;