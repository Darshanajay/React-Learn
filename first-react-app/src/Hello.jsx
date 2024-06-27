let Hello = () => {
    
    let myName = "Darshan";
    let fullName = () => {
        return "Darshan DR"
    }
    
    return <h3>
        My name is {fullName()} <br />
        My name is {myName}
    </h3>
}

export default Hello;