import { createContext } from "react";
import SearchTypes from "../types/SearchTypes";

const SearchContext = createContext<SearchTypes>({} as SearchTypes);

export default SearchContext;