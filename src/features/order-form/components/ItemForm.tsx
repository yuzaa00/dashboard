import { Input } from '../../common/components/Input';
import { HStack } from '../../common/components/Stack';
import { Select } from '../../common/components/Select';
import { useFormContext } from 'react-hook-form';
import { FormField, FormInput, FormLabel, FormMessage } from '../../common/components/Form';
import { FormLabelEnum } from '../schema';

export const ItemForm = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchItem = watch(FormLabelEnum.ITEM);
  const errorMessage =
    (watchItem !== '직접입력' && errors[FormLabelEnum.ITEM]?.message) ||
    (watchItem === '직접입력' && errors[FormLabelEnum.ITEM_DETAIL]?.message);

  return (
    <FormField name="품목">
      <FormLabel>품목</FormLabel>
      <FormInput>
        <HStack css={{ gap: 10 }}>
          <Select {...register(FormLabelEnum.ITEM)}>
            <option value="">선택</option>
            <option>냉장품</option>
            <option>냉동품</option>
            <option>직접입력</option>
          </Select>
          <Input
            {...register(FormLabelEnum.ITEM_DETAIL, {
              required: watchItem === '직접입력',
              disabled: watchItem !== '직접입력',
            })}
          />
        </HStack>
        {errorMessage && <FormMessage message={errorMessage as string} />}
      </FormInput>
    </FormField>
  );
};
