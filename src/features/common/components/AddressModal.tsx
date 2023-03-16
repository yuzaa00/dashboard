import { FC, ReactNode, useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Modal, ModalContent, ModalTrigger } from '../../common/components/Modal';
import { useFormContext } from 'react-hook-form';
import { VStack } from '../../common/components/Stack';

interface AddressModalProps {
  formValue: string;
  children: ReactNode;
}

export const AddressModal: FC<AddressModalProps> = ({ formValue, children }) => {
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

    setValue(formValue, fullAddress, { shouldValidate: true });
    setModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onOpenChange={setModalOpen}>
      <ModalTrigger asChild>
        <VStack>{children}</VStack>
      </ModalTrigger>
      <ModalContent>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </ModalContent>
    </Modal>
  );
};
