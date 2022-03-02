import React, { useState, useCallback } from 'react';

type OnChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

function useInput(initialValue: string | boolean | number) {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    const { target } = e;
    const targetValue =
      target.type === 'checkbox' ? target.checked : target.value;
    setValue(targetValue);
  }, []);
  return [value, handler, setValue] as [string, OnChangeType, typeof setValue];
}

export default useInput;
