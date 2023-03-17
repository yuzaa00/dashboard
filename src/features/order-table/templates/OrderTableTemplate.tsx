import { FC, useMemo, useState } from 'react';
import { deleteOrder, getOrders } from '../../../remotes';
import { Table } from '../components/Table';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Modal, ModalContent } from '../../common/components/Modal';
import { Loading } from '../../order-form/components/Loading';
import { OrderForm } from '../../order-form/schema';
import { styled } from '../../../stitches.config';

interface OrderTableTemplateProps {
  setFormState: (form: OrderForm) => void;
}

export const OrderTableTemplate: FC<OrderTableTemplateProps> = ({ setFormState }) => {
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
      ...order,
      date: `${order.fromDate} ~ ${order.toDate}`,
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
      <Table
        data={tableData}
        columns={columns}
        onDeleteClick={handleDeleteClick}
        onCopyClick={setFormState}
      />
      <ModalContent>
        <div>
          {mutation.isLoading && <Loading />}
          {mutation.isSuccess && (
            <>
              <MainText>삭제가 완료되었습니다.</MainText>
              <SubText>{`[${mutation.data}]`}</SubText>
            </>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};

const MainText = styled('p', {
  fontWeight: 500,
  fontSize: '18px',
  marginBottom: '8px',
});

const SubText = styled('p', {
  wordBreak: 'break-all',
});
