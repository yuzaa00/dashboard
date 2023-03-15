import DatePicker from 'react-datepicker';
import { Input } from '../../common/components/Input';
import { FC, forwardRef } from 'react';
import { ko } from 'date-fns/esm/locale';
import { Controller, useFormContext } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

interface InputDatePickerProps {
  label: 'fromDate' | 'toDate';
  minDate?: Date;
}

export const InputDatePicker: FC<InputDatePickerProps> = forwardRef(({ label, minDate }, ref) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={label}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <DatePicker
          dateFormat="yyyy-MM-dd"
          minDate={minDate}
          locale={ko}
          selected={value}
          onChange={onChange}
          onBlur={onBlur}
          customInput={<Input />}
        />
      )}
    />
  );
});
