import { JjalState } from './types';
import { AnyAction } from 'redux';
import { GET_JJAL, GET_JJAL_ERROR, GET_JJAL_SUCCESS, SET_INIT } from './action';

//초기 상태 선언
const initialState: JjalState = {
  jjals: {
    loading: false,
    error: null,
    data: null,
  },
};

function jjalReducer(
  state: JjalState = initialState,
  action: AnyAction,
): JjalState {
  switch (action.type) {
    case GET_JJAL:
      return {
        ...state,
        jjals: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_JJAL_SUCCESS:
      return {
        ...state,
        jjals: {
          loading: false,
          data: action.jjals,
          error: null,
        },
      };
    case GET_JJAL_ERROR:
      return {
        ...state,
        jjals: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case SET_INIT:
      return {
        ...state,
        jjals: {
          loading: false,
          error: null,
          data: null,
        },
      };

    default:
      return state;
  }
}

export default jjalReducer;
