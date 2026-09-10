"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "sent" | "error";

type ContactFormProps = {
  intent?: "sprint" | "studio";
  heading?: string;
};

function formspreeEndpoint() {
  const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  return id ? `https://formspree.io/f/${id}` : null;
}

export function ContactForm({
  intent = "sprint",
  heading,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const endpoint = useMemo(() => formspreeEndpoint(), []);
  const isStudio = intent === "studio";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setError("");
    setStatus("submitting");

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Formspree rejected the submission.");
        setStatus("sent");
        form.reset();
        return;
      } catch {
        setStatus("error");
        setError(
          `Something went wrong sending the form. Email ${site.email} and we will pick it up.`,
        );
        return;
      }
    }

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const industry = String(data.get("industry") || "");
    const noTeam = data.get("noMarketingTeam") ? "Yes" : "No";
    const message = String(data.get("message") || "");
    const subject = isStudio
      ? `Tagtin Studio interest — ${name || company}`
      : `Sprint enquiry — ${name || company}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company}`,
      `Industry: ${industry}`,
      `No in-house marketing team: ${noTeam}`,
      `Intent: ${isStudio ? "Tagtin Studio" : "2-week Sprint"}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-[1.75rem] bg-white p-8 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05]"
        role="status"
      >
        <p className="font-display text-2xl text-navy">Received.</p>
        <p className="mt-3 text-charcoal/80">
          If your mail client opened, send it on. If Formspree is connected,
          it is already with us. Either way, we will reply from {site.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.75rem] bg-white p-6 shadow-[0_22px_50px_-28px_rgba(24,48,80,0.42)] ring-1 ring-navy/[0.05] sm:p-8"
      noValidate={false}
    >
      {heading ? (
        <h2 className="font-display text-2xl text-navy sm:text-3xl">
          {heading}
        </h2>
      ) : null}
      <p className="mt-2 text-sm text-charcoal/70">
        {isStudio
          ? "Register interest for the next AI Video Producer day. Seats are limited."
          : "Tell us where the business is. We will come back with whether a 2-week Sprint is the right first move."}
      </p>
      <input type="hidden" name="intent" value={intent} />
      <input
        type="hidden"
        name="_subject"
        value={
          isStudio ? "Tagtin Studio interest" : "Tagtin Sprint enquiry"
        }
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
        <Field
          label="Company"
          name="company"
          autoComplete="organization"
          required
        />
        <div className="sm:col-span-2">
          <Field
            label="Industry"
            name="industry"
            placeholder="Retail, ecommerce, services…"
          />
        </div>
        <label className="sm:col-span-2 flex items-start gap-3 rounded-xl bg-cream px-4 py-3 text-sm text-charcoal">
          <input
            type="checkbox"
            name="noMarketingTeam"
            value="yes"
            className="mt-1 h-4 w-4 rounded border-navy/30 text-navy accent-navy"
          />
          <span>We do not have an in-house marketing team (or it is a stretch).</span>
        </label>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-navy" htmlFor="message">
            {isStudio ? "What do you want to leave with?" : "What should we know?"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1.5 w-full rounded-xl border border-navy/15 bg-cream/40 px-3.5 py-2.5 text-sm text-charcoal outline-none transition-shadow focus:border-slate focus:ring-2 focus:ring-slate/30"
          />
        </div>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream hover:bg-slate disabled:opacity-60"
        >
          {status === "submitting"
            ? "Sending…"
            : isStudio
              ? "Register interest"
              : "Book a 2-week Sprint"}
        </button>
        <p className="text-xs text-charcoal/60">
          Or email{" "}
          <a className="underline decoration-mist underline-offset-2" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {!endpoint
            ? " — Formspree is not configured yet, so this opens a mail draft."
            : "."}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-navy/15 bg-cream/40 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-slate focus:ring-2 focus:ring-slate/30"
      />
    </div>
  );
}
