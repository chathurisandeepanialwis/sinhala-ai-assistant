"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleAsk() {
    if (!question.trim()) {
      setAnswer("Please enter a question first.");
      return;
    }

    setAnswer(
      `You asked: "${question}"\n\nThe AI answer will be connected in the next stage.`
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Sinhala AI Assistant
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Ask questions about Sinhala documents
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">

          <label
            htmlFor="question"
            className="mb-2 block font-medium text-slate-700"
          >
            Your question
          </label>

          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            rows={5}
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            onClick={handleAsk}
            className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Ask AI
          </button>

          {answer && (
            <div className="mt-8 rounded-xl bg-slate-100 p-5">
              <h2 className="mb-2 font-semibold text-slate-800">
                Answer
              </h2>

              <p className="whitespace-pre-line text-slate-700">
                {answer}
              </p>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}