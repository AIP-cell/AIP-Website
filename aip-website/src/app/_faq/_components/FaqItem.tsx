import { TFaqs } from "@/api/type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerFaq,
} from "@/components/ui/accordion";

type Props = { faqData: TFaqs[] };
export function FaqItem({ faqData }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData?.map((items, i) => (
        <AccordionItem key={i} value={items.question}>
          <AccordionTriggerFaq className="~text-h9Copy4/h8Copy3 ~leading-[1.575rem]/[1.4rem]">
            {items.question}
          </AccordionTriggerFaq>
          <AccordionContent className="text-h9Copy5 leading-[1.225rem]">
            {items.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
