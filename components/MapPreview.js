import React from 'react';
import { Image, StyleShet, StyleSheet } from 'react-native';

import ENV from '../env';

const MapPreview = () => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}
    &key=${ENV.googleApiKey}`;

    return (
        <View style={styles.locationPicker}>
            <View style={styles.mapPreview}>
                {isFetching ? <ActivityIndicator size="large" color={Colors.primary} /> : (
                    <Text>No location chosen yet!</Text>
                )}
            </View>
            <Button title="Get User Location" color={Colors.primary} onPress={onPickLocation} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default MapPreview;