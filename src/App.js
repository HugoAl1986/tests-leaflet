import React, {useState} from 'react';
import styled from 'styled-components';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import CityPosition from './component/CityPosition';
import * as data from './cities.json';

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
  
  const [position,setPosition] = useState([49.195184999999995, 2.043914]);
  const [map, setMap] = useState(null);
  const [popupMessage, setPopupMessage]=useState("Bienvenue à Henonville !")
  const [city, setCity] = useState(data.default);
 
  
  const changeCity = (e) => {
    const LatLng = CityPosition(e.currentTarget.name);
      setPopupMessage("Bienvenue à "+e.currentTarget.name+ ' !')
      setPosition(LatLng);
      if (map) map.flyTo(LatLng,8);
  }

  console.log(typeof data.default)
  return(
      <ContainerGlobal> 
          <ContainerVille>
            { city.map((newdata) =>     
                <Button key={newdata.rank} onClick ={changeCity} name={newdata.city}>{newdata.city}</Button>                       
            )}
          </ContainerVille>  
          <MapContainer id="mapid" center={position} zoom={8} scrollWheelZoom={false} whenCreated={map => setMap(map)}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  {popupMessage}
                </Popup>
              </Marker>
          </MapContainer>
      </ContainerGlobal>
  ) 
}

export default App;
