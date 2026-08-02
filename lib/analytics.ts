/**
 * GA4 のイベント名と、リンクに付ける data 属性の定義。
 *
 * 計測は components/analytics/ClickTracker.tsx が document 単位で1つだけ
 * イベントリスナーを張って行う。リンク自体はサーバーコンポーネントのまま。
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export type TrackEvent =
  | "reservation_click"
  | "course_reservation_click"
  | "instagram_click"
  | "phone_click"
  | "map_click";

type TrackAttrs = {
  "data-track": TrackEvent;
  "data-track-position": string;
  "data-track-course"?: string;
};

/**
 * 計測用の data 属性を生成する。
 * @param event  GA4 のイベント名
 * @param position CTAの位置（header / hero / footer / course-card など）
 * @param course コース名（コース単位の予約導線のみ）
 */
export function track(event: TrackEvent, position: string, course?: string): TrackAttrs {
  return {
    "data-track": event,
    "data-track-position": position,
    ...(course ? { "data-track-course": course } : {}),
  };
}
