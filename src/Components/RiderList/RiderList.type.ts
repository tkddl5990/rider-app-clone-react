export interface RiderData {
  order_id: number;
  status_code: string;
  name: string;
  recipient_zip_code: string;
  recipient_address: string;
  tms_count: number;
  prepare_count: number;
  complete_count: number;
  delivery_prepare_count: number;
  delivery_complete_count: number;
  outgoing_status_code: string;
  complete_status_code: string;
  sort: number;
  is_blacklist: string;
}

interface RiderDataIndex extends RiderData {
  index: number;
}

export interface RiderProps {
  data: RiderDataIndex;
  goDetail: (id: number) => void;
}
