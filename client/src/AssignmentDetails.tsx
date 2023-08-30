import { FC } from "react";
import { Assignment } from "./App";


export const AssignmentDetails: FC<{
  assignment: Assignment,
  deleteHandler: (a: Assignment) => void,
}> = ({ assignment, deleteHandler }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>{assignment.title}</h3>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger"
            onClick={() => deleteHandler(assignment)}>Delete</button>
        </div>
      </div>
      <div>{assignment.description}</div>
      <div>Points: {assignment.points}</div>
    </>
  )
}