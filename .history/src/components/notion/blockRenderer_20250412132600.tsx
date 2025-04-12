import { Fragment } from 'react';
import { Text } from './notionText';
import Link from 'next/link';
import { JSX } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
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

export const renderBlock = (block: BlockObjectResponse) => {
  const { type, id } = block;
  const value = block[type as keyof BlockObjectResponse];

  switch (type) {
    case 'paragraph':
      return (value as any).rich_text && <p><Text text={(value as any).rich_text} /></p>;

    case 'heading_1':
      return (value as any).rich_text && <h1><Text text={(value as any).rich_text} /></h1>;

    case 'heading_2':
      return (value as any).rich_text && <h2><Text text={(value as any).rich_text} /></h2>;

    case 'heading_3':
      return (value as any).rich_text && <h3><Text text={(value as any).rich_text} /></h3>;

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          {(value as any).rich_text && <Text text={(value as any).rich_text} />}
          {(value as any).children && renderNestedList(block)}
        </li>
      );

    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={(value as any).checked} />
            {(value as any).rich_text && <Text text={(value as any).rich_text} />}
          </label>
        </div>
      );

    case 'toggle':
      return (
        <details>
          <summary>{(value as any).rich_text && <Text text={(value as any).rich_text} />}</summary>
          {(value as any).children?.map((child: any) => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );

    case 'image':
      const src = (value as any).type === 'external' ? (value as any).external.url : (value as any).file.url;
      const caption = (value as any).caption?.[0]?.plain_text || '';
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );

    case 'divider':
      return <hr key={id} />;

    case 'quote':
      return (value as any).rich_text && <blockquote key={id}><Text text={(value as any).rich_text} /></blockquote>;

    case 'code':
      return (value as any).rich_text && (
        <pre>
          <code key={id}>{(value as any).rich_text[0].plain_text}</code>
        </pre>
      );

    case 'file':
      const src_file = (value as any).type === 'external' ? (value as any).external.url : (value as any).file.url;
      const filename = src_file.split('/').pop()?.split('?')[0];
      const caption_file = (value as any).caption?.[0]?.plain_text || '';
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
        <a href={(value as any).url} target="_blank" rel="noopener noreferrer">
          {(value as any).url}
        </a>
      );

    default:
      return <span>❌ 未対応ブロック ({type === 'unsupported' ? 'unsupported by Notion API' : type})</span>;
  }
};
