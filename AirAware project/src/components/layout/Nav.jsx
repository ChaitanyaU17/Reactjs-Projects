import React, { useEffect, useState, useCallback } from 'react';
import { CiSearch } from "react-icons/ci";
import toast from 'react-hot-toast';
import { IoMdSettings } from "react-icons/io";
import { VscBell } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../../redux/Searchvalue';
import Notifications from '../setting/Notifications';
import { NavLink, useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import ProtectJsonData from "../../json/TempData.json";
import AQIjsondata from "../../json/AQI.json";
import { addNotification, clearNotifications } from '../../redux/notificationsSlice';

const Nav = () => {
    const [openpermistionmodal, setOpenpermistionmodal] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const weatherStatus = useSelector((state) => state.weather.status);
    const pollustiondata = useSelector((state) => state.pollustion.data);
    const weatherData = useSelector((state) => state.weather.data);
    const notifications = useSelector((state) => state.notifications);

    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    const temp = kelvinToCelsius(weatherData?.main?.temp).toFixed(0);
    const cityName = weatherData?.name;

    const notificationExists = useCallback((newNotification) => {
        return notifications.some(not =>
            not.message === newNotification.message &&
            not.type === newNotification.type &&
            new Date(not.date).toDateString() === new Date(newNotification.date).toDateString()
        );
    }, [notifications]);

    useEffect(() => {
        const range = ProtectJsonData?.temperature_ranges?.find(teprenge =>
            (temp >= teprenge.min && temp <= teprenge.max) || (temp >= teprenge.min && teprenge.max === Infinity)
        );

        if (range) {
            const notification = {
                id: Date.now(),
                message: range.day_info.alert.title,
                temp,
                date: new Date().toISOString(),
                type: 'temperature',
                cityName // Add cityName here
            };

            if (!notificationExists(notification)) {
                dispatch(addNotification(notification));
            }
        } else {
            console.log('No range found for temperature:', temp);
        }
    }, [temp, dispatch, notificationExists, cityName]);

    useEffect(() => {
        if (!pollustiondata?.list?.[0]) return;
        const AQI = pollustiondata?.list[0]?.main?.aqi;

        const range = AQIjsondata?.aqi_ranges?.find(teprenge =>
            (AQI >= teprenge.min && AQI <= teprenge.max)
        );

        if (range) {
            const notification = {
                id: Date.now(),
                title: range.alert.title,
                message: range.alert,
                date: new Date().toISOString(),
                type: 'pollution',
                cityName // Add cityName here
            };

            if (!notificationExists(notification)) {
                dispatch(addNotification(notification));
            }
        } else {
            console.log('No range found for AQI:', AQI);
        }
    }, [pollustiondata, dispatch, notificationExists, cityName]);

    useEffect(() => {
        if (weatherStatus === 'loading') {
            toast.loading('Loading...');
        } else {
            toast.dismiss();
        }

        if (weatherStatus === 'failed') {
            toast.error('Not found!');
        }

        if (weatherStatus === 'succeeded') {
            toast.success('Data loaded successfully!');
        }
    }, [weatherStatus]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(setInputValue(input));
            navigate('/dashboard/weather');
        }
    };

    const Permissionsnotifications = () => {
        setOpenpermistionmodal(true);
    };

    const OpenNotifications = () => {
        setOpenNotification(true);
    };
    /* sing in dashboard  */

    return (
        <>
            <div className='w-full xl:h-20 h-auto gap-4 p-4 bg-[#FFFFFF] border border-[#E3E4E8] border-hide flex flex-col items-center justify-between pr-4 pl-4'>
                <div className='w-full h-auto flex justify-between gap-4 '>
                    <div className='w-auto h-auto '>
                        <NavLink to='/'>
                            <h1 className='text-3xl font-bold'>AirAware </h1>
                        </NavLink>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className='hidden sm:flex sm:w-auto sm:pl-3 sm:pr-3 sm:p-2 sm:bg-[#F4F4F6] sm:h-auto sm:items-center sm:justify-center sm:gap-1 sm:rounded-full'>
                            <CiSearch className='text-2xl text-gray-400' />
                            <input
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                className='bg-transparent outline-0 text-gray-400'
                                type='text'
                                placeholder='Search for something..'
                            />
                        </div>
                        <div
                            onClick={Permissionsnotifications}
                            className='w-[40px] h-[40px] bg-[#F4F4F6] flex justify-center items-center rounded-full cursor-pointer'
                            title='Setting'
                        >
                            <IoMdSettings className='text-[#888EA2] text-xl' />
                        </div>
                        <div onClick={() => OpenNotifications()} className='w-[40px] h-[40px] bg-[#F4F4F6] flex justify-center items-center rounded-full cursor-pointer relative' title='notification'>
                            <div className='w-[8px] h-[8px] bg-[#D13329] rounded-full absolute top-2 right-2'></div>
                            <VscBell className='text-xl text-[#D13329]' />
                        </div>
                       
                    </div>
                </div>
                {openpermistionmodal && <Notifications setOpenpermistionmodal={setOpenpermistionmodal} />}
                <div className='xl:hidden lg:hidden md:hidden sm:hidden block w-full pl-3 pr-3 p-2 bg-[#F4F4F6] h-auto flex items-center justify-center gap-4 rounded-full'>
                    <CiSearch className='text-2xl text-gray-400' />
                    <input
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        className='w-[85%] bg-transparent outline-0 text-gray-400'
                        type='text'
                        placeholder='Search for something..'
                    />
                </div>

            </div>
            <div className={`w-[350px] h-auto fixed z-50 top-0 right-0 bottom-0 p-4 transition-transform duration-300 bg-white shadow-md ${openNotification ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='w-full h-auto flex justify-between'>
                    <p>Notifications</p>
                    <RxCross1 className='cursor-pointer' onClick={() => setOpenNotification(false)} />
                </div>
                <div className='w-full flex justify-end mt-2'>
                    <button onClick={() => dispatch(clearNotifications())} className='border p-1 rounded-md hover:bg-red-400'>Clear All</button>
                </div>
                <NotificationList />
            </div>
        </>
    );
};

const NotificationList = () => {
    const notifications = useSelector((state) => state.notifications);

    const groupNotificationsByDay = (notifications) => {
        const grouped = notifications.reduce((acc, notification) => {
            const date = new Date(notification.date);
            const day = date.toDateString();
            if (!acc[day]) acc[day] = [];
            acc[day].push(notification);
            return acc;
        }, {});
        return grouped;
    };

    const groupedNotifications = groupNotificationsByDay(notifications);

    // Convert the grouped notifications to an array of entries and sort by date descending
    const sortedGroupedNotifications = Object.entries(groupedNotifications).sort(
        (a, b) => new Date(b[0]) - new Date(a[0])
    );

    return (
        <div className='w-full h-[88vh] overflow-hidden overflow-y-scroll scrollbaarhide'>
            {sortedGroupedNotifications.map(([day, notifications]) => (
                <div key={day} className='mt-2'>
                    <p className='font-semibold '>{day}</p>
                    {notifications.map((notification) => (
                        <div key={notification.id} className="border-b border-gray-200 py-2">
                            <p className="font-bold">{notification.title}</p>
                            <p>{notification.message}</p>
                            <p className="text-sm text-gray-500">{new Date(notification.date).toLocaleTimeString()}</p>
                            <p className="text-sm text-gray-500">{notification.cityName}</p>
                            {notification.temp && <p className="text-sm">Temperature: {notification.temp}°C</p>}
                            {notification.AQI && <p className="text-sm">AQI: {notification.AQI}</p>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Nav;
