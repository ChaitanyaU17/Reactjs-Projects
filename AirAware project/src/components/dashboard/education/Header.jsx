import React from 'react'
import Language from "../../../json/language.json"
const Header = ({ setTopics, setLang }) => {


    const Content = [
        "today weather update",
        "Real-time weather update",
        "Understanding Weather Patterns",
        "How to Read Weather Forecasts",
        "Effects of Extreme Weather",
        "Seasonal Weather Changes",
        "Extreme Weather Events",
        "Weather vs. Climate",
        "Air Pollution and Its Effects",
        "Causes of Air Pollution",
        "Water Pollution Causes and Solutions",
        "Impact of Water Pollution",
        "Soil Pollution and Its Impact",
        "Noise Pollution Control",
        "Indoor Air Quality",
        "Climate Change Explained",
        "Impact of Climate Change",
        "Global Warming and Its Effects",
        "Sustainable Practices to Combat Climate Change",
        "Renewable Energy Solutions",
        "Carbon Footprint Reduction",
        "Climate Change and Natural Disasters",
        "Understanding Greenhouse Gases",
        "Mitigating Climate Change Effects",
        "Climate Policy and Legislation",
        "Adaptation Strategies for Climate Change",
        "Climate Change and Agriculture",
        "Urban Heat Islands and Their Effects"
    ]


    return (
        <>
            <div className='w-full h-[80px] bg-white border-b-2 flex justify-between px-4 items-center gap-4'>


                <div className="xl:w-[20%] lg:w-[20%] md:w-[20%]  sm:w-[50%] w-[50%]  flex  items-center ">
                    <label htmlFor="language" className="mr-2 text-sm font-medium text-gray-700">
                        Topics
                    </label>
                    <select
                        id="language"
                        name="language"
                        className="mt-1 bg-gray-100 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={(e) => setTopics(e.target.value)}
                    >
                        {
                            Content.map((content, index) => (
                                <>
                                    <option key={index} value={content}>{content}</option>
                                </>
                            ))
                        }


                    </select>
                </div>

                <div className="max-w-xs flex  items-center">
                    <label htmlFor="language" className="w-[80%] text-sm font-medium text-gray-700">
                        Language
                    </label>
                    <select
                        id="language"
                        name="language"
                        className="mt-1 bg-gray-100 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={(e) => setLang(e.target.value)}
                    >
                        {Language?.languages.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Header
