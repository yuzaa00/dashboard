import { InputDatePicker } from './InputDatePicker';
import { useFormContext } from 'react-hook-form';
import { FormLabelEnum, FormLabelText } from '../schema';
import { HStack } from '../../common/components/Stack';
import { FormField, FormInput, FormLabel, FormMessage } from '../../common/components/Form';
import { addDays } from 'date-fns';

export const DateForm = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const watchFromDate = watch(FormLabelEnum.FROM_DATE);
  const errorMessage =
    errors[FormLabelEnum.FROM_DATE]?.message || errors[FormLabelEnum.TO_DATE]?.message;

  return (
    <FormField name={FormLabelText[FormLabelEnum.DATE]}>
      <FormLabel>{FormLabelText[FormLabelEnum.DATE]}</FormLabel>
      <FormInput>
        <HStack css={{ gap: 10 }}>
          <InputDatePicker label={FormLabelEnum.FROM_DATE} />
          <InputDatePicker label={FormLabelEnum.TO_DATE} minDate={addDays(watchFromDate, 1)} />
        </HStack>
        {errorMessage && <FormMessage message={errorMessage as string} />}
      </FormInput>
    </FormField>
  );
};
