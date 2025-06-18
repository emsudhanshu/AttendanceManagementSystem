/* eslint-disable */

import { useEffect } from 'react';
import { useState } from 'react';

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = data ? useState(1) : useState(1);
  const maxPage = Math.ceil(data?.length / itemsPerPage);

  useEffect(()=>{
    setCurrentPage(1)
  },[data])

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data?.slice(begin, end);
  }

  function allData(){
    return data;
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  function jumpTo1stPage(){
    setCurrentPage(1)
  }

  return { next, prev, jump, currentData, allData, currentPage, maxPage, jumpTo1stPage };
}

export default usePagination;