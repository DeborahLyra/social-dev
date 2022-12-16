import styled from "styled-components";

const PostContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 20px;
    border-radius: 10px;
`

const StyledUserName = styled.p`
    font-wight: bold;
    font-size: 18px;
`
const StyledDate = styled.p`
font-size: 12px;
`
const ContainerText = styled.div`
    margin-top: 20px;
`


function Post (){
    return(
        <PostContainer>
            <StyledUserName>@Pessoa</StyledUserName>
            <StyledDate>12/12/12</StyledDate>
            <ContainerText>
                teste teste 
            </ContainerText>
        </PostContainer>
    )

}

export default Post