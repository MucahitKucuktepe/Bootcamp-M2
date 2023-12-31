import axios from "axios"
import { useState } from "react"

const AddTutorial = ({getTutorials}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTutorial={title:title,description:description}
    console.log(newTutorial);
    postTutorial(newTutorial)
    getTutorials()
    setTitle("")
    setDescription("")
  }
  const postTutorial= async (newTutorial)=>{
    // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    const res = await axios.post(process.env.REACT_APP_URL, newTutorial);
  }

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTutorial
