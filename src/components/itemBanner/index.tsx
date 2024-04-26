import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {ItemBannerProps} from './type';

const ItemBanner: FC<ItemBannerProps> = ({title, subtitle, genre, image}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.genderContainer}>
        <Text style={[styles.text, styles.genre]}>{genre}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <Text style={[styles.text, styles.subTitle]}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default ItemBanner;
