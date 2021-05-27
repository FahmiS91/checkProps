
import ProfileComponent from './profile/Component'

function App(){
  
 const data=["Fahmi Sifi","My passion is coding","Web Developper"]
 const[fullName,bio, profession]=data
 const handleName=()=>alert(fullName)
  
 
  return(
    
     
     <div>
        <ProfileComponent fullName={fullName} profession={profession} bio={bio} handleName={handleName}><img src="imageInPublic.jpg"  style={{border:"4px solid grey",width:200}}alt=""/></ProfileComponent>
        
     </div>
    

  )
 
}
export default App
