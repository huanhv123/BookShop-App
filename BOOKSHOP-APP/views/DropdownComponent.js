import React, { useState } from 'react';
import { View, Platform, Text, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const DropdownComponent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 1, value: 'apple' },
    { label: 2, value: 'banana' },
    { label: 3, value: 'dsfsdf' },
  ]);
  return (
    <SafeAreaView style={{ flex: 1,alignItems:'center',justifyContent:'center',padding:10 }}>
      <View >
        <DropDownPicker
        ArrowDownIconComponent={() => {
          return (
            <FontAwesomeIcon
              size={18}
              color={'red'}
              style={{ paddingHorizontal: 5 }}
              name="chevron-down"
            />
          );
        }}
        ArrowUpIconComponent={() => {
          return (
            <FontAwesomeIcon
              size={18}
              color={'red'}
              style={{ paddingHorizontal: 5 }}
              name="chevron-up"
            />
          );
        }}
        open={open}
        value={value}
        items={items}
        setValue={setValue}
        setItems={setItems}
        setOpen={setOpen}
      /> 
      </View>
    </SafeAreaView>
  );
};

export default DropdownComponent;
