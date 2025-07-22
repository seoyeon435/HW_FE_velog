import { styled } from "styled-components";
// import { dummyData } from "../data/dummy_data";
import React from "react";
import Navbar from "../components/common/Navbar";
import axiosInstance from "../api/axiosInstance"; 
import PostGrid from "../components/post/PostGrid";
import TabBar from "../components/common/TabBar";
import Container from "../components/common/Container"; 
import { useState, useEffect } from "react";





const Homepage = () => {
  const [posts, setposts] = useState([]);

  // 콘솔에 데이터 찍어서 확인하기

  
  // API 요청해서 게시글 리스트  받아오기
  const fetchPosts = async () => {
    try {
      const res = await axiosInstance.get('/api/boards');
      setposts(res.data);
      console.log(res.data)
    } catch (err) {
      console.error("게시글 불러오기 실패", err);
    }
  };

  // 마운트 시 한 번만 실행하도록!!
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Container>
        <Navbar />
        <TabBar />
        <PostGrid posts={posts} />
      </Container>
    </div>
  )

}


export default Homepage;
