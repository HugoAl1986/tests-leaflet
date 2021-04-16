import React, {useState} from 'react';
import styled from 'styled-components';
import * as data from '../cities.json';

const PaginationDiv = styled.div`
display:flex;
height:80px;
width:100%;
margin-top:1.5rem;
color:black;
justify-content:center;
`;

const ButtonPagination = styled.button`
height:20px;
padding:1px 3px;
margin:0.1rem;`;



const Pagination = ({setDatasCity}) => {

const [DatasJson,setDatasJson]=useState(data.default)

const totalDatas = DatasJson.length;
const page = totalDatas / 100;
console.log(page)
const PageArray = [];
for (let i=1;i<=page;i++){
    PageArray.push(i);  
}

const DisplayCity = (e) =>{
    
    const PageNumber = parseInt(e.currentTarget.value);
    if(PageNumber === 1){
        setDatasCity(DatasJson.slice(0,100))
    }else{
    const IndexStartSlice = PageNumber*100-100;  
    const IndexEndSlice = (IndexStartSlice + 100);
    setDatasCity(DatasJson.slice(IndexStartSlice,IndexEndSlice))
    }
}

    return ( <PaginationDiv>
                {PageArray.map((element) => 
                    <ButtonPagination key={element} onClick={DisplayCity} value={element}>{element}</ButtonPagination>   
                )}
            </PaginationDiv> );
}
 
export default Pagination;