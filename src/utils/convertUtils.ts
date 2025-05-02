// JSON to CSV
export function jsonToCSV(json: any[]): string {
  if (!Array.isArray(json) || json.length === 0) return "";

  const headers = Object.keys(json[0]);
  const csv = [
    headers.join(","), // header row
    ...json.map((row) =>
      headers.map((field) => JSON.stringify(row[field] ?? "")).join(",")
    ),
  ].join("\n");

  return csv;
}

// JSON to XML
export function jsonToXML(obj: any, root = "root"): string {
  const convert = (data: any): string => {
    if (typeof data === "object" && !Array.isArray(data)) {
      return Object.entries(data)
        .map(
          ([key, val]) =>
            `<${key}>${typeof val === "object" ? convert(val) : val}</${key}>`
        )
        .join("");
    } else if (Array.isArray(data)) {
      return data.map((item) => `<item>${convert(item)}</item>`).join("");
    } else {
      return String(data);
    }
  };

  return `<${root}>${convert(obj)}</${root}>`;
}
