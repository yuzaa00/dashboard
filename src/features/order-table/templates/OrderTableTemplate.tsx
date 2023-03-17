import { useMemo } from 'react';
import { getOrders } from '../../../remotes';
import { Table } from '../components/Table';
import { useQuery } from '@tanstack/react-query';

export const OrderTableTemplate = () => {
  const { data: orders } = useQuery({ queryKey: ['orders'], queryFn: getOrders });

  const [columns, tableData] = useMemo(() => {
    const columns = [
      { header: '이름', accessorKey: 'name' },
      { header: '휴대폰번호', accessorKey: 'phoneNumber' },
      { header: '날짜', accessorKey: 'date' },
      { header: '품목', accessorKey: 'item' },
      { header: '물량', accessorKey: 'supply' },
      { header: '출근지', accessorKey: 'address' },
    ];

    const tableData = orders?.map((order) => ({
      seqNo: order.seqNo,
      name: order.name,
      phoneNumber: order.phoneNumber,
      date: `${order.fromDate} ~ ${order.toDate}`,
      item: order.item,
      supply: order.supply,
      address: order.address,
    }));

    return [columns, tableData];
  }, [orders]);

  if (!orders) return null;

  return <Table data={tableData} columns={columns} />;
};
