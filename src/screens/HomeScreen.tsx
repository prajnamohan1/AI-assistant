import React, { useEffect, useState } from "react";

import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigation/AppNavigator";
import { Task } from "../types";
import { fallbackTasks } from "../constants/tasks";
import { getTasks } from "../services/api";
import { colors } from "../constants/colors";
import TaskCard from "../components/TaskCard";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export default function HomeScreen({ navigation }: Props) {
  const [tasks, setTasks] = useState<Task[]>(fallbackTasks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const remoteTasks = await getTasks();

      if (remoteTasks.length > 0) {
        setTasks(remoteTasks);
      }
    } catch {
      // Use local fallback tasks.
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>
              YOUR AI ASSISTANT
            </Text>

            <Text style={styles.heading}>
              What can we help{`\n`}you with?
            </Text>
          </View>

          <Pressable
  style={styles.settingsButton}
  onPress={() => navigation.navigate("Settings")}
>
            <Ionicons
              name="settings-outline"
              size={21}
              color={colors.primary}
            />
            </Pressable>
          
        </View>

        <Text style={styles.subtitle}>
          Choose a task and let AI do the heavy lifting.
        </Text>

        <View style={styles.badge}>
          <Ionicons
            name="sparkles"
            size={14}
            color={colors.primary}
          />

          <Text style={styles.badgeText}>
            Simple. Fast. No complicated prompts.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Tools
          </Text>

          {loading && (
            <ActivityIndicator
              size="small"
              color={colors.primary}
              style={styles.loader}
            />
          )}

          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onPress={() =>
                navigation.navigate("Task", { task })
              }
            />
          ))}
        </View>

        <View style={styles.footerCard}>
          <Ionicons
            name="lock-closed-outline"
            size={18}
            color={colors.secondary}
          />

          <Text style={styles.footerText}>
            Your requests are securely processed through
            the app's backend.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.4,
    color: colors.secondary,
    marginBottom: 10,
  },

  heading: {
    fontSize: 31,
    lineHeight: 36,
    fontWeight: "800",
    color: colors.primary,
  },

  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  subtitle: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 22,
    color: colors.secondary,
    maxWidth: 330,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: colors.input,
  },

  badgeText: {
    marginLeft: 7,
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },

  section: {
    marginTop: 32,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.primary,
    marginBottom: 14,
  },

  loader: {
    marginBottom: 16,
  },

  footerCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.input,
  },

  footerText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 18,
    color: colors.secondary,
  },
}); 