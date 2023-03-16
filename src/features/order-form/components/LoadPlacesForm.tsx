import { Fragment } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { styled } from '../../../stitches.config';
import { HStack } from '../../common/components/Stack';
import { FormLabelEnum } from '../schema';
import { LoadPlace } from './LoadPlace';

const MAX_LOAD_PLACES_COUNT = 3;

export const LoadPlacesForm = () => {
  const { fields, append } = useFieldArray({ name: FormLabelEnum.LOAD_PLACE });

  return (
    <GridLayout>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <LoadPlace index={index} fieldName={FormLabelEnum.LOAD_PLACE} />
        </Fragment>
      ))}
      {fields.length < MAX_LOAD_PLACES_COUNT && (
        <button type="button" onClick={() => append({})}>
          append
        </button>
      )}
    </GridLayout>
  );
};

const GridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: `repeat(${MAX_LOAD_PLACES_COUNT}, 1fr)`,
  gap: '10px',
});
