import { NextRequest } from "next/server";
import { pipeline, TextGenerationPipeline, TextGenerationOutput } from "@xenova/transformers";
let pipe: TextGenerationPipeline | null = null;

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  // Inicializar el pipeline solo una vez
  if (!pipe) {
    pipe = await pipeline("text-generation", "Xenova/distilgpt2") as TextGenerationPipeline;
  }
  const prompt = `Eres el asistente profesional de Ezequiel Alejandro Freire, un desarrollador frontend y backend con experiencia en Next.js, NestJS, React, Node, MongoDB y PostgreSQL. Responde de forma conversacional, clara y profesional sobre su experiencia, educación y tecnologías. Evita repetir frases y responde con información relevante y concreta. Si no tienes datos, responde de forma educada que no tienes información precisa.\nUsuario: ${question}\nAsistente:`;
  const output = await pipe(prompt, { max_new_tokens: 80 }) as TextGenerationOutput;
  const raw = output[0]?.generated_text || "No tengo respuesta en este momento.";
  let answer = String(raw).replace(prompt, "");
  // Eliminar repeticiones excesivas y frases redundantes
  answer = answer.replace(/(Donde trabajo: ?)+/gi, "Donde trabajo: ");
  answer = answer.replace(/(\b\w+\b)(?:\s+\1\b)+/gi, "$1");
  answer = answer.trim();
  return Response.json({ answer });
}
