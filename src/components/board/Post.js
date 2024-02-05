import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Post({ postItem, onDelete, onUpdate }) {
    const [post, setPost] = useState({});
    const { id, author, title, content } = post;
    const [updateActive, setUpdateActive] = useState(false);

    useEffect(() => {
        setPost({
            id: postItem._id,
            author: postItem.author,
            title: postItem.title,
            content: postItem.content,
        });
    }, []);

    const updateToggle = () => {
        setUpdateActive(!updateActive);

        // 수정 끝나면 업데이트
        if (updateActive !== false) {
            console.log("수정", post);
            onUpdate(id, post);
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
                <Card.Header> id: {id}</Card.Header>
                {updateActive === true ? (
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={title}
                        onChange={onChangeTitle}
                    />
                ) : (
                    <Card.Title>{title}</Card.Title>
                )}
                {updateActive === true ? (
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={content}
                        onChange={onChangeContent}
                    />
                ) : (
                    <Card.Text>{content}</Card.Text>
                )}

                {updateActive === true ? (
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={author}
                        onChange={onChangeAuthor}
                    />
                ) : (
                    <Card.Footer className="text-muted">
                        user : {author}
                    </Card.Footer>
                )}

                <Button variant="danger" onClick={() => onDelete(id)}>
                    삭제
                </Button>
                <Button variant="warning" onClick={() => updateToggle()}>
                    수정
                </Button>
            </Card>
        </div>
    );
}
