import * as data from '../cities.json';
const PositionVille = (name) => {
        const DatasJson = data.default;
        const ville = (element) => element.city === name;
        const indexVille = DatasJson.findIndex(ville);
        const DatasVille = data.default[indexVille];
        const positionVille = [DatasVille.latitude,DatasVille.longitude]
    return positionVille;
}
 
export default PositionVille;