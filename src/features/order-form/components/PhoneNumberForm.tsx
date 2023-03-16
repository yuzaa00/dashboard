import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormLabelEnum } from '../schema';
import { BasicForm } from './BasicForm';

export const PhoneNumberForm = () => {
  const { setValue } = useFormContext();

  const phoneNumberAutoFormat = (phoneNumber: string) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, '');

    if (number.length < 4) return number;
    if (number.length < 8) return number.replace(/(\d{3})(\d{1})/, '$1-$2');
    if (number.length < 11) return number.replace(/(\d{3})(\d{4})(\d{1})/, '$1-$2-$3');
    return number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setValue('phoneNumber', targetValue);
  };

  return <BasicForm label={FormLabelEnum.PHONENUMBER} onChange={handleChange} maxLength={13} />;
};
