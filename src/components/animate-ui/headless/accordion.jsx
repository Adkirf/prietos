'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@/components/animate-ui/headless/disclosure';

function Accordion({ as: Component = 'div', children, ...props }) {
  return <Component data-slot="accordion" {...props}>{children}</Component>;
}

function AccordionItem({ className, children, ...rest }) {
  return (
    <Disclosure
      data-slot="accordion-item"
      {...rest}
      className={cn('border-b', className)}
    >
      {children}
    </Disclosure>
  );
}

function AccordionButton({
  children,
  className,
  transition = { type: 'spring', stiffness: 150, damping: 17 },
  chevron = true,
  ...rest
}) {
  return (
    <DisclosureButton
      data-slot="accordion-button"
      {...rest}
      className={cn(
        'flex w-full text-start flex-1 items-center justify-between py-4 font-medium hover:underline',
        className,
      )}
    >
      {(bag) => (
        <>
          {typeof children === 'function' ? children(bag) : children}
          {chevron && (
            <motion.div
              data-slot="accordion-button-chevron"
              animate={{ rotate: bag.open ? 180 : 0 }}
              transition={transition}
            >
              <ChevronDown className="size-5 shrink-0" />
            </motion.div>
          )}
        </>
      )}
    </DisclosureButton>
  );
}

function AccordionPanel({ children, className, as = 'div', ...rest }) {
  return (
    <DisclosurePanel data-slot="accordion-panel" {...rest} as={as}>
      {(bag) => (
        <div className={cn('pb-4 pt-0 text-sm', className)}>
          {typeof children === 'function' ? children(bag) : children}
        </div>
      )}
    </DisclosurePanel>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
};
