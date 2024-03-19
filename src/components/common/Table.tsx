import React from "react";

const Table: React.FC<TableProps> = ({ caption, columns, collection }) => {
  return (
    <React.Fragment>
      <h5>{caption}</h5>
      <table className="table table-responsive table-hover text-center">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {collection.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={`${item.id}${column.value}`}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
