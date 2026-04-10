import Image from 'next/image';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Zap, Users } from 'lucide-react';

const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-section-image');
const teamMembers = [
    { name: 'Marcus', role: 'Founder & Lead Creative', avatar: 'https://picsum.photos/seed/team1/200/200' },
    { name: 'Elena', role: 'Head of Videography', avatar: 'https://picsum.photos/seed/team2/200/200' },
    { name: 'Javier', role: 'Lead Designer & Developer', avatar: 'https://picsum.photos/seed/team3/200/200' },
    { name: 'Chloe', role: 'Client Relations & Producer', avatar: 'https://picsum.photos/seed/team4/200/200' },
];

const values = [
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

export default function AboutPage() {
    return (
        <div className="py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedOnScroll className="text-center">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-gradient">
                        About PixelPulse
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We are a collective of artists and technicians passionate about crafting unforgettable visual narratives. Our studio was founded on the principle that every brand, creator, and couple has a unique story worth telling beautifully.
                    </p>
                </AnimatedOnScroll>

                <AnimatedOnScroll delay={200}>
                    <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
                            {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={aboutImage.imageHint}
                            />
                            )}
                        </div>
                        <div>
                            <h2 className="font-headline text-4xl font-bold text-gradient">
                                Our Philosophy
                            </h2>
                            <p className="mt-6 text-lg text-muted-foreground">
                                PixelPulse was born from a desire to blend fine art with commercial media. We are a collective of photographers, videographers, designers, and developers who believe in the power of a compelling visual story. Our aesthetic is defined by a "True Black" cinematic style—moody, atmospheric, and always authentic.
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We don't just create content; we build visual experiences that resonate with audiences and elevate brands. We see every project as a collaboration and every client as a partner.
                            </p>
                        </div>
                    </div>
                </AnimatedOnScroll>

                <AnimatedOnScroll className="mt-24 text-center">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
                        Our Core Values
                    </h2>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((feature) => (
                            <div key={feature.title} className="text-center">
                                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-headline mt-6">{feature.title}</h3>
                                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedOnScroll>
                
                <AnimatedOnScroll className="mt-24 text-center">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
                        Meet the Team
                    </h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        The creative minds behind PixelPulse.
                    </p>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="relative h-32 w-32 md:h-40 md:w-40 mx-auto rounded-full overflow-hidden">
                                     <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-headline mt-4">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedOnScroll>

            </div>
        </div>
    );
}
