import React from "react";
import styled from "styled-components";

// 전체 바 레이아웃
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0 3rem 0;
`;

// 탭들 (왼쪽 아이콘+텍스트)
const Tabs = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

// 단일 탭
const Tab = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.1rem;
    color: ${props => (props.active ? "#212529" : "#868e96")};
    font-weight: ${props => (props.active ? "600" : "400")};
    cursor: pointer;
    padding-bottom: 0.3rem;
    border-bottom: ${props => (props.active ? "2px solid #212529" : "none")};

    width: 80px;           
    min-width: 80px;
    text-align: center;
`;


const Icon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: contain;
`;




// 오른쪽 필터 영역
const FilterBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: #ffffff;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #212529;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

const FilterGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

function TabBar() {
    return (
        <Wrapper>
            <Tabs>
                <Tab active>
                    <Icon src="/icons/trend.png" alt="트렌딩" />
                    트렌딩
                </Tab>
                <Tab>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                    </svg>
                    {/* <Icon src="/icons/clock.png" alt="최신" /> */}
                    최신
                </Tab>
                <Tab>
                    {/* <Icon src="/icons/rss.png" alt="피드" /> */}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><circle cx="6.18" cy="17.82" r="2.18"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
                    </svg>
                    피드
                </Tab>
            </Tabs>

            <FilterGroup>
                <FilterBox>
                    이번 주 <span style={{ marginLeft: "0.3rem" }}>▼</span>
                </FilterBox>
                <svg fill="currentColor" style={{ color: '#868e96' }} strokeWidth="0" viewBox="0 0 24 24" className="HomeTab_extra__x0Vmq" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
            </FilterGroup>

        </Wrapper>
    );
}

export default TabBar;
