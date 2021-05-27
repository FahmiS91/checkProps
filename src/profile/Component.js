import PropTypes from 'prop-types'
function ProfileComponent({fullName,profession,bio,children,handleName}){
    
    return(
        <div style={{textAlign:"center",fontWeight:"bold"}}>
         <p>{fullName}</p>
         <p>{profession}</p>
         <p style={{color:"green",fontWeight:100}}>{bio}</p>
         <div>{children}</div>
         <button style={{padding:10,backgroundColor:"orange",border:"none"}} onClick={handleName}> Send </button> 
         </div> 

    )
}
ProfileComponent.defaultProps={
    fullName:"firstName lastName",
    profession:"profession",
    bio:"Bio",
    children:<img src="./avatar.png" width="200" height="200" alt=""/>,
    handleName:()=>alert(ProfileComponent.defaultProps.fullName)
    
}
ProfileComponent.propTypes={
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string,
    handleName:PropTypes.func
}
export default ProfileComponent