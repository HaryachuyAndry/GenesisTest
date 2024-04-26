import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {ContinueWatchingProps} from './types';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';
import {styles} from './styles';
import Swipeout from 'react-native-swipeout';
import {
  resetCurrentVideo,
  selectContinueWatching,
} from '../../redux/app/appSlice';
import {useTypedSelector} from '../../redux/hooks/useTypedSelector';
import {isNull} from 'lodash';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  RootStackParamList,
  VideoViewerParams,
} from '../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';
import {useDispatch} from 'react-redux';

const ContinueWatching: FC<ContinueWatchingProps> = ({customStyles}) => {
  const {serial, episode, time} = useTypedSelector(selectContinueWatching);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: 'rgba(0,0,0,0)',
      onPress: () => {
        dispatch(resetCurrentVideo());
      },
    },
  ];

  if (!!serial && !!episode && !isNull(time)) {
    return (
      <View style={[styles.inner, customStyles]}>
        <Text style={[styles.title, styles.text]}>Continue Watching</Text>
        <Swipeout
          right={swipeoutBtns}
          style={styles.inner}
          backgroundColor={'rgba(0,0,0,0)'}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.videoViewer, {
                ...serial,
                episode,
              } as VideoViewerParams);
            }}
            style={styles.container}>
            <Image source={{uri: serial.url}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={[styles.titleFilm, styles.text]}>
                {serial.title}
              </Text>
              <Text style={[styles.subtitleFilm, styles.text]}>
                {serial.subtitle}
              </Text>
            </View>
            <SvgXml xml={ICONS.arrow} />
          </TouchableOpacity>
        </Swipeout>
      </View>
    );
  }
};

export default ContinueWatching;
