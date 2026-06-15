import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';


export function AccordionSection({ value, title, description, children, completed }) {
  return (
    <Accordion.Item value={value} className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden">
      <Accordion.Header>
        <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors group">
          <div className="flex items-start gap-3 flex-1">
            {completed && (
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
            )}
            <div>
              <h3 className="font-semibold text-[#1e293b] group-hover:text-[#2B0A5A]">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-[#64748b] mt-1">{description}</p>
              )}
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-[#64748b] transition-transform group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <div className="p-6 pt-0 border-t border-[#e2e8f0]">
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
