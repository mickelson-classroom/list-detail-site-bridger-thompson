import { useState } from "react";
import { AssignmentList } from "./AssignmentList";
import { FilterAssignments } from "./FilterAssignments";
import { AssignmentDetails } from "./AssignmentDetails";
import { AddAssignment } from "./AddAssignments";

export interface Assignment {
  title: string;
  description: string;
  points: number;
}

export const App = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      title: "HW1",
      description: "Read Chapter 1",
      points: 10,
    }
  ]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment>();
  const [filter, setFilter] = useState("");
  const filteredAssignments = assignments.filter(a => a.title.toLowerCase().includes(filter.toLowerCase()))

  const addAssignment = (a: Assignment) => {
    setAssignments([...assignments, a])
  }

  const deleteAssignment = (assignment: Assignment) => {
    setAssignments(assignments.filter(a => a !== assignment))
    setSelectedAssignment(undefined)
  }
  return (
    <div className="container">
      <h1 className="text-center">Homework</h1>
      <div className="row">
        <div className="col-md-4 border rounded pb-3 bg-light">
          <FilterAssignments filter={filter} setFilter={setFilter} />
          <AssignmentList
            assignments={filteredAssignments}
            selectedAssignment={selectedAssignment}
            setSelectedAssignments={setSelectedAssignment} />
          <AddAssignment addAssignment={addAssignment} />
        </div>
        <div className="col-md mt-2 md-md-0">
          {selectedAssignment &&
            <AssignmentDetails assignment={selectedAssignment}
              deleteHandler={deleteAssignment} />
          }
        </div>
      </div>
    </div>
  );
}
