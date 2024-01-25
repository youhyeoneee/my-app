import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

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
            <Card
                className="bg-light text-black"
                style={{ textAlign: "center" }}
            >
                <Card.Header> id: {id}</Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Card.Footer className="text-muted">
                    {" "}
                    user : {userId}
                </Card.Footer>
            </Card>
        </div>
    );
}
