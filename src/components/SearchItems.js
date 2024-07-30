import './SearchItems.css';
const SearchItems=({data})=>{

return (

    <div className='search-image-div'>
        <img className="search-img" src={data.image1}/>
    <h4 className="search-heading">{data.name}</h4>
    
    </div>
)
}

export default SearchItems;