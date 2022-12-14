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
import Pay from './Customer/Pay'

const CustomerNavigatorScreen = () => {
    const CustomerNavigator = createDrawerNavigator();
    return (
        <CustomerNavigator.Navigator
            initialRouteName='Customer'
        >
            <CustomerNavigator.Screen name='HomeScreen' component={HomeNavigatorScreen}
            // options={{
            //     headerShown: false
            // }} 

            />
            {/* <CustomerNavigator.Screen name='ManagerBookScreen' component={ManagerBookScreen} /> */}
            {/* <CustomerNavigator.Screen name='ManagerCategoryScreen' component={ManagerCategoryScreen} 
            options={{
                    headerShown: false
                }}
                 />  */}
            <CustomerNavigator.Screen name='Profile' component={Profile} 
            // options={{
            //         headerShown: false
            //     }} 
                />
            <CustomerNavigator.Screen name="Cart" component={Cart} 
            // options={{
            //         headerShown: false
            //     }} 
                />
            <CustomerNavigator.Screen name="Pay" component={Pay} />
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
           
            <HomeNavigator.Screen name='DetailBook' component={DetailBook} />
            <HomeNavigator.Screen name='HistoryBill' component={HistoryBill}  options={{
                headerShown: false
            }} />
            <HomeNavigator.Screen name='EditProfile' component={EditProfile} />


        </HomeNavigator.Navigator>
    );
}

const AdminNavigatorScreen = () => {
    // npn i "@babel/preset-env"
    // npn i "@babel/cors"
    const AdminNavigator = createDrawerNavigator();
    return (
        <AdminNavigator.Navigator
            initialRouteName='Admin'
            // screenOptions={{
            //     headerShown: false
            // }}
        >
            <AdminNavigator.Screen name='ManagerBook' component={ManagerBookScreen} />
            <AdminNavigator.Screen name='ManagerCategory' component={ManagerCategoryScreen} />
            <AdminNavigator.Screen name="ManagerBill" component={ManagerBillScreen} />
            <AdminNavigator.Screen name="Statistical" component={Statistical} />
        </AdminNavigator.Navigator>
    );
}

const ManagerBookScreen = () => {
    const ManagerBook = createNativeStackNavigator();
    return (
        <ManagerBook.Navigator
            initialRouteName='ManagerBook'
        >
            <ManagerBook.Screen name='AllBooks' component={AllBooks}  options={{
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
            <ManagerBill.Screen name='AllBills' component={AllBills}  options={{
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
            <ManagerCategory.Screen name='CreateCategory' component={CreateCategory}  options={{
                    headerShown: false
                }} />
            <ManagerCategory.Screen name='EditCategory' component={EditCategory}  options={{
                    headerShown: false
                }} />
        </ManagerCategory.Navigator>
    );
}


const Main = () => {
    const Main = createNativeStackNavigator();
    return (
        
        <Main.Navigator initialRouteName='Home'>
             <Main.Screen name='CustomerSreen' component={CustomerNavigatorScreen}
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

export default Main

const styles = StyleSheet.create({})