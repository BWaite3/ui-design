import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import GameCardContainer from '../primitives/GameCardContainer';
import GameCardHeader from '../primitives/GameCardHeader';
import GameCardFooter from '../primitives/GameCardFooter';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

const BUTTON_WIDTH = 68;
const BUTTON_GAP = spacing.xs;

// columns: [{ id, label }]
// rows:    [{ id, rank?, logo?, label, sublabel?, values: { [colId]: buttonLabel } }]
export default function SpreadTotalCard({
  title,
  headerLeft,
  headerBackgroundColor = colors.ppgDark,
  headerTextColor = colors.white,
  columnRowBackgroundColor = colors.white,
  columnRowTextColor = colors.textSecondary,
  columns = [],
  rows = [],
  venue,
  network,
  accentColor = colors.ppgDark,
  borderColor = colors.borderDefault,
  borderWidth = 1,
  shadow = false,
}) {
  // { [columnId]: selectedRowId }
  const [selectedIds, setSelectedIds] = useState({});

  const handleSelect = (columnId, rowId) => {
    setSelectedIds((prev) => ({ ...prev, [columnId]: rowId }));
  };

  const pickCount = Object.keys(selectedIds).length;
  const totalPicks = columns.length;
  const allPicked = pickCount === totalPicks;
  const gamePicksLabel = `Game Picks: ${pickCount}/${totalPicks}${allPicked ? ' ✓' : ''}`;
  const gamePicksColor = allPicked ? colors.ppgGreen : colors.textSecondary;

  const columnLabels = (
    <View style={styles.columnLabels}>
      {columns.map((col) => (
        <Text key={col.id} style={[styles.columnLabel, { color: columnRowTextColor }]}>
          {col.label}
        </Text>
      ))}
    </View>
  );

  return (
    <GameCardContainer borderColor={borderColor} borderWidth={borderWidth} shadow={shadow}>
      <GameCardHeader
        rows={[
          {
            middle: title,
            backgroundColor: headerBackgroundColor,
            textColor: headerTextColor,
            fontSize: 15,
            fontWeight: '700',
          },
          {
            left: headerLeft,
            right: columnLabels,
            backgroundColor: columnRowBackgroundColor,
            textColor: columnRowTextColor,
          },
        ]}
      />

      {rows.map((row, i) => (
        <View key={row.id}>
          {i > 0 && (
            <View style={styles.separator}>
              <Text style={styles.atSign}>@</Text>
              <View style={styles.separatorLine} />
            </View>
          )}

          <View style={styles.row}>
            <View style={styles.teamInfo}>
              {row.logo && <Image source={row.logo} style={styles.logo} />}
              <View>
                <Text style={styles.label}>{row.label}</Text>
                {row.sublabel && <Text style={styles.sublabel}>{row.sublabel}</Text>}
              </View>
            </View>

            <View style={styles.buttons}>
              {columns.map((col) => {
                const isSelected = selectedIds[col.id] === row.id;
                return (
                  <Pressable
                    key={col.id}
                    style={[
                      styles.button,
                      {
                        backgroundColor: isSelected ? accentColor : colors.white,
                        borderColor: accentColor,
                      },
                    ]}
                    onPress={() => handleSelect(col.id, row.id)}
                  >
                    <Text style={[styles.buttonText, { color: isSelected ? colors.white : accentColor }]}>
                      {row.values?.[col.id] ?? '—'}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      ))}

      <GameCardFooter
        rows={[
          { left: venue, right: network, backgroundColor: colors.ppgDark, textColor: colors.white },
          { middle: gamePicksLabel, textColor: gamePicksColor },
        ]}
      />
    </GameCardContainer>
  );
}

const styles = StyleSheet.create({
  columnLabels: {
    flexDirection: 'row',
    gap: BUTTON_GAP,
  },
  columnLabel: {
    width: BUTTON_WIDTH,
    textAlign: 'center',
    fontSize: typography.headerFontSize,
    fontWeight: '600',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.rowPaddingH,
    paddingVertical: spacing.xs,
    gap: spacing.sm,
  },
  atSign: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderDefault,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.rowPaddingH,
    paddingVertical: spacing.rowPaddingV,
    backgroundColor: colors.white,
  },
  teamInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginRight: spacing.md,
  },
  logo: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  label: {
    fontSize: typography.labelFontSize,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  sublabel: {
    fontSize: typography.sublabelFontSize,
    color: colors.textSecondary,
  },
  buttons: {
    flexDirection: 'row',
    gap: BUTTON_GAP,
  },
  button: {
    width: BUTTON_WIDTH,
    paddingVertical: 10,
    borderRadius: spacing.buttonBorderRadius,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: typography.labelFontSize,
    fontWeight: '600',
    textAlign: 'center',
  },
});
