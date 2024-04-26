import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  titleText: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: FONT_FAMILIES.SFProDisplay.semiBold,
  },
  list: {overflow: 'visible', marginTop: 20},
  listContent: {gap: 18},
});
