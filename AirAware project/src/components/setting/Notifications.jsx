import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../redux/Permissions/location';

const Notifications = ({ setOpenpermistionmodal }) => {
    // const [notificationAccess, setNotificationAccess] = useState(false);
    const [locationAccess, setLocationAccess] = useState(false);
    // const [location, setLocationState] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);
    const geolocation = useSelector((state) => state.location.location);

    const dispatch = useDispatch();

    // Check and set permissions state on component mount
    useEffect(() => {
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'geolocation' })
                .then((result) => {
                    setLocationAccess(result.state === 'granted');
                    result.onchange = () => {
                        setLocationAccess(result.state === 'granted');
                    };
                })
                .catch((err) => {
                    setError('Failed to query permission state.');
                    toast.error('Failed to query permission state.');
                });
        } else {
            setError('Permissions API is not supported by this browser.');
            toast.error('Permissions API is not supported by this browser.');
        }
    }, []);

    // Handle location access request
    const locationHandler = () => {
        if (locationAccess) {
            toast.success('Location access revoked.');
            setLocationAccess(false);
            // setLocationState({ lat: null, lng: null }); // Clear location if access is revoked
            return;
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const newLocation = { lat: latitude, lng: longitude };
                    // setLocationState(newLocation);
                    setLocationAccess(true);
                    dispatch(setLocation(newLocation));
                },
                (error) => {
                    setError(error.message);
                    toast.error(error.message);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
            toast.error('Geolocation is not supported by this browser.');
        }
    };

   


    /* location storage clear */
    const clerlocationstoreg = () => {
        localStorage.removeItem('location')
        toast.success('location cleared successfully please refresh browser')
    }
    return (
        <div className='w-full h-[100vh] flex justify-center items-center absolute z-[99999999] right-0 left-0 top-0'>
            <div className='xl:w-[50%] lg:w-[60%] md:w-[60%] sm:w-[60%] w-[95%] h-auto bg-white rounded-md p-6 shadow-lg'>
                <div className='w-full flex justify-between items-center mb-6'>
                    <h1 className='text-2xl font-semibold'>Access Permissions</h1>
                    <RxCross1 className='text-xl font-bold cursor-pointer' onClick={() => setOpenpermistionmodal(false)} />
                </div>
                {/* Notification Access */}
                {/* <div className='flex items-center justify-between mb-6'>
                    <span className='text-lg'>Notification Access</span>
                    <label className='inline-flex items-center cursor-pointer'>
                        <div
                            onClick={notificationHandler}
                            className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 cursor-pointer ${notificationAccess ? 'bg-green-500' : 'bg-red-500'}`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${notificationAccess ? 'translate-x-6' : 'translate-x-1'}`}
                            ></div>
                        </div>
                    </label>
                </div> */}

                {/* Location Access */}
                <div className='flex items-center justify-between'>
                    <span className='text-lg'>Location Access</span>
                    <label className='inline-flex items-center cursor-pointer'>
                        <div
                            onClick={locationHandler}
                            className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 cursor-pointer ${locationAccess ? 'bg-green-500' : 'bg-red-500'}`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${locationAccess ? 'translate-x-6' : 'translate-x-1'}`}
                            ></div>
                        </div>
                    </label>
                </div>
                {error && <div className="text-red-500 mt-2">{error}</div>}
                <p className='text-gray-400'>Your location will be used to get weather data based on your current location.</p>
                <span className='text-gray-400 '>lat {geolocation.lat ? geolocation.lat : 'N/A'} lng {geolocation.lng ? geolocation.lng : 'N/A'}</span>
                <br />
                <button onClick={() => clerlocationstoreg()} className='p-2 border mt-3 rounded-md hover:bg-red-400 duration-150'>Clear your save location</button>
            </div>
        </div>
    );
};

export default Notifications;
