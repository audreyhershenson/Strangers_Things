function Logout() {
    
    function handleLogout(event) {
        console.log("logging out...");
        localStorage.removeItem('token');
        location.reload()
    }
    return (<button onClick = {handleLogout}>Logout</button>)
}

export default Logout;