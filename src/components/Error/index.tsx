import React from 'react';

type ErrorProps = {
  error: Error;
};
function Error({ error }: ErrorProps) {
  return (
    <div>
      <div>문제가 발생했습니다. </div>
      {error.message}
    </div>
  );
}

export default Error;
