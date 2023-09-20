export default function Searchbox({ setSearchChange, searchChange }){
    return(
        <>
            <input 
            type="search" 
            placeholder="Find Item"
            onChange={(event) =>{
                setSearchChange(event.target.value)
            }}
            ></input>
        </>
    )
}