import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function OptionButton({
  label,
  selected,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        selected && styles.selected,
      ]}
    >
      <Text
        style={[
          styles.text,
          selected && styles.selectedText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    marginRight: 8,
    marginBottom: 8,
  },

  selected: {
    backgroundColor: colors.selected,
    borderColor: colors.selected,
  },

  text: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },

  selectedText: {
    color: colors.selectedText,
  },
});