export const mockPropRB = {
  headerLeft: 'Prop #5',
  headerRight: '1 Point',
  question: 'George Pickens Receiving Yards?',
  options: [
    {
      id: 1,
      label: 'Breece Hall',
      sublabel: '(NYJ RB)',
      logo: { uri: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png' },
    },
    {
      id: 2,
      label: 'Najee Harris',
      sublabel: '(PIT RB)',
      logo: { uri: 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png' },
    },
  ],
};

export const mockPropSack = {
  headerLeft: 'Prop #5',
  headerRight: '1 Point',
  question: 'Will TJ Watt have at least 1 sack?',
  options: [
    { id: 1, label: '1 or more sacks' },
    { id: 2, label: 'Less than 1 sack' },
  ],
};

export const mockPropTD = {
  headerLeft: 'Prop #6',
  headerRight: '3 Points',
  question: 'First Steelers Touchdown?',
  layout: 'column',
  options: [
    { id: 1, label: 'Najee Harris' },
    { id: 2, label: 'Justin Fields' },
    { id: 3, label: 'George Pickens' },
    { id: 4, label: 'Pat Freiermuth' },
    { id: 5, label: 'Any Other Player' },
    { id: 6, label: 'No PIT TD' },
  ],
};
