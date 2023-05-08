import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import commonStyles from '../CommonStyle';

const SearchSection = ({cartBadge}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={commonStyles.ContainerStyle}>
      <View style={styles.TextInputStyle}>
        <Feather name="search" size={17} color="#000" />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#9BA4B5'}
          value={searchText}
          onChangeText={txt => setSearchText(txt)}
          style={styles.inputStyle}
        />
      </View>
      <TouchableOpacity style={styles.CartIconStyle}>
        <View style={cartBadge && styles.badgeStyle}></View>
        <Feather name="shopping-cart" size={21} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchSection;

const styles = StyleSheet.create({
  TextInputStyle: {
    borderRadius: 9,
    borderColor: 'transparent',
    borderWidth: 1,
    width: Dimensions.get('screen').width / 1.3,
    height: 37,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    justifyContent: 'center',
    backgroundColor: '#fafafc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 50,
    shadowRadius: 60,
    elevation: 20,
  },
  inputStyle: {
    paddingHorizontal: 11,
    alignSelf: 'center',
    width: '100%',
  },
  CartIconStyle: {},
  badgeStyle: {
    backgroundColor: 'red',
    width: 11,
    height: 11,
    borderRadius: 11,
    position: 'absolute',
    left: 17,
    bottom: 17,
  },
});
