import { FC, useState } from "react";
import { Assignment } from "./App";
import { Tags } from "./Tags";


export const AssignmentDetails: FC<{
  assignment: Assignment,
  deleteHandler: (a: Assignment) => void,
}> = ({ assignment, deleteHandler }) => {
  const [tags, setTags] = useState(assignment.tags)
  const setTagsHandler = (tags: string[]) => {
    assignment.tags = tags
    setTags(tags)
  }
  return (
    <div>

      <div className="collapse show" id="details">
        <div className="row">
          <div className="col">
            <h3>{assignment.title}</h3>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger" onClick={() => deleteHandler(assignment)}>Delete</button>
          </div>
        </div>
        <div>{assignment.description}</div>
        <div>Points: {assignment.points}</div>
        <div>{assignment.tags.join(",")}</div>
      </div>
      <div className="mt-3 mb-1">
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <div className="small">Collapse Tags</div>
        </button>
      </div>
      <div className="collapse show" id="collapseExample">
        <div className="card card-body">
          <Tags assignmentTags={tags} setAssignmentTags={setTagsHandler} />
        </div>
      </div>
    </div>
  )
}