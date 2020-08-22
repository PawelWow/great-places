import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const PlaceDetailScreen = props => {
    return(
        <View>
            <Text>Places list screen</Text>
        </View>
    );
}

PlaceDetailScreen.navigationOptions = {
    headerTitle: 'Place details'
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;