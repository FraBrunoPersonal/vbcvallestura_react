import fotoFondatori from '../assets/fondatoriVbcValleStura.jpg'; // Assicurati di avere il logo in questa directory

const Storia = () => {
    return (
        <>
            <div className="container mx-auto px-16 py-40 overflow-x-hidden overflow-y-auto">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Storia</h1>

                <div className="flex justify-center mb-8">
                    <figure className="max-w-lg">
                        <img className="h-auto max-w-full rounded-lg" src={fotoFondatori}
                             alt="Fondatori della V.B.C. Valle Stura"/>
                        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                            Fondatori della V.B.C. Valle Stura
                        </figcaption>
                    </figure>
                </div>

                <blockquote className="text-xl italic font-semibold text-gray-900 mx-auto max-w-3xl">
                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-900 mb-4" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path
                            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <p className="text-gray-900 text-4xl mb-4">C’era una volta</p>
                    <p className="text-xl text-gray-500 leading-relaxed text-justify">
                        Un gruppo di ragazzi appassionati di pallavolo, nel tempo libero spesso si incontravano per
                        giocare
                        e i loro campi da gioco erano cortili e prati. La rete, quando c’era, era uno spago, la palla
                        non
                        era certo colorata e dal tocco morbido come lo è ora ma la voglia e l’entusiasmo erano tali che
                        anche i lividi sulle braccia non erano un problema. La passione incalza ed era il settembre del
                        1992
                        quando questo gruppo di ragazzi decise, grazie all’intervento del Professor Giovanni Guala, di
                        concretizzare la loro passione e fondare l’associazione sportiva V.B.C. Valle Stura. Il nome era
                        ambizioso, un Volley Ball Club che potesse coinvolgere tutti gli appassionati della Valle Stura.
                    </p>
                    <p className="text-xl text-gray-500 leading-relaxed mb-4 text-justify">
                        Da quel momento ad oggi sono passati quasi 25 anni, 24 stagioni sportive e la 25° è in corso. I
                        ragazzi sono cresciuti ed alcuni di loro sono ancora qua che tirano le fila dell’associazione.
                    </p>
                    <p className="text-xl text-gray-500 leading-relaxed text-justify">
                        Mi piaceva iniziare così, come iniziano le favole, perché in effetti, per me e per gli altri che
                        la
                        storia l’hanno vissuta fin dal principio, la V.B.C. Valle Stura è un po’ una favola. Una bella
                        favola reale che è ancora in fase di stesura.
                    </p>
                </blockquote>
            </div>
        </>

    );
};

export default Storia;
