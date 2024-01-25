import React, { useState, useEffect } from "react";

export default function Post({ postItem }) {
    const [post, setPost] = useState({});
    const { id, userId, title, body } = post;

    useEffect(() => {
        setPost({
            id: postItem.id,
            userId: postItem.userId,
            title: postItem.title,
            body: postItem.body,
        });
    }, []);

    return (
        <div>
            Post
            <div> id : {id}</div>
            <div> userId : {userId} </div>
            <div> title : {title} </div>
            <div> body : {body}</div>
        </div>
    );
}
