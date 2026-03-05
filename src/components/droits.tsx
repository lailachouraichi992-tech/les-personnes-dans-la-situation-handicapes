import React from "react"
import '../styles/droits.css'
import { Link } from "react-router"



export default function Droits(){
    

    return (

        <>    


        
<div className="container-main">
<div className="container-A">


     <Link className= "home" to="/education"> Droit-de-leducation </Link>
       

 <img  id= "img-AZ" src="/img/image des services/disability-kids-school-educational-projects-260nw-2036936300.webp" alt="home image1" />


</div>


    
<div className ="container-B">

   <Link className= "home" to="/sport"> Droit-au-sport </Link>

   <img  id= "img-AB"  src="/img/image des services/Lokomat.jpg" alt="home image1" />







</div>



    
<div className ="container-C">

      <Link className="home" to="/travail"> Droit-du-travail </Link>


   <img  id= "img-AC" src="/img/image des services/istockphoto-1483052139-612x612.jpg" alt="home image1" />






</div>



    
<div className ="container-D">

      <Link className= "home" to="/natation"> Droit-a-la-natation </Link>

   <img  id= "img-AD"  src="/img/image des services/rampe-d-handicap-menant-à-la-piscine-6106018 (1).webp" alt="home image1" />


</div>


    
<div className ="container-E">

  
   <Link className= "home" to="/mobilite"> Droit-a-la-mobilité </Link>

   <img className= "img-AE"  src="/img/materiels pour les hadicapes/leve-personne.jpg" alt="home image1" />






</div>
</div>

  </> )} 




