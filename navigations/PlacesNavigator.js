import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesListDetail from '../screens/PlacesListScreen';
import { MyColor } from '../assets/colors'
import PlacesListScreen from '../screens/PlacesListScreen';
const PlacsNavigator = createStackNavigator({
    places: PlacesListScreen,
    Map: MapScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === "ios" ? MyColor.primary : MyColor.primary
            },
            headerTintColor: Platform.OS === "ios" ? 'red' : MyColor.background
        }
    }

)
export default createAppContainer(PlacsNavigator);