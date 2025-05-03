'use client';

import * as React from 'react';
import {
  Disclosure as DisclosurePrimitive,
  DisclosureButton as DisclosureButtonPrimitive,
  DisclosurePanel as DisclosurePanelPrimitive,
} from '@headlessui/react';
import {
  AnimatePresence,
  motion,
} from 'motion/react';

import { cn } from '@/lib/utils';

const DisclosureContext = React.createContext(undefined);

const useDisclosure = () => {
  const context = React.useContext(DisclosureContext);
  if (!context) {
    throw new Error('useDisclosure must be used within a Disclosure');
  }
  return context;
};

function Disclosure({ children, ...props }) {
  return (
    <DisclosurePrimitive data-slot="disclosure" {...props}>
      {(bag) => (
        <DisclosureContext.Provider value={{ isOpen: bag.open }}>
          {typeof children === 'function' ? children(bag) : children}
        </DisclosureContext.Provider>
      )}
    </DisclosurePrimitive>
  );
}

function DisclosureButton(props) {
  return <DisclosureButtonPrimitive data-slot="disclosure-button" {...props} />;
}

function DisclosurePanel({
  className,
  children,
  transition = { type: 'spring', stiffness: 150, damping: 22 },
  as = motion.div,
  unmount,
  ...rest
}) {
  const { isOpen } = useDisclosure();
  const AsComponent = as;
  return (
    <AnimatePresence>
      {isOpen && (
        <DisclosurePanelPrimitive static as={AsComponent} unmount={unmount}>
          {(bag) => (
            <motion.div
              key="disclosure-panel"
              data-slot="disclosure-panel"
              initial={{ height: 0, opacity: 0, '--mask-stop': '0%' }}
              animate={{ height: 'auto', opacity: 1, '--mask-stop': '100%' }}
              exit={{ height: 0, opacity: 0, '--mask-stop': '0%' }}
              transition={transition}
              style={{
                maskImage:
                  'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
                WebkitMaskImage:
                  'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
              }}
              className={cn('overflow-hidden', className)}
              {...rest}
            >
              {typeof children === 'function' ? children(bag) : children}
            </motion.div>
          )}
        </DisclosurePanelPrimitive>
      )}
    </AnimatePresence>
  );
}

export {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  useDisclosure,
};
