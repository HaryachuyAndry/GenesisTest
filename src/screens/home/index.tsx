import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenType} from '../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';
import PageLayout from '../../layouts/layoutPage';
import ListBanners from '../../components/listBanners';
import {styles} from './styles';
import ListSerials from '../../components/listSerials';
import ContinueWatching from '../../components/continueWatching';
import {
  listRomanceSerials,
  listTrendingSerials,
} from '../../mocData/listSerials';

const Home: FC<RootStackScreenType<SCREENS.home>> = ({navigation}) => {
  return (
    <PageLayout titlePage="Home">
      <ScrollView
        style={{overflow: 'visible'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <ListBanners listCustomStiles={styles.listBanners} />
        <ContinueWatching customStyles={styles.listSerials} />
        <ListSerials
          title="Trending Now"
          listCustomStiles={styles.listSerials}
          listSerials={listTrendingSerials}
        />
        <ListSerials
          title="Top Romance"
          listCustomStiles={styles.listSerials}
          listSerials={listRomanceSerials}
        />
      </ScrollView>
    </PageLayout>
  );
};

export default Home;
