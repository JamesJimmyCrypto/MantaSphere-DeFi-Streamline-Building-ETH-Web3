import React, { useEffect, useState } from "react";
import ContentCard from "../components/ContentCard";

const Home = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Latest Content</h1>
      {contents.map((content) => (
        <ContentCard key={content._id} {...content} />
      ))}
    </div>
  );
};

export default Home;
