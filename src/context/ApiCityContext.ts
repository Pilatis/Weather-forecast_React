import { createContext } from "react";
import ApiCityTypes from "../types/ApiCityTypes";

const ApiCityContext = createContext<ApiCityTypes>({} as ApiCityTypes);

export default ApiCityContext;