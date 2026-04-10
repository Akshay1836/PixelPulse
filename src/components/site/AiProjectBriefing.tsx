'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  aiAssistedProjectBriefing,
  type AiAssistedProjectBriefingOutput,
} from '@/ai/flows/ai-assisted-project-briefing-flow';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/lib/data';
import { Loader2, Wand2, ArrowRight, FileText, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import AnimatedOnScroll from '../shared/AnimatedOnScroll';

const formSchema = z.object({
  serviceInterest: z.string().min(1, 'Please select a service.'),
  initialClientQuery: z
    .string()
    .min(20, 'Please describe your project in a bit more detail.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiProjectBriefing({ preselectedService }: { preselectedService?: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [brief, setBrief] = useState<AiAssistedProjectBriefingOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceInterest: preselectedService || '',
      initialClientQuery: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setError(null);
    setBrief(null);
    try {
      const result = await aiAssistedProjectBriefing(values);
      setBrief(result);
    } catch (e: any) {
      setError(e.message || 'An error occurred while generating the brief. Please try again.');
      console.error(e);
    }
    setIsLoading(false);
  };

  const BriefDisplay = ({ brief }: { brief: AiAssistedProjectBriefingOutput }) => (
    <AnimatedOnScroll>
        <Card className="mt-12">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle className="font-headline text-3xl">{brief.briefTitle}</CardTitle>
                        <CardDescription>AI-Generated Project Brief</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6 text-left">
                {brief.clarificationNeeded && (
                    <Alert variant="destructive" className="bg-accent/10 border-accent/50 text-accent-foreground">
                        <HelpCircle className="h-4 w-4 !text-accent" />
                        <AlertTitle>Clarification Needed</AlertTitle>
                        <AlertDescription className="whitespace-pre-wrap">{brief.clarificationNeeded}</AlertDescription>
                    </Alert>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <h4 className="font-semibold">Service Type</h4>
                        <p className="text-muted-foreground">{brief.serviceType}</p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-semibold">Client Goals</h4>
                        <p className="text-muted-foreground">{brief.clientGoals}</p>
                    </div>
                    <div className="space-y-1 col-span-1 md:col-span-2">
                        <h4 className="font-semibold">Project Scope</h4>
                        <p className="text-muted-foreground">{brief.projectScope}</p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-semibold">Key Deliverables</h4>
                        <p className="text-muted-foreground">{brief.keyDeliverables}</p>
                    </div>
                     <div className="space-y-1">
                        <h4 className="font-semibold">Target Audience</h4>
                        <p className="text-muted-foreground">{brief.targetAudience}</p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-semibold">Timeline</h4>
                        <p className="text-muted-foreground">{brief.timelineExpectations}</p>
                    </div>
                     <div className="space-y-1">
                        <h4 className="font-semibold">Budget</h4>
                        <p className="text-muted-foreground">{brief.budgetConsiderations}</p>
                    </div>
                    <div className="space-y-1 col-span-1 md:col-span-2">
                        <h4 className="font-semibold">Aesthetic Preferences</h4>
                        <p className="text-muted-foreground">{brief.aestheticPreferences}</p>
                    </div>
                     <div className="space-y-1 col-span-1 md:col-span-2">
                        <h4 className="font-semibold">Additional Notes</h4>
                        <p className="text-muted-foreground">{brief.additionalNotes}</p>
                    </div>
                </div>
                 <div className="flex justify-end pt-6">
                    <Button size="lg">Looks Good, Let's Talk <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardContent>
        </Card>
    </AnimatedOnScroll>
  );

  return (
    <AnimatedOnScroll className="max-w-4xl mx-auto text-center">
      <Wand2 className="mx-auto h-12 w-12 text-primary" />
      <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-gradient">
        Let's Build Your Brief
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
        Tell us about your project, and our AI assistant will help draft a detailed brief to get us started.
      </p>

      <Card className="mt-12 text-left">
        <CardContent className="p-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>What service are you interested in?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {services.map((service) => (
                            <SelectItem key={service.slug} value={service.title}>
                                {service.title}
                            </SelectItem>
                            ))}
                            <SelectItem value="Wedding Specials">Wedding Specials</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="initialClientQuery"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Describe your project</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="e.g., 'I need product photos for my new skincare line' or 'I'm looking for a cinematic wedding video.'"
                            rows={6}
                            {...field}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading} size="lg" className="w-full">
                    {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                    'Generate Brief'
                    )}
                </Button>
                </form>
            </Form>
        </CardContent>
      </Card>
        

      {error && <Alert variant="destructive" className="mt-8"><AlertTitle>Error</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
      {brief && <BriefDisplay brief={brief} />}
    </AnimatedOnScroll>
  );
}
