import { TFaqs } from "@/api/type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = { faqData: TFaqs[] };
export function FaqItem({ faqData }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((items, i) => (
        <AccordionItem key={i} value={items.question}>
          <AccordionTrigger>{items.question}</AccordionTrigger>
          <AccordionContent>{items.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
