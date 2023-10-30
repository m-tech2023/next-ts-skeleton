import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

interface ComponentSearchProps {
  type: string;
  placeholder?: string;
}

const ComponentSearchInput: React.FC<ComponentSearchProps> = ({
  type,
  placeholder,
}) => {
  const router = useRouter();
  const [searchName, setSearchName] = useState("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    router.push(`/resultado-de-busca/${searchName.toLocaleLowerCase()}`);
    setSearchName("");
  };

  return (
    <div className={styles.container_input_search}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          value={searchName}
          onChange={(e) => {
            setSearchName(e.currentTarget.value);
          }}
          type={type}
          placeholder={placeholder}
          className={styles.input}
        />
        <FontAwesomeIcon
          onClick={handleSearch}
          icon={faMagnifyingGlass}
          className={styles.icon}
        />
      </form>
    </div>
  );
};
export default ComponentSearchInput;
