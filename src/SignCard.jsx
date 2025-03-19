import {Link} from "react-router";

function SignCard({ sign }) {
    return (
    <Link  to={`/signs/${sign.id}`} className="block bg-white rounded-lg p-6 h-48  hover:shadow-2xl transition-all duration-300">
        <div className="bg-white rounded-lg px-3 py-6">

            {/* Sign name */}
            <h2 className="text-2xl font-semibold font-kulim text-brown-800 text-center">{sign.translation}</h2>
        </div>

        <div className="text-blue-500 text-center cursor-pointer mt-2 font-kulim">
            <span>Bekijk het gebaar</span>
        </div>
    </Link>
    );
}

export default SignCard;
