import React from 'react';
import { FaHeart, FaHandsHelping, FaUserShield, FaCloudSun, FaInfoCircle, FaSmog } from 'react-icons/fa';

const HelpSection = () => {
    return (
        <section className="bg-white  py-12">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold  ">How Our Website Can Help You</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Our mission is to provide you with the information and tools needed to stay safe and healthy amidst pollution and extreme weather conditions.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-red-500 text-white p-4 rounded-full mb-4">
                            <FaHeart className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 ">Real-time Alerts</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Stay updated with real-time pollution and weather alerts to take timely actions.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                            <FaHandsHelping className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 ">Emergency Plans</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Access emergency response plans and important contact information.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                            <FaUserShield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 ">Health Tips</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Learn about health tips and educational content to stay protected.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-purple-500 text-white p-4 rounded-full mb-4">
                            <FaCloudSun className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 ">Real-Time Weather Data</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Get real-time weather data to stay informed about current conditions.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-yellow-500 text-white p-4 rounded-full mb-4">
                            <FaInfoCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 ">Detailed Information</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Get detailed information on the impact of pollution and weather.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-yellow-500 text-white p-4 rounded-full mb-4">
                            <FaSmog className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 ">Real-Time Pollution Data</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Access real-time pollution data to make informed decisions about your health.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
