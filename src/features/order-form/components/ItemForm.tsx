import { styled } from '../../../stitches.config';
import * as Form from '@radix-ui/react-form';
import { Input } from '../../common/components/Input';
import { HStack } from '../../common/components/Stack';
import { Select } from '../../common/components/Select';
import { useFormContext } from 'react-hook-form';

export const ItemForm = () => {
  const { register, watch } = useFormContext();
  const watchItem = watch('item');

  return (
    <FormField name="품목">
      <FormLabel>품목</FormLabel>
      <StyledFormGrid>
        <HStack css={{ gap: 10 }}>
          <Select {...register('item', { required: true })}>
            <option value="">선택</option>
            <option>냉장품</option>
            <option>냉동품</option>
            <option>직접입력</option>
          </Select>
          <Input
            {...register('itemDetail', {
              required: watchItem === '직접입력',
              disabled: watchItem !== '직접입력',
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
