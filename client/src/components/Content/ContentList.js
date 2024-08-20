import axios from "axios";
import React, { useEffect, useState } from "react";
import ContentItem from "./ContentItem";

const ContentList = () => {
  const [contentItems, setContentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get("/api/content");
        setContentItems(response.data);
      } catch (err) {
        setError("Failed to load content. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <p>Loading content...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contentItems.map((content) => (
        <ContentItem key={content.tokenId} content={content} />
      ))}
    </div>
  );
};

export default ContentList;
