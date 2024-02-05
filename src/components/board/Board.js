import React, { useCallback, useEffect, useState, useRef } from "react";
import Post from "./Post";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Board() {
    const [inputs, setInputs] = useState({
        id: "",
        author: "",
        title: "",
        content: "",
    });

    const nextId = useRef(101);

    const [posts, setPosts] = useState([]);
    const [writeActive, setWriteActive] = useState(false);
    const url = "/board";
    const headers = {
        "Content-type": "application/json; charset=UTF-8",
    };

    const getBoardLists = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json); // 글 목록 저장
            });
    };

    const deletePost = (id) => {
        fetch(`${url}/${id}`, {
            method: "DELETE",
        }).then(() => {
            getBoardLists();
        });
    };

    const updatePost = (id, post) => {
        fetch(`${url}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                userId: post.userId,
                title: post.title,
                body: post.body,
            }),
            headers: headers,
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                getBoardLists();
            });
    };

    const writePost = () => {
        console.log("작성 : ", JSON.stringify(inputs));
        fetch(`${url}`, {
            method: "POST",
            body: JSON.stringify({
                id: nextId,
                userId: inputs.userId,
                title: inputs.title,
                body: inputs.body,
            }),
            headers: headers,
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                getBoardLists();
            });
    };

    const writeToggle = () => {
        setWriteActive(!writeActive);

        if (writeActive !== false) {
            console.log("저장");
            const newPost = {
                ...inputs,
                id: nextId.current,
            };
            setPosts((prev) => prev.concat(newPost));
            writePost(newPost.id);
            setInputs({
                userId: "",
                title: "",
                body: "",
            });
            nextId.current += 1;
        }
    };

    useEffect(() => {
        getBoardLists();
    }, []);

    useEffect(() => {}, [posts]);

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", padding: "20px" }}>Boards</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingRight: "20px",
                }}
            >
                <Button
                    style={{
                        paddingRight: "10px",
                    }}
                    onClick={() => writeToggle()}
                >
                    {writeActive === false ? "글 작성" : "저장"}
                </Button>
            </div>

            {writeActive === true ? (
                <div style={{ padding: "20px" }}>
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                        }}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                user
                            </InputGroup.Text>
                            <Form.Control
                                id="basic-url"
                                aria-describedby="basic-addon3"
                                onChange={(e) => {
                                    console.log("user 수정");
                                    console.log(inputs);
                                    setInputs({
                                        ...inputs,
                                        userId: e.target.value,
                                    });
                                }}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>제목</InputGroup.Text>
                            <Form.Control
                                aria-label="Amount (to the nearest dollar)"
                                onChange={(e) => {
                                    console.log("title 수정");
                                    console.log(inputs);
                                    setInputs({
                                        ...inputs,
                                        title: e.target.value,
                                    });
                                }}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup>
                            <InputGroup.Text>내용</InputGroup.Text>
                            <Form.Control
                                as="textarea"
                                aria-label="With textarea"
                                onChange={(e) => {
                                    console.log("body 수정");
                                    console.log(inputs);
                                    setInputs({
                                        ...inputs,
                                        body: e.target.value,
                                    });
                                }}
                            />
                        </InputGroup>
                    </div>
                </div>
            ) : null}

            <div style={{ padding: "20px" }}>
                <Row xs={2} md={4} className="g-4">
                    {posts.map((elem, idx) => (
                        <Col key={idx}>
                            <Post
                                postItem={elem}
                                onDelete={deletePost}
                                onUpdate={updatePost}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
