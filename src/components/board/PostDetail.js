import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import Col from "react-bootstrap/Col";

export default function PostDetail() {
    const params = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    const url = `/board/${params.id}`;

    const getPost = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setPost(json); // 글 목록 저장
            });
    };

    const getComments = () => {
        fetch(url + "/comment")
            .then((response) => response.json())
            .then((json) => {
                setComments(json); // 글 목록 저장
            });
    };

    useEffect(() => {
        getComments();
    }, []);

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            <h2> id : {post._id}</h2>
            <h1> title : {post.title}</h1>
            <h3> author : {post.author}</h3>
            <p> {post.content}</p>
            {comments.map((elem, idx) => (
                <Col key={idx}>
                    <Comment comment={elem} />
                </Col>
            ))}
        </div>
    );
}
