import './Header.css'

function profil() {
    
}

function Name() {
    const name1= "Lola";
    const name2= "Aude";
    const name3= "Margot";
    return(
        <div className="component">
            <button className="name" onClick={profil}>{name1}</button>
            <button className="name" onClick={profil}>{name2}</button>
            <button className="name" onClick={profil}>{name3}</button>
        </div>
    )
  }

  export default Name;