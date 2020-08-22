import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const NewPlaceScreen = props => {
    return(
        <View>
            <Text>Places list screen</Text>
        </View>
    );
}


NewPlaceScreen.navigationOptions = {
    headerTitle: 'New place'
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;