import img_direttivo from "../assets/img_direttivo_page/direttivo.jpg";

import presidentImg from '../assets/img_direttivo_page/BrunoClaudio.png';
import vicePresidentImg from '../assets/img_direttivo_page/FiliputtiCarola.png';
import secretaryImg from '../assets/img_direttivo_page/BrunoValter.png';
import consigliere1Img from '../assets/img_direttivo_page/PepinoAnita.png';
import consigliere2Img from '../assets/img_direttivo_page/BrocchieroMario.png';
import consigliere3Img from '../assets/img_direttivo_page/BrunoFrancesco.png';
import consigliere4Img from '../assets/img_direttivo_page/FaggioCristian.png';

const members = [
    { role: 'Presidente', name: 'Claudio Bruno', imgSrc: presidentImg },
    { role: 'Vice Presidente', name: 'Carola Filiputti', imgSrc: vicePresidentImg },
    { role: 'Segretario', name: 'Valter Bruno', imgSrc: secretaryImg },
    { role: 'Consigliere', name: 'Anita Pepino', imgSrc: consigliere1Img },
    { role: 'Consigliere', name: 'Mario Brocchiero', imgSrc: consigliere2Img },
    { role: 'Consigliere', name: 'Francesco Bruno', imgSrc: consigliere3Img },
    { role: 'Consigliere', name: 'Cristian Faggio', imgSrc: consigliere4Img },
];

const Direttivo = () => {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-20 lg:py-40 overflow-x-hidden overflow-y-auto">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-800">Direttivo</h1>

                <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                    <figure className="w-full max-w-lg">
                        <img className="h-auto w-full rounded-lg" src={img_direttivo}
                             alt="Fondatori della V.B.C. Valle Stura"/>
                        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                            Direttivo della V.B.C. Valle Stura
                        </figcaption>
                    </figure>
                </div>

                <div className="grid gap-4 sm:gap-6 lg:gap-8">
                    {/* Presidente */}
                    <div className="flex justify-center">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
                            <img className="w-full h-48 object-cover object-top" src={members[0].imgSrc} alt={members[0].name}/>
                            <div className="p-4 text-center">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">{members[0].name}</h2>
                                <p className="text-gray-700">{members[0].role}</p>
                            </div>
                        </div>
                    </div>
                    {/* Vice Presidente e Segretario */}
                    <div className="flex flex-col sm:flex-row justify-center">
                        {members.slice(1, 3).map((member, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm mx-0 sm:mx-2 mb-4 sm:mb-0">
                                <img className="w-full h-48 object-cover object-top" src={member.imgSrc} alt={member.name}/>
                                <div className="p-4 text-center">
                                    <h2 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h2>
                                    <p className="text-gray-700">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Consiglieri */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {members.slice(3).map((member, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
                                <img className="w-full h-48 object-cover object-top" src={member.imgSrc} alt={member.name}/>
                                <div className="p-4 text-center">
                                    <h2 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h2>
                                    <p className="text-gray-700">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Direttivo;
