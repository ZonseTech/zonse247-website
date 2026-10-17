"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CircleCheck, LoaderCircle, TriangleAlert } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useForm, useWatch, type FieldError as FormError } from "react-hook-form";
import { sendEnquiry } from "@/app/actions/enquiry";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, MESSAGE_MAX, type EnquiryValues } from "@/lib/enquiry";
import { INTERESTS } from "@/lib/site";

const controlClass = "h-11 rounded-none border-white/15 bg-white/5 px-3.5 text-sm text-white placeholder:text-white/35 focus-visible:border-sky-400 focus-visible:ring-sky-400/25";
const label = "text-xs font-semibold tracking-wider text-white/70 uppercase";

const EMPTY: EnquiryValues = { name: "", contact: "", interest: "", message: "", website: "" };

export function ContactForm() {
  const id = useId();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<{ ok: boolean; error?: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({ resolver: zodResolver(enquirySchema), defaultValues: EMPTY });

  const messageLength = useWatch({ control, name: "message" })?.length ?? 0;

  const requested = searchParams.get("interest");
  useEffect(() => {
    if (requested && INTERESTS.some((interest) => interest.key === requested)) {
      setValue("interest", requested, { shouldValidate: false });
    }
  }, [requested, setValue]);

  const onSubmit = handleSubmit(async (values) => {
    setResult(null);
    setResult(await sendEnquiry(values));
  });

  const fieldId = (name: keyof EnquiryValues) => `${id}-${name}`;
  const a11y = (name: keyof EnquiryValues, error?: FormError) => ({
    id: fieldId(name),
    "aria-invalid": !!error || undefined,
    "aria-describedby": error ? `${fieldId(name)}-error` : undefined,
  });

  if (result?.ok) {
    return (
      <div role="status" className="flex min-h-96 flex-col items-center justify-center text-center">
        <span className="grid size-14 place-items-center border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
          <CircleCheck className="size-7" aria-hidden />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-bold">Enquiry sent</h3>
        <p className="mt-2 text-white/60">Thank you. We&apos;ll be in touch soon.</p>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            reset(EMPTY);
            setResult(null);
          }}
          className="mt-8 h-11 rounded-none border-white/20 bg-transparent px-6 text-white hover:bg-white/10"
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <FieldGroup className="gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={!!errors.name || undefined} className="gap-2">
            <FieldLabel htmlFor={fieldId("name")} className={label}>
              Name
            </FieldLabel>
            <Input {...a11y("name", errors.name)} autoComplete="name" placeholder="Your full name" className={controlClass} {...register("name")} />
            <FieldError id={`${fieldId("name")}-error`} errors={[errors.name]} />
          </Field>

          <Field data-invalid={!!errors.contact || undefined} className="gap-2">
            <FieldLabel htmlFor={fieldId("contact")} className={label}>
              Phone or email
            </FieldLabel>
            <Input
              {...a11y("contact", errors.contact)}
              autoComplete="email"
              placeholder="0991 234 567 or you@company.mw"
              className={controlClass}
              {...register("contact")}
            />
            <FieldError id={`${fieldId("contact")}-error`} errors={[errors.contact]} />
          </Field>
        </div>

        <Field data-invalid={!!errors.interest || undefined} className="gap-2">
          <FieldLabel htmlFor={fieldId("interest")} className={label}>
            Interested in
          </FieldLabel>
          <NativeSelect
            {...a11y("interest", errors.interest)}
            className="w-full [&_select]:h-11 [&_select]:rounded-none [&_select]:border-white/15 [&_select]:bg-white/5 [&_select]:px-3.5 [&_select]:text-white [&_select]:focus-visible:border-sky-400 [&_select]:focus-visible:ring-sky-400/25"
            {...register("interest")}
          >
            <NativeSelectOption value="" disabled className="bg-slate-900">
              Choose a service or product
            </NativeSelectOption>
            {INTERESTS.map((interest) => (
              <NativeSelectOption key={interest.key} value={interest.key} className="bg-slate-900">
                {interest.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          <FieldError id={`${fieldId("interest")}-error`} errors={[errors.interest]} />
        </Field>

        <Field data-invalid={!!errors.message || undefined} className="gap-2">
          <div className="flex items-baseline justify-between">
            <FieldLabel htmlFor={fieldId("message")} className={label}>
              Message
            </FieldLabel>
            <span className="font-mono text-[0.65rem] text-white/35">
              {messageLength.toLocaleString("en-US")} / {MESSAGE_MAX.toLocaleString("en-US")}
            </span>
          </div>
          <Textarea
            {...a11y("message", errors.message)}
            rows={5}
            maxLength={MESSAGE_MAX}
            placeholder="Tell us what you need"
            className={`${controlClass} h-auto min-h-32 py-3`}
            {...register("message")}
          />
          <FieldError id={`${fieldId("message")}-error`} errors={[errors.message]} />
        </Field>

        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("website")} />

        {result && !result.ok && (
          <p role="alert" className="flex items-start gap-2.5 border border-amber-400/30 bg-amber-400/10 px-3.5 py-3 text-sm text-amber-200">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
            {result.error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="group h-12 w-full rounded-none bg-sky-500 text-sm font-semibold text-white shadow-[0_8px_24px_-6px] shadow-sky-500/50 hover:bg-sky-400 sm:w-auto sm:px-8"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden />
              Sending
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </>
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}
