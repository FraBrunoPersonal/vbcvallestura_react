import copertina from '../assets/immagineSocieta.jpg';
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <>
            <section className="relative h-screen bg-cover bg-center pt-24"
                     style={{backgroundImage: `url(${copertina})`}}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Benvenuti nel Mondo della V.B.C. Valle Stura</h1>
                    <p className="text-lg md:text-2xl mb-6">Unisciti a noi per vivere la passione e l'emozione del
                        volley
                    </p>
                    <Link to="/contatti"
                       className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">Unisciti
                        a Noi</Link>
                </div>
            </section>
            <div className="container mx-auto px-16 py-40 overflow-x-hidden overflow-y-auto">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">BOOOH</h1>
            </div>
        </>


    );
};

export default Home;