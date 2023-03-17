import { rest } from 'msw';

export function handlers() {
  return [
    rest.get('/orders', getOrders),
    rest.post('/order', postOrder),
    rest.delete('/order', deleteOrder),
  ];
}

const getOrders: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  const response = await fetch('timf_front_mock_table_list.json');
  const data = await response.json();

  return res(ctx.status(200), ctx.json(data));
};

const postOrder: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const request = await req.json();

  return res(ctx.status(200), ctx.json({ order: request.data }));
};
const deleteOrder: Parameters<typeof rest.delete>[1] = async (req, res, ctx) => {
  const request = await req.json();

  return res(ctx.status(200), ctx.json(request));
};
