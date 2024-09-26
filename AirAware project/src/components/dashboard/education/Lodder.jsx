import React from 'react';

const Lodder = () => {
    const videodata = [
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {videodata?.map((data, index) => (
                <div
                    key={index}
                    className='w-full h-[250px] cursor-pointer rounded-md overflow-hidden bg-gray-200 shadow-sm animate-pulse'
                >
                    <div className='w-full h-[200px] bg-gray-300'></div>
                    <p className='w-full text-[14px] p-2 bg-gray-300 h-4 '></p>
                </div>
            ))}
        </div>
    );
};

export default Lodder;
