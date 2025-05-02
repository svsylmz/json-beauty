"use client";
import { useState } from "react";
import Editor from "@/components/Editor";
import JsonActions from "@/components/JsonActions";
import TreeView from "@/components/TreeView";
import FileControls from "@/components/FileControls";
import UrlLoader from "@/components/UrlLoader";
import { Toaster } from "react-hot-toast";
import ExportControls from "@/components/ExportControls";

export default function HomePage() {
  const [jsonText, setJsonText] = useState<string>("{}");
  const [parsedJson, setParsedJson] = useState<any>({});

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 space-y-4">
      <Toaster position="top-right" />

      <h1 className="text-3xl font-bold">JSON Viewer / Beautifier</h1>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <JsonActions
            jsonText={jsonText}
            setJsonText={setJsonText}
            setParsedJson={setParsedJson}
          />
          <UrlLoader setJsonText={setJsonText} />
        </div>

        <div className="flex gap-4">
          <FileControls jsonText={jsonText} setJsonText={setJsonText} />
          <ExportControls jsonText={jsonText} />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <Editor value={jsonText} onChange={setJsonText} />
        </div>

        <div className="w-1/2">
          <TreeView data={parsedJson} />
        </div>
      </div>
    </main>
  );
}
