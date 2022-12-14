// import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { COLOURS } from './Coler';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Login from './views/Login';
import Register from './views/Register';
// import Main from './views/Main';
// import 'react-native-gesture-handler';
// import DetailBook from './views/DetailBook';

export default function App() {
  // const Stack = createNativeStackNavigator();
  return (
    // <Login />
    <Register />
    // <Provider store={store}>
    //   <NavigationContainer>
    //     {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#010101" translucent = {true}/> */}
    //     <Stack.Navigator
    //       screenOptions={{
    //         headerShown: false,
    //         // headerTitleAlign:'center'
    //       }}
    //     >
    //       {/* <Stack.Screen name="Login" component={Login} /> */}
    //       {/* <Stack.Screen name="Register" component={Register} /> */}
    //       {/* <Stack.Screen name="MainScreen" component={Main} /> */}
    //       {/* <Stack.Screen name="Cart" component={Cart}
    //         options={{
    //           headerTitleStyle: {
    //             fontSize: 26,
    //             color: COLOURS.black,
    //             fontWeight: 'bold',
    //           },
    //           headerTitle: 'Chi tiết hàng',
    //           headerStyle: {
    //             backgroundColor: "white",
    //           },
    //           headerTintColor: '#000',
    //         }}
    //       /> */}
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
  );
}


