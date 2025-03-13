import React from "react";
import { useTable } from "@tanstack/react-table";
import { Card } from "@/components/ui/card"; // ShadCN Card Component

const GymClassesTable = () => {
  // Sample data for gym classes
  const data = React.useMemo(
    () => [
      { id: 1, name: "Yoga", trainer: "Alice", time: "10:00 AM" },
      { id: 2, name: "HIIT", trainer: "Bob", time: "12:00 PM" },
      { id: 3, name: "Pilates", trainer: "Charlie", time: "3:00 PM" },
      { id: 4, name: "Zumba", trainer: "Diana", time: "5:00 PM" },
    ],
    []
  );

  // Define table columns
  const columns = React.useMemo(
    () => [
      { Header: "Class Name", accessor: "name" },
      { Header: "Trainer", accessor: "trainer" },
      { Header: "Time", accessor: "time" },
    ],
    []
  );

  // Use React Table Hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Card className="p-4 shadow-lg rounded-xl bg-white">
      <h2 className="text-xl font-bold mb-4">Gym Class Schedule</h2>
      <table {...getTableProps()} className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="border p-2 text-left">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="border p-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default GymClassesTable;
