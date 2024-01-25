import React, { useEffect, useState } from "react";
import Post from "./Post";

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

    useEffect(() => {
        getBoardLists();
    }, []);

    return (
        <div>
            <h1>Boards</h1>
            <div>
                {posts.map((elem) => (
                    <Post postItem={elem} />
                ))}
            </div>
        </div>
    );
}
