import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  children: string;
};

export default function SectionTitle({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 12,
  },
});