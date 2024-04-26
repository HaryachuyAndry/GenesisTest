import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  ViewToken,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {RootStackScreenType} from '../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';
import {styles} from './styles';
import VideoComponent from './videoComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {
  setCurrentEpisode,
  setCurrentSerial,
  setCurrentTime,
} from '../../redux/app/appSlice';
import {listDataSerials} from '../../mocData/listSerials';

const VideoViewer: FC<RootStackScreenType<SCREENS.videoViewer>> = ({
  navigation,
  route,
}) => {
  const flatListRef = useRef<FlatList>(null);

  const {id, episode} = route.params;

  const refFirstRender = useRef(false);

  const arrayVideos =
    listDataSerials[id as keyof typeof listDataSerials].listEpisodes;

  const indexLastEpisode = arrayVideos.findIndex(item => {
    return item.id === episode?.id;
  });

  const dispatch = useDispatch();

  const [currentElement, setCurrentElement] = useState<number>(0);

  useEffect(() => {
    dispatch(setCurrentSerial(route.params));
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: indexLastEpisode === -1 ? 0 : indexLastEpisode,
        animated: false,
      });
    }, 300);

    setTimeout(() => {
      refFirstRender.current = true;
    }, 500);
  }, []);

  const onViewRef = useRef(
    (viewableItems: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      viewableItems.changed[0].isViewable &&
        toggleScrollItem(viewableItems.changed[0].index as number);
    },
  );

  const toggleScrollItem = (v: number) => {
    setCurrentElement(v);
    dispatch(setCurrentEpisode(arrayVideos[v]));
    if (refFirstRender.current) {
      dispatch(setCurrentTime(null));
    }
  };

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 100});

  const height =
    Dimensions.get('window').height -
    useSafeAreaInsets().bottom -
    useSafeAreaInsets().top;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={arrayVideos}
          ref={flatListRef}
          snapToAlignment={'center'}
          snapToInterval={height}
          contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
          disableIntervalMomentum={true}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          keyExtractor={i => i.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <VideoComponent
              index={index}
              currentElement={currentElement}
              navigation={navigation}
              dataVideo={item}
              customHeight={height}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoViewer;
