import {ScrollView} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenType} from '../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';
import PageLayout from '../../layouts/PageLayout';
import BannersList from '../../components/BannersList';
import {styles} from './styles';
import SerialsList from '../../components/SerialsList';
import ContinueWatching from '../../components/ContinueWatching';
import {
  romanceSerialsList,
  trendingSerialsList,
} from '../../mocData/serialsList';

const Home: FC<RootStackScreenType<SCREENS.home>> = () => {
  return (
    <PageLayout pageTitle="Home">
      <ScrollView
        style={{overflow: 'visible'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <BannersList
          customListStyles={styles.bannersList}
          bannersArray={trendingSerialsList}
        />
        <ContinueWatching customStyles={styles.serialsList} />
        <SerialsList
          title="Trending Now"
          customListStyles={styles.serialsList}
          serialsList={trendingSerialsList}
        />
        <SerialsList
          title="Top Romance"
          customListStyles={styles.serialsList}
          serialsList={romanceSerialsList}
        />
      </ScrollView>
    </PageLayout>
  );
};

export default Home;
