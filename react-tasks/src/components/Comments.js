import React, { useState } from 'react'

const Comments = () => {
    const[formData, setFormData] = useState({
        username: '',
        description: '',
        rating: 5,
    });

    const InputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        })
    }

    const handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    } 

  return (
    <div>
      <h1>comments section</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="write your name"
          id="username"
          value={formData.username}
          onChange={InputChange}
          name="username"
        />
        <br></br>
        <br></br>
        <label htmlFor="description">comment</label>
        <br></br>
        <textarea
          placeholder="write your comment here.."
          id="description"
          value={formData.description}
          onChange={InputChange}
          name="description"
        ></textarea>
        <br></br>
        <br></br>
        <label htmlFor="rating">Ratings</label>
        <input
          type="number"
          value={formData.rating}
          onChange={InputChange}
          id="rating"
          name='rating'
          min={1}
          max={5}
        />
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Comments
