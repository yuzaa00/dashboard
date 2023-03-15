import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { styled } from '../../../stitches.config';
import { Modal, ModalContent, ModalTrigger } from '../../common/components/Modal';
import { FormLabelEnum } from '../schema';
import { BasicForm } from './BasicForm';
import * as Form from '@radix-ui/react-form';
import { Input } from '../../common/components/Input';
import { useFormContext } from 'react-hook-form';
import { VStack } from '../../common/components/Stack';

export const AddressForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { register, setValue } = useFormContext();

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('address', fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onOpenChange={setModalOpen}>
      <FormField name="출근지">
        <FormLabel>출근지</FormLabel>
        <FormControl asChild>
          <ModalTrigger asChild>
            <VStack>
              <Input {...register('address')} />
            </VStack>
          </ModalTrigger>
        </FormControl>
      </FormField>
      <ModalContent>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </ModalContent>
    </Modal>
  );
};

export const FormField = styled(Form.Field, {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  marginBottom: '16px',
});

export const FormLabel = styled(Form.Label, {
  gridColumn: '1 / 3',
  padding: '0 10px',

  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '35px',
  color: '$gray12',
});

export const FormControl = styled(Form.Control, {
  gridColumn: '3 / 13',
});
