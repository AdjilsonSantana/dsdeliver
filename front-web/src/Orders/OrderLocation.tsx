import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../api';


const initialPosition = {
    lat:53.17806,
    lng:22.05935
}

type Place={
    label?: string;
    value?: string;
    position:{
        lat:number;
        lng:number;
    };
}

function OrderLocation() {

    const [address, setAddress] = useState<Place>({
      position: initialPosition  
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            },
            place: item.place_name,
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        // onChangeLocation({
        //   latitude: place.position.lat,
        //   longitude: place.position.lng,
        //   address: place.label!
        // });
      }; 
    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h4 className="order-location-title">
                    where should we deliver your order?
                </h4>
                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Search my address"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
                </div>
                <MapContainer 
                    center={address.position} 
                    zoom={11}  
                    key={address.position.lat}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default OrderLocation;