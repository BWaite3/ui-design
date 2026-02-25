import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

function renderSlot(content, textStyle) {
  if (content == null) return null;
  if (typeof content === 'string') return <Text style={textStyle}>{content}</Text>;
  return content;
}

function HeaderRow({
  left,
  middle,
  right,
  backgroundColor = colors.headerDefault,
  textColor = colors.textPrimary,
  borderColor,
  borderWidth = 1,
  fontSize = typography.headerFontSize,
  fontWeight = typography.headerFontWeight,
}) {
  const isMiddleOnly = middle != null && left == null && right == null;
  const textStyle = { color: textColor, fontSize, fontWeight };
  const borderStyle = borderColor
    ? { borderBottomWidth: borderWidth, borderBottomColor: borderColor }
    : null;

  return (
    <View style={[styles.header, { backgroundColor }, borderStyle]}>
      {!isMiddleOnly && <View style={styles.slotLeft}>{renderSlot(left, textStyle)}</View>}
      {middle != null && (
        <View style={isMiddleOnly ? styles.slotFull : styles.slotMiddle}>
          {renderSlot(middle, textStyle)}
        </View>
      )}
      {!isMiddleOnly && <View style={styles.slotRight}>{renderSlot(right, textStyle)}</View>}
    </View>
  );
}

export default function GameCardHeader({
  rows,
  left,
  middle,
  right,
  backgroundColor = colors.headerDefault,
  textColor = colors.textPrimary,
  borderColor,
  borderWidth = 1,
  fontSize = typography.headerFontSize,
  fontWeight = typography.headerFontWeight,
}) {
  if (rows) {
    return <>{rows.map((row, i) => <HeaderRow key={i} {...row} />)}</>;
  }
  return (
    <HeaderRow
      left={left}
      middle={middle}
      right={right}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      fontSize={fontSize}
      fontWeight={fontWeight}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.rowPaddingH,
    paddingVertical: spacing.sm,
  },
  slotFull: { flex: 1, alignItems: 'center' },
  slotLeft: { flex: 1, alignItems: 'flex-start' },
  slotMiddle: { flex: 1, alignItems: 'center' },
  slotRight: { flex: 1, alignItems: 'flex-end' },
});
