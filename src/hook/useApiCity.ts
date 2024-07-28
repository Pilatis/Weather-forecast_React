import { useContext } from "react";
import ApiCityContext from "../context/ApiCityContext";

const useApiCity = () => {
    const context = useContext(ApiCityContext);

    return context;
}

export default useApiCity;