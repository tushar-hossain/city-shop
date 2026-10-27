"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../Button/Button";
import Title from "../../Title/Title";

const initialForm = { name: "", email: "", subject: "", message: "" };

const inputStyle =
  "w-full border border-brand-borderColor rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-brand-skyColor duration-200";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(form).some((value) => !value.trim())) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thanks! We'll get back to you soon.");
    setForm(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4"
    >
      <Title>Send us a Message</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Your Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className={inputStyle}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Email Address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className={inputStyle}
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Subject
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          required
          className={inputStyle}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Message
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
          className={`${inputStyle} resize-none`}
        />
      </label>
      <Button className="self-start rounded-md">Send Message</Button>
    </form>
  );
}
