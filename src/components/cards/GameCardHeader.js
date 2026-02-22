import { StyleSheet, Text, View } from 'react-native';

function renderSlot(content, textStyle) {
  if (content == null) return null;
  if (typeof content === 'string') {
    return <Text style={textStyle}>{content}</Text>;
  }
  return content;
}

export default function GameCardHeader({
  headerLeft,
  headerMiddle,
  headerRight,
  headerColor = '#E5E5E5',
  headerTextColor = '#232425',
  headerBorderColor,
  headerBorderWidth = 0,
}) {
  const textStyle = { color: headerTextColor, fontSize: 16, fontWeight: '600' };
  const borderStyle = headerBorderColor
    ? { borderBottomWidth: headerBorderWidth || 1, borderBottomColor: headerBorderColor }
    : null;

  return (
    <View style={[styles.header, { backgroundColor: headerColor }, borderStyle]}>
      <View style={styles.slotLeft}>
        {renderSlot(headerLeft, textStyle)}
      </View>
      {headerMiddle != null && (
        <View style={styles.slotMiddle}>
          {renderSlot(headerMiddle, textStyle)}
        </View>
      )}
      <View style={styles.slotRight}>
        {renderSlot(headerRight, textStyle)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  slotLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  slotMiddle: {
    flex: 1,
    alignItems: 'center',
  },
  slotRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
