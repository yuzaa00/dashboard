import { forwardRef, HTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import type * as Stitches from '@stitches/react';
import { styled, keyframes } from '../../../stitches.config';

const MODAL_Z_INDEX = 1_000;

export const ModalContent = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, ...props }, forwardRef) => (
    <DialogPrimitive.Portal>
      <Overlay />
      <Content {...props} ref={forwardRef}>
        <DialogPrimitive.Close aria-label="Close">
          <Cross1Icon />
        </DialogPrimitive.Close>
        {children}
      </Content>
    </DialogPrimitive.Portal>
  ),
);

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;

const animation = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const Overlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  zIndex: MODAL_Z_INDEX,
  inset: 0,
  background: '$blackA7',
  animation: `${animation} 400ms ease`,
});

const centerKeyframes = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, 100%)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%)' },
});

const Content = styled(DialogPrimitive.Content, {
  background: 'white',
  borderRadius: '10px',
  position: 'fixed',
  zIndex: MODAL_Z_INDEX,
  padding: '20px',
  color: '$gray12',
  outline: 0,

  maxWidth: '400px',
  width: '80vw',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  animation: `${centerKeyframes} 400ms ease`,
});

export type ContentProps = Stitches.VariantProps<typeof Content> &
  HTMLAttributes<HTMLDivElement> & { css?: Stitches.CSS };
