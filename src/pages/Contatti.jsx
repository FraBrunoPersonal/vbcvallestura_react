import { FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import {SiGooglemaps} from "react-icons/si";

const Contatti = () => {
    return (
        <div className="container mx-auto px-16 py-40">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Contatti</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">V.B.C. Valle Stura</h2>
                    <p className="mb-2 flex items-center">
                        <FaEnvelope className="mr-2 text-blue-500"/>
                        <a href="mailto:info@vbcvallestura.it"
                           className="text-blue-600 hover:underline">info@vbcvallestura.it</a>
                    </p>
                    <p className="mb-2 flex items-center">
                        <FaInstagram className="mr-2 text-pink-500"/>
                        <a href="https://www.instagram.com/vbcvallestura" target="_blank"
                           className="text-pink-600 hover:underline">@vbcvallestura</a>
                    </p>

                    <p className="mb-2 flex items-center">
                        <FaFacebook className="mr-2 text-blue-700"/>
                        <a href="https://www.facebook.com/profile.php?id=100095199594971" target="_blank"
                           className="text-blue-700 hover:underline">@VBC Valle Stura</a>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">Stra Val Esturo</h2>
                    <p className="mb-2 flex items-center">
                        <FaEnvelope className="mr-2 text-blue-500"/>
                        <a href="mailto:iscrizione.stravalesturo@gmail.com" target="_blank"
                           className="text-blue-600 hover:underline">iscrizione.stravalesturo@gmail.com</a>
                    </p>
                    <p className="mb-2 flex items-center">
                        <FaInstagram className="mr-2 text-pink-500"/>
                        <a href="https://www.instagram.com/stravalesturo_demonte" target="_blank"
                           className="text-pink-600 hover:underline">@stravalesturo_demonte</a>
                    </p>
                    <p className="mb-2 flex items-center">
                        <FaFacebook className="mr-2 text-blue-700"/>
                        <a href="https://www.facebook.com/stra.valesturo.30ore" target="_blank"
                           className="text-blue-700 hover:underline">@stra.valesturo.30ore</a>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">Dove siamo</h2>
                    <p className="mb-2 flex items-center">
                        <SiGooglemaps className="mr-2 text-green-700"/>
                        <a href="https://maps.app.goo.gl/SiTS5Ndy8MHejjcj7" target="_blank"
                           className="text-green-700 hover:underline">Via Paschero 7, Demonte, Cuneo, 12014, Italia</a>
                    </p>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.4660581579245!2d7.304452515488098!3d44.34796437910342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a1797db2b3e1d%3A0x509c5f9e9a2f58bc!2sVia%20Paschero%2C%207%2C%2012014%20Demonte%20CN%2C%20Italy!5e0!3m2!1sen!2sus!4v1594749480192!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className="border rounded"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contatti;