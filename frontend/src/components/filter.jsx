import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom"

const Filter = () => {
 
  
  const [searchparams, setSearchparams] = useSearchParams();

  const initialfilter = searchparams.getAll("categori")
  const [categori, setcategori] = useState(initialfilter ||  [])
  
  const handlefilter = (e) => {
    const getfilter = [...categori]
    if (getfilter.includes(e.target.value)) {
      getfilter.splice(getfilter.indexOf(e.target.value),1)
    }
    else {
      getfilter.push(e.target.value)
    }
    setcategori(getfilter)
  }
  console.log(categori)
  useEffect(() => {
    let params = {}
    params.categori = categori
    setSearchparams(params)
  },[setSearchparams,categori])

  return (
    <div>
      <h3 className="filter">Filters</h3> <hr />
      <div className="filcat">Category</div> <br />
      <div >
        <div className="saree">
          <input type="checkbox" value="Sarees" checked={categori.includes('Sarees')}  onChange={handlefilter} />
          <label>Sarees</label>
        </div> <br />
        <div className="saree">
          <input type="checkbox" value="Jewellery" checked={categori.includes('Jewellery')}  onChange={handlefilter} />
          <label>Jewellery</label>
              </div>
              <br />
        <div className="saree">
          <input type="checkbox" value="Dresses" checked={categori.includes('Dresses')}  onChange={handlefilter} />
          <label>Dresses</label>
              </div>
              <br />
        <div className="saree">
          <input type="checkbox" value="Mens Top Were" checked={categori.includes('Mens Top Were')} onChange={handlefilter} />
          <label>Mens Top Were</label>
              </div>
              <br />
              <div className="saree">
          <input type="checkbox" value="Beauty and health" checked={categori.includes('Beauty and health')} onChange={handlefilter} />
          <label>Beauty and health</label>
              </div>
              <br />
              <div className="saree">
          <input type="checkbox" value="Home and Kitchen" checked={categori.includes('Home and Kitchen')} onChange={handlefilter} />
          <label>Home and Kitchen</label>
              </div>
              <br />
              <div className="saree">
          <input type="checkbox" value="Bags and Footwear" checked={categori.includes('Bags and Footwear')} onChange={handlefilter} />
          <label>Bags and Footwear</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;