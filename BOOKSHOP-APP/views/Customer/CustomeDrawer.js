import React from 'react';
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

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
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
                        John Doe
                    </Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
                style={{ paddingVertical: 15, marginLeft: 17 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 310 }}>
                    <Ionicons name="exit-outline" size={30} />
                    <Text
                        style={{
                            fontSize: 20,
                            // fontFamily: 'Times-New-Roman',
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