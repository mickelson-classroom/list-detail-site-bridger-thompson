import { FC, useState } from "react";
import { Assignment } from "./App";
import { Tags } from "./Tags";
import GenericTextInput from "./components/GenericTextInput";

export const AssignmentDetails: FC<{
  assignment: Assignment,
  deleteHandler: (a: Assignment) => void,
}> = ({ assignment, deleteHandler }) => {
  const [tags, setTags] = useState(assignment.tags);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(assignment.title);
  const [editedDescription, setEditedDescription] = useState(assignment.description);
  const [editedPoints, setEditedPoints] = useState(assignment.points);
  const [editedDue, setEditedDue] = useState(assignment.due);
  const [editedAllowedAttempts, setEditedAllowedAttempts] = useState(assignment.allowedAttempts);

  const setTagsHandler = (tags: string[]) => {
    assignment.tags = tags;
    setTags(tags);
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTitle !== "" && editedDescription !== "" && editedPoints >= 0 && editedDue && editedAllowedAttempts > 0) {
      assignment.title = editedTitle;
      assignment.description = editedDescription;
      assignment.points = editedPoints;
      assignment.due = editedDue;
      assignment.allowedAttempts = editedAllowedAttempts;
      setIsEditing(false)
    }
  }
  return (
    <div>
      <form className="needs-validation" onSubmit={e => submitHandler(e)} noValidate>
        <div className="row">
          <div className="col">
            {isEditing ? (
              <GenericTextInput
                id="titleInput"
                label="Title"
                value={editedTitle}
                isValid={editedTitle.length > 0}
                invalidMessage="Title is required"
                onChange={(value) => setEditedTitle(value)} />
            ) : (
              <h3>{assignment.title}</h3>
            )}
          </div>
          <div className="col-auto">
            {isEditing ? (
              <button className="btn btn-success"
                type="submit">
                Save
              </button>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsEditing(true) }}
              >
                Edit
              </button>
            )}
          </div>
          <div className="col-auto">
            <button className="btn btn-danger" onClick={() => deleteHandler(assignment)}>Delete</button>
          </div>
        </div>
        {isEditing ? (
          <GenericTextInput
            id="descriptionInput"
            label="Description"
            value={editedDescription}
            isValid={editedDescription.length > 0}
            invalidMessage="Description is required"
            onChange={(value) => setEditedDescription(value)} />
        ) : (
          <div>{assignment.description}</div>
        )}
        {isEditing ? (
          <div>
            <input
              type="number"
              className={`form-control ${editedPoints >= 0 ? 'is-valid' : 'is-invalid'}`}
              value={editedPoints}
              onChange={(e) => setEditedPoints(Number(e.target.value))}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Points must be greater than 0.</div>
          </div>
        ) : (
          <div>Points: {assignment.points}</div>
        )}
        {isEditing ? (
          <div>
            <input
              type="date"
              className={`form-control ${editedDue ? 'is-valid' : 'is-invalid'}`}
              value={editedDue}
              onChange={(e) => setEditedDue(e.target.value)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Due Date is required.</div>
          </div>
        ) : (
          <div>Due Date: {assignment.due}</div>
        )}
        {isEditing ? (
          <div>
            <input
              type="number"
              className={`form-control ${editedAllowedAttempts > 0 ? 'is-valid' : 'is-invalid'}`}
              value={editedAllowedAttempts}
              onChange={(e) => setEditedAllowedAttempts(Number(e.target.value))}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Allowed Attempts must be a non-negative number.</div>
          </div>
        ) : (
          <div>Allowed Attempts: {assignment.allowedAttempts}</div>
        )}
        <div>{assignment.tags.join(",")}</div>
      </form>
      <div className="mt-3 mb-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="small">Collapse Tags</div>
        </button>
      </div>
      <div className="collapse show" id="collapseExample">
        <div className="card card-body">
          <Tags assignmentTags={tags} setAssignmentTags={setTagsHandler} />
        </div>
      </div>
    </div>
  );
}
