import styled from "styled-components";

//Tooltip
export const SpanParent = styled.div`
  span {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    width: 150px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    margin-left: -4rem;
    margin-top: -2.2rem;
    padding: 0.4rem 0;
    border-radius: 5px;
  }

  :hover span {
    visibility: visible;
  }
`;
