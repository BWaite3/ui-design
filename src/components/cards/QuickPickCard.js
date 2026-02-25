import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameCardContainer from '../primitives/GameCardContainer';
import GameCardHeader from '../primitives/GameCardHeader';
import GameCardFooter from '../primitives/GameCardFooter';
import QuickPickOption from '../primitives/QuickPickOption';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function QuickPickCard({
  headerLeft,
  headerRight,
  headerBackgroundColor = colors.headerDefault,
  headerTextColor = colors.textPrimary,
  question,
  options = [],
  layout = 'auto',
  logoPosition = 'below',
  selectedBackgroundColor = colors.textPrimary,
  selectedTextColor = colors.white,
  backgroundColor = colors.white,
  textColor = colors.textPrimary,
  borderColor = colors.textPrimary,
  cardBorderColor = colors.borderDefault,
  cardBorderWidth = 1,
  shadow = false,
}) {
  const [selectedId, setSelectedId] = useState(null);

  const effectiveLayout =
    layout === 'auto' ? (options.length === 2 ? 'row' : 'column') : layout;

  const selectedOption = options.find((o) => o.id === selectedId);
  const myPickLabel = selectedOption ? selectedOption.label : 'No Pick';
  const myPickColor = selectedOption ? colors.textPrimary : colors.noPick;

  const footerMiddle = (
    <Text style={styles.footerText}>
      <Text style={{ color: colors.textPrimary }}>My Pick: </Text>
      <Text style={{ color: myPickColor }}>{myPickLabel}</Text>
    </Text>
  );

  return (
    <GameCardContainer borderColor={cardBorderColor} borderWidth={cardBorderWidth} shadow={shadow}>
      <GameCardHeader
        left={headerLeft}
        right={headerRight}
        backgroundColor={headerBackgroundColor}
        textColor={headerTextColor}
      />

      <View style={styles.body}>
        <Text style={styles.question}>{question}</Text>
        <View style={[styles.options, effectiveLayout === 'row' && styles.optionsRow]}>
          {options.map((opt) => (
            <QuickPickOption
              key={opt.id}
              label={opt.label}
              sublabel={opt.sublabel}
              logo={opt.logo}
              logoPosition={opt.logoPosition ?? logoPosition}
              isSelected={selectedId === opt.id}
              selectedBackgroundColor={opt.selectedBackgroundColor ?? selectedBackgroundColor}
              selectedTextColor={opt.selectedTextColor ?? selectedTextColor}
              backgroundColor={opt.backgroundColor ?? backgroundColor}
              textColor={opt.textColor ?? textColor}
              borderColor={opt.borderColor ?? borderColor}
              grow={effectiveLayout === 'row'}
              onPress={() => setSelectedId(opt.id)}
            />
          ))}
        </View>
      </View>

      <GameCardFooter middle={footerMiddle} />
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
  options: { gap: spacing.sm },
  optionsRow: { flexDirection: 'row', gap: spacing.sm },
  footerText: {
    fontSize: typography.footerFontSize,
    fontWeight: typography.footerFontWeight,
  },
});
