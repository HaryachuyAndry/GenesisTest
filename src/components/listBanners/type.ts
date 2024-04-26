import {ViewStyle} from 'react-native';
import {ItemSerialType} from '../../models/video';

export type ListBannersProps = {
  listCustomStiles?: ViewStyle | Array<ViewStyle>;
  arrayBanners: Array<ItemSerialType>;
};
