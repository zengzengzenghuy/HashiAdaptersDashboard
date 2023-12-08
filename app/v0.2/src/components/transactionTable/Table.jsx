import React from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';

import SearchBar from '../SearchBar';

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
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 50 },
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <>
      <SearchBar filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
              className="bg-[#252526]"
            >
              {headerGroup.headers.map(column => (
                <th
                  key={column.id}
                  {...column.getHeaderProps()}
                  className="text-left px-3 py-3 uppercase leading-4 text-xs font-semibold text-white font-mono"
                >
                  {column.render('header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps} className="border-0 border-none">
          {page.map(row => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                className="hover:bg-slate-800 dark:hover:bg-slate-800"
              >
                {row.cells.map(cell => (
                  <td
                    key={cell.id}
                    {...cell.getCellProps()}
                    className="px-3 py-3 whitespace-nowrap align-top text-white"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
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
      </div>
    </>
  );
}
