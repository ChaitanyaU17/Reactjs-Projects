import React from 'react';
import { FaInfoCircle, FaShieldAlt, FaChild, FaStethoscope, FaExclamationCircle, FaHandPaper, FaMapMarkerAlt, FaBell, FaBaby, FaUserMd, FaUserAlt, FaHeartBroken, FaRunning, FaCar, FaHome, FaHospital, FaBuilding } from 'react-icons/fa';

const UserProtectionPollution = ({ datauserprotectaqi }) => {


    return (
        <div className="container mx-auto p-4 text-gray-100">
           

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
    );
};

export default UserProtectionPollution;






