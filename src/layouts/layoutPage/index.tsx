import {View, Text, SafeAreaView, Pressable} from 'react-native';
import React, {FC} from 'react';
import {LayoutPageProps} from './types';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';

const PageLayout: FC<LayoutPageProps> = ({
  children,
  customStyles,
  titlePage,
}) => {
  return (
    <SafeAreaView style={[styles.main, customStyles]}>
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>{titlePage}</Text>
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
