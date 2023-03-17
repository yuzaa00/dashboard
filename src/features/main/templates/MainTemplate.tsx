import { useState } from 'react';
import { VStack } from '../../common/components/Stack';
import { OrderForm } from '../../order-form/schema';
import { OrderFormTemplate } from '../../order-form/templates/OrderFormTemplate';
import { OrderTableTemplate } from '../../order-table/templates/OrderTableTemplate';

export const MainTemplate = () => {
  const [formState, setFormState] = useState<OrderForm>();

  return (
    <VStack>
      <OrderFormTemplate formState={formState} setFormState={setFormState} />
      <OrderTableTemplate setFormState={setFormState} />
    </VStack>
  );
};
