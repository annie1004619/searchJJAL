import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getJjal } from '../../api/jjal';
import { JjalAction } from './types';
import { GET_JJAL, GET_JJAL_ERROR, GET_JJAL_SUCCESS } from './actions';

export const getJjalThunk =
  (text: string): ThunkAction<void, RootState, null, JjalAction> =>
  async (dispatch) => {
    dispatch({ type: GET_JJAL }); // 요청 시작
    try {
      const jjals = await getJjal(text); //API 호출
      dispatch({ type: GET_JJAL_SUCCESS, jjals }); //성공
    } catch (e) {
      dispatch({ type: GET_JJAL_ERROR, error: e }); //실패
    }
  };
