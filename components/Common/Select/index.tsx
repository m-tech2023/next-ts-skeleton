import Option from "@/types/components/Common/Select/Option";
import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

interface SelectProps {
  id?: string;
  name: string;
  value?: string;
  className?: string;
  required?: boolean;
  options?: Array<Option>;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  className,
  id,
  name,
  value,
  required,
  options,
  onChange,
}) => {
  return (
    <select 
      className={className ? className : styles.select}
      id={id} 
      name={name} 
      value={value} 
      required={required} 
      onChange={onChange}
    >
      {options.map((option: Option, key: number) => {
        return (
          <option key={key} value={option.value}>
            {option.title}
          </option>
        );
      })}  
    </select>
  );
}

export default Select;