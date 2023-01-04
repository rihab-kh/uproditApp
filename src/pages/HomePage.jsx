import React, {useEffect, useState} from "react";
import { Card, Row , Input } from "antd";


import MenuNav from "../components/Menu/Menu";
import {
	AuthURL,fetchSearch, SearchPictureProfil
} from "../services/uprodit.services"

export default function HomePage() {
  const { Meta } = Card;
const { Search } = Input;
  const [searchValue, setSearchValue] = useState("");
  const [searchFreelancers, setSearchFreelancers] = useState([]);
  const [picture, setPicture] = useState("");

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      const resultF = await fetchSearch(searchValue);
      
      if (!didCancel) {
        setSearchFreelancers(resultF);
        console.log(resultF)
      }     
    };
    fetchData();
   
    return () => {
      didCancel = true;
    };
  }, [searchValue]
    
  );
 
  const getPicture = async(id) => {
  await SearchPictureProfil(id).then((data)=>{
    setPicture(data.b64Content)
   })
 }

    return (
    <MenuNav>
      <Row>
        <Search
        placeholder="input search text"
        size="large"
        className="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {
        searchFreelancers.map((item) =>(
        
 <div> 
  {/* <button onClick={getPicture(item.image_id)}></button>   */}
          <Card style={{width: 250, margin: 25}} cover={<img src= {`data:image/png;base64,${picture}`} alt={item.image_id} />}  
  >
    <Meta title={item.denomination}/>
  </Card>
  </div>
        ))
          }
      </Row>
    </MenuNav>
  );
  
}