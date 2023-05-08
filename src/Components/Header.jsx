import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import commonStyles from '../CommonStyle';

const Header = () => {
  return (
    <View style={commonStyles.ContainerStyle}>
      <TouchableOpacity>
        <Ionicons name="menu" size={19} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.IconStyle, {backgroundColor: '#000'}]}>
        <Ionicons name="person" size={19} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  IconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderRadius: 11,
  },
});
