import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.backGround,
    paddingHorizontal: 16,
    overflow: 'visible',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'visible',
  },
  textHeader: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    fontSize: 20,
  },
});
