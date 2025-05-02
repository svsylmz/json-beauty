"use client";
import Editor from "@monaco-editor/react";
import { FC } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const JsonEditor: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="h-screen border border-gray-700 rounded-2xl overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="json"
        value={value}
        theme="vs-dark"
        onChange={(val) => onChange(val || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default JsonEditor;
