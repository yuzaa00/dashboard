import { FC } from 'react';
import { styled } from '../../../stitches.config';
import * as Form from '@radix-ui/react-form';
import { InputDatePicker } from './InputDatePicker';
import { useFormContext } from 'react-hook-form';
import { FormLabelEnum } from '../schema';
import { HStack } from '../../common/components/Stack';

interface DateFormProps {}

export const DateForm: FC<DateFormProps> = ({}) => {
  const { watch } = useFormContext();
  const watchFromDate = watch('fromDate');

  return (
    <FormField name="날짜">
      <FormLabel>날짜</FormLabel>
      <StyledFormGrid>
        <HStack css={{ gap: 10 }}>
          <InputDatePicker label={FormLabelEnum.FROMDATE} />
          <InputDatePicker label={FormLabelEnum.TODATE} minDate={watchFromDate} />
        </HStack>
      </StyledFormGrid>
    </FormField>
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

export const StyledFormGrid = styled('div', {
  gridColumn: '3 / 13',
});
