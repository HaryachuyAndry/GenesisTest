import {ScrollView} from 'react-native';
import React, {FC} from 'react';
import ItemBanner from '../itemBanner';
import {styles} from './styles';
import {ListBannersProps} from './type';

const arrayBanners = [
  {
    id: 1,
    genre: 'Romance',
    title: 'Lethal Limits',
    subtitle: 'Dusti`s Gamble',
    image: 'https://rnkr.tmsimg.com/assets/p18156101_b_s4_ac.jpg',
  },
  {
    id: 2,
    genre: 'Romance',
    title: 'Lethal Limits',
    subtitle: 'Dusti`s Gamble',
    image: 'https://rnkr.tmsimg.com/assets/p18156101_b_s4_ac.jpg',
  },
  {
    id: 3,
    genre: 'Romance',
    title: 'Lethal Limits',
    subtitle: 'Dusti`s Gamble',
    image: 'https://rnkr.tmsimg.com/assets/p18156101_b_s4_ac.jpg',
  },
  {
    id: 5,
    genre: 'Romance',
    title: 'Lethal Limits',
    subtitle: 'Dusti`s Gamble',
    image: 'https://rnkr.tmsimg.com/assets/p18156101_b_s4_ac.jpg',
  },
];

const ListBanners: FC<ListBannersProps> = ({listCustomStiles}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.inner, listCustomStiles]}
      style={{overflow: 'visible'}}>
      {arrayBanners.map(({id, genre, title, subtitle, image}) => (
        <ItemBanner
          key={id}
          genre={genre}
          title={title}
          subtitle={subtitle}
          image={image}
        />
      ))}
    </ScrollView>
  );
};

export default ListBanners;
