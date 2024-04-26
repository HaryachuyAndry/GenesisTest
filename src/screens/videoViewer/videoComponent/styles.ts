import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {FONT_FAMILIES} from '../../../assets/fonts';

export const styles = StyleSheet.create({
  inner: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 4,
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    fontSize: 22,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  closeBtn: {
    position: 'absolute',
    left: 0,
  },
  video: {
    flex: 1,
  },
  controlContainer: {
    marginBottom: 8,
    marginHorizontal: 16,
  },
  btnVideo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
