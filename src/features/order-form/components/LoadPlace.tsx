import { Cross1Icon } from '@radix-ui/react-icons';
import { FC } from 'react';
import { UseFieldArrayRemove, useFormContext } from 'react-hook-form';
import { styled } from '../../../stitches.config';
import { AddressModal } from '../../common/components/AddressModal';
import { FormField, FormInput, FormLabel, FormMessage } from '../../common/components/Form';
import { Input } from '../../common/components/Input';
import { FormLabelEnum, OrderForm } from '../schema';
import { InputDatePicker } from './InputDatePicker';

interface LoadPlaceProps {
  index: number;
  fieldName: FormLabelEnum.LOAD_PLACE;
  remove: UseFieldArrayRemove;
}

export const LoadPlace: FC<LoadPlaceProps> = ({ index, fieldName, remove }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderForm>();

  return (
    <GridLayout>
      <Header>
        상차지 정보
        {index > 0 && <Cross1Icon onClick={() => remove(index)} />}
      </Header>
      <FormField name="담당자" display="flex">
        <FormLabel display="flex">담당자</FormLabel>
        <FormInput display="flex">
          <Input {...register(`${fieldName}.${index}.name`, {})} />
          {errors[fieldName]?.[index]?.name && (
            <FormMessage message={errors[fieldName]?.[index]?.name?.message as string} />
          )}
        </FormInput>
      </FormField>
      <FormField name="날짜" display="flex">
        <FormLabel display="flex">날짜</FormLabel>
        <FormInput display="flex">
          <InputDatePicker label={`${fieldName}.${index}.date`} />
          {errors[fieldName]?.[index]?.date && (
            <FormMessage message={errors[fieldName]?.[index]?.date?.message as string} />
          )}
        </FormInput>
      </FormField>
      <AddressModal formValue={`${fieldName}.${index}.address`}>
        <FormField name="상차지" display="flex">
          <FormLabel display="flex">상차지</FormLabel>
          <FormInput display="flex">
            <Input {...register(`${fieldName}.${index}.address`, {})} readOnly />
            {errors[fieldName]?.[index]?.address && (
              <FormMessage message={errors[fieldName]?.[index]?.address?.message as string} />
            )}
          </FormInput>
        </FormField>
      </AddressModal>
    </GridLayout>
  );
};

const GridLayout = styled('div', {
  gridColumn: '1fr',
  border: 'solid 1px $gray6',
  borderRadius: '4px',

  padding: '8px',
});

const Header = styled('p', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '18px',
  marginBottom: '12px',
});
