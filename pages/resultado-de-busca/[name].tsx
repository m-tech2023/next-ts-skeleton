import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import ComponentSearchInput from "@/components/SearchComponents/input";
import SearchService, { Pokemon } from "@/services/search/search.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const SearchPage = () => {
  const router = useRouter();
  const searchName = router.query.name;
  const [searchResult, setSearchResult] = useState<Pokemon>();

  useEffect(() => {
    handleSearch();
  }, [searchName]);

  const handleSearch = async () => {
    try {
      if (typeof searchName === "string") {
        const res = await SearchService.getSearchPokemons(searchName);
        setSearchResult(res);
      }
    } catch (error) {
      console.error("Nada encontrado:", error);
      setSearchResult(undefined);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_breadcrumb}>
        <BreadCrumb lastText={styles.lastName}
        />
      </div>
      <div className={styles.container_input_search}>
        <ComponentSearchInput
          classNameForm={styles.form}
          className={styles.input}
          classNameIcon={styles.icon}
          placeholder="Digite aqui..."
          type="text"
        />
      </div>
      <div className={styles.container_header}>
        <Header title={`Resultados para "${searchName}"`} />
      </div>
      <div className={styles.container_data}>
        {searchResult ? (
          <>
            <p>{searchResult?.name}</p>
            <img
              src={
                searchResult?.sprites.other["official-artwork"].front_default
              }
            />
          </>
        ) : (
          <>
            <p>Nada encontrado com: {searchName}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default SearchPage;
