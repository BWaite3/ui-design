import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import GameCardContainer from '../primitives/GameCardContainer';
import GameCardHeader from '../primitives/GameCardHeader';
import GameCardFooter from '../primitives/GameCardFooter';
import ContentRow from '../primitives/ContentRow';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function ScorePredictionCard({
  title = 'Predict the Final Score',
  headerBackgroundColor = colors.textPrimary,
  headerTextColor = colors.white,
  awayTeam,
  homeTeam,
  gameDate,
  gameTime,
  lockNotice,
  lockNoticeBackgroundColor = colors.textPrimary,
  lockNoticeTextColor = colors.white,
  borderColor = colors.borderDefault,
  borderWidth = 1,
  shadow = false,
}) {
  const [awayScore, setAwayScore] = useState('');
  const [homeScore, setHomeScore] = useState('');

  const hasPick = awayScore !== '' && homeScore !== '';
  const myPickLabel = hasPick
    ? `${awayTeam?.abbr} ${awayScore} — ${homeTeam?.abbr} ${homeScore}`
    : 'No Pick';
  const myPickColor = hasPick ? colors.textPrimary : colors.noPick;

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
        <View style={styles.teamsRow}>

          <View style={styles.teamCol}>
            {awayTeam?.logo && <Image source={awayTeam.logo} style={styles.logo} />}
            <Text style={styles.teamAbbr}>{awayTeam?.abbr}</Text>
            <TextInput
              style={styles.scoreInput}
              value={awayScore}
              onChangeText={setAwayScore}
              keyboardType="number-pad"
              maxLength={3}
              textAlign="center"
            />
          </View>

          <View style={styles.centerCol}>
            <Text style={styles.gameDate}>{gameDate}</Text>
            <Text style={styles.gameTime}>{gameTime}</Text>
            <Text style={styles.dash}>—</Text>
          </View>

          <View style={styles.teamCol}>
            {homeTeam?.logo && <Image source={homeTeam.logo} style={styles.logo} />}
            <Text style={styles.teamAbbr}>{homeTeam?.abbr}</Text>
            <TextInput
              style={styles.scoreInput}
              value={homeScore}
              onChangeText={setHomeScore}
              keyboardType="number-pad"
              maxLength={3}
              textAlign="center"
            />
          </View>

        </View>
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
    </GameCardContainer>
  );
}

const styles = StyleSheet.create({
  body: { padding: spacing.lg },
  teamsRow: { flexDirection: 'row', alignItems: 'center' },
  teamCol: { flex: 1, alignItems: 'center', gap: spacing.sm },
  centerCol: { alignItems: 'center', paddingHorizontal: spacing.sm, gap: spacing.sm },
  logo: { width: 44, height: 44, resizeMode: 'contain' },
  teamAbbr: {
    fontSize: typography.teamAbbrFontSize,
    fontWeight: typography.teamAbbrFontWeight,
    color: colors.textPrimary,
  },
  scoreInput: {
    width: 64,
    height: 48,
    borderWidth: 1.5,
    borderColor: colors.textPrimary,
    borderRadius: spacing.buttonBorderRadius,
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  gameDate: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  gameTime: { fontSize: 11, color: colors.textSecondary, textAlign: 'center' },
  dash: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.textPrimary,
    height: 48,
    lineHeight: 48,
  },
  footerText: {
    fontSize: typography.footerFontSize,
    fontWeight: typography.footerFontWeight,
  },
});
