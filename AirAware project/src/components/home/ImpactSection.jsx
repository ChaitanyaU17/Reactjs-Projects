import React from 'react';
import { FaLungs, FaHeart, FaBrain, FaThermometerFull, FaSnowflake, FaWater, FaDisease, FaVirus } from 'react-icons/fa';

const ImpactSection = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 ">
            <div className=" container xl:px-14 lg:px-14 md:px-14 sm:px-14 xl:py-12 lg:py-12 md:py-12 sm:py-12 py-4 px-4 mx-auto ">
                <div className="text-start">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                        Impact of Pollution and Weather on Human Life
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 ">
                        Understanding how pollution and weather conditions affect our health is crucial for taking preventive measures and improving our well-being.
                    </p>
                </div>

                

                    <div className="mt-10 lg:flex lg:items-center lg:-mx-6">
                        <div className="lg:w-1/2 lg:mx-6">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                Impact of Pollution
                            </h3>
                            <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <FaLungs className="w-5 h-5 mr-2 text-green-500" />
                                    Respiratory Diseases
                                </li>
                                <li className="flex items-center">
                                    <FaHeart className="w-5 h-5 mr-2 text-red-500" />
                                    Cardiovascular Diseases
                                </li>
                                <li className="flex items-center">
                                    <FaBrain className="w-5 h-5 mr-2 text-blue-500" />
                                    Cognitive Function Impairment
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 lg:mx-6 mt-8 lg:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                Impact of Weather
                            </h3>
                            <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <FaThermometerFull className="w-5 h-5 mr-2 text-yellow-500" />
                                    Heat-related Illnesses
                                </li>
                                <li className="flex items-center">
                                    <FaSnowflake className="w-5 h-5 mr-2 text-blue-500" />
                                    Cold-related Illnesses
                                </li>
                                <li className="flex items-center">
                                    <FaWater className="w-5 h-5 mr-2 text-teal-500" />
                                    Flood-related Diseases
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 lg:flex lg:items-center lg:-mx-6">
                        <div className="lg:w-1/2 lg:mx-6">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                Diseases Related to Pollution
                            </h3>
                            <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <FaLungs className="w-5 h-5 mr-2 text-green-500" />
                                    Chronic Obstructive Pulmonary Disease (COPD)
                                </li>
                                <li className="flex items-center">
                                    <FaHeart className="w-5 h-5 mr-2 text-red-500" />
                                    Heart Disease
                                </li>
                                <li className="flex items-center">
                                    <FaBrain className="w-5 h-5 mr-2 text-blue-500" />
                                    Stroke
                                </li>
                                <li className="flex items-center">
                                    <FaVirus className="w-5 h-5 mr-2 text-purple-500" />
                                    Respiratory Infections
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 lg:mx-6 mt-8 lg:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                Diseases Related to Weather
                            </h3>
                            <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <FaThermometerFull className="w-5 h-5 mr-2 text-yellow-500" />
                                    Heat Exhaustion and Heatstroke
                                </li>
                                <li className="flex items-center">
                                    <FaSnowflake className="w-5 h-5 mr-2 text-blue-500" />
                                    Hypothermia and Frostbite
                                </li>
                                <li className="flex items-center">
                                    <FaWater className="w-5 h-5 mr-2 text-teal-500" />
                                    Waterborne Diseases
                                </li>
                                <li className="flex items-center">
                                    <FaDisease className="w-5 h-5 mr-2 text-purple-500" />
                                    Vector-borne Diseases
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default ImpactSection;
