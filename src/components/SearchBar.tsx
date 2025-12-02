import { useState, useEffect } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const posts = document.querySelectorAll<HTMLElement>("[data-post]");
    const resultsCount = document.getElementById("search-results-count");
    const noResults = document.getElementById("no-results");

    const query = searchQuery.toLowerCase().trim();
    let visibleCount = 0;

    posts.forEach((post) => {
      const title = post.dataset.title?.toLowerCase() || "";
      const description = post.dataset.description?.toLowerCase() || "";
      const category = post.dataset.category?.toLowerCase() || "";
      const author = post.dataset.author?.toLowerCase() || "";

      const matches =
        !query ||
        title.includes(query) ||
        description.includes(query) ||
        category.includes(query) ||
        author.includes(query);

      if (matches) {
        post.style.display = "";
        visibleCount++;
      } else {
        post.style.display = "none";
      }
    });

    // Update results count
    if (resultsCount) {
      if (query) {
        resultsCount.textContent = `Found ${visibleCount} ${visibleCount === 1 ? "post" : "posts"}`;
        resultsCount.style.display = "";
      } else {
        resultsCount.style.display = "none";
      }
    }

    // Show/hide no results message
    if (noResults) {
      noResults.style.display = visibleCount === 0 && query ? "" : "none";
    }
  }, [searchQuery]);

  return (
    <div className="mb-8">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search posts by title, description, category, or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      <p id="search-results-count" className="mt-2 text-sm text-gray-500" style={{ display: "none" }}></p>
    </div>
  );
}
