"use client";
import { FC } from "react";
import { saveAs } from "file-saver";
import { jsonToCSV, jsonToXML } from "@/utils/convertUtils";
import toast from "react-hot-toast";

interface Props {
  jsonText: string;
}

const ExportControls: FC<Props> = ({ jsonText }) => {
  const handleExportCSV = () => {
    try {
      const json = JSON.parse(jsonText);
      if (!Array.isArray(json)) {
        toast.error("CSV export only supports arrays.");
        return;
      }

      const csv = jsonToCSV(json);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      saveAs(blob, "data.csv");
      toast.success("Exported to CSV");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const handleExportXML = () => {
    try {
      const json = JSON.parse(jsonText);
      const xml = jsonToXML(json);
      const blob = new Blob([xml], { type: "application/xml;charset=utf-8" });
      saveAs(blob, "data.xml");
      toast.success("Exported to XML");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <button
        onClick={handleExportCSV}
        className="bg-cyan-600 px-4 py-2 rounded-2xl hover:bg-cyan-700 cursor-pointer"
      >
        Export as CSV
      </button>
      <button
        onClick={handleExportXML}
        className="bg-pink-600 px-4 py-2 rounded-2xl hover:bg-pink-700 cursor-pointer"
      >
        Export as XML
      </button>
    </div>
  );
};

export default ExportControls;
