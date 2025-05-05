"use client";

const LandingInfo = () => {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-4 py-10 text-gray-200 space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
        JSON Beauty Viewer & Formatter
      </h2>
      <p className="text-center text-base md:text-lg max-w-3xl mx-auto">
        Format, beautify, view, and share your JSON data effortlessly. Our fast,
        privacy-first online tool helps developers, data scientists, and
        analysts work with JSON in a clean, powerful interface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            Key Features
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Beautify and format raw JSON instantly</li>
            <li>Validate JSON for errors</li>
            <li>View data in Tree or Grid (table) format</li>
            <li>Convert JSON to CSV or XML</li>
            <li>Upload files or paste JSON directly</li>
            <li>Load from external URL</li>
            <li>Generate shareable links</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            Why Use This Tool?
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>No data is stored – privacy guaranteed</li>
            <li>Works entirely in your browser</li>
            <li>Fast, responsive, and mobile-friendly</li>
            <li>No ads, no clutter, no distractions</li>
            <li>Open-source and free to use</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-4 md:p-6 rounded-2xl border border-gray-700">
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4 text-sm md:text-base">
          <div>
            <p className="font-semibold">Is it really free?</p>
            <p>Yes, 100% free. No registration or payment required.</p>
          </div>
          <div>
            <p className="font-semibold">Do you store any data?</p>
            <p>
              No. Everything happens locally in your browser. Nothing is
              uploaded.
            </p>
          </div>
          <div>
            <p className="font-semibold">Can I use it on my phone?</p>
            <p>Absolutely. It's responsive and works on all screen sizes.</p>
          </div>
          <div>
            <p className="font-semibold">Can I share JSON with others?</p>
            <p>
              Yes, using the "Share Link" button, you can copy a unique URL with
              your JSON embedded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingInfo;
