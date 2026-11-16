
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Task } from "../types";
import { colors } from "../constants/colors";

type TaskCardProps = {
  task: Task;
  onPress: () => void;
};

const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
  rewrite: "create-outline",
  summarize: "document-text-outline",
  explain: "bulb-outline",
  brainstorm: "sparkles-outline",
  translate: "language-outline",
  email: "mail-outline",
  social: "share-social-outline",
};

export default function TaskCard({
  task,
  onPress,
}: TaskCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.icon}>
        <Ionicons
          name={icons[task.id] ?? "sparkles-outline"}
          size={22}
          color={colors.primary}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>
          {task.description}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={colors.muted}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.input,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  content: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    lineHeight: 19,
    color: colors.secondary,
  },
});