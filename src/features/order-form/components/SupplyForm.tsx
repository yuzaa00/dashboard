import { styled } from '../../../stitches.config';
import * as Form from '@radix-ui/react-form';
import { Input } from '../../common/components/Input';
import { Select } from '../../common/components/Select';
import { HStack } from '../../common/components/Stack';
import { useFormContext } from 'react-hook-form';

export const SupplyForm = () => {
  const { register, watch } = useFormContext();
  const watchSupply = watch('supply');

  return (
    <FormField name="물량">
      <FormLabel>물량</FormLabel>
      <StyledFormGrid>
        <HStack css={{ gap: 10 }}>
          <Select {...register('supply', { required: true })}>
            <option value="">선택</option>
            <option>PLT</option>
            <option>BOX</option>
            <option>EA</option>
          </Select>
          <Input
            {...register('supplyDetail', {
              required: true,
              disabled: !watchSupply,
            })}
          />
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
