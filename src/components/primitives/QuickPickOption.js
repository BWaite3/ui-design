import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function QuickPickOption({
  label,
  sublabel,
  logo,
  logoPosition = 'below',
  isSelected = false,
  onPress,
  backgroundColor = colors.white,
  selectedBackgroundColor = colors.textPrimary,
  textColor = colors.textPrimary,
  selectedTextColor = colors.white,
  borderColor = colors.textPrimary,
  grow = false,
}) {
  const bg = isSelected ? selectedBackgroundColor : backgroundColor;
  const labelColor = isSelected ? selectedTextColor : textColor;
  const subColor = isSelected ? selectedTextColor : colors.textSecondary;

  return (
    <Pressable
      style={[
        styles.option,
        logoPosition === 'left' ? styles.optionRow : styles.optionColumn,
        grow && styles.grow,
        { backgroundColor: bg, borderColor },
      ]}
      onPress={onPress}
    >
      {logo && logoPosition === 'left' && (
        <Image source={logo} style={styles.logoLeft} />
      )}

      <View style={logoPosition === 'left' ? styles.textLeft : styles.textCenter}>
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
        {sublabel != null && (
          <Text style={[styles.sublabel, { color: subColor }]}>{sublabel}</Text>
        )}
      </View>

      {logo && logoPosition === 'below' && (
        <Image source={logo} style={styles.logoBelow} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    borderWidth: 1.5,
    borderRadius: spacing.optionBorderRadius,
    padding: spacing.md,
  },
  optionColumn: { flexDirection: 'column', alignItems: 'center' },
  optionRow: { flexDirection: 'row', alignItems: 'center' },
  grow: { flex: 1 },
  textCenter: { alignItems: 'center' },
  textLeft: { flex: 1, alignItems: 'flex-start' },
  label: {
    fontSize: typography.optionFontSize,
    fontWeight: typography.optionFontWeight,
    textAlign: 'center',
  },
  sublabel: {
    fontSize: typography.sublabelFontSize,
    fontWeight: typography.sublabelFontWeight,
    textAlign: 'center',
    marginTop: 2,
  },
  logoBelow: { width: 24, height: 24, marginTop: spacing.sm, resizeMode: 'contain' },
  logoLeft: { width: 28, height: 28, marginRight: 10, resizeMode: 'contain' },
});
