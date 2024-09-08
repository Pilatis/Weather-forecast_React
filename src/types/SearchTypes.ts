import { DataCityTypes } from "./DataCityTypes";

type SearchTypes = {
    searchCity: () => void;
    cityValue: string;
    keyWeather: string;
    loading: boolean;
    dataCity: DataCityTypes | undefined;
    isError: boolean;
}

export default SearchTypes;