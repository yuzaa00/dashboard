import * as z from 'zod';
import { formMessages } from '../common/constant';

export enum FormLabelEnum {
  NAME = 'name',
  PHONE_NUMBER = 'phoneNumber',
  FROM_DATE = 'fromDate',
  TO_DATE = 'toDate',
  ITEM = 'item',
  ITEM_DETAIL = 'itemDetail',
  SUPPLY = 'supply',
  SUPPLY_DETAIL = 'supplyDetail',
  ADDRESS = 'address',
  DATE = 'date',
  LOAD_PLACE = 'loadPlace',
}

export const FormLabelText: { [key: string]: string } = {
  name: '이름',
  phoneNumber: '휴대폰 번호',
  address: '출근지',
  date: '날짜',
} as const;

export const LoadPlaceSchema = z.object({
  name: z
    .string()
    .min(1, formMessages.REQUIRED)
    .regex(/^[ㄱ-ㅎ가-힣a-zA-Z\s]*$/, formMessages.NAME_INVALID),
  date: z.date({ required_error: formMessages.REQUIRED }),
  address: z.string().min(1, formMessages.REQUIRED),
});

export const OrderFormSchema = z.object({
  name: z
    .string()
    .min(1, formMessages.REQUIRED)
    .regex(/^[ㄱ-ㅎ가-힣a-zA-Z\s]*$/, formMessages.NAME_INVALID),
  phoneNumber: z
    .string()
    .min(1, formMessages.REQUIRED)
    .regex(/(\d{3})-(\d{4})-(\d{4})/, formMessages.TEL_INVALID),
  fromDate: z.date({ required_error: formMessages.FROMDATE_REQUIRED }),
  toDate: z.date({ required_error: formMessages.TODATE_REQUIRED }),
  item: z.string().min(1, formMessages.ITEM_REQUIRED),
  itemDetail: z.string().min(1, formMessages.ITEM_DETAIL_REQUIRED).optional(),
  supply: z.string().optional(),
  supplyDetail: z
    .number({
      invalid_type_error: formMessages.SUPPLY_DETAIL_TYPE_INVALID,
    })
    .gte(1, formMessages.SUPPLY_DETAIL_INVALID)
    .int()
    .safe()
    .optional(),
  address: z.string().min(1, formMessages.REQUIRED),
  loadPlace: z.array(LoadPlaceSchema),
});

export type OrderForm = z.infer<typeof OrderFormSchema>;
