import { BasicForm } from './BasicForm';
import { FormLabelEnum } from '../schema';
import { AddressModal } from '../../common/components/AddressModal';

export const AddressForm = () => {
  return (
    <AddressModal formValue={FormLabelEnum.ADDRESS}>
      <BasicForm label={FormLabelEnum.ADDRESS} readOnly />
    </AddressModal>
  );
};
