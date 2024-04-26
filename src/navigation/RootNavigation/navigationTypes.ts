import {FC} from 'react';

import {SCREENS} from '../screens';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EpisodeType, ItemSerialType} from '../../models/video';

export type VideoViewerParams = ItemSerialType &
  Partial<{episode: EpisodeType}>;

export type RootStackParamList = {
  [SCREENS.home]: undefined;
  [SCREENS.videoViewer]: VideoViewerParams;
};

export type RootStackScreenType<SCREENS extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, SCREENS>;
