import React from 'react';

export interface DataTableProps {
  headers: HeadersDataTableProps[] | null;
  data: any[] | null;
}

export interface HeadersDataTableProps {
  label: string;
  key: 'index' | any | ((item: any, index: number) => React.ReactNode);
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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      <div style={{ display: 'block', overflowX: 'auto', whiteSpace: 'nowrap', width: '100%' }}>
        <table
          style={{
            border: '1px solid #64748b',
            borderCollapse: 'collapse',
            tableLayout: 'auto',
            width: '100%',
          }}
        >
          <thead>
            <tr>
              {headers?.map((item, index) => (
                <th key={index} style={{ border: '1px solid #475569', padding: 4 }}>
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
                    <td
                      key={index2}
                      style={{ border: '1px solid #334155', padding: 4, verticalAlign: 'top' }}
                    >
                      {renderItem(head, item, index)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {data?.length === 0 && (
        <div
          style={{
            alignItems: 'center',
            border: '1px solid #475569',
            borderTop: 0,
            display: 'flex',
            justifyContent: 'center',
            minHeight: 40,
            width: '100%',
          }}
        >
          Data Tidak Ditemukan
        </div>
      )}
    </div>
  );
};

export default DataTable;
