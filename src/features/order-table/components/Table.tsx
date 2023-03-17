import { FC, HTMLProps, useEffect, useMemo, useRef, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { styled } from '../../../stitches.config';
import { VStack } from '../../common/components/Stack';
import { Select } from '../../common/components/Select';
import { Button } from '../../common/components/Button';
import { OrderForm } from '../../order-form/schema';
import _default from 'react-hook-form/dist/logic/appendErrors';

interface TableProps {
  data: any;
  columns: any;
  onDeleteClick: (selectedRows: number[]) => void;
  onCopyClick: (form: OrderForm) => void;
}

export const Table: FC<TableProps> = ({ data, columns, onDeleteClick, onCopyClick }) => {
  const [rowSelection, setRowSelection] = useState({});

  const basicColumns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }: any) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }: any) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      ...columns,
      {
        id: 'copyOrder',
        header: '오더 복사',
        cell: ({ row }: any) => {
          const formData = {
            ...row.original,
            fromDate: new Date(row.original.fromDate),
            toDate: new Date(row.original.toDate),
            loadPlace: row.original.loadPlace.map((place: any) => ({
              ...place,
              date: new Date(place.date),
            })),
          };

          return <button onClick={() => onCopyClick(formData)}>오더 복사</button>;
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns: basicColumns,
    state: {
      rowSelection,
    },
    initialState: {
      pagination: { pageSize: 20 },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <VStack css={{ gap: '10px' }}>
        <VStack css={{ alignSelf: 'end' }}>
          <Button
            onClick={() =>
              onDeleteClick(
                table.getSelectedRowModel().flatRows.map((row: any) => row.original.seqNo),
              )
            }
          >
            삭제
          </Button>
        </VStack>
        <VStack css={{ alignSelf: 'end' }}>
          <Select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[20, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}개 보기
              </option>
            ))}
          </Select>
        </VStack>
        <TableLayout>
          <StyledTable>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <StyledTh key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>{flexRender(header.column.columnDef.header, header.getContext())}</>
                      )}
                    </StyledTh>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <StyledTd key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </StyledTd>
                  ))}
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableLayout>
        <VStack css={{ alignSelf: 'center' }}>
          <Pagination>
            <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
              {'<<'}
            </button>
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              {'<'}
            </button>
            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              {'>'}
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {'>>'}
            </button>
            <span>
              <strong>
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </strong>
            </span>
          </Pagination>
        </VStack>
      </VStack>
    </>
  );
};

const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type="checkbox" ref={ref} className={className + ' cursor-pointer'} {...rest} />;
};

const TableLayout = styled('div', {
  overflow: 'scroll',
});

const StyledTable = styled('table', {
  borderSpacing: 0,
  width: '100%',
  minWidth: 'max-content',
});

const StyledTh = styled('th', {
  padding: '10px',
  backgroundColor: '$gray7',
  borderBottom: 'solid 1px $colors$gray6',
  height: '20px',
  fontWeight: 700,
  color: '$indigo12',

  '&:first-child': {
    borderLeft: 'solid 1px $colors$gray6',
  },
});

const StyledTd = styled('td', {
  padding: '10px',
  borderBottom: 'solid 1px $colors$gray6',
  borderRight: 'solid 1px $colors$gray6',
  textAlign: 'center',
  '&:first-child': {
    borderLeft: 'solid 1px $colors$gray6',
  },
});

const Pagination = styled('div', {
  display: 'flex',
  gap: '10px',
});
