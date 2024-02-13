import React, { useCallback, useEffect, useState, useRef } from "react";
import Post from "./Post";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Board({ user, logOut }) {
    const [inputs, setInputs] = useState({
        author: "",
        title: "",
        content: "",
    });

    const [posts, setPosts] = useState([]);
    const [writeActive, setWriteActive] = useState(false);
    const url = "/board";
    const headers = {
        "Content-type": "application/json; charset=UTF-8",
    };

    const getBoardLists = () => {
        fetch(url)
            .then((response) => {
                response.json();
            })
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

    const updatePost = (post) => {
        fetch(`${url}/${post.id}`, {
            method: "PUT",
            body: JSON.stringify({
                author: post.author,
                title: post.title,
                content: post.content,
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
                author: inputs.author,
                title: inputs.title,
                content: inputs.content,
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
            };
            setPosts((prev) => prev.concat(newPost));
            writePost();
            setInputs({
                author: "",
                title: "",
                content: "",
            });
        }
    };

    useEffect(() => {
        getBoardLists();
    }, []);

    useEffect(() => {}, [posts]);

    return (
        <div style={{ padding: "20px" }}>
            {user ? (
                <div>
                    {user.nickname}
                    <Button variant="contained" onClick={logOut}>
                        로그아웃
                    </Button>
                </div>
            ) : (
                <Button variant="contained" href="/login">
                    로그인
                </Button>
            )}
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
                    variant="contained"
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
                                        author: e.target.value,
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
                                        content: e.target.value,
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
