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
import { FC, useState } from 'react';
import { Modal, ModalContent } from '../../common/components/Modal';

interface OrderFormTemplateProps {
  formState?: OrderForm;
}

export const OrderFormTemplate: FC<OrderFormTemplateProps> = ({ formState }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<OrderForm>();

  const methods = useForm<OrderForm>({
    resolver: zodResolver(OrderFormSchema),
    values: formState,
    defaultValues: {
      loadPlace: [{ name: '', address: '' }],
    },
  });

  const onSubmit = (data: OrderForm) => {
    setModalOpen(true);
    setForm(data);
  };

  return (
    <Modal open={isModalOpen} onOpenChange={setModalOpen}>
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
      <ModalContent>
        <div>{JSON.stringify(form)}</div>
      </ModalContent>
    </Modal>
  );
};

const OrderFormGridLayout = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '16px',

  '@lg': {
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
});

const BasicFormGridLayout = styled('div', {
  gridColumn: '1',
  gridRow: '1 / 2',

  '@lg': {
    gridColumn: '1 / 6',
    gridRow: '1',
  },
});

const LoadPlaceFormGridLayout = styled('div', {
  gridColumn: '1',
  gridRow: '2 / 3',

  '@lg': {
    gridColumn: '6 / 13',
    gridRow: '1',
  },
});
