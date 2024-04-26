import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type PageLayoutProps = {
  pageTitle: string;
  children: ReactNode;
  customStyles?: ViewStyle | Array<ViewStyle>;
};
