import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import GameCardContainer from '../primitives/GameCardContainer';
import GameCardHeader from '../primitives/GameCardHeader';
import GameCardFooter from '../primitives/GameCardFooter';
import ContentRow from '../primitives/ContentRow';
import PickerBottomSheet from '../primitives/PickerBottomSheet';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function DropdownPickCard({
  title,
  headerBackgroundColor = colors.textPrimary,
  headerTextColor = colors.white,
  question,
  options = [],
  placeholder = 'Pick a Player',
  lockNotice,
  lockNoticeBackgroundColor = colors.textPrimary,
  lockNoticeTextColor = colors.white,
  borderColor = colors.borderDefault,
  borderWidth = 1,
  shadow = false,
}) {
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const myPickColor = selectedOption ? colors.textPrimary : colors.noPick;
  const myPickLabel = selectedOption ? selectedOption.label : 'No Pick';

  const footerMiddle = (
    <Text style={styles.footerText}>
      <Text style={{ color: colors.textPrimary }}>My Pick: </Text>
      <Text style={{ color: myPickColor }}>{myPickLabel}</Text>
    </Text>
  );

  return (
    <GameCardContainer borderColor={borderColor} borderWidth={borderWidth} shadow={shadow}>
      <GameCardHeader
        middle={title}
        backgroundColor={headerBackgroundColor}
        textColor={headerTextColor}
        fontSize={15}
        fontWeight="700"
      />

      <View style={styles.body}>
        {question && <Text style={styles.question}>{question}</Text>}
        <Pressable
          style={({ pressed }) => [styles.trigger, pressed && styles.triggerPressed]}
          onPress={() => setIsSheetVisible(true)}
        >
          <Text style={[styles.triggerText, !selectedOption && styles.placeholder]}>
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
          <Text style={styles.chevron}>▾</Text>
        </Pressable>
      </View>

      {lockNotice && (
        <ContentRow
          content={lockNotice}
          backgroundColor={lockNoticeBackgroundColor}
          textColor={lockNoticeTextColor}
          fontWeight="600"
        />
      )}

      <GameCardFooter middle={footerMiddle} />

      <PickerBottomSheet
        isVisible={isSheetVisible}
        onClose={() => setIsSheetVisible(false)}
        title={title}
        options={options}
        onSelect={(opt) => setSelectedOption(opt)}
      />
    </GameCardContainer>
  );
}

const styles = StyleSheet.create({
  body: { padding: spacing.md, gap: spacing.md },
  question: {
    fontSize: typography.labelFontSize,
    fontWeight: typography.labelFontWeight,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: colors.textPrimary,
    borderRadius: spacing.buttonBorderRadius,
    paddingHorizontal: 14,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
  },
  triggerPressed: { backgroundColor: colors.separatorLight },
  triggerText: {
    fontSize: typography.labelFontSize,
    fontWeight: typography.labelFontWeight,
    color: colors.textPrimary,
  },
  placeholder: { color: colors.textPlaceholder },
  chevron: { fontSize: 16, color: colors.textPrimary },
  footerText: {
    fontSize: typography.footerFontSize,
    fontWeight: typography.footerFontWeight,
  },
});
