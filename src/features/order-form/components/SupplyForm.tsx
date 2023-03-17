import { Input } from '../../common/components/Input';
import { Select } from '../../common/components/Select';
import { HStack } from '../../common/components/Stack';
import { useFormContext } from 'react-hook-form';
import { FormField, FormInput, FormLabel, FormMessage } from '../../common/components/Form';
import { FormLabelEnum } from '../schema';

export const SupplyForm = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchSupply = watch(FormLabelEnum.SUPPLY);
  const errorMessage =
    !!watchSupply &&
    (errors[FormLabelEnum.SUPPLY]?.message || errors[FormLabelEnum.SUPPLY_DETAIL]?.message);

  return (
    <FormField name="물량">
      <FormLabel>물량</FormLabel>
      <FormInput>
        <HStack css={{ gap: 10 }}>
          <Select {...register(FormLabelEnum.SUPPLY)}>
            <option value="">선택</option>
            <option>PLT</option>
            <option>BOX</option>
            <option>EA</option>
          </Select>
          <Input
            type="number"
            {...register(FormLabelEnum.SUPPLY_DETAIL, {
              valueAsNumber: true,
              required: !!watchSupply,
              disabled: !watchSupply,
            })}
          />
        </HStack>
        {errorMessage && <FormMessage message={errorMessage as string} />}
      </FormInput>
    </FormField>
  );
};
