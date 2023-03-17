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
import { LoadPlacesForm } from '../components/LoadPlacesForm';
import { styled } from '../../../stitches.config';
import { Button } from '../../common/components/Button';
import { FC } from 'react';

interface OrderFormTemplateProps {
  formState?: OrderForm;
  setFormState: (form: OrderForm) => void;
}

export const OrderFormTemplate: FC<OrderFormTemplateProps> = ({ formState, setFormState }) => {
  const methods = useForm<OrderForm>({
    resolver: zodResolver(OrderFormSchema),
    values: formState,
    defaultValues: {
      loadPlace: [{ name: '', address: '' }],
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={methods.handleSubmit(onSubmit)}>
        <OrderFormGridLayout>
          <BasicFormGridLayout>
            <BasicForm label={FormLabelEnum.NAME} />
            <PhoneNumberForm />
            <DateForm />
            <ItemForm />
            <SupplyForm />
            <AddressForm />
          </BasicFormGridLayout>
          <LoadPlaceFormGridLayout>
            <LoadPlacesForm />
          </LoadPlaceFormGridLayout>
        </OrderFormGridLayout>
        <Form.Submit asChild>
          <Button>등록</Button>
        </Form.Submit>
      </Form.Root>
    </FormProvider>
  );
};

const OrderFormGridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '16px',
});

const BasicFormGridLayout = styled('div', {
  gridColumn: '1 / 6',
});

const LoadPlaceFormGridLayout = styled('div', {
  gridColumn: '6 / 13',
});
