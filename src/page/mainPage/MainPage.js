import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AllPost from "./AllPost";

const MainPageContainer = styled.div`
  ${tw`
    // relative 
    // min-h-screen
    // bg-green-300
    h-full
    flex
    flex-col
    items-center
    justify-center
 `};
`;

function MainPage() {
  return (
    <MainPageContainer>
      <AllPost />
    </MainPageContainer>
  );
}

export default MainPage;
