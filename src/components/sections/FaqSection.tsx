import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: React.ReactNode;
}

export function FaqSection({
  faqs,
  eyebrow = "Common Questions",
  title
}: FaqSectionProps) {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-primary uppercase tracking-widest text-xs mb-3">{eyebrow}</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          {title || (
            <>
              Frequently <span className="text-primary italic">Asked</span>
            </>
          )}
        </h2>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl border border-border/50 px-5 shadow-sm"
              data-testid={`faq-${i}`}
            >
              <AccordionTrigger className="font-sans text-sm font-medium text-foreground py-4 hover:no-underline hover:text-primary text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
