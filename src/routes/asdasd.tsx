import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { MovieDetails } from "../screens/MovieDetails";
import { Register } from "../screens/Register";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator ();
const Tab = createBottomTabNavigator();

function DetailsScreen() {
  return (
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}
      >
       <Tab.Screen 
          name="Home"
          component={Home}
          options={{title: 'Filmes',
          tabBarIcon:({size,color}) => (
              <MaterialCommunityIcons name="home"
              size={size} color={color} />
          )
      }}   
          />
          <Tab.Screen 
          name="Register"
          component={Register}
          options={{title: 'Cadastrar',
          tabBarIcon:({size,color}) => (
              <MaterialCommunityIcons name="details"
              size={size} color={color} />
          )
      }}   
          />
      </Tab.Navigator>
  )
}

// Rota do StackNavigator
 function Auth() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown:false}}    
            >   
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="MoveDetails" component={MovieDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

  export default Auth;