import {ViewStyle} from 'react-native';
import {SerialItemType} from '../../models/video';

export type SerialsListProps = {
  title: string;
  customListStyles?: ViewStyle | Array<ViewStyle>;
  serialsList: Array<SerialItemType>;
};
