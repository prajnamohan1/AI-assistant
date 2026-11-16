import React, { useState } from "react";

import {
  Alert,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../constants/colors";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Result"
>;

export default function ResultScreen({
  route,
  navigation,
}: Props) {
  const { task, result } = route.params;

  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await Clipboard.setStringAsync(result);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  async function handleShare() {
    try {
      await Share.share({
        message: result,
      });
    } catch {
      Alert.alert(
        "Unable to share",
        "Please try again."
      );
    }
  }

  function handleRegenerate() {
    navigation.replace("Task", {
      task,
    });
  }

  return (
    <ScrollView
      style={styles.safe}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.successHeader}>
        <View style={styles.successIcon}>
          <Ionicons
            name="sparkles"
            size={20}
            color={colors.primary}
          />
        </View>

        <View>
          <Text style={styles.successTitle}>
            Ready
          </Text>

          <Text style={styles.successSubtitle}>
            Here's your {task.title.toLowerCase()} result.
          </Text>
        </View>
      </View>

      <View style={styles.resultCard}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.actionButton}
          onPress={handleCopy}
        >
          <Ionicons
            name={
              copied
                ? "checkmark"
                : "copy-outline"
            }
            size={19}
            color={colors.primary}
          />

          <Text style={styles.actionText}>
            {copied ? "Copied" : "Copy"}
          </Text>
        </Pressable>

        <Pressable
          style={styles.actionButton}
          onPress={handleShare}
        >
          <Ionicons
            name="share-outline"
            size={19}
            color={colors.primary}
          />

          <Text style={styles.actionText}>
            Share
          </Text>
        </Pressable>
      </View>

      <Text style={styles.refineTitle}>
        Want another version?
      </Text>

      <View style={styles.refineRow}>
        <Pressable
          style={styles.refineButton}
          onPress={handleRegenerate}
        >
          <Text style={styles.refineText}>
            Regenerate
          </Text>
        </Pressable>

        <Pressable
          style={styles.refineButton}
          onPress={handleRegenerate}
        >
          <Text style={styles.refineText}>
            Change options
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    padding: 20,
    paddingBottom: 50,
  },

  successHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  successIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.input,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  successTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: colors.primary,
  },

  successSubtitle: {
    marginTop: 2,
    fontSize: 13,
    color: colors.secondary,
  },

  resultCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 240,
  },

  resultText: {
    fontSize: 16,
    lineHeight: 26,
    color: colors.primary,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },

  actionButton: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  actionText: {
    marginLeft: 8,
    fontWeight: "700",
    color: colors.primary,
  },

  refineTitle: {
    marginTop: 32,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "800",
    color: colors.primary,
  },

  refineRow: {
    flexDirection: "row",
    gap: 10,
  },

  refineButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: colors.input,
    alignItems: "center",
  },

  refineText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.primary,
  },
});