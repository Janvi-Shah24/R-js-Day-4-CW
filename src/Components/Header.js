import Button from "./Button";
import './Style/header.css';
function Header(){
    return (
       <>
       <header className="header">
        <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <p>GeekFoods</p>
        </div>
        <div className="nav">
        <a href="#"> Home</a>
        <a href="#"> Quote</a>
        <a href="#"> Restaurants</a>
        <a href="#"> Foods</a>
        <a href="#"> Contact</a>
</div>
<div className="header-button">
<Button btnTitle="Get started"/>
<div className="menu-bar-container">
<i class="fa-solid fa-bars fa-xl"></i>
</div>
</div>
       </header>
       </>
    );
}

export default Header;