import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 200,
    width: 320,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  genderContainer: {
    marginLeft: 20,
    marginTop: 16,
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: COLORS.backGround,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  titleContainer: {
    marginLeft: 20,
    marginBottom: 22,
  },
  text: {
    color: COLORS.white,
    letterSpacing: 0.3,
  },
  genre: {
    textTransform: 'uppercase',
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 12,
  },
  title: {
    fontFamily: FONT_FAMILIES.SFProDisplay.semiBold,
    fontSize: 24,
  },
  subTitle: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 16,
    marginTop: 6,
    color: COLORS.whiteGray,
  },
});
