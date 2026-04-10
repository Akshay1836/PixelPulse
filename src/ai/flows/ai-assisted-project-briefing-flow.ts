'use server';
/**
 * @fileOverview An AI-assisted tool that guides potential service clients through a series of questions to formulate a comprehensive project brief.
 *
 * - aiAssistedProjectBriefing - A function that handles the AI-assisted project briefing process.
 * - AiAssistedProjectBriefingInput - The input type for the aiAssistedProjectBriefing function.
 * - AiAssistedProjectBriefingOutput - The return type for the aiAssistedProjectBriefing function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiAssistedProjectBriefingInputSchema = z.object({
  initialClientQuery: z
    .string()
    .describe('The initial description or request from the potential client.'),
  serviceInterest: z
    .string()
    .describe(
      'The specific service category the client is interested in (e.g., Photography, Videography, Web Dev, Wedding Specials).'
    ),
});
export type AiAssistedProjectBriefingInput = z.infer<
  typeof AiAssistedProjectBriefingInputSchema
>;

const AiAssistedProjectBriefingOutputSchema = z.object({
  briefTitle: z.string().describe('A concise title for the project brief.'),
  serviceType: z
    .string()
    .describe(
      'The confirmed or suggested service type for the project (e.g., Product Photography, Brand Identity Design).'
    ),
  clientGoals: z
    .string()
    .describe('A summary of the client\u0027s primary goals and objectives for the project.'),
  projectScope: z
    .string()
    .describe(
      'A detailed description of the project\u0027s scope, including what needs to be done and its purpose.'
    ),
  keyDeliverables: z
    .string()
    .describe(
      'Specific outputs or assets to be delivered (e.g., \"5 high-resolution product photos,\" \"30-second ad film,\" \"responsive 5-page website\").'
    ),
  targetAudience: z
    .string()
    .describe(
      'Description of the intended audience or customers for the client\u0027s project.'
    ),
  timelineExpectations: z
    .string()
    .describe(
      'The client\u0027s desired or estimated timeline for project completion (e.g., \"within 2 months,\" \"ASAP,\" \"flexible\").'
    ),
  budgetConsiderations: z
    .string()
    .describe(
      'Any budget indications or considerations provided by the client (e.g., \"under $5000,\" \"flexible,\" \"please provide quote\").'
    ),
  aestheticPreferences: z
    .string()
    .describe(
      'Specific aesthetic or style preferences (e.g., \"True Black aesthetic,\" \"cinematic color grading,\" \"minimalist design\").'
    ),
  additionalNotes: z
    .string()
    .describe(
      'Any other relevant information, special requests, or contextual details.'
    ),
  clarificationNeeded: z
    .string()
    .describe(
      'If critical information is missing, this field will contain polite, open-ended questions for the client to provide more details. Otherwise, it should be empty.'
    ),
});
export type AiAssistedProjectBriefingOutput = z.infer<
  typeof AiAssistedProjectBriefingOutputSchema
>;

export async function aiAssistedProjectBriefing(
  input: AiAssistedProjectBriefingInput
): Promise<AiAssistedProjectBriefingOutput> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('The AI assistant is not configured. Please contact the site administrator.');
  }
  return aiAssistedProjectBriefingFlow(input);
}

const aiAssistedProjectBriefingPrompt = ai.definePrompt({
  name: 'aiAssistedProjectBriefingPrompt',
  input: { schema: AiAssistedProjectBriefingInputSchema },
  output: { schema: AiAssistedProjectBriefingOutputSchema },
  prompt: `You are an AI-assisted project briefing tool for PixelPulse Creative Studio. Your primary goal is to help potential clients articulate their project requirements into a comprehensive and clear project brief.

Based on the client's initial query and their selected service interest, generate a detailed project brief. Populate all fields in the output schema to the best of your ability, inferring details where reasonable from the provided text and common project requirements.

If there are any critical pieces of information missing that you cannot reasonably infer and are essential for defining the project's scope, budget, or timeline, state what clarification is needed from the client in the 'clarificationNeeded' field as a series of polite, open-ended questions. Do not make assumptions for critical details that directly impact project success or cost. If no clarification is needed, leave 'clarificationNeeded' empty.

Initial client query: {{{initialClientQuery}}}
Service interested in: {{{serviceInterest}}}`,
});

const aiAssistedProjectBriefingFlow = ai.defineFlow(
  {
    name: 'aiAssistedProjectBriefingFlow',
    inputSchema: AiAssistedProjectBriefingInputSchema,
    outputSchema: AiAssistedProjectBriefingOutputSchema,
  },
  async (input) => {
    const { output } = await aiAssistedProjectBriefingPrompt(input);
    return output!;
  }
);
