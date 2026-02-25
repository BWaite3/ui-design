import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export default function GameCardContainer({
  children,
  borderColor = colors.borderDefault,
  borderWidth = 1,
  shadow = false,
  backgroundColor = colors.white,
}) {
  return (
    <View
      style={[
        styles.card,
        { borderColor, borderWidth, backgroundColor },
        shadow && styles.shadow,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: spacing.cardBorderRadius,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
