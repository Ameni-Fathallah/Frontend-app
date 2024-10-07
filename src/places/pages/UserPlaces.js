import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world!',
        imageUrl:'https://www.esbnyc.com/sites/default/files/2024-06/ESB-DarkBlueSky.jpg',
        address:'20 W 34th St., New York, NY 10001',
        location:{
            lat:40.74844,
            lng:-73.9959427
        }, 
        creator:'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world!',
        imageUrl:'https://www.esbnyc.com/sites/default/files/2024-06/ESB-DarkBlueSky.jpg',
        address:'20 W 34th St., New York, NY 10001',
        location:{
            lat:40.74844,
            lng:-73.9959427
        }, 
        creator:'u2'
    }
]

const UserPlaces = () => {
    const userId=useParams().userId;
    const loadedPlaces=DUMMY_PLACES.filter(place=>place.creator===userId);
  return (
    <PlaceList items={loadedPlaces}/>)
  
}

export default UserPlaces