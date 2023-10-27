import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

interface ComponentSearchProps {
  type: string;
  placeholder: string;
  className: string;
  classNameIcon: string;
  classNameForm: string;
}

const ComponentSearchInput: React.FC<ComponentSearchProps> = ({
  type,
  placeholder,
  className,
  classNameIcon,
  classNameForm,
}) => {
  const router = useRouter();
  const [searchName, setSearchName] = useState("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    router.push(`/resultado-de-busca/${searchName.toLocaleLowerCase()}`);
    setSearchName("");
  };

  return (
    <>
      <form className={classNameForm} onSubmit={handleSearch}>
        <input
          value={searchName}
          onChange={(e) => {
            setSearchName(e.currentTarget.value);
          }}
          type={type}
          placeholder={placeholder}
          className={className}
        />
        <FontAwesomeIcon
          onClick={handleSearch}
          icon={faMagnifyingGlass}
          className={classNameIcon}
        />
      </form>
    </>
  );
};
export default ComponentSearchInput;
