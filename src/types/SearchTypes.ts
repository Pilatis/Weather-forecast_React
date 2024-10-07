import { RefObject } from "react";
import { DataCityTypes } from "./DataCityTypes";

type SearchTypes = {
    searchCity: () => void;
    cityValue: RefObject<HTMLInputElement>;
    keyWeather: string;
    loading: boolean;
    dataCity: DataCityTypes | undefined;
    isError: boolean;
}

export default SearchTypes;