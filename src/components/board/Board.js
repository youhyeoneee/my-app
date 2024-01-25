import React, { useCallback, useEffect, useState } from "react";
import Post from "./Post";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Board() {
    const [posts, setPosts] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const getBoardLists = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json); // 글 목록 저장
            });
    };

    const deletePost = (id) => {
        fetch(`${url}/${id} 삭제`, {
            method: "DELETE",
        }).then(() => {
            getBoardLists();
        });
    };

    useEffect(() => {
        getBoardLists();
    }, []);

    useEffect(() => {}, [posts]);

    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "20px" }}>Boards</h1>
            <div style={{ padding: "20px" }}>
                <Row xs={2} md={4} className="g-4">
                    {posts.map((elem, idx) => (
                        <Col key={idx}>
                            <Post postItem={elem} onDelete={deletePost} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
