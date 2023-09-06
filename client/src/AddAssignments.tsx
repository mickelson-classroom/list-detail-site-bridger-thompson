import { FC, useState } from "react";
import { Assignment } from "./App";


export const AddAssignment: FC<{
  addAssignment: (a: Assignment) => void
}> = ({ addAssignment }) => {
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
  }
  return (
    <>
      <div className="text-center mt-2">
        <button className="btn btn-secondary"
          type="button"
          id="modalStart"
          data-bs-toggle="modal"
          data-bs-target="#addAssignmentModal">Add</button>
      </div>
      <div className="modal fade" id="addAssignmentModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">Add Assignment</h5>
            </div>
            <div className="modal-body">
              <div className="text-center mt-3 border rounded p-2 bg-white">
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
                  data-bs-dismiss="modal"
                  onClick={submitHandler}
                  type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}