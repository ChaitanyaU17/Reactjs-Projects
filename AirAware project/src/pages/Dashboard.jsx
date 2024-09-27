import React from 'react';
import Sidebaar from '../components/dashboard/Sidebaar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-full h-[100vh] flex'>
            <Sidebaar />
            <div className='w-[100%] h-[100vh]  overflow-auto'>
                <Outlet />

            </div>
        </div>
    );
}

export default Dashboard;
