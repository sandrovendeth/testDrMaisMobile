const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Rota de tela única
function DetalhesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditarScreen"
        component={Detalhes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Rota do BottomTabNavigator
function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Livros Disponíveis"
        component={Dashboard}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: { margin: 15 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Doar"
        component={Cadastro}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: { margin: 15 },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// Rota do StackNavigator
function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={AppRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;