import { FC, ChangeEvent } from "react";

interface RadioGroupProps {
  options: string[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  name: string;
  label: string;
}

export const RadioInput: FC<RadioGroupProps> = ({ options, selectedValue, onChange, name, label }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <div>{label}</div>
      {options.map((option, index) => (
        <div key={index} className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id={`${name}_${index}`}
            name={name}
            value={option}
            checked={option === selectedValue}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor={`${name}_${index}`}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
