import * as Form from '@radix-ui/react-form';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from '../components/AddressForm';
import { BasicForm } from '../components/BasicForm';
import { DateForm } from '../components/DateForm';
import { ItemForm } from '../components/ItemForm';
import { SupplyForm } from '../components/SupplyForm';
import { FormLabelEnum, OrderForm, OrderFormSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneNumberForm } from '../components/PhoneNumberForm';
import { LoadPlaceForm } from '../components/LoadPlaceForm';

export const OrderFormTemplate = () => {
  const methods = useForm<OrderForm>({ resolver: zodResolver(OrderFormSchema) });
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={methods.handleSubmit(onSubmit)}>
        <BasicForm label={FormLabelEnum.NAME} />
        <PhoneNumberForm />
        <DateForm />
        <ItemForm />
        <SupplyForm />
        <AddressForm />
        <LoadPlaceForm />
        <Form.Submit asChild>
          <button>등록</button>
        </Form.Submit>
      </Form.Root>
    </FormProvider>
  );
};
