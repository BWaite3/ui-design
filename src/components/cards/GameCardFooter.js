import { StyleSheet, Text, View } from 'react-native';

function renderSlot(content, textStyle, numberOfLines = 1) {
  if (content == null) return null;
  if (typeof content === 'string') {
    return <Text style={textStyle} numberOfLines={numberOfLines}>{content}</Text>;
  }
  return content;
}

export default function GameCardFooter({
  footerLeft,
  footerMiddle,
  footerRight,
  footerColor = '#FFFFFF',
  footerTextColor = '#232425',
  footerBorderColor = '#F5F5F5',
}) {
  const isMiddleOnly = footerMiddle != null && footerLeft == null && footerRight == null;
  const textStyle = { color: footerTextColor, fontSize: 16, fontWeight: '500' };
  const centeredTextStyle = { ...textStyle, textAlign: 'center' };

  if (isMiddleOnly) {
    return (
      <View style={[styles.footer, { backgroundColor: footerColor, borderTopColor: footerBorderColor }]}>
        <View style={styles.slotFull}>
          {renderSlot(footerMiddle, centeredTextStyle, 0)}
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.footer, { backgroundColor: footerColor, borderTopColor: footerBorderColor }]}>
      <View style={styles.slotLeft}>
        {renderSlot(footerLeft, textStyle)}
      </View>
      {footerMiddle != null && (
        <View style={styles.slotMiddle}>
          {renderSlot(footerMiddle, textStyle)}
        </View>
      )}
      <View style={styles.slotRight}>
        {renderSlot(footerRight, textStyle)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderTopWidth: 2,
    borderTopColor: '#F5F5F5',
  },
  slotFull: {
    flex: 1,
    alignItems: 'center',
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
