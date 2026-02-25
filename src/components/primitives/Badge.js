import { StyleSheet, Text, View } from 'react-native';

export default function Badge({
  label,
  dotColor = '#FF0000',
  textColor = '#FF0000',
  backgroundColor = 'transparent',
}) {
  return (
    <View style={[styles.row, { backgroundColor }]}>
      <View style={[styles.dot, { backgroundColor: dotColor }]} />
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontWeight: '700',
    fontSize: 12,
  },
});
