import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/RootNavigation/navigationTypes';
import {EpisodeType} from '../../../models/video';

export type VideoComponentProps = {
  index: number;
  currentElement: number;
  navigation: NavigationProp<RootStackParamList>;
  dataVideo: EpisodeType;
  customHeight: number;
};
