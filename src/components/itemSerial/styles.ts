import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {},
  image: {
    width: 125,
    height: 150,
    borderRadius: 16,
    marginBottom: 8,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.medium,
    letterSpacing: 0.3,
    fontSize: 14,
  },
  textNotAvailable: {
    color: COLORS.lightBlue,
    marginBottom: 4,
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: FONT_FAMILIES.SFProDisplay.semiBold,
    letterSpacing: 0.3,
  },
  blockedContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    transform: [{translateY: -25}],
  },
});
