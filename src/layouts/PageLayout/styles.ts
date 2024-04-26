import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    overflow: 'visible',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'visible',
  },
  headerText: {
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    fontSize: 20,
  },
});
