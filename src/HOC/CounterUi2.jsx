const CounterUi2 = ({Count,inc,dec}) =>{
    return(
        <>
        <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center bg-success">
            <h2 className="bg-danger text-center">{Count}</h2>
            <button className="btn btn-outline-dark " onClick={inc}>Plus</button>
            <button className="btn btn-outline-dark mx-2" onClick={dec}>minus</button>

        </div>
        </>
    )
}
    
export default CounterUi2