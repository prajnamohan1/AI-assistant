import {
  GenerateRequest,
  GenerateResponse,
  Task,
} from "../types";

const API_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(`${API_URL}/api/tasks`);

  if (!response.ok) {
    throw new Error("Unable to load tasks");
  }

  const data = await response.json();

  return data.tasks;
}

export async function generateContent(
  request: GenerateRequest
): Promise<GenerateResponse> {
  const response = await fetch(`${API_URL}/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message || "Generation failed"
    );
  }

  return data;
}