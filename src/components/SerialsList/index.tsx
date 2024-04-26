import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import {SerialsListProps} from './types';
import {styles} from './styles';
import SerialItem from '../SeriaItem';

const SerialsList: FC<SerialsListProps> = ({
  title,
  customListStyles,
  serialsList,
}) => {
  return (
    <View style={[customListStyles]}>
      <Text style={styles.titleText}>{title}</Text>
      <FlatList
        data={serialsList}
        contentContainerStyle={styles.listContent}
        style={styles.list}
        renderItem={({item}) => <SerialItem data={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i.id}
      />
    </View>
  );
};

export default SerialsList;
