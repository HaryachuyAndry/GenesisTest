import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type LayoutPageProps = {
  titlePage: string;
  children: ReactNode;
  customStyles?: ViewStyle | Array<ViewStyle>;
};
