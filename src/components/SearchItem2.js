import './SearchItem2.css';
const SearchItem2=({data})=>{

return (

    <div className='search-image-div2'>
        <img className="search-img2" src={data.image1}/>
    <h4 className="search-heading2">{data.name}</h4>
    
    </div>
)
}

export default SearchItem2;