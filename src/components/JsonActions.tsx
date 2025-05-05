"use client";
import { FC } from "react";
import toast from "react-hot-toast";

interface Props {
  jsonText: string;
  setJsonText: (val: string) => void;
  setParsedJson: (val: any) => void;
}

function encodeJsonToUrl(json: string) {
  return btoa(encodeURIComponent(json));
}

const JsonActions: FC<Props> = ({ jsonText, setJsonText, setParsedJson }) => {
  const handleBeautify = () => {
    try {
      const obj = JSON.parse(jsonText);
      const pretty = JSON.stringify(obj, null, 2);
      setJsonText(pretty);
      setParsedJson(obj);
      toast.success("Beautified");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const handleMinify = () => {
    try {
      const obj = JSON.parse(jsonText);
      const compact = JSON.stringify(obj);
      setJsonText(compact);
      setParsedJson(obj);
      toast.success("Minified");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const handleValidate = () => {
    try {
      const obj = JSON.parse(jsonText);
      setParsedJson(obj);
      toast.success("Valid JSON");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <button
        onClick={handleBeautify}
        className="bg-blue-600 px-4 py-2 rounded-2xl hover:bg-blue-700"
      >
        Beautify
      </button>
      <button
        onClick={handleMinify}
        className="bg-amber-600 px-4 py-2 rounded-2xl hover:bg-green-700"
      >
        Minify
      </button>
      <button
        onClick={handleValidate}
        className="bg-yellow-600 px-4 py-2 rounded-2xl hover:bg-yellow-700"
      >
        Validate
      </button>

      <button
        onClick={() => {
          try {
            const encoded = encodeJsonToUrl(jsonText);
            const url = `${window.location.origin}?data=${encoded}`;
            navigator.clipboard.writeText(url);
            toast.success("Link copied to clipboard");
          } catch {
            toast.error("Invalid JSON");
          }
        }}
        className="bg-emerald-600 px-4 py-2 rounded-2xl hover:bg-red-700"
      >
        Share Link
      </button>
    </div>
  );
};

export default JsonActions;
