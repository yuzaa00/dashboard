import { FC, HTMLProps, useEffect, useMemo, useRef, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { styled } from '../../../stitches.config';
import { VStack } from '../../common/components/Stack';
import { Select } from '../../common/components/Select';

interface TableProps {
  data: any;
  columns: any;
}

export const Table: FC<TableProps> = ({ data, columns }) => {
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
      { id: 'copyOrder', header: '오더 복사', cell: <button>오더 복사</button> },
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
    getPaginationRowModel: getPaginationRowModel(),
    debugAll: true,
  });

  return (
    <>
      <VStack css={{ gap: '10px' }}>
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

const StyledTable = styled('table', {
  borderSpacing: 0,
  width: '100%',
});

const StyledTh = styled('th', {
  padding: '10px',
  backgroundColor: '$gray7',
  borderBottom: 'solid 1px $colors$gray6',
  height: '20px',

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
