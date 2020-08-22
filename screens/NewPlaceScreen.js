import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from "../constants/Colors";
import  * as placesActions from '../store/places-actions';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();

    const onTitleChange = text => {
        setTitleValue(text);
    }

    const onImageTaken = imagePath  => {
        setSelectedImage(imagePath);
    }

    const onLocationPicked = useCallback(location => {
        setSelectedLocation(location);
      }, []);

    const onPlaceSave = () => {
        dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation));
        props.navigation.goBack();
    };

    return(
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={onTitleChange} value={titleValue} />
                <ImagePicker onImageTaken={onImageTaken} />
                <LocationPicker navigation={props.navigation} onLocationPicked={onLocationPicked} />
                <Button title="Save Place" color={Colors.primary} onPress={onPlaceSave} />
            </View>
        </ScrollView>

    );
}


NewPlaceScreen.navigationOptions = {
    headerTitle: 'New place'
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15    
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;