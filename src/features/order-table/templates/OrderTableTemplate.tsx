import { useMemo, useState } from 'react';
import { deleteOrder, getOrders } from '../../../remotes';
import { Table } from '../components/Table';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Modal, ModalContent } from '../../common/components/Modal';
import { Loading } from '../../order-form/components/Loading';

export const OrderTableTemplate = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { data: orders } = useQuery({ queryKey: ['orders'], queryFn: getOrders });
  const mutation = useMutation({
    mutationFn: deleteOrder,
  });

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

  const handleDeleteClick = (selectedRows: number[]) => {
    if (selectedRows.length > 0) {
      mutation.mutate(selectedRows);
      setModalOpen(true);
    } else {
      alert('선택된 테이블 행이 없습니다');
    }
  };

  if (!orders) return null;

  return (
    <Modal open={isModalOpen} onOpenChange={setModalOpen}>
      <Table data={tableData} columns={columns} onDeleteClick={handleDeleteClick} />
      <ModalContent>
        <div>
          {mutation.isLoading && <Loading />}
          {mutation.isSuccess && (
            <>
              <p>삭제가 완료되었습니다.</p>
              {`[${mutation.data}]`}
            </>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};
