import { Award, Zap, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';

const features = [
    {
        icon: Award,
        title: 'Cinematic Quality',
        description: 'Every project is treated like a work of art. We bring a high-end, cinematic aesthetic to everything we create, ensuring your brand stands out.',
    },
    {
        icon: Zap,
        title: 'Efficient Workflow',
        description: 'We pride ourselves on a streamlined process that respects your time. Expect clear communication, fast turnarounds, and no surprises.',
    },
    {
        icon: Users,
        title: 'Collaborative Spirit',
        description: 'Your vision is our priority. We work closely with you at every step, treating you as a partner to ensure the final product is a perfect match.',
    },
];

export function WhyChooseUsSection() {
    return (
        <section className="bg-card py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
                    The PixelPulse Difference
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We're more than just a creative studio. We're your strategic partners in building a powerful brand presence.
                </p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-background border-2 border-transparent hover:border-primary/50 transition-colors duration-300 text-left">
                            <CardHeader>
                                <div className="bg-primary/10 text-primary rounded-full p-3 w-fit">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-2xl font-headline mt-4">{feature.title}</CardTitle>
                                <CardDescription className="pt-2">{feature.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
