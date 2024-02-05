import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Post({ postItem, onDelete, onUpdate }) {
    const [post, setPost] = useState({});
    const [updateActive, setUpdateActive] = useState(false);

    useEffect(() => {
        setPost({
            id: postItem._id,
            author: postItem.author,
            title: postItem.title,
            content: postItem.content,
        });
    }, [postItem]);

    const updateToggle = () => {
        setUpdateActive(!updateActive);

        // 수정 끝나면 업데이트
        if (updateActive !== false) {
            console.log("수정", post);
            onUpdate(post);
        }
    };
    const onChangeAuthor = (e) => {
        setPost({
            ...post,
            author: e.target.value,
        });
    };

    const onChangeTitle = (e) => {
        setPost({
            ...post,
            title: e.target.value,
        });
    };

    const onChangeContent = (e) => {
        setPost({
            ...post,
            content: e.target.value,
        });
    };

    return (
        <div>
            <Card
                className="bg-light text-black"
                style={{ textAlign: "center" }}
            >
                <Card.Header> id: {post.id}</Card.Header>
                {updateActive === true ? (
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={post.title}
                        onChange={onChangeTitle}
                    />
                ) : (
                    <Card.Title>{post.title}</Card.Title>
                )}
                {updateActive === true ? (
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={post.content}
                        onChange={onChangeContent}
                    />
                ) : (
                    <Card.Text>{post.content}</Card.Text>
                )}

                {updateActive === true ? (
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={post.author}
                        onChange={onChangeAuthor}
                    />
                ) : (
                    <Card.Footer className="text-muted">
                        user : {post.author}
                    </Card.Footer>
                )}

                <Button variant="danger" onClick={() => onDelete(post.id)}>
                    삭제
                </Button>
                <Button variant="warning" onClick={() => updateToggle()}>
                    수정
                </Button>
            </Card>
        </div>
    );
}
