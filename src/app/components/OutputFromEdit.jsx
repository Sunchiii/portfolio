"use client"
import { useState, useEffect } from 'react';
import EditorJsParser from 'editorjs-to-html';

const editorParser = new EditorJsParser({
  // Configuration for the Editor.js tools
});

const EditorViewer = ({ data }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    if (data) {
      const parsedHtml = editorParser?.parse(data);
      setHtml(parsedHtml);
    }
  }, [data]);



  return (
    <>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default EditorViewer;
