import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../atoms/Button';

type PaginationProps = {
  page: number;
  handlePages: (page: number) => void;
  limit: number;
  dataLength: number;
};

type StyleButtonProps = {
  currentPage?: boolean;
  key?: number;
};

function Pagination({ page, limit, dataLength, handlePages }: PaginationProps) {
  const totalPages = Math.ceil(dataLength / limit);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pageNumbers.push(i);
  }
  const onClickPage = (i: number) => {
    handlePages(i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 총 페이지를 10씩 묶어서 보여준다.
  const [pageGroup, setPageGroup] = useState(1);
  const pageGrouplimit = 10;
  const [pageGroupOffset, setPageGroupOffset] = useState(0);

  useEffect(() => {
    setPageGroupOffset((pageGroup - 1) * pageGrouplimit);
    handlePages((pageGroup - 1) * pageGrouplimit + 1);
  }, [pageGroup]);

  const onClickNextPageGroup = () => {
    setPageGroup(pageGroup + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onClickPreviousPageGroup = () => {
    setPageGroup(pageGroup - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Container>
      <li>
        <Button
          iconStyle
          onClick={onClickPreviousPageGroup}
          disabled={pageGroup === 1}
        >
          &lt;
        </Button>
      </li>
      {pageNumbers
        .slice(pageGroupOffset, pageGroupOffset + pageGrouplimit)
        .map((i) => (
          <StyledLi key={i} currentPage={page === i}>
            <Button iconStyle onClick={() => onClickPage(i)}>
              {i}
            </Button>
          </StyledLi>
        ))}
      <li>
        <Button
          iconStyle
          onClick={onClickNextPageGroup}
          disabled={pageGroup == Math.ceil(totalPages / pageGrouplimit)}
        >
          &gt;
        </Button>
      </li>
    </Container>
  );
}

const Container = styled.ul`
  display: felx;
  justify-content: center;
`;

const StyledLi = styled.li<StyleButtonProps>`
  ${(props) =>
    props.currentPage &&
    css`
      border: 1px solid;
    `}
`;
export default Pagination;
