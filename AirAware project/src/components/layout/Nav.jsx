import React, { useEffect, useState, useCallback } from 'react';


const Nav = () => {
  

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



export default Nav;
