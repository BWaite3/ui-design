import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

function renderSlot(content, textStyle, numberOfLines = 1) {
  if (content == null) return null;
  if (typeof content === 'string') {
    return <Text style={textStyle} numberOfLines={numberOfLines}>{content}</Text>;
  }
  return content;
}

function FooterRow({
  left,
  middle,
  right,
  backgroundColor = colors.white,
  textColor = colors.textPrimary,
  borderColor = colors.separatorLight,
  borderWidth = 2,
  fontSize = typography.footerFontSize,
  fontWeight = typography.footerFontWeight,
}) {
  const isMiddleOnly = middle != null && left == null && right == null;
  const textStyle = { color: textColor, fontSize, fontWeight };
  const centeredTextStyle = { ...textStyle, textAlign: 'center' };

  if (isMiddleOnly) {
    return (
      <View style={[styles.footer, { backgroundColor, borderTopColor: borderColor, borderTopWidth: borderWidth }]}>
        <View style={styles.slotFull}>{renderSlot(middle, centeredTextStyle, 0)}</View>
      </View>
    );
  }

  return (
    <View style={[styles.footer, { backgroundColor, borderTopColor: borderColor, borderTopWidth: borderWidth }]}>
      <View style={styles.slotLeft}>{renderSlot(left, textStyle)}</View>
      {middle != null && (
        <View style={styles.slotMiddle}>{renderSlot(middle, textStyle)}</View>
      )}
      <View style={styles.slotRight}>{renderSlot(right, textStyle)}</View>
    </View>
  );
}

export default function GameCardFooter({
  rows,
  left,
  middle,
  right,
  backgroundColor = colors.white,
  textColor = colors.textPrimary,
  borderColor = colors.separatorLight,
  borderWidth = 2,
  fontSize = typography.footerFontSize,
  fontWeight = typography.footerFontWeight,
}) {
  if (rows) {
    return (
      <>
        {rows.map((row, i) => {
          const resolvedBorderColor = row.borderColor ?? colors.separatorLight;
          const resolvedBorderWidth = row.borderWidth ?? (i === 0 ? 2 : 1);
          return (
            <FooterRow
              key={i}
              {...row}
              borderColor={resolvedBorderColor}
              borderWidth={resolvedBorderWidth}
            />
          );
        })}
      </>
    );
  }
  return (
    <FooterRow
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.rowPaddingH,
    paddingVertical: 6,
  },
  slotFull: { flex: 1, alignItems: 'center' },
  slotLeft: { flex: 1, alignItems: 'flex-start' },
  slotMiddle: { flex: 1, alignItems: 'center' },
  slotRight: { flex: 1, alignItems: 'flex-end' },
});
