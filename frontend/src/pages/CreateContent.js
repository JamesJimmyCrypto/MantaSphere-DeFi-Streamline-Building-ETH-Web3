import React, { useState } from "react";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("media", media);

    const response = await fetch("/api/content", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Content created successfully");
    } else {
      console.error("Failed to create content");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create New Content</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded mb-4"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded mb-4"
        />
        <input
          type="file"
          onChange={(e) => setMedia(e.target.files[0])}
          className="w-full p-2 rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Content
        </button>
      </form>
    </div>
  );
};

export default CreateContent;
