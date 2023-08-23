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
    <div className="text-center m-3">
      <button className="btn btn-success"
        onClick={submitHandler}>Submit</button>
      <div className="text-start">
        <div>Title:</div>
        <input type="text"
          className="form-control"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} />
        <div>Description:</div>
        <input type="text"
          className="form-control"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)} /><div>Title:</div>
        <input type="number"
          className="form-control"
          value={newPoints}
          onChange={(e) => setNewPoints(Number(e.target.value))} />
      </div>
    </div>
  )
}