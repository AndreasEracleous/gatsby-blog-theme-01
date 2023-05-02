import NextArrow from 'assets/svg/next-arrow.inline.svg';
import PrevArrow from 'assets/svg/prev-arrow.inline.svg';
import { Link, navigate } from 'gatsby';
import { usePagination, DOTS } from 'hooks/usePagination';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const isDisabled = (page, direction, length) => {
  if (direction === 'prev') {
    return page <= 1;
  }
  if (direction === 'next') {
    return page >= length;
  }
  return false;
};

const makeMove = (path, index) => {
  const url = index === 1 ? '/' : `/${index}?page=${index}`;
  navigate(url);
};

const ArchivePagination = ({ pageIndex, currentPath, totalCount, pageSize }) => {
  const paginationRange = usePagination({
    pageIndex,
    totalCount,
    pageSize,
  });
  const [page, setPage] = useState(pageIndex);

  if (pageSize === 0 || paginationRange.length < 2) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    makeMove(currentPath, page);
  }, [currentPath, page]);

  const onNext = () => {
    setPage(pageIndex + 1);
  };

  const onPrevious = () => {
    setPage(pageIndex - 1);
  };

  const paginationContent = paginationRange.map((pageNumber) => {
    const firstPage = pageNumber === 1;
    const url = firstPage ? '' : pageNumber;
    const isSelected = pageNumber === pageIndex;

    if (pageNumber === DOTS) {
      return (
        <span className="relative rounded-lg px-4 py-2 md:text-lg" key={`page-${pageNumber}`}>
          &#8230;
        </span>
      );
    }

    return (
      <Link
        to={`/${url}?page=${pageNumber}`}
        className={`relative rounded-lg p-2 font-semibold md:px-4 md:py-2 md:text-lg ${
          isSelected
            ? 'pointer-events-none text-purple-600 opacity-25'
            : 'text-gray-600 hover:text-purple-600'
        }`}
        key={`page-${pageNumber}`}
        onClick={(e) => isSelected && e.preventDefault()}
      >
        {pageNumber}
      </Link>
    );
  });

  const prevArrow = (
    <button
      type="button"
      className="disabled:cursor-not-allowed disabled:opacity-25 sm:block"
      aria-controls="prev"
      disabled={isDisabled(page, 'prev', pageSize)}
      onClick={onPrevious}
    >
      <PrevArrow className="h-9 w-9 rounded border border-gray-100 bg-white p-1 text-gray-500" />
    </button>
  );
  const nextArrow = (
    <button
      type="button"
      className="disabled:cursor-not-allowed disabled:opacity-25 sm:block"
      aria-controls="next"
      disabled={isDisabled(page, 'next', pageSize)}
      onClick={onNext}
    >
      <NextArrow className="h-9 w-9 rounded border border-gray-100 bg-white p-1 text-gray-500" />
    </button>
  );

  return (
    <nav className="mt-10 flex justify-center space-x-2" aria-label="Page navigation">
      {prevArrow}
      {paginationContent}
      {nextArrow}
    </nav>
  );
};

ArchivePagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default ArchivePagination;
