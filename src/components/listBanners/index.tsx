import {ScrollView} from 'react-native';
import React, {FC} from 'react';
import ItemBanner from '../itemBanner';
import {styles} from './styles';
import {ListBannersProps} from './type';

const ListBanners: FC<ListBannersProps> = ({
  listCustomStiles,
  arrayBanners,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.inner, listCustomStiles]}
      style={{overflow: 'visible'}}>
      {arrayBanners.map(item => (
        <ItemBanner data={item} />
      ))}
    </ScrollView>
  );
};

export default ListBanners;
