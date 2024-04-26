import {FC} from 'react';

import {SCREENS} from '../screens';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EpisodeType, SerialItemType} from '../../models/video';

export type VideoViewerParams = SerialItemType &
  Partial<{episode: EpisodeType}>;

export type RootStackParamList = {
  [SCREENS.home]: undefined;
  [SCREENS.videoViewer]: VideoViewerParams;
};

export type RootStackScreenType<SCREENS extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, SCREENS>;
