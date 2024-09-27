import React, { useState } from 'react'
import Header from '../components/dashboard/education/Header'
import Contents from '../components/dashboard/education/Contents'
const Education = () => {
    const [topics, setTopics] = useState('today weather update')
    const [lang,setLang] = useState('English')





    return (
        <>
            <Header setTopics={setTopics} setLang={setLang}/>
            <Contents topics={topics} lang={lang}/>
        </>
    )
}

export default Education
