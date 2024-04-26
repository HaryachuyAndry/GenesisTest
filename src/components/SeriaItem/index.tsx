import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {SerialItemProps} from './types';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/screens';
import dayjs from 'dayjs';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';
import {RootStackParamList} from '../../navigation/RootNavigation/navigationTypes';
import {useDispatch} from 'react-redux';
import {resetCurrentVideo} from '../../redux/app/appSlice';

const SerialItem: FC<SerialItemProps> = ({data}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {available, title, url} = data;
  const isNotAvailable = dayjs(available).isAfter();

  const dispatch = useDispatch();

  const handleChoose = () => {
    dispatch(resetCurrentVideo());
    !isNotAvailable && navigation.navigate(SCREENS.videoViewer, data);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleChoose}>
      <View>
        <Image
          style={styles.image}
          source={{uri: url}}
          blurRadius={isNotAvailable ? 20 : 0}
        />
        {isNotAvailable && (
          <View style={styles.blockedContainer}>
            <SvgXml xml={ICONS.lock} />
          </View>
        )}
      </View>
      {isNotAvailable && (
        <Text style={styles.textNotAvailable}>
          {'Coming ' + dayjs(available).format('MMMM, D')}
        </Text>
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SerialItem;
