import React, { useState } from "react";

export default function UrlTrimmer() {
  const [longUrl, setLongUrl] = useState("");
  const [domain, setDomain] = useState("is.gd");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setShortUrl("");
    if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
      setMessage("Please include http:// or https:// in your URL.");
      return;
    }

    setLoading(true);
    try {
      let endpoint = `https://${domain}/create.php?format=json&url=${encodeURIComponent(
        longUrl
      )}`;
      if (alias) endpoint += `&shorturl=${encodeURIComponent(alias)}`;

      const res = await fetch(endpoint);
      const data = await res.json();

      if (data.shorturl) {
        setShortUrl(data.shorturl);
        setMessage("Done! Your link is ready.");
      } else if (data.errormessage) {
        setMessage(data.errormessage);
      } else {
        setMessage("Unknown error from provider.");
      }
    } catch (err) {
      setMessage("Failed to shorten URL.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setMessage("Copied to clipboard!");
    } catch {
      setMessage("Failed to copy.");
    }
  };

  return (
    <div id="URL" className="h-[500px] mt-[50px] flex items-center justify-center bg-gradient-to-tr from-violet-900 via-purple-800 to-yellow-900 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">TrimURL</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Paste URL here
            </label>
            <input
              type="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="https://example.com/long/link"
              required
              className="w-full mt-1 p-3 rounded-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Choose Domain
              </label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full mt-1 p-3 rounded-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="is.gd">is.gd</option>
                <option value="v.gd">v.gd</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Type Alias (optional)
              </label>
              <input
                type="text"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                placeholder="e.g. my-link"
                pattern="[A-Za-z0-9_-]{1,30}"
                className="w-full mt-1 p-3 rounded-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg shadow hover:from-blue-700 hover:to-blue-900 transition disabled:opacity-50"
          >
            {loading ? "Trimming..." : "Trim URL"}
          </button>

          {shortUrl && (
            <div className="flex items-center gap-3">
              <div
                className="flex-1 p-3 rounded-lg bg-blue-50 border border-blue-200 text-sm break-all cursor-pointer"
                onClick={() => window.open(shortUrl, "_blank")}
              >
                {shortUrl}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2 bg-white border border-blue-400 rounded-lg text-sm hover:bg-blue-100"
              >
                Copy
              </button>
            </div>
          )}

          {message && (
            <p
              className={`text-sm mt-2 ${
                message.includes("error") || message.includes("fail")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-xs text-gray-500 mt-2">
            By clicking TrimURL, you agree to the{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}