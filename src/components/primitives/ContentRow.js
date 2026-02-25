import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function ContentRow({
  content,
  backgroundColor = colors.white,
  textColor = colors.textPrimary,
  fontSize = typography.footerFontSize,
  fontWeight = typography.footerFontWeight,
  padding = spacing.sm,
}) {
  const textStyle = { color: textColor, fontSize, fontWeight, textAlign: 'center' };

  return (
    <View style={[styles.container, { backgroundColor, padding }]}>
      {typeof content === 'string' ? (
        <Text style={textStyle}>{content}</Text>
      ) : (
        content
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
