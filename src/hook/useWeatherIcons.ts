import React from 'react';
import useSearch from './useSearch';

import ClearSky from '../assets/images/01d@2x.png';
import OvercastClounds from '../assets/images/02d@2x.png';
import Storm from '../assets/images/03d@2x.png';
import LightRain from '../assets/images/09d@2x.png';
import BrokenCloud from '../assets/images/04d@2x.png';
import FewClouds from '../assets/images/02d@2x.png';
import ShowerRain from '../assets/images/09d@2x.png';
import Rain from '../assets/images/10d@2x.png';
import Thunderstorm from '../assets/images/11d@2x.png';
import Snow from '../assets/images/13d@2x.png';
import Mist from '../assets/images/50d@2x.png';

interface WheatherIconsValues {
  text: string | undefined;
  icon: string | undefined;
}

const useWeatherIcons = (): WheatherIconsValues => {
  const { dataCity } = useSearch();

  const wheather = dataCity?.weather[0]?.description;

  const handleWheatherIcons = (): WheatherIconsValues => {
    switch (wheather) {
      case 'clear sky':
        return { text: 'Céu limpo', icon: ClearSky };
      case 'overcast clouds':
        return { text: 'Nuvens nubladas', icon: OvercastClounds };
      case 'scattered clouds':
        return { text: 'Nuvens dispersas', icon: Storm };
      case 'light rain':
        return { text: 'Chuva fraca', icon: LightRain };
      case 'broken clouds':
        return { text: 'Nuvens claras', icon: BrokenCloud };
      case 'few clouds':
        return { text: 'Poucas nuvens', icon: FewClouds };
      case 'shower rain':
        return { text: 'Chuva forte', icon: ShowerRain };
      case 'rain':
        return { text: 'Chuva', icon: Rain };
      case 'thunderstorm':
        return { text: 'Temporal', icon: Thunderstorm };
      case 'snow':
        return { text: 'Nevando', icon: Snow };
      case 'mist':
        return { text: 'Névoa', icon: Mist };
      default:
        return { text: undefined, icon: undefined };
    }
  };

  const { text, icon } = handleWheatherIcons();

  return {
    text,
    icon
  };
};

export default useWeatherIcons;
