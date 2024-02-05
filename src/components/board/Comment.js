import React from "react";

export default function Comment({ comment }) {
    return (
        <div>
            {comment.content} : {comment.author} at {comment.createdAt}
        </div>
    );
}
