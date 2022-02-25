import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../atoms/Button';
import useScrollTop from '../../hooks/useScrollTop';

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
  const setScrollTop = useScrollTop(true);

  const onClickPage = (i: number) => {
    setScrollTop(true);
    handlePages(i + 1);
  };
  return (
    <Container>
      <li>
        <Button
          iconStyle
          onClick={() => handlePages(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </Button>
      </li>
      {Array(totalPages)
        .fill(1)
        .map((_, i) => (
          <StyledLi key={i} currentPage={page === i + 1}>
            <Button iconStyle onClick={() => onClickPage(i + 1)}>
              {i + 1}
            </Button>
          </StyledLi>
        ))}
      <li>
        <Button
          iconStyle
          onClick={() => handlePages(page + 1)}
          disabled={page === totalPages}
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
