import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameCardContainer from '../components/cards/GameCardContainer';
import GameCardHeader from '../components/cards/GameCardHeader';
import GameCardFooter from '../components/cards/GameCardFooter';
import SelectionRow from '../components/cards/SelectionRow';
import Badge from '../components/Badge';

const GOLFERS = [
  { id: 1, label: '(1) Scottie Scheffler' },
  { id: 2, label: '(2) Rory McIlroy' },
  { id: 3, label: '(3) Xander Schauffele' },
  { id: 4, label: '(4) Jon Rahm' },
];

const GOLFERS_WITH_STATS = [
  { id: 1, label: '(1) Scottie Scheffler (-1)', rightLabel: '102 (30%)' },
  { id: 2, label: '(2) Rory McIlroy (+2)',      rightLabel: '82 (22%)' },
  { id: 3, label: '(3) Xander Schauffele (-4)', rightLabel: '66 (17%)' },
  { id: 4, label: '(4) Jon Rahm (E)',            rightLabel: '14 (5%)' },
];

// The No Pick Footer should show My Pick: in the #002129 color,
// But then show right next to it No Pick in the #CC293C color
const noPickFooterText = [
  { id: 'mypick', content: 'My Pick: ', color: '#002129' },
  { id: 'nopick', content: 'No Pick', color: '#CC293C' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Simple — no right column */}
        <GameCardContainer borderColor="#002129" borderWidth={2}>
          <GameCardHeader
          headerColor="#076652"
            headerTextColor='#FFFFFF'
            headerLeft="Tier 1 - The Favorites"
            headerRight="Pick 1 Golfer"
          />
          {GOLFERS.map((g, i) => (
            <SelectionRow
              key={g.id}
              label={g.label}
              selected={i === 0}
              showCheckbox
              selectedColor="#002129"
              rowColor={i % 2 === 0 ? '#FFFFFF' : '#FAFAFA'}
            />
          ))}
          <GameCardFooter
          footerBorderColor='#002129'
            footerMiddle={
              <Text style={{ fontSize: 16, fontWeight: '500' }}>
                {noPickFooterText.map((seg) => (
                  <Text key={seg.id} style={{ color: seg.color }}>{seg.content}</Text>
                ))}
              </Text>
            }
          />
        </GameCardContainer>

        {/* With right column */}
        <GameCardContainer borderColor="#002129" borderWidth={2}>
          <GameCardHeader
            headerColor="#076652"
            headerTextColor='#FFFFFF'
            headerLeft="Tier 1 - The Favorites"
            headerRight="Times Picked"
            headerBorderColor={'#002129'}
            headerBorderWidth={2}
          />
          {GOLFERS_WITH_STATS.map((g, i) => (
            <SelectionRow
              key={g.id}
              label={g.label}
              rightLabel={g.rightLabel}
              selectedColor="#002129"
              rowColor={i % 2 === 0 ? '#FFFFFF' : '#FAFAFA'}
            />
          ))}
          <GameCardFooter
            footerMiddle="My Pick: (1) Scottie Scheffler"
            footerBorderColor='#002129'
          />
        </GameCardContainer>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
    gap: 16,
  },
});
