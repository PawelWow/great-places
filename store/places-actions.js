import * as FileSystem from 'expo-file-system';
import { insertPlace, fetchPlaces } from '../helpers/db';
import { Alert } from 'react-native';

import SECRETS from '../secrets';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';

export const addPlace = (title, image, location) => {
    return async dispatch => {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${SECRETS.googleApiKey}`
          );
      
          if (!response.ok) {
              
            throw new Error('Something went wrong!');
          }
      
          const resData = await response.json();
          if (!resData.results) {
            throw new Error('Something went wrong!');
          }
      
          let address = `Coordinates: ${location.lat},${location.lng}` ;
          if(resData.status === 'REQUEST_DENIED'){
            Alert.alert("Unauthorized", 
            "The Api is not authorized. This funtionality is disabled and the place address cannot be resolved.", [{text: "OK"}])
          }
          else
          {
            address = resData.results[0].formatted_address;
          }
        
        const fileName = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            });

            const dbResult = await insertPlace(
                title,
                newPath,
                address,
                location.lat,
                location.lng
        );

            dispatch({
                type: ADD_PLACE, placeData: {
                    id: dbResult.insertId,
                    title: title,
                    image: newPath,
                    address: address,
                    coords: {
                      lat: location.lat,
                      lng: location.lng
                    }
                } });
        }catch(err) {
            console.log(err);
            throw err;
        }
    };
};

export const loadPlaces = () => {
    return async dispatch => {

        try {
            const dbResult = await fetchPlaces();
            dispatch({ type: SET_PLACES, places: dbResult.rows._array });

        }catch(err) {
            throw err;
        }
    }
};