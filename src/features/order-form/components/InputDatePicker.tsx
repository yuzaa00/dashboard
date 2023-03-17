import DatePicker from 'react-datepicker';
import { Input } from '../../common/components/Input';
import { FC } from 'react';
import { ko } from 'date-fns/esm/locale';
import { Controller, useFormContext } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

interface InputDatePickerProps {
  label: string;
  minDate?: Date;
}

export const InputDatePicker: FC<InputDatePickerProps> = ({ label, minDate }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={label}
      render={({ field: { onChange, onBlur, value } }) => (
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
};
