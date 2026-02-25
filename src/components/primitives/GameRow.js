import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export default function GameRow({
  left,
  buttons = [],
  backgroundColor = colors.white,
  borderColor = colors.separatorLight,
}) {
  return (
    <View style={[styles.row, { backgroundColor, borderBottomColor: borderColor }]}>
      <View style={styles.left}>{left}</View>
      <View style={styles.buttons}>
        {buttons.map((btn, i) => (
          <Pressable
            key={i}
            style={[
              styles.button,
              {
                backgroundColor: btn.backgroundColor ?? colors.white,
                borderColor: btn.borderColor ?? colors.textPrimary,
              },
            ]}
            onPress={btn.onPress}
          >
            <Text
              style={[
                styles.buttonText,
                { color: btn.textColor ?? colors.textPrimary },
              ]}
              numberOfLines={1}
            >
              {btn.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.rowPaddingH,
    paddingVertical: spacing.rowPaddingV,
    borderBottomWidth: 1,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginRight: spacing.md,
  },
  buttons: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  button: {
    minWidth: 64,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: spacing.buttonBorderRadius,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: typography.labelFontSize,
    fontWeight: '600',
    textAlign: 'center',
  },
});
