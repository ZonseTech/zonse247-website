import * as z from "zod/mini";
import { INTERESTS } from "./site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s()-]{7,20}$/;
const INTEREST_KEYS = new Set(INTERESTS.map((interest) => interest.key));

export const MESSAGE_MAX = 2000;

export const enquirySchema = z.object({
  name: z.string().check(z.trim(), z.minLength(2, "Enter your name.")),
  contact: z
    .string()
    .check(
      z.trim(),
      z.minLength(1, { error: "Enter a phone number or email.", abort: true }),
      z.refine((value) => EMAIL.test(value) || PHONE.test(value), "Enter a valid phone number or email."),
    ),
  interest: z.string().check(z.refine((value) => INTEREST_KEYS.has(value), "Choose what you're interested in.")),
  message: z
    .string()
    .check(
      z.trim(),
      z.minLength(10, "Tell us a little more, at least 10 characters."),
      z.maxLength(MESSAGE_MAX, `Keep it under ${MESSAGE_MAX.toLocaleString("en-US")} characters.`),
    ),
  website: z.optional(z.string()),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;

export type EnquiryResult = { ok: true } | { ok: false; error: string };
