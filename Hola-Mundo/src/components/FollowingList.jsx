import { styled } from 'styled-components'
import { useState } from 'react';

function FollowingList({ formatUserName, userName =`unknow`, name, initialIsFollowing }){
  const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing);
  const [ visibility, setVisibility] = useState(true)
  const [switchButton, setSwitchButton] = useState({
    color: initialIsFollowing ?'#ffffff' : '#202020',
    backgroundcolor: initialIsFollowing ? 'transparent' : '#fdfdfd',
    hBC: initialIsFollowing ? '#f33' : '#66f',
    border: initialIsFollowing ? 'solid 2px #ffffff' : 'none',
  })
  const text = isFollowing ? 'Siguiendo'  : 'Seguir'
  const text2 = 'dejar de seguir'
  const handleMouseM = ()=>{
    isFollowing ? setVisibility(!visibility) : setVisibility(true)
  }
  const handleMouseL = () => {
    isFollowing ? setVisibility(!visibility) : setVisibility(true)

  }
  const handleClick = ()=>{
    console.log(isFollowing)
    setIsFollowing(!isFollowing)
    isFollowing ? setSwitchButton({
      color:'#202020',
      backgroundcolor:'#fdfdfd',
      hBC:'#66f',
      border:'none'
    }) : setSwitchButton({
      color:'#ffffff',
      backgroundcolor:'transparent',
      hBC:'#f33',
      border:'solid 2px #ffffff'
    })
    console.log(isFollowing)
  }
  return(
    <Section>
      <Header>
      <Img src={`https://unavatar.io/${userName}`} alt={`imagen de ${userName}`} />
      <Div>
      <strong>{ name }</strong>
      <Span>{ formatUserName(userName) }</Span>
      </Div>  
      </Header>
      <Aside>
        <Button onMouseEnter={handleMouseM} onMouseLeave={handleMouseL} onClick={handleClick} border={switchButton.border} fontcolor={switchButton.color} backgroundcolor={switchButton.backgroundcolor} color={switchButton.hBC}>
          <strong>{visibility ? text : text2}</strong>
        </Button>
      </Aside>
    </Section>
    )
}
export default FollowingList;

const Section = styled.section`
  height: 15vh;
  width: 100%;
  margin: 0 1vw;
  display: flex;
  flex-direction: row;
  margin: 1vh 0;
  justify-content:space-around;
  &:hover{
    background-color: #212121;
  }
  @media (max-width:1020px){
    margin: 0 auto;
    align-items: center;
  }
  @media (max-width:500px){
    justify-content:start;
  }
`;
const Header = styled.header`
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 1020px){
    width: 23vw;
    justify-content: center;
  }
  @media (max-width:500px){
    margin: 0 10vw 0 2vw;
    width: min-content;
  }
`;

const Img = styled.img`
  text-align: center;
  height: 10vh;
  width: 7vw;
  margin: auto 0;
  border-radius:50%;
  object-fit: fill;
  @media (max-width:1020px){
    height: 7vh;
    width: 7vw;
    margin-right: 1vw;
  }
  @media (max-width:500px){
    height: 6vh;
    width: 6vw;
  }
`;
const Div = styled.div`
  height: 100%;
  width: 10vw;
  margin: auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1020px){
    font-size: .9rem;
  }
`;
const Span = styled.span`
  color: #cfcfcf;
  transition: all .5s ease;
  &:hover{
    color: #700bbb;
    cursor: pointer;
  }
`;
const Aside = styled.aside`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  color: ${prop => prop.fontcolor};
  cursor: pointer;
  font-size: 1.1rem;
  background-color: ${prop => prop.backgroundcolor};
  width: 10vw;
  height: 6vh;
  margin: 0 1vw;
  border: ${prop => prop.border};
  border-radius: 20px;
  transition: background-color .3s ease;
  &:hover {
    background-color: ${prop => prop.color};
  }
  @media (max-width: 1020px){
    width: min-content;
    height: min-content;
    font-size: 0.8rem;
  }
  @media (max-width:500px){
    width: 15vw;
    height: 5vh;
    font-size: .5rem;
  }
`;
