"use client";
import { FC, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  setJsonText: (val: string) => void;
}

const UrlLoader: FC<Props> = ({ setJsonText }) => {
  const [url, setUrl] = useState("");

  const handleFetch = async () => {
    if (!url) return toast.error("Please enter a URL");
    try {
      const res = await axios.get(url);
      const json = JSON.stringify(res.data, null, 2);
      setJsonText(json);
      toast.success("JSON fetched successfully");
    } catch (err) {
      toast.error("Failed to fetch JSON");
    }
  };

  return (
    <div className="flex gap-4 flex-wrap items-center">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com/data.json"
        className="bg-gray-800 border border-gray-600 px-3 py-2 rounded-2xl w-80"
      />
      <button
        onClick={handleFetch}
        className="bg-indigo-600 px-4 py-2 rounded-2xl hover:bg-indigo-700 cursor-pointer"
      >
        Fetch from URL
      </button>
    </div>
  );
};

export default UrlLoader;
