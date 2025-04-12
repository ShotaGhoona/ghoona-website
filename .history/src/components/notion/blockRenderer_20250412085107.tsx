import { Fragment } from 'react';
import { Text } from './notionText';
import Link from 'next/link';
import { JSX } from 'react';

// ブロックのレンダリングロジック
export const renderNestedList = (block: any) => {
  const { type } = block;
  const value = block[type];
  if (!value || !value.children) return null;

  const isNumberedList = value.children[0]?.type === 'numbered_list_item';

  return isNumberedList ? (
    <ol>{value.children.map((child: any) => renderBlock(child))}</ol>
  ) : (
    <ul>{value.children.map((child: any) => renderBlock(child))}</ul>
  );
};

export const renderBlock = (block: any): JSX.Element | null => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return value.text && <p><Text text={value.text} /></p>;

    case 'heading_1':
      return value.text && <h1><Text text={value.text} /></h1>;

    case 'heading_2':
      return value.text && <h2><Text text={value.text} /></h2>;

    case 'heading_3':
      return value.text && <h3><Text text={value.text} /></h3>;

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          {value.text && <Text text={value.text} />}
          {value.children && renderNestedList(block)}
        </li>
      );

    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />
            {value.text && <Text text={value.text} />}
          </label>
        </div>
      );

    case 'toggle':
      return (
        <details>
          <summary>{value.text && <Text text={value.text} />}</summary>
          {value.children?.map((child: any) => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );

    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption?.[0]?.plain_text || '';
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );

    case 'divider':
      return <hr key={id} />;

    case 'quote':
      return value.text && <blockquote key={id}><Text text={value.text} /></blockquote>;

    case 'code':
      return value.text && (
        <pre>
          <code key={id}>{value.text[0].plain_text}</code>
        </pre>
      );

    case 'file':
      const src_file = value.type === 'external' ? value.external.url : value.file.url;
      const filename = src_file.split('/').pop()?.split('?')[0];
      const caption_file = value.caption?.[0]?.plain_text || '';
      return (
        <figure>
          <div>
            📎 <Link href={src_file}>{filename}</Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );

    case 'bookmark':
      return (
        <a href={value.url} target="_blank" rel="noopener noreferrer">
          {value.url}
        </a>
      );

    default:
      return `❌ 未対応ブロック (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;
  }
};
