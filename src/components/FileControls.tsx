"use client";
import { FC, ChangeEvent } from "react";
import { saveAs } from "file-saver";

interface Props {
  jsonText: string;
  setJsonText: (val: string) => void;
}

const FileControls: FC<Props> = ({ jsonText, setJsonText }) => {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        setJsonText(result);
      }
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonText], {
      type: "application/json;charset=utf-8",
    });
    saveAs(blob, "data.json");
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <label className="bg-gray-700 px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-600">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="hidden"
        />
        Upload JSON
      </label>
      <button
        onClick={handleDownload}
        className="bg-purple-600 px-4 py-2 rounded-2xl hover:bg-purple-700 cursor-pointer"
      >
        Download JSON
      </button>
    </div>
  );
};

export default FileControls;
