"use client";
import { FC } from "react";

interface Props {
  data: any;
}

const JsonGrid: FC<Props> = ({ data }) => {
  if (!Array.isArray(data)) {
    return (
      <div className="p-4 border border-yellow-500 rounded">
        JSON data is not an array. Grid view only supports array of objects.
      </div>
    );
  }

  const headers = Array.from(
    new Set(data.flatMap((item) => Object.keys(item)))
  );

  return (
    <div className="overflow-auto border border-gray-700 rounded-2xl">
      <table className="min-w-full table-auto border-collapse text-sm text-left">
        <thead className="bg-gray-700 text-white">
          <tr>
            {headers.map((key) => (
              <th key={key} className="px-4 py-2 border border-gray-600">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, idx: number) => (
            <tr key={idx} className="even:bg-gray-800 odd:bg-gray-900">
              {headers.map((key) => (
                <td key={key} className="px-4 py-2 border border-gray-700">
                  {typeof row[key] === "object"
                    ? JSON.stringify(row[key])
                    : String(row[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JsonGrid;
