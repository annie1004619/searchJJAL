import React from 'react';

type ErrorProps = {
  error: {
    message: string;
    name: string;
    stack: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    config: Object;
    status: number;
  };
};
function Error({ error }: any) {
  return (
    <div>
      <div>문제가 발생했습니다. </div>
      {error.message}
    </div>
  );
}

export default Error;
