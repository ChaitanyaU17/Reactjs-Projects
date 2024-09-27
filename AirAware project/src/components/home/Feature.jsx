import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faSmog, faExclamationTriangle, faHeartbeat, faBook, faCalendarDay, faPhone } from '@fortawesome/free-solid-svg-icons';

const Feature = () => {
    const features = [
        {
            title: 'Real-Time Weather Data',
            description: 'Get the latest weather updates instantly.',
            icon: faCloudSun,
        },
        {
            title: 'Real-Time Pollution Data',
            description: 'Monitor air quality levels in real-time.',
            icon: faSmog,
        },
        {
            title: 'Emergency Alerts',
            description: 'Receive alerts for severe weather conditions.',
            icon: faExclamationTriangle,
        },
        {
            title: 'Health Tips',
            description: 'Stay informed with health tips based on weather conditions.',
            icon: faHeartbeat,
        },
        {
            title: 'Educational Resources',
            description: 'Learn about weather and pollution impacts.',
            icon: faBook,
        },
        {
            title: '5-Day Forecast',
            description: 'Plan ahead with a reliable 5-day weather forecast.',
            icon: faCalendarDay,
        },
        {
            title: 'Emergency Contact Information',
            description: 'Access critical contact information during emergencies.',
            icon: faPhone,
        },
    ];

    return (
        <section className="bg-white  py-12">
            <div className="container mx-auto px-6">
                <div className="lg:flex lg:flex-col lg:items-center">
                    <div className="w-full mb-8">
                        <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                            Features
                        </h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Explore the various features we offer to keep you informed and safe.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-4">
                            {features.map((feature, index) => (
                                <div key={index} className="p-6 rounded-md shadow-sm border">
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl text-green-800 dark:text-green-400 mr-4">
                                            <FontAwesomeIcon icon={feature.icon} />
                                        </span>
                                        <h2 className="text-lg font-medium text-gray-800 ">
                                            {feature.title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
