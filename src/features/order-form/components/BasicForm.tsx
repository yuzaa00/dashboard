import { Input } from '../../common/components/Input';
import { useFormContext } from 'react-hook-form';
import { ChangeEvent, ComponentProps, FC } from 'react';
import { FormLabelEnum, FormLabelText } from '../schema';
import { FormField, FormInput, FormLabel, FormMessage } from '../../common/components/Form';

interface BasicFormProps {
  label: FormLabelEnum.NAME | FormLabelEnum.PHONE_NUMBER | FormLabelEnum.ADDRESS;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BasicForm: FC<BasicFormProps & ComponentProps<typeof Input>> = ({
  label,
  onChange,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField name={FormLabelText[label]}>
      <FormLabel>{FormLabelText[label]}</FormLabel>
      <FormInput>
        <Input
          {...register(label, {
            onChange,
          })}
          {...props}
        />
        {errors[label] && <FormMessage message={errors[label]?.message as string} />}
      </FormInput>
    </FormField>
  );
};
