import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const VerticalCards = ({data}) => {
  const renderCardItem = item => {
    return (
      <View style={styles.cardCortainer}>
        <View style={styles.ImageScetion}>
          <Image source={item.image} style={styles.ImageStyle} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 21,
              color: '#000',
              fontWeight: '700',
              paddingVertical: 3,
            }}>
            {item.title}
          </Text>
          <Text style={{fontSize: 15, color: '#D8D8D8', paddingVertical: 3}}>
            {item.desc}
          </Text>
          <Text style={{fontSize: 19, paddingVertical: 3}}>${item.price}</Text>
        </View>
        <View style={styles.ButtonSection}>
          <AntDesign name="arrowright" size={23} color="#fff" />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderCardItem(item)}
      />
    </View>
  );
};

export default VerticalCards;

const styles = StyleSheet.create({
  cardCortainer: {
    backgroundColor: '#ffffff',
    borderRadius: 27,
    padding: 11,
    marginHorizontal: 7,
    elevation: 10,
    marginBottom: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageScetion: {
    width: 75,
  },
  ImageStyle: {
    resizeMode: 'contain',
    backgroundColor: '#D6E8DB',
    borderRadius: 17,
    width: '100%',
    height: Dimensions.get('screen').height / 9,
  },
  ButtonSection: {
    backgroundColor: '#000',
    padding: 7,
    height: 40,
    borderRadius: 9,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 3,
  },
});
