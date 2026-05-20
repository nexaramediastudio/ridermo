"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { submitInquiry } from "@/lib/submit-inquiry";

interface InquiryFormProps {
  bikeId?: string;
  bikeName?: string;
}

export default function InquiryForm({ bikeId, bikeName }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [sentVia, setSentVia] = useState<"api" | "whatsapp" | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const result = await submitInquiry({
        customerName: data.get("name") as string,
        phoneNumber: data.get("phone") as string,
        message: data.get("message") as string,
        bikeId,
        bikeName,
      });

      if (result.ok) {
        setSentVia(result.via ?? "api");
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try WhatsApp or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-8 text-center"
      >
        <p className="text-lg font-semibold text-white">Thank you!</p>
        <p className="mt-2 text-gray-text">
          {sentVia === "whatsapp"
            ? "WhatsApp is open with your message — tap Send to complete your inquiry."
            : "We've received your inquiry and will contact you shortly."}
        </p>
        <Button
          className="mt-6"
          onClick={() => {
            setStatus("idle");
            setSentVia(null);
          }}
          variant="secondary"
        >
          Send Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-5 rounded-2xl p-8">
      {bikeName && (
        <p className="text-sm text-gray-text">
          Inquiring about: <span className="font-semibold text-white">{bikeName}</span>
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="input-field"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="input-field"
          placeholder="07X XXX XXXX"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="input-field resize-none"
          placeholder="I'm interested in..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-tvs-red">{errorMsg}</p>
      )}

      <Button type="submit" className="w-full" variant="primary">
        {status === "loading" ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
