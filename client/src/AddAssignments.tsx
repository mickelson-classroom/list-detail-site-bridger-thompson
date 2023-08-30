import { FC, useState } from "react";
import { Assignment } from "./App";


export const AddAssignment: FC<{
  addAssignment: (a: Assignment) => void
}> = ({ addAssignment }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPoints, setNewPoints] = useState(10);


  const submitHandler = () => {
    if (newTitle !== "" && newDescription !== "") {
      const newAssignment: Assignment = {
        title: newTitle,
        description: newDescription,
        points: newPoints
      };
      addAssignment(newAssignment)
      setNewTitle("")
      setNewDescription("")
      setNewPoints(10)
    }
    setIsAdding(false)
  }
  if (!isAdding) return (
    <div className="text-center m-3">
      <button className="btn btn-secondary"
        onClick={() => setIsAdding(true)}>New</button>
    </div>
  )
  return (
    <form className="text-center mt-3 border rounded p-2 bg-white" onSubmit={submitHandler}>
      <div className="text-start">
        <label htmlFor="titleInput" className="form-label">Title:</label>
        <input type="text"
          className="form-control"
          id="titleInput"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} />
        <label htmlFor="descriptionInput" className="form-label">Description:</label>
        <input type="text"
          className="form-control"
          id="descriptionInput"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)} />
        <label htmlFor="pointsInput" className="form-label">Points:</label>
        <input type="number"
          className="form-control"
          id="pointsInput"
          value={newPoints}
          onChange={(e) => setNewPoints(Number(e.target.value))} />
      </div>
      <button className="btn btn-success mt-2"
        type="submit">Submit</button>
    </form>
  )
}