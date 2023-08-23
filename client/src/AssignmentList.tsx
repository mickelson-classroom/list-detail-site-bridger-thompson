import { FC } from "react"
import { Assignment } from "./App"

export const AssignmentList: FC<{
  assignments: Assignment[],
  selectedAssignment?: Assignment,
  setSelectedAssignments: (a: Assignment) => void,
}> = ({ assignments, selectedAssignment, setSelectedAssignments }) => {
  return (
    <div className="list-group">
      {assignments.length > 0 && assignments.map((a) => (
        <button className={`list-group-item list-group-item-action ${a.title === selectedAssignment?.title && "active"}`}
          key={a.title}
          onClick={() => setSelectedAssignments(a)}>
          {a.title}
        </button>
      ))}
    </div>
  )
}