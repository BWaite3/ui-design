import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SelectionRow({
  label,
  rightLabel,
  selected = false,
  showCheckbox = false,
  onPress,
  selectedColor = '#232425',
  textColor = '#232425',
  rowColor = '#FFFFFF',
}) {
  return (
    <Pressable style={[styles.row, { backgroundColor: rowColor }]} onPress={onPress}>
      {showCheckbox && (
        <View style={[styles.circle, selected && { borderColor: selectedColor }]}>
          {selected && <View style={[styles.circleFill, { backgroundColor: selectedColor }]} />}
        </View>
      )}

      <Text style={[styles.label, { color: textColor }]} numberOfLines={1}>
        {label}
      </Text>

      {rightLabel != null && (
        <Text style={[styles.rightLabel, { color: textColor }]} numberOfLines={1}>
          {rightLabel}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#AAAAAA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    flexShrink: 0,
  },
  circleFill: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },
  label: {
    flex: 1,
    fontSize: 14,
  },
  rightLabel: {
    fontSize: 14,
    marginLeft: 8,
    flexShrink: 0,
  },
});
