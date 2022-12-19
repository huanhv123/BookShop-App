import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import DetailBook from './DetailBook';
import Cart from './Customer/Cart';
import Profile from './Customer/Profile';
import HistoryBill from './Customer/HistoryBill';
import AllBooks from './Admin/book/AllBooks';
import CreateBook from './Admin/book/CreateBook';
import EditBook from './Admin/book/EditBook';
import AllCategories from './Admin/category/AllCategories';
import CreateCategory from './Admin/category/CreateCategory';
import EditCategory from './Admin/category/EditCategory';
import AllBills from './Admin/bill/AllBills';
import EditBill from './Admin/bill/EditBill';
import Statistical from './Admin/Statistical'
import EditProfile from './Customer/EditProfile'
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomDrawer from './Customer/CustomeDrawer';
import { DrawerLayout } from 'react-native-gesture-handler';

 const CustomerNavigatorScreen = () => {
    const CustomerNavigator = createDrawerNavigator();
    return (
        <CustomerNavigator.Navigator 
        drawerContent={props => <CustomDrawer   {...props}/>}
        screenOptions={{
            drawerActiveBackgroundColor: '#E5E5E5',
            drawerActiveTintColor: '#000',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
              marginLeft: -25,
            //   fontFamily: 'Roboto-Medium',
              fontSize: 15,
            }, 
        }}>
            <CustomerNavigator.Screen name='HomeScreen' component={HomeNavigatorScreen}
                options={{
                    // headerShown: false,
                    title: 'Trang chủ',
                    drawerIcon: ({size}) => <Ionicons name='home' color='#000' size={size} />
                   
                }}
            />
            <CustomerNavigator.Screen name='Profile' component={Profile}
                options={{
                    // headerShown: false,
                    title: 'Thông tin tài khoản',
                    drawerIcon: ({ size }) => <Icon name='users' color='#000' size={size} />
                }}
            />
            <CustomerNavigator.Screen name="Cart" component={Cart}
                options={{
                    // headerShown: false,
                    title: 'Giỏ hàng',
                    drawerIcon: ({ size }) => <Icon name='shopping-cart' color='#000' size={size} />
                }}
            />
        </CustomerNavigator.Navigator>
    );
}

const HomeNavigatorScreen = () => {
    const HomeNavigator = createNativeStackNavigator();
    return (
        <HomeNavigator.Navigator
            initialRouteName='Home'
        >
            <HomeNavigator.Screen name='Home' component={Home}
                options={{
                    headerShown: false
                }} />

            <HomeNavigator.Screen name='DetailBook' component={DetailBook}
                options={{
                    headerShown: false
                }}
            />
            <HomeNavigator.Screen name='HistoryBill' component={HistoryBill}
                options={{
                    headerShown: false
                }} />
            <HomeNavigator.Screen name='EditProfile' component={EditProfile}
                options={{
                    headerShown: false
                }} />
        </HomeNavigator.Navigator>
    );
}

const AdminNavigatorScreen = () => {
    const AdminNavigator = createDrawerNavigator();
    return (
        <AdminNavigator.Navigator
            initialRouteName='Admin'
        // screenOptions={{
        //     headerShown: false
        // }}
        >
            <AdminNavigator.Screen name='ManagerBook' component={ManagerBookScreen} 
                options={{
                    // headerShown: false,
                    title:'Quản lý sách'
                }}
            />
            <AdminNavigator.Screen name='ManagerCategory' component={ManagerCategoryScreen}
                            options={{
                    // headerShown: false,
                    title:'Quản lý danh mục'
                }} />
            <AdminNavigator.Screen name="ManagerBill" component={ManagerBillScreen} 
                                options={{
                    // headerShown: false,
                    title:'Quản lý hóa đơn'
                }}
            />
            {/* <AdminNavigator.Screen name="Statistical" component={Statistical} 
                                options={{
                    // headerShown: false,
                    title:'Thống kê'
                }}
            /> */}
        </AdminNavigator.Navigator>
    );
}
const ManagerBookScreen = () => {
    const ManagerBook = createNativeStackNavigator();
    return (
        <ManagerBook.Navigator
            initialRouteName='ManagerBook'
        >
            <ManagerBook.Screen name='AllBooks' component={AllBooks} options={{
                headerShown: false
            }} />
            <ManagerBook.Screen name='CreateBook' component={CreateBook}
                options={{
                    headerShown: false
                }} />

            <ManagerBook.Screen name='EditBook' component={EditBook} options={{
                headerShown: false
            }} />
        </ManagerBook.Navigator>
    );
}
const ManagerBillScreen = () => {
    const ManagerBill = createNativeStackNavigator();
    return (
        <ManagerBill.Navigator
            initialRouteName='ManagerBill'
        >
            <ManagerBill.Screen name='AllBills' component={AllBills} options={{
                headerShown: false
            }} />
            <ManagerBill.Screen name='EditBill' component={EditBill} options={{
                headerShown: false
            }} />
        </ManagerBill.Navigator>
    );
}
const ManagerCategoryScreen = () => {
    const ManagerCategory = createNativeStackNavigator();
    return (
        <ManagerCategory.Navigator
            initialRouteName='ManagerCategory'
        >
            <ManagerCategory.Screen name='AllCategories' component={AllCategories}
                options={{
                    headerShown: false
                }} />
            <ManagerCategory.Screen name='CreateCategory' component={CreateCategory} options={{
                headerShown: false
            }} />
            <ManagerCategory.Screen name='EditCategory' component={EditCategory} options={{
                headerShown: false
            }} />
        </ManagerCategory.Navigator>
    );
}

const Main = () => {
    const Main = createNativeStackNavigator();
    return (

        <Main.Navigator initialRouteName='Home'>
              <Main.Screen name='CustomerNavigatorScreen' component={CustomerNavigatorScreen}
                options={{
                    headerShown: false
                }} />
            <Main.Screen name='AdminSreen' component={AdminNavigatorScreen}
                options={{
                    headerShown: false
                }} />
        </Main.Navigator>
    );
}

export {CustomerNavigatorScreen,AdminNavigatorScreen} 

const styles = StyleSheet.create({})