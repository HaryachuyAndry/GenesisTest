import {ScrollView} from 'react-native';
import React, {FC} from 'react';
import BannerItem from '../BannerItem';
import {styles} from './styles';
import {BannersListProps} from './type';

const BannersList: FC<BannersListProps> = ({
  customListStyles,
  bannersArray,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.inner, customListStyles]}
      style={styles.container}>
      {bannersArray.map(item => (
        <BannerItem data={item} />
      ))}
    </ScrollView>
  );
};

export default BannersList;
