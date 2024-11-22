"use client";

import React, { useState } from "react";
import Tiptap from "./tiptap";

const DescPicker = () => {
  const [content, setContent] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(content);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default DescPicker;
