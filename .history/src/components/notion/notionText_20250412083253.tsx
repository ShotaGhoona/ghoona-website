import React from 'react';

type Annotation = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type TextItem = {
  annotations: Annotation;
  text: {
    content: string;
    link?: { url: string } | null;
  };
};

type NotionTextProps = {
  text: TextItem[];
};

export const Text = ({ text }: NotionTextProps) => {
  if (!text) return null;

  return text.map((value, idx) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    return (
      <span
        key={idx}
        className={[
          bold ? 'font-bold' : '',
          code ? 'font-mono bg-gray-100 px-1 rounded' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={color && color !== 'default' ? { color } : undefined}
      >
        {text.link ? (
          <a href={text.link.url} className="text-blue-500 underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};
