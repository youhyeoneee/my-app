import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Post({ postItem, onDelete, onUpdate }) {
    const [post, setPost] = useState({});
    const { id, userId, title, body } = post;
    const [updateActive, setUpdateActive] = useState(false);

    useEffect(() => {
        setPost({
            id: postItem.id,
            userId: postItem.userId,
            title: postItem.title,
            body: postItem.body,
        });
    }, []);

    const updateToggle = () => {
        setUpdateActive(!updateActive);

        // 수정 끝나면 업데이트
        if (updateActive !== false) {
            console.log("수정", body);
            onUpdate(id);
        }
    };

    const onChange = (e) => {
        setPost({
            ...post,
            body: e.target.value,
        });
    };

    return (
        <div>
            <Card
                className="bg-light text-black"
                style={{ textAlign: "center" }}
            >
                <Card.Header> id: {id}</Card.Header>
                <Card.Title>{title}</Card.Title>

                {updateActive === true ? (
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={body}
                        onChange={onChange}
                    />
                ) : (
                    <Card.Text>{body}</Card.Text>
                )}

                <Card.Footer className="text-muted">
                    user : {userId}
                </Card.Footer>
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
