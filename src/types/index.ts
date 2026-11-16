export type TaskOption = {
  id: string;
  label: string;
  description?: string;
};

export type TaskOptions = Record<string, TaskOption[]>;

export type Task = {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  options: TaskOptions;
};

export type GenerateRequest = {
  task: string;
  input: string;
  options: Record<string, string>;
};

export type GenerateResponse = {
  success: boolean;
  result?: string;
  metadata?: {
    task: string;
    model: string;
    inputTokens: number;
    outputTokens: number;
    stopReason: string | null;
  };
  error?: {
    code: string;
    message: string;
  };
};