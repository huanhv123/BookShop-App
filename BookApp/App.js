import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOURS } from './Coler';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './views/Login';
import Register from './views/Register';
import Main from './views/Main';
import 'react-native-gesture-handler';
// // import Count from './redux/screens/Count';
// // import Cart from './redux/screens/Cart';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Tab.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        <Tab.Screen name="HomeScreen" component={HomeNavigatorScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="CartScreen" component={Cart} initialRouteName='Cart'
          options={{
            headerShown:true,
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color,size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          }}
        />
      </Tab.Navigator> */}
        {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#010101" translucent = {true}/> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // headerTitleAlign:'center'
          }}
        >
          {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} /> */}
          <Stack.Screen name="MainScreen" component={Main} />
          {/* <Stack.Screen name="Cart" component={Cart}
            options={{
              headerTitleStyle: {
                fontSize: 26,
                color: COLOURS.black,
                fontWeight: 'bold',
              },
              headerTitle: 'Chi tiết hàng',
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: '#000',
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
