import { Link } from 'react-router'
import '../styles/materieles.css'



export default function Materieles() {

    return (

        <>


            <div id="squiere-1">


 <img  id= "img-last" src="/img/materiels pour les hadicapes/unnamed.jpg" alt="home image1" />

<h6  id="h-13"> Les matériels pour les handicapés  </h6>

<p id="P-13">Les matériels pour les personnes en situation de handicap sont des équipements conçus pour faciliter la mobilité, la communication et l’autonomie au quotidien. Ils comprennent des fauteuils roulants, des béquilles, des prothèses, des appareils auditifs et des outils technologiques adaptés. Ces matériels améliorent la qualité de vie, favorisent l’inclusion sociale et permettent aux personnes handicapées de participer activement à la société avec plus d’indépendance.   </p>
 




            </div>





    <div id="squiere-A">


     <img id="img-sqr-1"src="/img/materiels pour les hadicapes/Wheelchairs.png" alt="home image1" />

        
  <Link className="lien" to="/Fauteuilroulantelectrique" > Fauteuilroulantelectrique </Link>

            </div>




            <div id="squiere-B">

 <img id="img-sqr-2" src="/img/materiels pour les hadicapes/FS958LBCGPY-38-1.jpg" alt="home image1" />


  <Link className="lien" to="/Fauteuilroulant" > Fauteuil-Roulant  </Link>






            </div>




            <div className="squiere-C">


<img id="img-sqr-3" src="/img/materiels pour les hadicapes/escaliers-avec-des-cannes-anglaises.jpg" alt="home image1" />


      <Link className="lien" to="/Cannedemarche" > Canne-de-marche  </Link>







            </div>




            <div  id="squiere-D">


    <img id="img-sqr-4" src="/img/materiels pour les hadicapes/leve-personne.jpg" alt="home image1" />

        

      <Link className="lien" to="/Levepersonne" > leve-personne  </Link>






            </div>



            <div id="squiere-E">


        <img id="img-sqr-5" src="/img/materiels pour les hadicapes/grillo-g2-photo-avec-personne.jpg" alt="home image1" />

        <Link className="lien" to="/Deambulateur" > Deambulateur  </Link>


            </div>



    <div id ="squiere-F">
                
        <img id="img-sqr-6"
        src="/img/materiels pour les hadicapes/rampe-double-pliante-ouverte-scaled-1.jpg" 
        alt="Aloeverastabilisée image1" />


      <Link className="lien" to="/Rampedacces" > Rampe-dacces  </Link>



            </div>

            



        </>

    )
};
