"use client";

import React, { useState } from "react";
import Tiptap from "./tiptap";
import useAdStore from "@/store/use-ad-store";

const DescPicker = () => {
  const [content, setContent] = useState<string>("");

  const { setDescription } = useAdStore();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleContentChange = (reason: any) => {
    setContent(reason);
    setDescription(content);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDescription(content);
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
