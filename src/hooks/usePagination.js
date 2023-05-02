import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ pageSize, siblingCount = 1, pageIndex }) => {
  const paginationRange = useMemo(() => {
    if (pageSize <= siblingCount * 2 + 5) {
      return range(1, pageSize);
    }

    const leftSiblingIndex = Math.max(pageIndex - siblingCount, 1);
    const rightSiblingIndex = Math.min(pageIndex + siblingCount, pageSize);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pageSize - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, siblingCount * 2 + 3);
      return [...leftRange, DOTS, pageSize];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(pageSize - siblingCount * 2 - 2, pageSize);
      return [1, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      const leftRange = range(1, 2);
      const rightRange = range(pageSize - 1, pageSize);
      return [...leftRange, DOTS, ...middleRange, DOTS, ...rightRange];
    }
    return null;
  }, [pageSize, siblingCount, pageIndex]);

  return paginationRange;
};
