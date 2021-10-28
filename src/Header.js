import './Header.css'

function Header() {
    const title ="Mon navigateur";
    return (
      <div className="header">
        <i className="cercleR"/>
        <i className="cercleJ"/>
        <i className="cercleV"/>
        {title}
      </div>
    );
}

export default Header;