import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {ItemBannerProps} from './type';
import {useDispatch} from 'react-redux';
import {resetCurrentVideo} from '../../redux/app/appSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';

const ItemBanner: FC<ItemBannerProps> = ({data}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const handleNavigation = () => {
    dispatch(resetCurrentVideo());
    navigation.navigate(SCREENS.videoViewer, data);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <Image
        style={styles.image}
        source={{
          uri: data.url,
        }}
      />
      <View style={styles.genderContainer}>
        <Text style={[styles.text, styles.genre]}>{data.genre}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title]}>{data.title}</Text>
        <Text style={[styles.text, styles.subTitle]}>{data.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemBanner;
