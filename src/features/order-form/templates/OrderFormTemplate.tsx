import * as Form from '@radix-ui/react-form';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from '../components/AddressForm';
import { BasicForm } from '../components/BasicForm';
import { DateForm } from '../components/DateForm';
import { ItemForm } from '../components/ItemForm';
import { SupplyForm } from '../components/SupplyForm';
import { FormLabelEnum, OrderForm, OrderFormSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const OrderFormTemplate = () => {
  const methods = useForm<OrderForm>({ resolver: zodResolver(OrderFormSchema) });
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={methods.handleSubmit(onSubmit)}>
        <BasicForm label={FormLabelEnum.NAME} />
        <BasicForm label={FormLabelEnum.PHONENUMBER} />
        <DateForm />
        <ItemForm />
        <SupplyForm />
        <AddressForm />
        <Form.Submit asChild>
          <button type="submit">등록</button>
        </Form.Submit>
      </Form.Root>
    </FormProvider>
  );
};
