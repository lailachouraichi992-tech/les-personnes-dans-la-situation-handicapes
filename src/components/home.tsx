
import '../styles/home.css'
import { Link } from "react-router"



export default function Home(){
    

    return (

        <>   
        
        <div className='home'> 

        <Link className= "home" to="/home"> home </Link>
        <Link className= "home" to="/droits"> droits </Link>
        <Link className= "home" to="/materieles" > materieles </Link>
        <Link className= "home" to="/services" > services  </Link>

        </div>
    <hr />


         <div className='image-1'> 
      

    <img className="img-S" src="/img/images des hadicapes/Article-8-1-1300x680.png" alt="home image1" />
    <img className="img-U" src="/img/images des hadicapes/depositphotos_76621623-stock-photo-disabled-woman-with-arms-outstretched.jpg"  alt="home image2" /> 
    <img className="img-V" src="/img/images des hadicapes/introduction-enfants-a-besoins-particuliers.jpg"  alt="home image3" /> 
          

    
           <hr />
          
    <p id="last-p">Les droits des personnes en situation de handicap garantissent l’égalité, <br /> la dignité et l’inclusion dans tous les domaines de la vie. Ils assurent l’accès à l’éducation, à la santé, <br /> à l’emploi, au transport et aux services publics sans discrimination. <br /> Ces droits visent à protéger les personnes handicapées et à favoriser leur participation pleine et active dans la société. </p>

       </div>

       

       
    </>
    )
        
    
};
