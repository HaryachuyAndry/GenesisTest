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
    <View style={[styles.main, customStyles]}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>{titlePage}</Text>
          <View>
            <Pressable>
              <SvgXml xml={ICONS.search} />
            </Pressable>
          </View>
        </View>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default PageLayout;
