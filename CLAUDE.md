# ui-design

A React Native / Expo project for experimenting with UI components and design patterns.

## Stack
- **Expo** ~54 (SDK 54)
- **React** 19
- **React Native** 0.81

## Project Structure
```
src/
  components/   # Reusable UI components
  screens/      # Full screen layouts and demos
  theme/        # Colors, typography, spacing constants
  assets/       # Images, icons, fonts
App.js          # Entry point
```

## Running the App
```bash
npm start          # Start Expo dev server
npm run ios        # Open in iOS Simulator
npm run android    # Open in Android emulator
npm run web        # Open in browser
```

## Notes
- Use `src/theme/` for design tokens (colors, spacing, typography) to keep things consistent
- New reusable components go in `src/components/`
- Full-page demos or screen layouts go in `src/screens/`
