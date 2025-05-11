"use client";
import { useState, useEffect } from "react";
import Editor from "@/components/Editor";
import JsonActions from "@/components/JsonActions";
import TreeView from "@/components/TreeView";
import FileControls from "@/components/FileControls";
import UrlLoader from "@/components/UrlLoader";
import { Toaster } from "react-hot-toast";
import ExportControls from "@/components/ExportControls";
import JsonGrid from "@/components/JsonGrid";
import LandingInfo from "@/components/LandingInfo";
import toast from "react-hot-toast";
import SplitPane from "react-split-pane";

export default function HomePage() {
  const [jsonText, setJsonText] = useState<string>("");
  const [parsedJson, setParsedJson] = useState<any>({});
  const [viewMode, setViewMode] = useState<"tree" | "grid">("tree");

  function decodeJsonFromUrl(encoded: string) {
    return decodeURIComponent(atob(encoded));
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get("data");
    if (data) {
      try {
        const decoded = decodeJsonFromUrl(data);
        setJsonText(decoded);
        setParsedJson(JSON.parse(decoded));
      } catch {
        toast.error("Invalid shared link");
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-6 space-y-6">
      <Toaster position="top-right" />
      <div className="flex items-center justify-left gap-3 flex-wrap">
        <div className="text-5xl">{`{ JB }`}</div>
        <h1 className="text-2xl md:text-3xl font-bold text-left">
          JSON Beauty
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 flex-wrap">
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <JsonActions
            jsonText={jsonText}
            setJsonText={setJsonText}
            setParsedJson={setParsedJson}
          />

          <UrlLoader setJsonText={setJsonText} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <button
            onClick={() =>
              setViewMode((prev) => (prev === "tree" ? "grid" : "tree"))
            }
            className="bg-amber-800 px-4 py-2 rounded-2xl hover:bg-amber-700 cursor-pointer"
          >
            {viewMode === "tree"
              ? "Switch to Grid View"
              : "Switch to Tree View"}
          </button>
          <FileControls jsonText={jsonText} setJsonText={setJsonText} />
          <ExportControls jsonText={jsonText} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="min-w-0">
          <Editor value={jsonText} onChange={setJsonText} />
        </div>

        <div className="min-w-0">
          {viewMode === "tree" ? (
            <TreeView data={parsedJson} />
          ) : (
            <JsonGrid data={parsedJson} />
          )}
        </div>
      </div>

      <LandingInfo />
    </main>
  );
}
