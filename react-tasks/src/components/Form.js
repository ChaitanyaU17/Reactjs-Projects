import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({fullName: '', username: ''});

    const handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
    })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData({
            fullName: '',
            username: '',
        })
    }

    return (
        <form >
            <input style={{color: 'white'}} placeholder="write your full name" name={formData.fullName} onChange={handleInputChange} />
            <button style={{color: 'white'}} onClick={handleSubmit}>Submit</button>
            <br></br>
            <br></br>
            <input style={{color: 'white'}} placeholder='write your username'  name={formData.username} onChange={handleInputChange} />
            <button style={{color: 'white'}} onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;