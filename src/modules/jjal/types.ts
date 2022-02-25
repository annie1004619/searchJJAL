// jjal 리덕스 모듈에서 관리할 상태에 대한 타입 선언

import { JjalType } from '../../api/jjal';

export type JjalState = {
  jjals: {
    loading: boolean;
    error: Error | null;
    data: Array<JjalType> | null | Array<unknown>;
  };
};
