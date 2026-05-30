import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

interface Plan {
    name: string
    price: string
    desc: string
    features: string[]
    buttonVariant: 'default' | 'neutral'
    href: string
}

interface PricingProps {
    title?: string
    description?: string
    plans?: Plan[]
}

const defaultPlans: Plan[] = [
    {
        name: 'Free',
        price: '$0 / mo',
        desc: 'Perfect for trying out PromptLens',
        features: [
            '10 prompts per day',
            'Standard quality prompts',
            'Copy to clipboard',
            'All AI tool formats',
        ],
        buttonVariant: 'neutral',
        href: '/signup',
    },
    {
        name: 'Pro',
        price: '$9 / mo',
        desc: 'For creators who need more power',
        features: [
            'Everything in Free Plan',
            'Unlimited prompts',
            'Priority AI processing',
            'Save prompt history',
            'Gallery submissions',
            'Style presets',
            'Email support',
            'Mobile App Access',
            '1 Custom Report Per Month',
            'Standard Security Features',
        ],
        buttonVariant: 'default',
        href: '/signup',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        desc: 'For teams and high-volume users',
        features: [
            'Everything in Pro Plan',
            'API access',
            'Custom rate limits',
            'SSO & team management',
            'Dedicated support',
            'SLA guarantee',
        ],
        buttonVariant: 'neutral',
        href: '/contact',
    },
]

export default function Pricing({
    title = 'Pricing that scales with your business',
    description = 'Choose the perfect plan for your needs and start optimizing your workflow today',
    plans = defaultPlans,
}: PricingProps) {
    return (
        <div className="bg-muted relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        {title}
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                        {description}
                    </p>
                </div>

                <div className="mt-12 md:mt-20 grid gap-6 md:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <Card key={idx} className="flex flex-col">
                            <CardHeader className="p-8">
                                <CardTitle className="font-medium">{plan.name}</CardTitle>
                                <span className="mb-0.5 mt-2 block text-2xl font-semibold">{plan.price}</span>
                                <CardDescription className="text-sm">{plan.desc}</CardDescription>
                            </CardHeader>
                            <div className="border-y px-8 py-4">
                                <Button
                                    asChild
                                    className="w-full"
                                    variant={plan.buttonVariant}
                                >
                                    <Link href={plan.href}>Get Started</Link>
                                </Button>
                            </div>
                            <ul role="list" className="space-y-3 p-8">
                                {plan.features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="text-primary size-3" strokeWidth={3.5} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
