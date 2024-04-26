import {ViewStyle} from 'react-native';
import {SerialItemType} from '../../models/video';

export type BannersListProps = {
  customListStyles?: ViewStyle | Array<ViewStyle>;
  bannersArray: Array<SerialItemType>;
};
