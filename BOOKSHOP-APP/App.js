import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './views/Login';
import Register from './views/Register';
import {CustomerNavigatorScreen,AdminNavigatorScreen} from './views/Main';
import 'react-native-gesture-handler';
import DropdownComponent from './views/DropdownComponent';
import Statistical from './views/Admin/Statistical';
import Home from './views/Home';
import DetailBook from './views/DetailBook';
import Cart from './views/Customer/Cart';
import CreateBook from './views/Admin/book/CreateBook';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <Provider store={store}>
      {/* <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // headerTitleAlign:'center'
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="CustomerScreen" component={CustomerNavigatorScreen} />
          <Stack.Screen name="AdminScreen" component={AdminNavigatorScreen} />
          {/* <Stack.Screen name="Home" component={Home} /> */}
        </Stack.Navigator>
      </NavigationContainer> */}
      <CreateBook/>
    </Provider> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
