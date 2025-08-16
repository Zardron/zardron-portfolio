import React, { useState } from "react";
import { BLOGS } from "../../data.js";
import { MdAccessTime, MdCategory, MdTag, MdKeyboardArrowDown, MdKeyboardArrowUp, MdSource } from "react-icons/md";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedBlogs, setExpandedBlogs] = useState({});

  // Reset expanded blogs when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setExpandedBlogs({}); // Close all expanded blogs when changing category
  };

  const categories = ["All", ...new Set(BLOGS.map(blog => blog.category))];
  
  const filteredBlogs = selectedCategory === "All" 
    ? BLOGS 
    : BLOGS.filter(blog => blog.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const toggleBlogExpansion = (blogId) => {
    setExpandedBlogs(prev => {
      // If the clicked blog is already expanded, close it
      if (prev[blogId]) {
        return { [blogId]: false };
      }
      // If another blog is expanded, close it and open the clicked one
      return { [blogId]: true };
    });
  };

  return (
    <div className="mt-8">
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-white/90">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#1e5799] text-white shadow-lg"
                  : "bg-gray-50/20 text-white/80 hover:bg-gray-50/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-50/10 rounded-lg p-6 border border-gray-50/10"
          >
            {/* Blog Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <MdCategory className="text-[#1e5799] text-sm" />
                <span className="text-xs text-[#1e5799] font-medium uppercase tracking-wide">
                  {blog.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white/90 mb-3 leading-tight">
                {blog.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            {/* Blog Meta */}
            <div className="flex items-center justify-between text-xs text-white/60 mb-4">
              <div className="flex items-center gap-1">
                <MdAccessTime className="text-sm" />
                <span>{blog.readTime}</span>
              </div>
              <span className="font-medium">{formatDate(blog.date)}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-50/20 rounded text-xs text-white/70 font-medium"
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-50/20 rounded text-xs text-white/70 font-medium">
                  +{blog.tags.length - 3}
                </span>
              )}
            </div>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => toggleBlogExpansion(blog.id)}
              className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition-colors duration-300"
            >
              {expandedBlogs[blog.id] ? (
                <>
                  <MdKeyboardArrowUp className="text-lg" />
                  Read less
                </>
              ) : (
                <>
                  <MdKeyboardArrowDown className="text-lg" />
                  Read more
                </>
              )}
            </button>

            {/* Expanded Content */}
            {expandedBlogs[blog.id] && (
              <div className="mt-6 pt-6 border-t border-gray-50/20">
                {/* Blog Content */}
                <div 
                  className="prose prose-invert max-w-none text-white/80 mb-6"
                  style={{
                    '--tw-prose-headings': 'rgb(255 255 255 / 0.95)',
                    '--tw-prose-body': 'rgb(255 255 255 / 0.85)',
                    '--tw-prose-links': 'rgb(30 87 153)',
                    '--tw-prose-bold': 'rgb(255 255 255 / 0.95)',
                    '--tw-prose-counters': 'rgb(255 255 255 / 0.7)',
                    '--tw-prose-bullets': 'rgb(255 255 255 / 0.7)',
                    '--tw-prose-hr': 'rgb(255 255 255 / 0.3)',
                    '--tw-prose-quotes': 'rgb(255 255 255 / 0.85)',
                    '--tw-prose-quote-borders': 'rgb(30 87 153)',
                    '--tw-prose-captions': 'rgb(255 255 255 / 0.7)',
                    '--tw-prose-code': 'rgb(255 255 255 / 0.95)',
                    '--tw-prose-pre-code': 'rgb(255 255 255 / 0.85)',
                    '--tw-prose-pre-bg': 'rgb(0 0 0 / 0.6)',
                    '--tw-prose-th-borders': 'rgb(255 255 255 / 0.3)',
                    '--tw-prose-td-borders': 'rgb(255 255 255 / 0.2)',
                  }}
                >
                  <div 
                    className="space-y-6 [&>h1]:text-lg [&>h1]:font-semibold [&>h1]:text-white/90 [&>h1]:mb-4 [&>h1]:mt-6 [&>h2]:text-base [&>h2]:font-semibold [&>h2]:text-white/90 [&>h2]:mb-3 [&>h2]:mt-4 [&>h3]:text-sm [&>h3]:font-medium [&>h3]:text-white/80 [&>h3]:mb-2 [&>h3]:mt-3 [&>p]:text-sm [&>p]:font-normal [&>p]:text-white/70 [&>p]:leading-relaxed [&>p]:mb-3"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>

                {/* All Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <MdTag className="text-[#1e5799] text-sm" />
                  <span className="text-sm text-[#1e5799] font-medium uppercase tracking-wide">All Tags</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-50/20 rounded-full text-sm text-white/70 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Sources */}
                {blog.sources && (
                  <div className="pt-6 border-t border-gray-50/20">
                    <div className="flex items-center gap-2 mb-3">
                      <MdSource className="text-[#1e5799] text-sm" />
                      <span className="text-sm text-[#1e5799] font-medium uppercase tracking-wide">Sources & References</span>
                    </div>
                    <div className="space-y-2">
                      {blog.sources.map((source, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-white/60 mr-2 flex-shrink-0">•</span>
                          <span className="text-sm text-white/70 leading-relaxed">
                            {source}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
