import React from 'react';
import classes from './DataTable.module.css';

export interface DataTableProps {
  headers: HeadersDataTableProps[] | null;
  data: any[] | null;
}

export interface HeadersDataTableProps {
  label: string;
  key: 'index' | ((item: any, index: number) => React.ReactNode) | (string & {});
}

const DataTable = (props: DataTableProps) => {
  const {
    headers = [
      { key: 'test1', label: 'test1' },
      { key: 'test2', label: 'test2' },
      { key: 'test3', label: 'test3' },
    ],
    data = [
      { test1: 1, test2: 2, test3: 3 },
      { test1: 1, test2: 2, test3: 3 },
    ],
  } = props;

  const renderItem = (headData: HeadersDataTableProps, item: any, indexItem: number) => {
    if (headData.key === 'index') return indexItem + 1;
    if (typeof headData.key === 'function') return headData.key(item, indexItem);
    if (headData.key !== 'index' && item[headData.key]) return item[headData.key] || '';
    return '';
  };

  return (
    <div className={classes.dataTableContainer}>
      <div className={classes.dataTableWrapper}>
        <table className={classes.dataTable}>
          <thead>
            <tr>
              {headers?.map((item, index) => (
                <th key={index} className={classes.dataTableHeader}>
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  {headers?.map((head, index2) => (
                    <td key={index2} className={classes.dataTableCell}>
                      {renderItem(head, item, index)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {data?.length === 0 && <div className={classes.noData}>Data Tidak Ditemukan</div>}
    </div>
  );
};

export default DataTable;
