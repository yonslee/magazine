import { Fragment } from "react";
import styled from "styled-components";

const Image = ({ shape, src, size }) => {

  const styles = {
    src: src,
    size: size,
  }
  
  if(shape === "circle") {
    return (
        <ImageCircle {...styles}>

        </ImageCircle>
    )
  }
  if(shape === "rectangle") {
    return (
        <AspectOuter>
            <AspectInner {...styles}>

            </AspectInner>
        </AspectOuter>
    )
  }

  return (
    <Fragment>

    </Fragment>
  )
}

Image.defaultProps = {
    shape: "circle",
    src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwBpeG%2Fbtruk4F9D2g%2Ff0krfGSjw6QORqQ1jPPv20%2Fimg.jpg",
    size: 36,
};

const AspectOuter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;


const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;