"use client";
import { FC } from "react";

interface Props {
  data: any;
}

const JsonGrid: FC<Props> = ({ data }) => {
  const renderValue = (value: any): JSX.Element | string => {
    if (Array.isArray(value)) {
      return (
        <table className="border border-black w-full my-1">
          <tbody>
            {value.map((item, i) => (
              <tr key={i}>
                <td className="border border-black p-1">{renderValue(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <table className="border border-white w-full my-1">
          <tbody>
            {Object.entries(value).map(([key, val], idx) => (
              <tr key={idx}>
                <td className="border-2 border-white p-1 align-top font-semibold">
                  {key}
                </td>
                <td className="border-2 border-white p-1">
                  {renderValue(val)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return String(value);
    }
  };

  return <div className="overflow-auto">{renderValue(data)}</div>;
};

export default JsonGrid;
