import React, {useState} from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import PositionVille from './component/PositionVille';

const ContainerGlobal = styled.div`
padding : 1rem;
display : flex;
border : solid 1px black
`;

const ContainerVille = styled.div`
display : flex;
flex-direction : column;
padding : 1rem;
margin-right:0.5rem;
border : solid 1px black;
width : 30%;
`;
const Button = styled.button`
margin : 1rem 0;
padding : 1rem 0.5rem;
border : solid 1px grey;
background : transparent;
width : auto;
`;


const App = () => {
  
  const [positionInitiale,setPositionInitiale] = useState([49.195184999999995, 2.043914]);
  const [map, setMap] = useState(null);
  
  const changeCity = (e) => {
    const LatLng = PositionVille(e.currentTarget.name);
    console.log(LatLng);
    setPositionInitiale(LatLng);
    if (map) map.flyTo(LatLng,8);
  }

  return(
      <ContainerGlobal> 
          <ContainerVille>
            <Button onClick={changeCity} name="Los Angeles">Los Angeles</Button>
            <Button onClick={changeCity} name="Detroit">Detroit</Button>
            <Button onClick={changeCity} name="Las Vegas"><a href="">Las Vegas</a></Button>
          </ContainerVille>  
          <MapContainer id="mapid" center={positionInitiale} zoom={8} scrollWheelZoom={false} whenCreated={map => setMap(map)}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={positionInitiale}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
          </MapContainer>
      </ContainerGlobal>
  ) 
}


export default App;
