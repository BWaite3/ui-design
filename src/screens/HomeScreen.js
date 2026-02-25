import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PickEmCard from '../components/cards/PickEmCard';
import SpreadTotalCard from '../components/cards/SpreadTotalCard';
import QuickPickCard from '../components/cards/QuickPickCard';
import ScorePredictionCard from '../components/cards/ScorePredictionCard';
import DropdownPickCard from '../components/cards/DropdownPickCard';
import { mockNFLGame, mockCFBGame } from '../data/mockPickEm';
import { mockPropRB, mockPropSack, mockPropTD } from '../data/mockQuickPick';
import { mockHockeyGame } from '../data/mockScorePrediction';
import { mockLastGoal } from '../data/mockDropdownPick';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Spread + Total — CFB Matchup */}
        <SpreadTotalCard
          title={mockCFBGame.title}
          headerLeft={mockCFBGame.headerLeft}
          columns={mockCFBGame.columns}
          rows={mockCFBGame.rows}
          venue={mockCFBGame.venue}
          network={mockCFBGame.network}
          borderColor={colors.ppgDark}
          borderWidth={2}
          shadow
        />

        {/* Pick Em — NFL Matchup */}
        <PickEmCard
          headerLeft={mockNFLGame.headerLeft}
          headerRight={mockNFLGame.headerRight}
          headerBackgroundColor={colors.headerDefault}
          headerTextColor={colors.ppgDark}
          rows={mockNFLGame.rows}
          footer={mockNFLGame.footer}
          accentColor={colors.ppgDark}
          borderColor={colors.headerDefault}
          borderWidth={2}
          shadow
        />

        {/* Quick Pick — 2-option with logos */}
        <QuickPickCard
          headerLeft={mockPropRB.headerLeft}
          headerRight={mockPropRB.headerRight}
          question={mockPropRB.question}
          options={mockPropRB.options}
        />

        {/* Quick Pick — 2-option text only */}
        <QuickPickCard
          headerLeft={mockPropSack.headerLeft}
          headerRight={mockPropSack.headerRight}
          question={mockPropSack.question}
          options={mockPropSack.options}
        />

        {/* Quick Pick — 6-option stacked */}
        <QuickPickCard
          headerLeft={mockPropTD.headerLeft}
          headerRight={mockPropTD.headerRight}
          question={mockPropTD.question}
          options={mockPropTD.options}
          layout={mockPropTD.layout}
        />

        {/* Score Prediction */}
        <ScorePredictionCard
          title={mockHockeyGame.title}
          headerBackgroundColor={mockHockeyGame.headerBackgroundColor}
          awayTeam={mockHockeyGame.awayTeam}
          homeTeam={mockHockeyGame.homeTeam}
          gameDate={mockHockeyGame.gameDate}
          gameTime={mockHockeyGame.gameTime}
          lockNotice={mockHockeyGame.lockNotice}
          lockNoticeBackgroundColor={mockHockeyGame.lockNoticeBackgroundColor}
          lockNoticeTextColor={mockHockeyGame.lockNoticeTextColor}
          borderColor={mockHockeyGame.borderColor}
          borderWidth={2}
        />

        {/* Dropdown Pick */}
        <DropdownPickCard
          title={mockLastGoal.title}
          headerBackgroundColor={mockLastGoal.headerBackgroundColor}
          question={mockLastGoal.question}
          options={mockLastGoal.options}
          placeholder={mockLastGoal.placeholder}
          lockNotice={mockLastGoal.lockNotice}
          lockNoticeBackgroundColor={mockLastGoal.lockNoticeBackgroundColor}
          lockNoticeTextColor={mockLastGoal.lockNoticeTextColor}
          borderColor={mockLastGoal.borderColor}
          borderWidth={2}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  content: { padding: 16, gap: 16 },
});
