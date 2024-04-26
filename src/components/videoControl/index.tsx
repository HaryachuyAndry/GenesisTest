import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';
import {styles} from './styles';
import Slider from '@react-native-community/slider';
import {VideoControlProps} from './types';

const VideoControl: FC<VideoControlProps> = ({
  currentTime,
  duration,
  onSlideStart,
  onSlideComplete,
  onSlideCapture,
  onPlay,
  play,
}) => {
  const getMinutesFromSeconds = (time: number) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`;
  };

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.controlBtn}
        onPress={() => {
          onPlay(!play);
        }}>
        {!play ? <SvgXml xml={ICONS.play} /> : <SvgXml xml={ICONS.pause} />}
      </Pressable>
      <View style={styles.progressContainer}>
        <Slider
          value={currentTime}
          minimumValue={0}
          maximumValue={duration}
          step={1}
          onValueChange={onSlideCapture}
          onSlidingStart={onSlideStart}
          onSlidingComplete={onSlideComplete}
          minimumTrackTintColor="#FFFF"
          maximumTrackTintColor="rgba(255,255,255,0.5)"
          thumbImage={ICONS.dot}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.text}>{position}</Text>
          <Text style={styles.text}>{fullDuration}</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoControl;
