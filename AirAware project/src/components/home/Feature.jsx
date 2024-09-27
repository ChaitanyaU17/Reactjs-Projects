import React from 'react';
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
        <></>
    );
};

export default Feature;
