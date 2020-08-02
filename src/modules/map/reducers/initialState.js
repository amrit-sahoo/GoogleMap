import { requestStatus } from '../constants';

export const mapState = {
  data: null,
  error: null,
  selectedLoc: null,
  requestStatus: requestStatus.IDLE
}