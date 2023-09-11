import { FC, useState } from "react";
import { Assignment } from "./App";
import GenericTextInput from "./components/GenericTextInput";


export const AddAssignment: FC<{
  addAssignment: (a: Assignment) => void
}> = ({ addAssignment }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDueDate, setNewDueDate] = useState<string | undefined>();
  const [newAllowedAttempts, setNewAllowedAttempts] = useState(1)
  const [newPoints, setNewPoints] = useState(10);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newDueDate) {
      const newAssignment: Assignment = {
        title: newTitle,
        description: newDescription,
        points: newPoints,
        due: newDueDate,
        allowedAttempts: newAllowedAttempts,
        tags: []
      };
      addAssignment(newAssignment)
      setNewTitle("")
      setNewDescription("")
      setNewAllowedAttempts(1)
      setNewDueDate("")
      setNewPoints(10)
    }
  }
  return (
    <>
      <div className="text-center mt-2">
        <button className="btn btn-outline-secondary"
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
              <form className="text-center mt-3 bg-white needs-validation" onSubmit={submitHandler} noValidate>
                <div className="text-start">
                  <div className="mb-3">
                    <GenericTextInput
                      id="titleInput"
                      label="Title"
                      value={newTitle}
                      isValid={newTitle.length > 0}
                      invalidMessage="Title is required"
                      onChange={(value) => setNewTitle(value)} />
                  </div>
                  <div className="mb-3">
                    <GenericTextInput
                      id="descriptionInput"
                      label="Description"
                      value={newDescription}
                      isValid={newDescription.length > 0}
                      invalidMessage="Description is required"
                      onChange={(value) => setNewDescription(value)} />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md">
                      <label htmlFor="pointsInput" className="form-label">Points:</label>
                      <input
                        type="number"
                        className={`form-control ${newPoints >= 0 ? 'is-valid' : 'is-invalid'}`}
                        id="pointsInput"
                        value={newPoints}
                        onChange={(e) => setNewPoints(Number(e.target.value))}
                        required
                      />
                      <div className="invalid-feedback">Points must be greater than or equal to 0.</div>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>

                    <div className="col-md">
                      <label htmlFor="dueDateInput" className="form-label">Due Date:</label>
                      <input
                        type="date"
                        className={`form-control ${newDueDate ? 'is-valid' : 'is-invalid'}`}
                        id="dueDateInput"
                        value={newDueDate}
                        onChange={(e) => setNewDueDate(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">Due Date is required.</div>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>

                    <div className="col-md">
                      <div className="mb-3">
                        <label htmlFor="attemptsInput" className="form-label">Attempts:</label>
                        <input
                          type="number"
                          className={`form-control ${newAllowedAttempts > 0 ? 'is-valid' : 'is-invalid'}`}
                          id="attemptsInput"
                          value={newAllowedAttempts}
                          onChange={(e) => setNewAllowedAttempts(Number(e.target.value))}
                          required
                        />
                        <div className="invalid-feedback">Attempts must be greater than 0.</div>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="btn btn-success mt-2" type="submit"
                  data-bs-dismiss="modal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}