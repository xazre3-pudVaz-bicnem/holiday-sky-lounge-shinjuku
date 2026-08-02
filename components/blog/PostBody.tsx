import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * 記事本文のMarkdownレンダリング。
 * サイト側のタイポグラフィに合わせるため、要素ごとにクラスを指定している。
 * サーバーコンポーネントのまま描画されるので、本文はJS実行前からHTMLに出る。
 */
export default function PostBody({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-3xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-14 border-l-2 border-brand pl-4 text-[1.25rem] leading-[1.7] text-ink lg:text-[1.5rem]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-9 text-[1.05rem] leading-[1.75] text-ink lg:text-[1.15rem]">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mt-5 text-[0.92rem] leading-[2.1] text-ink-soft">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mt-5 space-y-2.5 text-[0.9rem] leading-[2] text-ink-soft">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-[0.9rem] leading-[2] text-ink-soft">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="marker:text-brand">{children}</li>,
          strong: ({ children }) => <strong className="font-medium text-ink">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 border-brand/40 pl-5 text-[0.88rem] leading-[2] text-ink-soft">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="mt-12 border-line" />,
          table: ({ children }) => (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[30rem] border-collapse text-left text-[0.85rem]">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-brand/30 py-3 pr-5 font-medium text-brand">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border-b border-line py-3.5 pr-5 leading-[1.85] text-ink-soft">{children}</td>
          ),
          a: ({ href, children }) => {
            const url = href ?? "";
            if (url.startsWith("/")) {
              return (
                <Link href={url} className="text-brand underline underline-offset-4 hover:text-brand-deep">
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline underline-offset-4 hover:text-brand-deep"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
