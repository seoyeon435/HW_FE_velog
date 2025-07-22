import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function PostCard({ post }) {
    const navigate = useNavigate();

    const trimmedContent =
        post.content.length > 100 ? post.content.slice(0, 100) + "..." : post.content;
    const formattedDate = post.createdAt?.slice(0, 10); 


    return (
        <PostCardWrapper onClick={() => navigate(`/post/${post.id}`)}>
            <Thumbnail src={post.thumbnailUrl} alt="썸네일" />
            <ContentBox>
                <TextContent>
                    <Title>{post.title}</Title>
                    <Content>{post.content}</Content>
                </TextContent>

                
                <Date>{formattedDate} · {post.commentCount}개의 댓글</Date>

                <Divider />

                <Footer>
                    <ProfileBox>
                        <img src={post.writerProfileUrl} alt="프로필" />
                        <span style={{ color: '#868e96', fontWeight: 'normal' }}>by</span>
                        <span style={{ color: '#212529', fontWeight: 'bold' }}>{post.writerName}</span>
                    </ProfileBox>
                    <LikeBox>
                        <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 
                            0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 
                            5 18.5 5 20 6.5 20 8.5c0 3.78-3.4 
                            6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {post.heartCount}
                    </LikeBox>
                </Footer>
            </ContentBox>
        </PostCardWrapper>
    );
}


const PostCardWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    background: var(--bg-element1);
    border-radius: 1px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 180px;
`

const ContentBox = styled.div`
    padding: 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    height: 100%;
    min-height: 80px;
`;


const Title = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    margin: 0rem 0rem 0rem 0rem;
    color: #444;
`;

const Content = styled.p`
    font-size: 0.9rem;
    color: #444;
    margin: 0rem 0rem 0rem 0rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Date = styled.p`
    font-size: 0.75rem;
    color: #999;
`;


const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
`;


const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #212529;

    img {
        width: 25px;
        height: 25px;
        border-radius:50%;
        object-fit: cover;
    }
`;

const LikeBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.85rem;
    color: #212529;
`;

const Divider = styled.hr`
    border: none;
    border-top: 1.5px solid #f6f6f6;
    /* margin: 6px 0; */
    margin: 6px -20px;
`;




export default PostCard;