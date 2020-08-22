import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import { ICON_BUTTON_ADD_PLACE } from '../constants/ButtonIconIds';
import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/places-actions';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(placesActions.loadPlaces());
    }, [dispatch]);

    return(
        <FlatList 
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => <PlaceItem image={itemData.item.imageUri} title={itemData.item.title} address={null}
                onSelect={() =>{
                    props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        }) }
                    }  
                />
            }
        />
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

export default PlacesListScreen;

