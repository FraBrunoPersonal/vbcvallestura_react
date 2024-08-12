import {Link} from "react-router-dom";
import logo from '../assets/LogoVBC_White.png'; // Assicurati di avere il logo in questa directory


const Footer = () => {
    return (
        <>
            <footer className="bg-black">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img src={logo} className="h-20 me-3" alt="V.B.C. Valle Stura Logo"/>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200">
                                    V.B.C. Valle Stura A.s.d.
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium ">
                                    <li className="mb-4">
                                        P.Iva 02930590043
                                    </li>
                                    <li className="mb-4">
                                        C.F. 96040690040
                                    </li>
                                    <li className="mb-4">
                                        Cod. Aff. FIPAV 01200065
                                    </li>
                                    <li>
                                        Cod. Aff. CSI 01200065
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200">
                                    Seguici
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://www.instagram.com/vbcvallestura" target="_blank" className="hover:underline">
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://www.facebook.com/profile.php?id=100095199594971" target="_blank" className="hover:underline">
                                            Facebook
                                        </a>
                                    </li>
                                    <li >
                                        <a href="https://www.youtube.com/@vbcvallestura" target="_blank" className="hover:underline">
                                            Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200">
                                    Legal
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024 <a href="https://flowbite.com/" className="hover:underline">V.B.C. Valle Stura A.S.D.™</a>. All Rights Reserved.
            </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#"
                               className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd"
                                          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#"
                               className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 21 16">
                                    <path
                                        d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#"
                               className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 17">
                                    <path fillRule="evenodd"
                                          d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.037 10.2a4.063 4.063 0 0 1-1.85.069 4.095 4.095 0 0 0 3.816 2.812 8.274 8.274 0 0 1-5.1 1.743A8.473 8.473 0 0 1 0 14.8a11.7 11.7 0 0 0 6.29 1.841c7.548 0 11.675-6.132 11.675-11.454 0-.175-.006-.35-.013-.522A8.231 8.231 0 0 0 20 1.892Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#"
                               className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M10 .833a9.167 9.167 0 1 0 0 18.334A9.167 9.167 0 0 0 10 .833Zm0 16.667a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM7.875 6.875h.625V8.75H7.875V6.875Zm3.75 0h.625V8.75h-.625V6.875ZM10 15.417a4.167 4.167 0 0 1-4.167-4.167h8.334A4.167 4.167 0 0 1 10 15.417Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="#"
                               className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M5.5 2.917C4.52 2.917 3.75 3.687 3.75 4.667v10.666c0 .98.77 1.75 1.75 1.75h9c.98 0 1.75-.77 1.75-1.75V4.667c0-.98-.77-1.75-1.75-1.75h-9ZM10 14.75A4.083 4.083 0 1 1 10 6.584a4.083 4.083 0 0 1 0 8.166ZM13.25 7a.917.917 0 1 0 0-1.834.917.917 0 0 0 0 1.834ZM10 7.5a2.917 2.917 0 1 0 0 5.834 2.917 2.917 0 0 0 0-5.834Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;