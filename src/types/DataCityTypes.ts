export interface DataCityMainTypes {
    main: { 
        fells_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp_max: number,
        temp_min: number,
     }
}


export interface DataCityTypes {
    base: string;
    clouds: { all: number };
    cod: number;
    coord: { lon: number, lat: number };
    dt: number;
    id: number;
    main: DataCityMainTypes;
    name: string;
    timezone: number;
    visibility: number;
    weather: {
        decription: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}