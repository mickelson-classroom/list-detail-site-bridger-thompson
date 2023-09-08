import { FC, useState } from "react";

export const Tags: FC<{
  setAssignmentTags: (t: string[]) => void,
  assignmentTags: string[]
}> = ({ setAssignmentTags, assignmentTags }) => {
  const [tags, setTags] = useState([
    "High Priority",
    "Medium Priority",
    "Low Priority",
    "No Submit"
  ])
  const [newTag, setNewTag] = useState("")

  const clickHandler = (tag: string) => {
    if (assignmentTags.includes(tag)) {
      setAssignmentTags(assignmentTags.filter(t => t !== tag))
    }
    else {
      setAssignmentTags([...assignmentTags, tag])
    }
  }

  const submitHandler = () => {
    if (newTag !== "") {
      setTags([...tags, newTag])
    }
  }

  const removeHandler = (tag: string) => {
    setAssignmentTags(assignmentTags.filter(t => t !== tag))
    setTags(tags.filter(t => t !== tag))
  }
  return (
    <div className="d-flex flex-wrap mt-3">
      {tags.map((t) => (
        <div className="card btn me-2" key={t}
          onClick={() => clickHandler(t)}>
          <div className="card-body pt-0 pe-0">
            <div className="text-end small">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={(e) => { e.stopPropagation(); removeHandler(t) }}
              />
            </div>
            <div className="card-title pe-3">{t}</div>
          </div>
        </div>

      ))}
      <button className="btn btn-outline-secondary fs-3"
        type="button"
        id="tagModalStart"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal">+</button>
      <div className="modal fade" id="addTagModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">Add Tag</h5>
            </div>
            <div className="modal-body">
              <div className="text-center mt-3 bg-white">
                <div className="text-start">
                  <label htmlFor="titleInput" className="form-label">Tag name:</label>
                  <input type="text"
                    className="form-control"
                    id="titleInput"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)} />
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
    </div>
  )
}