import { PlusIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { styled } from '../../../stitches.config';
import { FormLabelEnum } from '../schema';
import { LoadPlace } from './LoadPlace';

const MAX_LOAD_PLACES_COUNT = 3;

export const LoadPlacesForm = () => {
  const { fields, append, remove } = useFieldArray({ name: FormLabelEnum.LOAD_PLACE });

  return (
    <GridLayout>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <LoadPlace index={index} fieldName={FormLabelEnum.LOAD_PLACE} remove={remove} />
        </Fragment>
      ))}
      {fields.length < MAX_LOAD_PLACES_COUNT && (
        <AppendButton type="button" onClick={() => append({})}>
          <PlusIcon width={20} height={20} />
        </AppendButton>
      )}
    </GridLayout>
  );
};

const GridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '10px',
  marginBottom: '16px',

  '@sm': {
    gridTemplateColumns: `repeat(${MAX_LOAD_PLACES_COUNT}, 1fr)`,
  },
});

const AppendButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '4px',
  border: 'solid 1px $gray6',
});
