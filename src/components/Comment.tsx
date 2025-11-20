"use client";

import type { IComment as CommentModel } from "@/database/blogSchema";

type IComment = CommentModel & {
  // When data comes over JSON, `time` may be a string
  time: string | Date;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: string | Date): string {
  const date = time instanceof Date ? time : new Date(time);
  // Format similar to "September 16 2024 8:30AM"
  // (Exact punctuation might vary slightly with locale)
  const formatted = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  // Remove comma if you want it closer to the exact example:
  return formatted.replace(",", "");
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="border rounded-lg p-3 my-2 shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-semibold text-sm">{comment.user}</h4>
        <span className="text-xs text-gray-500">
          {parseCommentTime(comment.time)}
        </span>
      </div>
      <p className="text-sm text-gray-800 whitespace-pre-wrap">
        {comment.comment}
      </p>
    </div>
  );
}

export default Comment;

