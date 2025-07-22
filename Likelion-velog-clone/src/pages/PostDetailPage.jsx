// src/pages/PostDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axiosInstance";
import Navbar from "../components/common/Navbar";
import styled from "styled-components";

const PostDetailPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`http://3.34.217.44/boards/${id}`);

                console.log("게시글 상세 응답:", res);
                setPost(res.data);
            } catch (err) {
                console.error("게시글 상세 조회 실패", err);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>로딩 중...</div>;

    return (
        <>
        <LayoutWrapper>
            <Navbar />
            <Container>
                <LeftBar>
                    <HeartIcon><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg></HeartIcon>
                    <HeartCount>{post.heartCount}</HeartCount>
                    <ShareIcon><svg width="24" height="24" viewBox="0 0 24 24" class="share"><path fill="currentColor" d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"></path></svg></ShareIcon>
                </LeftBar>

                <Wrapper>

                    

                    <Title>{post.title}</Title>

                    <InfoBox>
                        <Writer>
                            <strong>{post.writerName}</strong> ·{" "}
                            <span>{post.createdAt}</span>
                        </Writer>
                        <FollowBtn>팔로우</FollowBtn>
                    </InfoBox>

                    <TagBox>
                        <Tag>AI개발도구</Tag>
                        <Tag>Gemini</Tag>
                        <Tag>VS Code</Tag>
                        <Tag>google</Tag>
                    </TagBox>

                    <Thumbnail src={post.thumbnailUrl} alt="썸네일" />
                    <Content>{post.content}</Content>

                    <AuthorBox>
                        <ProfileImg src={post.writerProfileUrl} alt="작성자" />
                        <WriterName>{post.writerName}</WriterName>
                        <FollowBtn>팔로우</FollowBtn>
                    </AuthorBox>

                    <CommentSection>
                        <CommentTitle>0개의 댓글</CommentTitle>
                        <CommentTextarea 
                            placeholder="댓글을 작성하세요" 
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <CommentButton>댓글 작성</CommentButton>
                    </CommentSection>

                </Wrapper>
            </Container>
        </LayoutWrapper>
        </>
    );
};


const LayoutWrapper = styled.div`
    padding: 0 2rem;
    max-width: 1024px;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    padding: 0 1rem;
`;

const Wrapper = styled.div`
    max-width: 768px;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 2.4rem;
    font-weight: 800;
    margin-bottom: 2rem;
    line-height: 1.4;
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const Writer = styled.div`
    font-size: 0.9rem;
    color: #444;

    strong {
            color: #212529;
            font-weight: bold;
    }

    span {
            color: #868e96;
            margin-left: 0.3rem;
    }
`;

const FollowBtn = styled.button`
    padding: 0.3rem 1rem;
    font-size: 0.85rem;
    color: #20c997;
    font-weight: 700;
    background-color: transparent;
    border: 1px solid #20c997;
    border-radius: 1rem;
    cursor: pointer;
`;

const TagBox = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    background-color: #f1f3f5;
    color: #20c997;
    font-size: 0.8rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
`;

const Thumbnail = styled.img`
    width: 100%;
    margin-bottom: 2rem;
`;

const Content = styled.div`
    font-size: 1.05rem;
    line-height: 1.8;
    white-space: pre-line;
`;


// 하단 프로필/팔로우 박스

const AuthorBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
    margin-bottom: 6rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e9ecef;
`;

const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;

const WriterName = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #212529;
    margin-left: 1rem;
    flex: 1;
`;

// LeftBar 컴포넌트
const LeftBar = styled.div`
    position: sticky;
    top: 150px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    padding: 0.5rem 0;
    border-radius: 2rem;
    background: var(--bg-element2);
    border: 1px solid var(--border4);
    width: 60px;
    height: 120px;
    box-shadow: 0 0 5px rgba(0,0,0,0.05);
    gap: 0.5rem;
`;

const HeartIcon = styled.div`

    height: 2.5rem;
    width: 2.5rem;
    color: #868e96;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 1.5rem;
    cursor: pointer;
    z-index: 5;
`;

const HeartCount = styled.div`
    font-weight: bold;
    color: #343a40;
`;

const ShareIcon = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    color: #868e96;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 1.5rem;
    cursor: pointer;
    z-index: 5;
`;

// 댓글 박스
const CommentSection = styled.div`
    margin-top: 3rem;
    margin-bottom: 6rem;
`;

const CommentTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 0.8rem;
`;

const CommentTextarea = styled.textarea`
    width: 95.5%;
    min-height: 5rem;
    padding: 1rem;
    resize: none;
    margin-bottom: 1rem;
    border: 1px solid #f1f3f5;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    font-size: 1rem;
    color: #808181;
    line-height: 1.75;
    background: #ffffff;
`;

const CommentButton = styled.button`
    background-color: #20c997;
    color: white;
    font-weight: 700;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    float: right;
`;

export default PostDetailPage;
