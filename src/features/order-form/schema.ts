import * as z from 'zod';
import { formMessages } from '../common/constant';

export enum FormLabelEnum {
  NAME = 'name',
  PHONENUMBER = 'phoneNumber',
  FROMDATE = 'fromDate',
  TODATE = 'toDate',
  ADDRESS = 'address',
}

export const FormLabelText = {
  name: '이름',
  phoneNumber: '휴대폰 번호',
  address: '출근지',
} as const;

export const OrderFormSchema = z.object({
  name: z.string().min(1, { message: formMessages.REQUIRED }),
  phoneNumber: z.string(),
  fromDate: z.string(),
  toDate: z.string(),
  item: z.string(),
  itemDetail: z.string(),
  supply: z.string(),
  supplyDetail: z.string(),
  address: z.string(),
});

export type OrderForm = z.infer<typeof OrderFormSchema>;
