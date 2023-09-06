import { FC } from "react";
import { Assignment } from "./App";


export const AssignmentDetails: FC<{
  assignment: Assignment,
  deleteHandler: (a: Assignment) => void,
}> = ({ assignment, deleteHandler }) => {
  return (
    <div>
      <div className="accordion" id="assignmentDetailsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#details" aria-expanded="true" aria-controls="details">
              Details
            </button>
          </h2>
          <div id="details" className="accordion-collapse collapse show" data-bs-parent="#assignmentDetailsAccordion">
            <div className="accordion-body">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}