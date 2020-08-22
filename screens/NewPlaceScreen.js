import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from "../constants/Colors";
import  * as placesActions from '../store/places-actions';
import ImagePicker from '../components/ImagePicker';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    const dispatch = useDispatch();

    const onTitleChange = text => {
        setTitleValue(text);
    }

    const onImageTaken = imagePath  => {
        setSelectedImage(imagePath);
    }

    const onSavePlace = () => {
        console.log(selectedImage);
        dispatch(placesActions.addPlace(titleValue, selectedImage));
        props.navigation.goBack();
    };

    return(
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>headerTitle</Text>
                <TextInput style={styles.textInput} onChangeText={onTitleChange} value={titleValue} />
                <ImagePicker onImageTaken={onImageTaken} />
                <Button title="Save Place" color={Colors.primary} onPress={onSavePlace} />
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