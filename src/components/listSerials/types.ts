import {ViewStyle} from 'react-native';
import {ItemSerialType} from '../../models/video';

export type ListSerialsProps = {
  title: string;
  listCustomStiles?: ViewStyle | Array<ViewStyle>;
  listSerials: Array<ItemSerialType>;
};
