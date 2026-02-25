import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

function renderSlot(content, textStyle) {
  if (content == null) return null;
  if (typeof content === 'string') return <Text style={textStyle} numberOfLines={1}>{content}</Text>;
  return content;
}

export default function SelectionRow({
  left,
  right,
  isSelected = false,
  showRadio = true,
  onPress,
  backgroundColor = colors.white,
  textColor = colors.textPrimary,
  borderColor = colors.textPrimary,
}) {
  const textStyle = { color: textColor, fontSize: typography.labelFontSize };

  return (
    <Pressable style={[styles.row, { backgroundColor }]} onPress={onPress}>
      {showRadio && (
        <View style={[styles.radio, { borderColor: isSelected ? borderColor : '#AAAAAA' }]}>
          {isSelected && <View style={[styles.radioFill, { backgroundColor: borderColor }]} />}
        </View>
      )}
      <View style={styles.leftSlot}>{renderSlot(left, textStyle)}</View>
      {right != null && (
        <View style={styles.rightSlot}>{renderSlot(right, { ...textStyle, textAlign: 'right' })}</View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.rowPaddingH,
    paddingVertical: spacing.rowPaddingV,
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorLight,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    flexShrink: 0,
  },
  radioFill: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },
  leftSlot: { flex: 1 },
  rightSlot: { flexShrink: 0, marginLeft: spacing.sm },
});
