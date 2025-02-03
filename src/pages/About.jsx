import CardData from "../layout/carddata"
import CardUi from "../layout/CardUi"

const About = () => {
    return (
       <>
       <div className="container-fluid">
        <h1>About us</h1>
       <div className="row">
      {
        CardData.map((ele,index) =>{
            return(
                <div className="col-xl-3 col-lg-4 col-md-6">
                <CardUi title={ele.title} paragraph={ele.para} image={ele.cardImg} />

            </div>
            )
        })
      }
        </div>
     </div>
       </>

     )
}

export default About