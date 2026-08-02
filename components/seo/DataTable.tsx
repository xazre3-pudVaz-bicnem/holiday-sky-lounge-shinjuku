import Reveal from "@/components/ui/Reveal";

/** 表形式の情報ブロック。AI検索からも引用しやすいよう、素直な table で出力する。 */
export default function DataTable({
  caption,
  head,
  rows,
  note,
}: {
  caption?: string;
  head: string[];
  rows: (string | number)[][];
  note?: string;
}) {
  return (
    <Reveal>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-[0.85rem]">
          {caption ? (
            <caption className="mb-4 text-left text-[0.8rem] text-ink-soft">{caption}</caption>
          ) : null}
          <thead>
            <tr className="border-b border-brand/30">
              {head.map((h) => (
                <th key={h} scope="col" className="py-3 pr-5 font-medium text-brand">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-line align-top">
                {r.map((cell, j) => (
                  <td key={j} className={`py-3.5 pr-5 leading-[1.85] ${j === 0 ? "text-ink" : "text-ink-soft"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="mt-4 text-[0.76rem] leading-[1.9] text-ink-soft">{note}</p> : null}
    </Reveal>
  );
}
