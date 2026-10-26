
import { motion } from "framer-motion";
import { MdOutlineEmail, MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setResult("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;

    if (!accessKey) {
      setResult("Contact form configuration is missing. Please try again later.");
      setLoading(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setSuccess(true);
      setResult("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setSuccess(false);
      setResult(
        "Sorry, your message could not be sent. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold tracking-wider text-gray-200">
        <span className="bg-linear-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* Contact information */}
        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-3xl font-bold text-orange-400">
            Let's Talk
          </h3>

          <p className="mb-6 leading-7 text-gray-300">
            Have a website idea or need help with a full-stack web application?
            Feel free to contact me. I'd be happy to discuss your project.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:somirongope466@gmail.com"
              className="flex items-center gap-3 text-gray-300 transition hover:text-sky-400"
            >
              <MdOutlineEmail className="shrink-0 text-2xl text-orange-400" />
              <span className="break-all">
                <strong>Email:</strong> somirongope466@gmail.com
              </span>
            </a>

            <a
              href="tel:+966542658745"
              className="flex items-center gap-3 text-gray-300 transition hover:text-sky-400"
            >
              <MdAddCall className="shrink-0 text-2xl text-orange-400" />
              <span>
                <strong>Phone:</strong> +966 54 697 2819
              </span>
            </a>

            <div className="flex items-center gap-3 text-gray-300">
              <FaLocationDot className="shrink-0 text-xl text-orange-400" />
              <span>
                <strong>Location:</strong> Riyadh, Saudi Arabia
              </span>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 rounded-xl border border-slate-700 bg-slate-900/40 p-5 sm:p-7"
        >
          <label
            htmlFor="user_name"
            className="mt-1 text-sm font-semibold text-gray-300"
          >
            Your Name
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Enter your name"
            autoComplete="name"
            maxLength={100}
            required
            className="rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-3 text-gray-100 outline-none transition placeholder:text-gray-500 focus:border-sky-500"
          />

          <label
            htmlFor="user_email"
            className="mt-3 text-sm font-semibold text-gray-300"
          >
            Your Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            autoComplete="email"
            maxLength={254}
            required
            className="rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-3 text-gray-100 outline-none transition placeholder:text-gray-500 focus:border-sky-500"
          />

          <label
            htmlFor="message"
            className="mt-3 text-sm font-semibold text-gray-300"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows={6}
            maxLength={5000}
            required
            className="resize-y rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-3 text-gray-100 outline-none transition placeholder:text-gray-500 focus:border-sky-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-lg bg-linear-to-r from-orange-500 to-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {result && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-3 text-center text-sm ${
                success ? "text-green-400" : "text-red-400"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
