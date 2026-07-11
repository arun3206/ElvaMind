"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

type SubmitStatus = "idle" | "loading" | "success" | "error" | "development";

export function AuditForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!siteConfig.form.endpoint || siteConfig.form.endpoint.startsWith("YOUR_")) {
      setStatus("development");
      setMessage("Add the Google Apps Script URL in src/config/site.ts to enable submissions.");
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      process: String(formData.get("process") ?? ""),
      preferredContact: String(formData.get("preferredContact") ?? "Email"),
      consent: formData.get("consent") === "on",
      submittedAt: new Date().toISOString(),
    };

    setStatus("loading");
    setMessage("");

    try {
      await fetch(siteConfig.form.endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setMessage("Thank you. Your request has been submitted.");
      form.reset();
    } catch (error) {
      console.error("Audit form submission failed", error);
      setStatus("error");
      setMessage("Submission failed. Please try again or contact us by email.");
    }
  }

  if (status === "success") {
    return (
      <div className="relative min-h-[440px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.055] p-7 text-white shadow-2xl sm:p-10" role="status">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />

        <div className="relative">
          <div className="mb-8 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Request received
            </span>
            <span className="text-xs text-white/35">ElvaMind</span>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-purple shadow-[0_12px_40px_rgba(79,70,229,.35)]">
            <CheckCircle2 size={29} strokeWidth={2.3} />
          </div>

          <h3 className="mt-7 max-w-md text-3xl font-bold tracking-tight sm:text-4xl">Your automation audit is in the queue.</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/60">Thanks for sharing your process. We will review the opportunity and contact you using your preferred method.</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <span className="text-xs font-bold text-cyan">01</span>
              <p className="mt-2 text-sm font-semibold">We review your workflow</p>
              <p className="mt-1 text-xs leading-5 text-white/45">We identify bottlenecks and practical automation opportunities.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <span className="text-xs font-bold text-cyan">02</span>
              <p className="mt-2 text-sm font-semibold">We contact you</p>
              <p className="mt-1 text-xs leading-5 text-white/45">You will receive a focused next step based on what you submitted.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#top" className="btn btn-primary">Continue exploring <ArrowRight size={17} /></a>
            <button type="button" className="btn border border-white/15 bg-white/5 text-white hover:bg-white/10" onClick={() => { setStatus("idle"); setMessage(""); }}>Submit another request</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-9">
      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Work email" name="email" type="email" autoComplete="email" required />
      <Field label="Company name (optional)" name="company" autoComplete="organization" />
      <Field label="Phone number (optional)" name="phone" type="tel" autoComplete="tel" />

      <label className="sm:col-span-2" htmlFor="process">
        <span className="mb-2 block text-sm font-semibold">Process you want to automate</span>
        <textarea id="process" name="process" required minLength={20} rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-purple" placeholder="Tell us what happens today, where time is lost, and what a better outcome looks like." />
      </label>

      <label className="sm:col-span-2" htmlFor="preferredContact">
        <span className="mb-2 block text-sm font-semibold">Preferred contact method</span>
        <select id="preferredContact" name="preferredContact" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:col-span-2">
        <input required name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-purple" />
        I agree that ElvaMind may use these details to respond to my enquiry.
      </label>

      {message && status !== "idle" && (
        <p role={status === "error" ? "alert" : "status"} className={`sm:col-span-2 text-sm ${status === "error" ? "text-red-500" : "text-cyan"}`}>{message}</p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn btn-primary sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-60">
        {status === "loading" ? "Submitting..." : "Request Free Automation Audit"}
        <ArrowRight size={17} />
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label htmlFor={name}>
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input id={name} name={name} type={type} autoComplete={autoComplete} required={required} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-purple" />
    </label>
  );
}
