export const mockCFBGame = {
  title: 'College Football Playoff - First Round',
  headerLeft: 'THURS SEP 5 · 8:21PM ET',
  columns: [
    { id: 'spread', label: 'Spread' },
    { id: 'total', label: 'Total' },
  ],
  rows: [
    {
      id: 'pitt',
      logo: { uri: 'https://a.espncdn.com/i/teamlogos/ncaa/500/221.png' },
      label: '(12) PIT Panthers',
      sublabel: '(7-1)',
      values: { spread: '+3', total: 'O 47.5' },
    },
    {
      id: 'clem',
      logo: { uri: 'https://a.espncdn.com/i/teamlogos/ncaa/500/228.png' },
      label: '(5) CLEM Tigers',
      sublabel: '(6-2)',
      values: { spread: '-3', total: 'U 47.5' },
    },
  ],
  venue: 'Clemson, SC',
  network: 'CBS',
};

export const mockNFLGame = {
  headerLeft: 'THURS SEP 5 · 8:20PM ET',
  headerRight: 'CBS',
  rows: [
    {
      id: 1,
      logo: { uri: 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png' },
      label: 'TB Buccaneers',
      sublabel: '(8-8)',
      buttonLabel: '+12.5',
    },
    {
      id: 2,
      logo: { uri: 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png' },
      label: 'Wsh Commanders',
      sublabel: '(10-6)',
      buttonLabel: '-12.5',
    },
  ],
  footer: 'Miami Gardens, FL',
};
