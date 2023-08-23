import { FC } from "react";


export const FilterAssignments: FC<{
  filter: string;
  setFilter: (s: string) => void;
}> = ({ filter, setFilter }) => {
  return (
    <div className="row my-2">
      <div className="col-2 my-auto text-end">Filter:</div>
      <div className="col">
        <input type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="form-control" />
      </div>
    </div>
  )
}