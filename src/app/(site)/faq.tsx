import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";

const items = [
  {
    question: "Is Mint safe to use?",
    answer:
      "Yes — your privacy is non-negotiable. Mint never collects personal data, sells your info, or tracks unrelated browsing. The extension only activates on supported stores to confirm purchases and issue cashback. We use industry-standard encryption, never store sensitive information, and keep our permissions limited to shopping sites. We're fully transparent and built with your safety in mind.",
  },
  {
    question: "Do I need to give you my credit card info?",
    answer:
      "Nope — never. Mint doesn't ask for or store your payment information. You shop directly on brand websites like usual. We simply track your eligible orders through affiliate links and give you your fair share of the commission — no credit card required.",
  },
  {
    question: "What's the catch? Is Mint really free?",
    answer:
      "Yes — 100% free. There are no fees, no subscriptions, and no hidden terms. When you shop at a partnered store, the brand pays us a small commission — and we split it with you 50/50. That's how you earn cash back, with zero cost to you.",
  },
  {
    question: "What if I don't get my cashback?",
    answer:
      "It's rare, but if something doesn't track, we've got your back. Just email us at support@mintcashback.com with your order details. Our team will review it, work with the store if needed, and make sure you get the rewards you earned.",
  },
  {
    question: "Why should I trust Mint over other cashback tools?",
    answer:
      "We finally decided it was time to make cashback right. Most platforms overcomplicate rewards with points, vague terms, and hidden catches. Mint is different — we built it to be transparent, trustworthy, and simple. We clearly show how everything works, split earnings 50/50, and never hide behind fine print. No tricks. Just real cash and a process you can trust.",
  },
];

export function Faq() {
  return (
    <div className="bg-white">
      <div className="container max-w-4xl px-4 py-24 mx-auto">
        <div className="mb-8 text-center sm:mb-10">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="mb-4 text-3xl font-bold sm:text-4xl"
            delay={0.15}
            once
          >
            Still skeptical? We get it.
          </TextAnimate>

          <BlurFade delay={0.25} inView>
            <p className="text-xl mb-2">
              Most cashback platforms cut corners. <span className="font-bold text-primary">We don't.</span> Here's everything you might be wondering — straight up.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.35} inView>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="px-4 border rounded-lg bg-background"
              >
                <AccordionTrigger className="text-lg font-semibold cursor-pointer hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-lg font-medium">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>

        <BlurFade delay={0.45} inView>
          <div className="mt-8 text-center">
            <p className="text-base text-muted-foreground">
              Still have doubts? Click{" "}
              <Link
                href="/faq"
                className="inline-block underline transition-colors text-secondary hover:text-secondary/80 underline-offset-4"
              >
                here
              </Link>{" "}
              to explore our most common questions — quick, clear, and no fluff.
            </p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
