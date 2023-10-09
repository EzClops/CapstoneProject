export default function Searchbox({ setSearchChange }){
    
    return(
        <>
            <input
            className="styleSearchBar" 
            type="search" 
            placeholder="Find Item"
            onChange={(event) =>{
            setSearchChange(event.target.value)
            }}
            ></input>
        </>
    )
}