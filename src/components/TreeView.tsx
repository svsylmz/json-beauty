"use client";
import { FC } from "react";
import dynamic from "next/dynamic";
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  data: any;
}

const TreeView: FC<Props> = ({ data }) => {
  return (
    <div className="h-screen bg-gray-800 rounded-2xl p-4 overflow-auto border border-gray-700">
      <h2 className="text-lg font-semibold mb-2">Tree View</h2>
      <ReactJson
        src={data}
        name={false}
        collapsed={false}
        displayDataTypes={false}
        theme="monokai"
        enableClipboard={true}
      />
    </div>
  );
};

export default TreeView;
