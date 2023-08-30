

export default function Card({ item }){
    // console.log(item)
    return(
        <>
            <div className="item_card">
                <img src={item.image} alt="Image" height="200px" width="180px"/>
                <div className="details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    {/* <p>{item.rating}</p> */}
                    {/* <p>{item.description}</p> */}
                </div>
            </div>
        </>
    )
}