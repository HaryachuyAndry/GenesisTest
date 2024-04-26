import {View, Text, SafeAreaView, Pressable} from 'react-native';
import React, {FC} from 'react';
import {PageLayoutProps} from './types';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';

const PageLayout: FC<PageLayoutProps> = ({
  children,
  customStyles,
  pageTitle,
}) => {
  return (
    <SafeAreaView style={[styles.container, customStyles]}>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{pageTitle}</Text>
          <View>
            <Pressable>
              <SvgXml xml={ICONS.search} />
            </Pressable>
          </View>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default PageLayout;
