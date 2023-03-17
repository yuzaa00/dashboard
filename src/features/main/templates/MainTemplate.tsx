import { VStack } from '../../common/components/Stack';
import { OrderFormTemplate } from '../../order-form/templates/OrderFormTemplate';
import { OrderTableTemplate } from '../../order-table/templates/OrderTableTemplate';

export const MainTemplate = () => {
  return (
    <VStack>
      <OrderFormTemplate />
      <OrderTableTemplate />
    </VStack>
  );
};
