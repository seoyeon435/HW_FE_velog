import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

function PostGrid({ posts }) {
    return (
        <Grid>
            {posts.map((post) => (
                <PostCard key={post.id} post = {post} />
            ))}
        </Grid>
    )

}





const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
`;



export default PostGrid;