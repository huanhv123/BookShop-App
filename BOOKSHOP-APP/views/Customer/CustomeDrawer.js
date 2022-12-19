import React, { useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { fetchGetCustomerById ,DeleteAcount } from '../../redux/actions/customersAction';
import { LogOut } from '../../redux/actions/accountAction';
const CustomDrawer = props => {
    const isCustomer = useSelector((state) => state.customer.isCustomer)
    const account = useSelector((state) => state.account.account)
    const customer = useSelector((state) => state.customer.customer)
    const dispatch = useDispatch();
    useEffect(() => {
        if(isCustomer == false && customer.id == null){
            console.log('sdsd')
            dispatch(fetchGetCustomerById(account.id))
        }
        console.log(customer)
    }, [isCustomer]);
    return (
        <View  style={{flex:1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#fff', flex: 1 }}>
                <ImageBackground
                    source={require('../../assets/images/background.png')}
                    resizeMode='stretch'
                    style={{ padding: 20 ,justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                    >
                        <Image
                            source={require('../../assets/images/facebook.png')}
                            style={{ height: 80, width: 80,  }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            // fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                        }}>
                        {customer.nameCus}
                    </Text>
                </ImageBackground>
                <View style={{  backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity onPress={() => {
                dispatch(DeleteAcount())
                dispatch(LogOut())
                props.navigation.navigate('Login')
                }}
                style={{ paddingVertical: 15, marginLeft: 17 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 280 }}>
                    <Ionicons name="exit-outline" size={30} />
                    <Text
                        style={{
                            fontSize: 20,
                            marginLeft: 5,
                        }}>
                        Đăng xuất
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CustomDrawer;