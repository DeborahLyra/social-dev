import styled from "styled-components"

const Width_Break = '600px'

const StyledFlex = styled.div`
    display: flex;
`
const StyledImage = styled.div`
    background-image: url(${props => props.image});
    backgroud-position: right;
    background-repeat: no-repeat;
    background-size: cover;

    width: 100%;
    height: 100vh;

    @media (max-width: ${Width_Break}){
        display: none;
    }
`

const StyledContainer = styled.div`
    background-color: white;
    padding: 30px;

    @media (min-width: ${Width_Break}){
        min-width: calc (${Width_Break} - 60px); 
    }
    @media (max-width: ${Width_Break}){
        width: 100%;
    }
`


function ImageWithSpace ({ children, image }) {
    return(
        <StyledFlex>
        <StyledImage image = {image}/>
        <StyledContainer>
            {children}
        </StyledContainer>
        </StyledFlex>
    )
}

ImageWithSpace.defaultProps ={
    image: '/coffee-background.jpeg'
}

export default ImageWithSpace