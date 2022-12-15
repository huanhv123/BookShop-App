import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './views/Login';
import Register from './views/Register';
import Main from './views/Main';
import 'react-native-gesture-handler';
import DropdownComponent from './views/DropdownComponent';
import Statistical from './views/Admin/Statistical';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // headerTitleAlign:'center'
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainScreen" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider> 
    // <DropdownComponent/>
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
