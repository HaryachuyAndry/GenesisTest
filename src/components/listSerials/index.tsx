import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import {ListSerialsProps} from './types';
import {styles} from './styles';
import ItemSerial from '../itemSerial';

const ListSerials: FC<ListSerialsProps> = ({
  title,
  listCustomStiles,
  listSerials,
}) => {
  return (
    <View style={[listCustomStiles]}>
      <Text style={styles.textTitle}>{title}</Text>
      <FlatList
        data={listSerials}
        contentContainerStyle={{gap: 18}}
        style={{overflow: 'visible', marginTop: 20}}
        renderItem={({item}) => <ItemSerial data={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i.id}
      />
    </View>
  );
};

export default ListSerials;
