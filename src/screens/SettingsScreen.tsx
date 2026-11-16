import React from "react";

import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { colors } from "../constants/colors";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <Ionicons
            name="sparkles-outline"
            size={22}
            color={colors.primary}
          />
        </View>

        <Text style={styles.title}>
          AI Assistant
        </Text>

        <Text style={styles.version}>
          Version 1.0.0
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        About
      </Text>

      <Pressable
        style={styles.row}
        onPress={() =>
          Linking.openURL("https://example.com/privacy")
        }
      >
        <Text style={styles.rowText}>
          Privacy Policy
        </Text>

        <Ionicons
          name="chevron-forward"
          size={18}
          color={colors.muted}
        />
      </Pressable>

      <Pressable
        style={styles.row}
        onPress={() =>
          Linking.openURL("https://example.com/terms")
        }
      >
        <Text style={styles.rowText}>
          Terms of Service
        </Text>

        <Ionicons
          name="chevron-forward"
          size={18}
          color={colors.muted}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  icon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: colors.input,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.primary,
  },

  version: {
    marginTop: 4,
    fontSize: 13,
    color: colors.secondary,
  },

  sectionTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 13,
    fontWeight: "800",
    color: colors.secondary,
    textTransform: "uppercase",
  },

  row: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 17,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
  },

  rowText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.primary,
  },
});