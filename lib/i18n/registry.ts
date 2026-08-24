import type { Locale, TranslationDict } from "./types";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./types";
import zh from "./locales/zh";
import en from "./locales/en";

/**
 * 新增语言时：
 *   1. 写 locales/<code>.ts（TranslationDict 形状）
 *   2. import 并挂到下面 `translations` 上
 *   3. 在 types.ts 的 Locale/SUPPORTED_LOCALES 里注册
 */
export const translations: Record<Locale, TranslationDict> = {
  zh,
  en,
};

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (SUPPORTED_LOCALES as string[]).includes(v);
}

export const LOCALE_LABEL: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  zh: "中",
  en: "EN",
};

export { DEFAULT_LOCALE, SUPPORTED_LOCALES };
