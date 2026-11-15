import { createAnthropic } from "@ai-sdk/anthropic";

export const SONNET_MODEL = process.env.ANTHROPIC_MODEL_SONNET || "claude-sonnet-4-20250514";
export const OPUS_MODEL = process.env.ANTHROPIC_MODEL_OPUS || "claude-opus-4-20250514";

export function getAnthropicModel(tier: string = "sonnet") {
  const anthropic = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return anthropic(resolveModelId(tier));
}

export function resolveModelId(tier: string = "sonnet"): string {
  return /opus/i.test(tier) ? OPUS_MODEL : SONNET_MODEL;
}
