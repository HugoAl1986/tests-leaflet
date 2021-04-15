import * as data from '../cities.json';
const CityPosition = (name) => {
        const DatasJson = data.default;
        const cityName = (element) => element.city === name;
        const cityIndex = DatasJson.findIndex(cityName);
        const datasCity = data.default[cityIndex];
        const cityPosition = [datasCity.latitude,datasCity.longitude]
    return cityPosition;
}
 
export default CityPosition;