import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import GameCardContainer from '../primitives/GameCardContainer';
import GameCardHeader from '../primitives/GameCardHeader';
import GameCardFooter from '../primitives/GameCardFooter';
import GameRow from '../primitives/GameRow';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export default function PickEmCard({
  headerLeft,
  headerRight,
  headerBackgroundColor = colors.headerDefault,
  headerTextColor = colors.textPrimary,
  rows = [],
  footer,
  accentColor = colors.ppgDark,
  alternateRows = false,
  footerBorderColor = colors.borderLight,
  borderColor = colors.borderDefault,
  borderWidth = 1,
  shadow = false,
}) {
  const [selectedId, setSelectedId] = useState(null);

  const selectedRow = rows.find((r) => r.id === selectedId);
  const myPickLabel = selectedRow ? selectedRow.label : 'No Pick';
  const myPickColor = selectedRow ? colors.textPrimary : colors.noPick;

  const footerMiddle = (
    <Text style={styles.footerText}>
      <Text style={{ color: colors.textPrimary }}>My Pick: </Text>
      <Text style={{ color: myPickColor }}>{myPickLabel}</Text>
    </Text>
  );

  return (
    <GameCardContainer borderColor={borderColor} borderWidth={borderWidth} shadow={shadow}>
      <GameCardHeader
        left={headerLeft}
        right={headerRight}
        backgroundColor={headerBackgroundColor}
        textColor={headerTextColor}
      />

      {rows.map((row, i) => (
        <GameRow
          key={row.id}
          backgroundColor={alternateRows && i % 2 !== 0 ? colors.rowAlt : colors.white}
          left={
            <View style={styles.leftContent}>
              {row.logo && <Image source={row.logo} style={styles.logo} />}
              <View>
                <Text style={[styles.label, { color: accentColor }]}>{row.label}</Text>
                {row.sublabel && (
                  <Text style={styles.sublabel}>{row.sublabel}</Text>
                )}
              </View>
            </View>
          }
          buttons={[
            {
              label: row.buttonLabel,
              isSelected: selectedId === row.id,
              backgroundColor: selectedId === row.id ? accentColor : colors.white,
              textColor: selectedId === row.id ? colors.white : accentColor,
              borderColor: accentColor,
              onPress: () => setSelectedId(row.id),
            },
          ]}
        />
      ))}

      <GameCardFooter
        middle={footerMiddle}
        borderColor={footerBorderColor}
      />
    </GameCardContainer>
  );
}

const styles = StyleSheet.create({
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  label: {
    fontSize: typography.labelFontSize,
    fontWeight: '600',
  },
  sublabel: {
    fontSize: typography.sublabelFontSize,
    color: colors.textSecondary,
  },
  footerText: {
    fontSize: typography.footerFontSize,
    fontWeight: typography.footerFontWeight,
  },
});
