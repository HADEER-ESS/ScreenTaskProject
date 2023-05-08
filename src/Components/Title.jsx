import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({titleName}) => {
  return <Text style={styles.TextStyle}>{titleName}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  TextStyle: {
    color: '#000',
    fontWeight: '700',
    fontSize: 27,
    paddingVertical: 17,
  },
});
