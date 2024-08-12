/*
* App ID: 494575190182806
* App Secret: 55268f8aa1230a045f02d7bb7006591e
* Token: IGQWROS0EzdjNUSGlUX1dBRDJDaC1oSXZAvZA3dwNHdlTkU2eFVRenNTem1fUGh6Q0FBM2RGN0h0SzFLbFZASZAE9IUzhHT1ZA0UGN3Y29kck1KYjY1VTYxaVB1ZAnY4aDBTTXpETzZA5WkdoMmhZAN1lyakpyTHdfYlF5d3cZD
* */

import copertina from '../assets/immagineSocieta.jpg';
import logo from '../assets/LogoVBC_White.png'; // Assicurati di avere il logo in questa directory

import {Link} from "react-router-dom";
import InstagramFeed from "./InstagramFeed.jsx";
import img_direttivo from "../assets/img_direttivo_page/direttivo.png";
const Home = () => {
    return (
        <>
            <section className="relative h-screen bg-cover bg-center pt-24"
                     style={{backgroundImage: `url(${copertina})`}}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
                    <img className="h-1/4 w-auto rounded-lg" src={logo} alt="Logo"/>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-4">Benvenuti!</h1>
                    <p className="text-lg md:text-2xl mb-6">
                        Unisciti a noi per vivere la passione per la pallavolo
                    </p>
                    <Link to="/contatti"
                          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
                        Unisciti a Noi
                    </Link>
                </div>
            </section>
            <InstagramFeed/>
        </>


    );
};

export default Home;