const Header = () =>{
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Others</li>
            </ul>
            <h2> Todays Date : {new Date().getDate()}August</h2>
        </div>
    );
}
export default Header;