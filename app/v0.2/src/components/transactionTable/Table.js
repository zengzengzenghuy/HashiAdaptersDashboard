import React from 'react';
import { useTable, usePagination } from 'react-table';

import { PageWithText, Pagination } from '../paginations';

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex, pageSize, selectedRowIds },

    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        className="w-full table-auto block lg:inline-table overflow-x-scroll"
      >
        <thead>
          {headerGroups.map(headerGroup => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps} className=" bg-[#252526]">
                {headerGroup.headers.map(column => {
                  const { key, ...restColumn } = column.getHeaderProps();
                  return (
                    <th
                      key={key}
                      {...restColumn}
                      className="text-left px-2 py-3 uppercase leading-4 text-xs font-semibold text-white font-mono"
                    >
                      {column.render('header')}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps} className="border-0 border-none">
          {page.map(row => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <tr
                key={key}
                {...restRowProps}
                className="hover:bg-slate-800 dark:hover:bg-slate-800"
              >
                {row.cells.map(cell => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <td
                      key={key}
                      {...restCellProps}
                      className=" px-3 py-2 whitespace-nowrap align-top text-white"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="text-white px-2 "
        >
          {'<<'}{' '}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="text-white px-2"
        >
          {'<'}
        </button>
        <p className="text-white font-bold">
          {pageIndex + 1} of {pageOptions.length}
        </p>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="text-white px-2"
        >
          {'>'}
        </button>
        <button
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={!canNextPage}
          className="text-white px-2"
        >
          {'>>'}{' '}
        </button>
        {/* <span className="text-white">
          | Go to Page: {''}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span> */}
      </div>
    </>
  );
}
