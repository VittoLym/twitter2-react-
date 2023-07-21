import './App.css'
import { styled } from 'styled-components'
import FollowingList from './components/FollowingList'
import MoreFollowing from './components/MoreFollowing'

function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <>
      <H2>A quien seguir.</H2>
      <FollowingList 
      formatUserName={formatUserName} 
      initialIsFollowing={true} 
      userName="Vitto_zzk" 
      name="JCVN" 
      />
      <FollowingList 
      formatUserName={formatUserName}
      initialIsFollowing={false}
      userName="Rubiu5"
      name="elrubius"
      />
      <FollowingList
      formatUserName={formatUserName}
      initialIsFollowing
      userName="bizarrap"
      name="bzrp"
      />
      <FollowingList
      formatUserName={formatUserName}
      initialIsFollowing
      userName="Google"
      name="Google"
      />
      <MoreFollowing />
    </>
  )
}

export default App
const H2 = styled.h2`
  text-decoration: underline;
  margin-left: 2vw;
  @media (max-width:1020px){
  font-size: 1.2rem;
  }
`; 