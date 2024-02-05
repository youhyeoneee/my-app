import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const params = useParams();
    const [post, setPost] = useState([]);

    const url = "/board";

    const getPost = () => {
        fetch(`${url}/${params.id}`)
            .then((response) => response.json())
            .then((json) => {
                console.log("getPost");
                setPost(json); // 글 목록 저장
            });
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            <h2> id : {post._id}</h2>
            <h1> title : {post.title}</h1>
            <h3> author : {post.author}</h3>
            <p> {post.content}</p>
        </div>
    );
}
