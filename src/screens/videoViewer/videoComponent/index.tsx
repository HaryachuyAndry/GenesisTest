import {View, Text, Pressable} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../../assets/icons';
import VideoControl from '../../../components/videoControl';
import {VideoComponentProps} from './types';
import {useDispatch} from 'react-redux';
import {
  selectContinueWatching,
  setCurrentTime as setCurrentTimeAction,
} from '../../../redux/app/appSlice';
import {useTypedSelector} from '../../../redux/hooks/useTypedSelector';

const VideoComponent: FC<VideoComponentProps> = ({
  navigation,
  dataVideo,
  customHeight,
  currentElement,
  index,
}) => {
  const dispatch = useDispatch();

  const {time} = useTypedSelector(selectContinueWatching);

  const videoRef = useRef<Video>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  const [showControl, setShowControl] = useState<boolean>(true);

  useEffect(() => {
    if (currentElement === index) {
      setCurrentTime(time || 0);
      videoRef.current?.seek(time || 0);
      setPlay(true);
    } else {
      onEnd();
    }
  }, [currentElement]);

  useEffect(() => {
    play &&
      setTimeout(() => {
        setShowControl(false);
      }, 10000);
  }, [play]);

  const onSeek = (data: number) => {
    videoRef.current?.seek(data);
    setCurrentTime(data);
  };

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
    dispatch(setCurrentTimeAction(data.currentTime));
  };

  const onLoadEnd = (data: OnLoadData) => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    // videoRef.current?.seek(0);
    setPlay(false);
  };

  const handleControls = () => {
    if (showControl) {
      setShowControl(false);
    } else {
      setShowControl(true);
    }
  };

  return (
    <View style={{...styles.videoContainer, height: customHeight}}>
      <Pressable style={styles.btnVideo} onPress={handleControls}>
        <Video
          ref={videoRef}
          source={{
            uri: dataVideo.url,
          }}
          style={styles.video}
          resizeMode="contain"
          controls={false}
          repeat={false}
          paused={!play}
          playInBackground={false}
          onProgress={onProgress}
          onLoad={onLoadEnd}
          onEnd={onEnd}
          muted
        />
      </Pressable>

      {showControl && (
        <>
          <View style={styles.header}>
            <Pressable
              style={styles.closeBtn}
              onPress={() => navigation.goBack()}>
              <SvgXml xml={ICONS.cross} />
            </Pressable>
            <Text style={styles.title}>{dataVideo.title}</Text>
          </View>
          <View style={styles.controlContainer}>
            <VideoControl
              currentTime={currentTime}
              duration={duration > 0 ? duration : 0}
              onSlideStart={() => {
                setPlay(false);
              }}
              onSlideComplete={() => {
                setPlay(true);
              }}
              onSlideCapture={onSeek}
              onPlay={setPlay}
              play={play}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default VideoComponent;
