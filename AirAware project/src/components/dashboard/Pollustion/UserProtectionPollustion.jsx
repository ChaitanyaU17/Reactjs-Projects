import React from 'react';
import { FaInfoCircle, FaShieldAlt, FaChild, FaStethoscope, FaExclamationCircle, FaHandPaper, FaMapMarkerAlt, FaBell, FaBaby, FaUserMd, FaUserAlt, FaHeartBroken, FaRunning, FaCar, FaHome, FaHospital, FaBuilding } from 'react-icons/fa';

const UserProtectionPollustion = ({ datauserprotectaqi }) => {


    return (
        <div className="container mx-auto p-4 text-gray-100">
            <div className="bg-gray-800 text-gray-200 p-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <div className=" w-[15px] h-[15px] mr-2  bg-green-200 rounded-full"
                        style={{ backgroundColor: datauserprotectaqi?.visual_indicator}}

                    ></div>
                    {datauserprotectaqi?.title}
                </h2>
                <p className="mb-4">
                    {datauserprotectaqi?.msg}
                </p>
                <p className="mb-2">
                    {datauserprotectaqi?.detailed_health_impacts}
                </p>

                <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <FaInfoCircle className="mr-2 text-blue-400 text-xl" />
                    Alert:
                </h3>
                <p className="mb-4">
                    {datauserprotectaqi?.alert}
                </p>

                <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <FaShieldAlt className="mr-2 text-yellow-400 text-xl" />
                    Advice:
                </h3>
                <p className="mb-4">
                    {datauserprotectaqi?.advice}
                </p>

                <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <FaChild className="mr-2 text-red-400 text-xl" />
                    Advice for Specific Groups:
                </h3>
                <ul className="list-disc pl-5 mb-4">
                    <li className="flex items-center mb-2">
                        <FaBaby className="mr-2 text-blue-400 text-lg" />
                        Children:{datauserprotectaqi?.advice_for_specific_groups?.children}
                    </li>
                    <li className="flex items-center mb-2">
                        <FaUserMd className="mr-2 text-pink-400 text-lg" />
                        Pregnant Women: {datauserprotectaqi?.advice_for_specific_groups?.pregnant_women}
                    </li>
                    <li className="flex items-center mb-2">
                        <FaUserAlt className="mr-2 text-gray-400 text-lg" />
                        Elderly: {datauserprotectaqi?.advice_for_specific_groups?.elderly}
                    </li>
                    <li className="flex items-center">
                        <FaHeartBroken className="mr-2 text-red-500 text-lg" />
                        Pre-existing Conditions: {datauserprotectaqi?.advice_for_specific_groups?.pre_existing_conditions}
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <FaStethoscope className="mr-2 text-teal-400 text-xl" />
                    Health Recommendations:
                </h3>
                <ul className="list-disc pl-5 mb-4">
                    {
                        datauserprotectaqi?.health_recommendations?.map((health, index) => (
                            <>
                                <li key={index}>{health}</li>
                            </>
                        ))
                    }


                </ul>

               
            </div>
        </div>
    );
};

export default UserProtectionPollustion;






