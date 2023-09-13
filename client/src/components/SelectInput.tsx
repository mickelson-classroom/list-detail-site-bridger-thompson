import { FC, ChangeEvent } from "react";

interface SelectInputProps {
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
  label?: string;
}

export const SelectInput: FC<SelectInputProps> = ({ options, value, onChange, label }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <div className="row">
        <div className="col-auto">
          <select className="form-select" value={value} onChange={handleChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

