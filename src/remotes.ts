import { http } from './http';

export function getOrders() {
  return http.get<Array<Order>>('/orders');
}

export function postOrder(data: Order) {
  return http.post<Order>('/order', data);
}

export function deleteOrder(data: number[]) {
  return http.delete<number[]>('/order', data);
}

export interface LoadPlace {
  /** 상차 담당자 */
  name: string;
  /** 상차지 주소 */
  address: string;
  /** 상차 날짜 */
  date: string;
}

export interface Order {
  /** id */
  seqNo: number;
  /** 이름 */
  name: string;
  /** 휴대폰 번호 */
  phoneNumber: string;
  /** 시작 날짜 */
  fromDate: string;
  /** 끝 날짜 */
  toDate: string;
  /** 품목 (셀렉 박스) */
  item: string;
  /** 품목 (인풋 필드) */
  itemDetail: string;
  /** 물량 (셀렉 박스) */
  supply: string;
  /** 물량 (인풋 필드) */
  supplyDetail: string;
  /** 출근지 */
  address: string;
  /** 상차지 정보 */
  loadPlace: LoadPlace[];
}
