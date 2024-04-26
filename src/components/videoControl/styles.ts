import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlBtn: {},
  progressContainer: {
    flex: 1,
    marginLeft: 20,
  },
  progressLine: {},
  timePosition: {},
  timeFullDuration: {},
  timeContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -4,
  },
  text: {
    color: COLORS.whiteGray,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 13,
  },
});
