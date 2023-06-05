import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home';
import { MovieDetails } from '../screens/MovieDetails';

import { Feather } from '@expo/vector-icons';

const { Navigator, Screen} = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
           <Navigator>
                <Screen 
                    name='Filmes'
                    component={Home}
                    options={{
                        tabBarIcon: ({ size }) => <Feather name="home" size={size}/>
                    }}
                />

                <Screen 
                    name='Cadastrar'
                    component={MovieDetails}
                    options={{
                        tabBarIcon: ({ size }) => <Feather name="user" size={size}/>
                    }}
                />
            </Navigator> 
        </NavigationContainer>
    )
}