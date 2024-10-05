
import UserCard from './component/userCard'
import './App.css'
import myPic from './assets/lehnga.jpg'
import babuPic from './assets/BabuFav.jpg'
import strPic from './assets/StrugglingGirl.jpg'
function App() {
  return (
    <div className='container'>
    <h1 className='heading1'>Know Me</h1>
      <UserCard  name="Neha Ojha" img={myPic}   desc="Full Stack Web Developer" style={{"border-radius":"10px"}} />
      <UserCard name="Naina" img={babuPic} desc="My Babu's fav name "  style={{"border-radius":"10px"}}/>
      <UserCard name="Just ME" img={strPic} desc="A simple struggling girl"  style={{"border-radius":"10px"}}/>
    </div>
  )
}
export default App
