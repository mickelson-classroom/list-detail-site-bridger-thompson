import { FC } from "react";


export const Tags: FC<{
  setAssignmentTags: (t: string[]) => void,
  assignmentTags: string[]
}> = ({ setAssignmentTags, assignmentTags }) => {
  const tags = [
    "High Priority",
    "Medium Priority",
    "Low Priority",
    "No Submit"
  ]

  const clickHandler = (tag: string) => {
    if (assignmentTags.includes(tag)) {
      setAssignmentTags(assignmentTags.filter(t => t !== tag))
    }
    else {
      setAssignmentTags([...assignmentTags, tag])
    }
  }
  return (
    <div className="d-flex flex-wrap mt-3">
      {tags.map((t) => (
        <div className={`card ${assignmentTags.includes(t) && "border-success"}`}
          onClick={() => clickHandler(t)}>
          <div className="card-body">
            <div className="card-title">
              {t}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}