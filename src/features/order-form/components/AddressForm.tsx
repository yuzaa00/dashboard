import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Modal, ModalContent, ModalTrigger } from '../../common/components/Modal';
import { useFormContext } from 'react-hook-form';
import { BasicForm } from './BasicForm';
import { FormLabelEnum } from '../schema';
import { VStack } from '../../common/components/Stack';

export const AddressForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { setValue } = useFormContext();

  // TODO 리팩토링
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

    setValue('address', fullAddress, { shouldValidate: true });
    setModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onOpenChange={setModalOpen}>
      <ModalTrigger asChild>
        <VStack>
          <BasicForm label={FormLabelEnum.ADDRESS} readOnly />
        </VStack>
      </ModalTrigger>
      <ModalContent>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </ModalContent>
    </Modal>
  );
};
