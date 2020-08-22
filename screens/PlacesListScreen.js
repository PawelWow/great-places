import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { ICON_BUTTON_ADD_PLACE } from '../constans/ButtonIconIds';
import HeaderButton from '../components/HeaderButton';

const PlacesListScreen = props => {
    return(
        <View>
            <Text>Places list screen</Text>
        </View>
    );
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: () => { 
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Add place"
                        iconName={ICON_BUTTON_ADD_PLACE}
                        onPress={() => { 
                            navData.navigation.navigate('NewPlace'); 
                        }}
                    />
                </HeaderButtons>
            );

        }
    }
};

const styles = StyleSheet.create({});

export default PlacesListScreen;

