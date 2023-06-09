import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { MovieDetails } from "../screens/MovieDetails";
import { Register } from "../screens/Register";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FilmDTO } from "../dtos/FilmDTO";

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
      <Stack.Screen
        name="RegisterScreen"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Rota do BottomTabNavigator
function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Filme"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="movie-check" size={35} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="pencil-circle" size={35} color={color} />
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
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="App"
          component={Routes}
        />

       <Stack.Screen
        name="EditarScreen"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="RegisterScreen"
        component={Register}
        options={{ headerShown: false }}
      />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
