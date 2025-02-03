const CardUi = ({title,paragraph,image}) => {

    return (
        <>
        <div className="card shadow border-1 my-4">
            <img src={image ?? "images/logo192.png"} alt="" height={600}/>
            <div className="card-body my-5 pt-4"  style={{height:250}}>
                <h1>{title ?? "dummy title"}</h1>
                <p>{paragraph ?? "dummy paragraph"}</p>
            </div>
        </div>
        </>
    )
}
export default CardUi


