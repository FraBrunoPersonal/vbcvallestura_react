import img_direttivo from "../assets/img_direttivo_page/direttivo.png";

import IvanMonasterolo from '../assets/img_staffTecnico_page/NomeCognome.png';
import ValerioBruno from '../assets/img_staffTecnico_page/NomeCognome.png';
import MatteoMerana from '../assets/img_staffTecnico_page/NomeCognome.png';
import CristianFaggio from '../assets/img_staffTecnico_page/NomeCognome.png';
import UbaldoFini from '../assets/img_staffTecnico_page/NomeCognome.png';
import FrancescoBruno from '../assets/img_staffTecnico_page/NomeCognome.png';
import CarolaFiliputti from '../assets/img_staffTecnico_page/NomeCognome.png';
import FedericoObino from '../assets/img_staffTecnico_page/NomeCognome.png';


const members = [
    { role: 'Head Coach 1° Divisione Fipav', name: 'Ivan Monasterolo', imgSrc: IvanMonasterolo },
    { role: 'Head Coach Under 20 & Under 16 Femminile', name: 'Valerio Bruno', imgSrc: ValerioBruno },
    { role: 'Assistant Coach Under 20 Femminile', name: 'Matteo Merana', imgSrc: MatteoMerana },
    { role: 'Coach Under 16 Femmninile', name: 'Cristian Faggio', imgSrc: CristianFaggio },
    { role: 'Head Coach Under 14 Femminile', name: 'Ubaldo Fini', imgSrc: UbaldoFini },
    { role: 'Assistant Coach Under 14 Femminile', name: 'Francesco Bruno ', imgSrc: FrancescoBruno },
    { role: 'Head Coach Under 12 & Under 10 Mista', name: 'Carola Filiputti', imgSrc: CarolaFiliputti },
    { role: 'Assistant Coach Under 12 & Under 10 Mista', name: 'Federico Obino', imgSrc: FedericoObino },
];

const StaffTecnico = () => {
    return (
        <>
            <div className="container mx-auto lg:my-auto sm:my-auto my-10 px-4 sm:px-8 lg:px-16 py-10 sm:py-20 lg:py-40 overflow-x-hidden overflow-y-auto">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-800">Staff Tecnico</h1>

                <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                    <figure className="w-full max-w-lg">
                        <img className="h-auto w-full rounded-lg" src={img_direttivo}
                             alt="Fondatori della V.B.C. Valle Stura"/>
                        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                            Direttivo della V.B.C. Valle Stura
                        </figcaption>
                    </figure>
                </div>

                <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:my-20 md:my-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {members.map((member, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
                                <img className="w-full h-48 object-cover object-top" src={member.imgSrc}
                                     alt={member.name}/>
                                <div className="p-4 text-center">
                                    <h2 className="text-l sm:text-xl font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">{member.name}</h2>
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

export default StaffTecnico;