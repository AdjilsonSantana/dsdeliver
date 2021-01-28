import axios from "axios";	
import { OrderPayLoad } from "./Orders/types";	

const API_URL = (`https://dsdeliveras.herokuapp.com`);	
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;	

export function fetchProducts(){	
    return axios(`${API_URL}/products`)	
}	

export function fetchLocalMapBox(local: string){	
    return axios (`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${`pk.eyJ1IjoiYWRqaWxzb24iLCJhIjoiY2trZWpiYjV1MGs1dTJ3cXR3d21hajBteCJ9._gwJ-kFnNuVgrh_yqBhceQ`}`)	
}	

export function saveOrder(payload : OrderPayLoad){	
    return axios.post(`${API_URL}/orders`, payload)	
}
