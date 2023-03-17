import { FormLabelEnum, FormLabelText } from '../schema';
import { AddressModal } from '../../common/components/AddressModal';
import { FormField, FormInput, FormLabel, FormMessage } from '../../common/components/Form';
import { Input } from '../../common/components/Input';
import { useFormContext } from 'react-hook-form';

export const AddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField name={FormLabelText[FormLabelEnum.ADDRESS]}>
      <FormLabel>{FormLabelText[FormLabelEnum.ADDRESS]}</FormLabel>
      <FormInput>
        <AddressModal formValue={FormLabelEnum.ADDRESS}>
          <Input {...register(FormLabelEnum.ADDRESS)} />
        </AddressModal>
        {errors[FormLabelEnum.ADDRESS] && (
          <FormMessage message={errors[FormLabelEnum.ADDRESS]?.message as string} />
        )}
      </FormInput>
    </FormField>
  );
};
