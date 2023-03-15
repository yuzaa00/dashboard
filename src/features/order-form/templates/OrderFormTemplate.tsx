import * as Form from '@radix-ui/react-form';
import { FormProvider, useForm } from 'react-hook-form';
import { BasicForm } from '../components/BasicForm';
import { DateForm } from '../components/DateForm';
import { ItemForm } from '../components/ItemForm';
import { SupplyForm } from '../components/SupplyForm';
import { FormLabelEnum } from '../schema';

export const OrderFormTemplate = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={methods.handleSubmit(onSubmit)}>
        <BasicForm label={FormLabelEnum.NAME} />
        <BasicForm label={FormLabelEnum.PHONENUMBER} />
        <DateForm />
        <ItemForm />
        <SupplyForm />
        <BasicForm label={FormLabelEnum.ADDRESS} />
        <Form.Submit asChild>
          <button type="submit">등록</button>
        </Form.Submit>
      </Form.Root>
    </FormProvider>
  );
};
