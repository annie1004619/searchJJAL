// jjal 리덕스 모듈에서 관리할 상태에 대한 타입 선언
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { JjalType } from '../../api/jjal';

export type JjalAction = ActionType<typeof actions>;

export type JjalState = {
  jjals: {
    loading: boolean;
    error: Error | null;
    data: Array<JjalType> | null | Array<unknown>;
  };
};
