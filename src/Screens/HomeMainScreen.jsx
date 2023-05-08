import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../Components/Header';
import SearchSection from '../Components/SearchSection';
import Title from '../Components/Title';
import HorizontCards from '../Components/HorizontCards';
import VerticalCards from '../Components/VerticalCards';

const HomeMainScreen = () => {
  const [addToCart, setAddToCart] = useState(false);
  const CardData = [
    {
      id: 1,
      image: require('../../Assets/Images/DummyImage.png'),
      title: 'Item Name',
      desc: 'Description',
      price: 250.3,
    },
    {
      id: 2,
      image: require('../../Assets/Images/DummyImage.png'),
      title: 'New Chair',
      desc: 'Description',
      price: 437.1,
    },
    {
      id: 3,
      image: require('../../Assets/Images/DummyImage.png'),
      title: 'Item Name',
      desc: 'Description',
      price: 150.0,
    },
    {
      id: 4,
      image: require('../../Assets/Images/DummyImage.png'),
      title: 'Minimal Chair',
      desc: 'Description',
      price: 310.7,
    },
    {
      id: 5,
      image: require('../../Assets/Images/DummyImage.png'),
      title: 'Item Name',
      desc: 'loaren',
      price: 170.5,
    },
  ];
  return (
    <View style={{paddingVertical: 23, paddingHorizontal: 23}}>
      <Header />
      <SearchSection cartBadge={addToCart} />
      <Title titleName={'Explore'} />
      <HorizontCards data={CardData} setBadge={setAddToCart} />
      <Title titleName={'Best Selling'} />
      <VerticalCards data={CardData} />
    </View>
  );
};

export default HomeMainScreen;
