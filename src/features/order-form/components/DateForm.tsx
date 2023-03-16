import { InputDatePicker } from './InputDatePicker';
import { useFormContext } from 'react-hook-form';
import { FormLabelEnum } from '../schema';
import { HStack } from '../../common/components/Stack';
import { FormField, FormInput, FormLabel, FormMessage } from '../../common/components/Form';
import { addDays } from 'date-fns';

export const DateForm = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const watchFromDate = watch('fromDate');
  const errorMessage = errors.fromDate?.message || errors.toDate?.message;

  return (
    <FormField name="날짜">
      <FormLabel>날짜</FormLabel>
      <FormInput>
        <HStack css={{ gap: 10 }}>
          <InputDatePicker label={FormLabelEnum.FROMDATE} />
          <InputDatePicker label={FormLabelEnum.TODATE} minDate={addDays(watchFromDate, 1)} />
        </HStack>
        {errorMessage && <FormMessage message={errorMessage as string} />}
      </FormInput>
    </FormField>
  );
};
