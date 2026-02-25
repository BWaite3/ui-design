import { useEffect, useRef } from 'react';
import {
  Animated,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function PickerBottomSheet({
  isVisible,
  onClose,
  title,
  options = [],
  onSelect,
}) {
  const slideAnim = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(400);
    }
  }, [isVisible]);

  const handleSelect = (option) => {
    console.log('TO DO:', option.label);
    onSelect?.(option);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Animated.View style={[styles.sheet, { transform: [{ translateY: slideAnim }] }]}>
          <Pressable>
            <View style={styles.handle} />
            {title && <Text style={styles.title}>{title}</Text>}
            <FlatList
              data={options}
              keyExtractor={(item) => String(item.value)}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </Pressable>
              )}
            />
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.overlayDark,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 32,
    maxHeight: '75%',
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.borderDefault,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  title: {
    fontSize: typography.labelFontSize,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorLight,
  },
  separator: { height: 1, backgroundColor: colors.separatorLight },
  option: { paddingHorizontal: 20, paddingVertical: spacing.lg },
  optionPressed: { backgroundColor: colors.separatorLight },
  optionText: {
    fontSize: 15,
    fontWeight: typography.labelFontWeight,
    color: colors.textPrimary,
  },
});
