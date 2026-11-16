import React, { useMemo, useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../constants/colors";
import { generateContent } from "../services/api";
import AppButton from "../components/AppButton";
import OptionButton from "../components/OptionButton";
import SectionTitle from "../components/SectionTitle";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Task"
>;

export default function TaskScreen({
  route,
  navigation,
}: Props) {
  const { task } = route.params;

  const [input, setInput] = useState("");
  const [options, setOptions] =
    useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const optionGroups = useMemo(
    () => Object.entries(task.options),
    [task.options]
  );

  function selectOption(
    group: string,
    value: string
  ) {
    setOptions((current) => ({
      ...current,
      [group]: value,
    }));
  }

  async function handleGenerate() {
    if (!input.trim()) {
      Alert.alert(
        "Add some text",
        "Please enter something before generating."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await generateContent({
        task: task.id,
        input: input.trim(),
        options,
      });

      if (!response.success || !response.result) {
        throw new Error(
          response.error?.message ||
            "Generation failed"
        );
      }

      navigation.navigate("Result", {
        task,
        result: response.result,
      });
    } catch (error) {
      Alert.alert(
        "Something went wrong",
        error instanceof Error
          ? error.message
          : "Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.safe}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.description}>
          {task.description}
        </Text>

        {optionGroups.map(
          ([groupName, groupOptions]) => (
            <View
              key={groupName}
              style={styles.optionGroup}
            >
              <SectionTitle>
                {formatGroupName(groupName)}
              </SectionTitle>

              <View style={styles.options}>
                {groupOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    selected={
                      options[groupName] === option.id
                    }
                    onPress={() =>
                      selectOption(
                        groupName,
                        option.id
                      )
                    }
                  />
                ))}
              </View>
            </View>
          )
        )}

        <View style={styles.inputSection}>
          <SectionTitle>
            {getInputTitle(task.id)}
          </SectionTitle>

          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder={task.placeholder}
            placeholderTextColor={colors.muted}
            multiline
            textAlignVertical="top"
            style={styles.input}
          />

          <Text style={styles.counter}>
            {input.length}/10,000
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            title="Generate"
            onPress={handleGenerate}
            loading={loading}
            disabled={!input.trim()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function formatGroupName(name: string) {
  return name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (value) => value.toUpperCase());
}

function getInputTitle(taskId: string) {
  switch (taskId) {
    case "rewrite":
      return "Your text";

    case "summarize":
      return "Your text";

    case "explain":
      return "What do you want explained?";

    case "brainstorm":
      return "What do you need ideas for?";

    case "translate":
      return "Your text";

    case "email":
      return "What should the email say?";

    case "social":
      return "What is the post about?";

    default:
      return "Your input";
  }
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

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.secondary,
    marginBottom: 26,
  },

  optionGroup: {
    marginBottom: 18,
  },

  options: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  inputSection: {
    marginTop: 4,
  },

  input: {
    minHeight: 180,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 24,
    color: colors.primary,
  },

  counter: {
    textAlign: "right",
    marginTop: 6,
    fontSize: 11,
    color: colors.muted,
  },

  buttonContainer: {
    marginTop: 24,
  },
});