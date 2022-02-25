import { useState, useEffect } from 'react';

// scroll을 내린다면 top 버튼을 표시해주고, 위로 올려준다.
export default function useScrollTop(initialState = false) {
  const [scrollToTop, setScrollToTop] = useState(initialState);

  useEffect(() => {
    scrollToTop && setScrollToTop(false);
    window.scrollTo(0, 0);
  }, [scrollToTop, setScrollToTop]);

  return setScrollToTop;
}
