import { StyleSheet, View } from 'react-native';

export default function GameCardContainer({
  children,
  borderColor = '#D1D5DB',
  borderWidth = 1,
  shadow = false,
}) {
  return (
    <View style={[styles.card, { borderColor, borderWidth }, shadow && styles.shadow]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
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
