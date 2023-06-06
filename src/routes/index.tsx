import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { MovieDetails } from "../screens/MovieDetails";
import { Register } from "../screens/Register";
import { MaterialCommunityIcons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Rota de tela única
function DetailScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditarScreen"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Rota do BottomTabNavigator
function Routes() {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen
        name="Filme"
        component={Home}
        options={{title: 'Cadastrar',
          tabBarIcon:({size,color}) => (
              <MaterialCommunityIcons name="home"
              size={size} color={color} />
          )
      }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Register}
        options={{title: 'Cadastrar',
          tabBarIcon:({size,color}) => (
              <MaterialCommunityIcons name="details"
              size={size} color={color} />
          )
      }}
      />
    </Tab.Navigator>
  );
}

// Rota do StackNavigator
function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen
          name="App"
          component={Routes}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetailScreen}
       
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;