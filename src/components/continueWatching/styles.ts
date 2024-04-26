import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  inner: {
    overflow: 'visible',
  },
  text: {color: COLORS.white},
  title: {
    marginBottom: 20,
    fontSize: 22,
    fontFamily: FONT_FAMILIES.SFProDisplay.semiBold,
  },
  container: {
    flexDirection: 'row',
    height: 68,
    backgroundColor: '#3598D0',
    alignItems: 'center',
    paddingLeft: 6,
    borderRadius: 12,
    paddingRight: 24,
  },
  image: {
    width: 44,
    height: 56,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 12,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginVertical: 11,
    marginRight: 'auto',
  },
  titleFilm: {
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    fontSize: 16,
  },
  subtitleFilm: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 14,
  },
});
