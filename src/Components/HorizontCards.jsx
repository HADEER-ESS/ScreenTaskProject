import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HorizontCards = ({data, setBadge}) => {
  const renderCardItem = item => {
    return (
      <View style={styles.cardStyle}>
        <View style={styles.HeartIcon}>
          <Ionicons name="heart-circle-sharp" size={31} color="#FA6B6C" />
        </View>
        <Image source={item.image} style={styles.ImageStyle} />
        <View style={{marginVertical: 7}}>
          <Text
            style={[
              styles.TextItemStyle,
              {fontWeight: '700', color: '#000', paddingTop: 7},
            ]}>
            {item.title}
          </Text>
          <Text
            style={[styles.TextItemStyle, {fontSize: 17, color: '#D8D8D8'}]}>
            {item.desc}
          </Text>
        </View>
        <View style={styles.priceSectionStyle}>
          <Text style={styles.TextItemStyle}>${item.price}</Text>
          {/* 
          IMPORTANT NOTE :
            Click add button to add item to cart and show cart badge
          */}
          <TouchableOpacity onPress={() => setBadge(true)}>
            <Ionicons name="add-circle-sharp" size={37} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderCardItem(item)}
      />
    </View>
  );
};

export default HorizontCards;

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 27,
    padding: 13,
    marginHorizontal: 11,
    width: Dimensions.get('screen').width / 2,
    elevation: 10,
    marginBottom: 17,
  },
  HeartIcon: {
    position: 'absolute',
    right: 0,
    zIndex: 3,
    padding: 17,
  },
  ImageStyle: {
    resizeMode: 'contain',
    backgroundColor: '#fafaf9',
    borderRadius: 17,
    width: '100%',
    height: Dimensions.get('screen').height / 4,
  },
  TextItemStyle: {
    fontSize: 21,
  },
  priceSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
