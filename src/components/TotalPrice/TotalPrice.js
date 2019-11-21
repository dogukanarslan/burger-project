import React from 'react';

function TotalPrice(props) {
    return (
        <div style={{textAlign:"center"}}>
          <div>Toplam Fiyat: {props.price}₺</div>
          <div>
            <button style={{
              marginRight: "10px",
              backgroundColor:"tomato",
              border:"none",
              height:"44px",
              color: "#fff",
              paddingRight: "20px",
              paddingLeft:"20px",
              borderRadius:"20px"
            }} type="button" onClick={()=>{
              props.ikiKofteliSecenek()}}>
            İki Köfteli
            </button>
            <button style={{
              marginRight: "10px",
              backgroundColor:"tomato",
              border:"none",
              height:"44px",
              color: "#fff",
              paddingRight: "20px",
              paddingLeft:"20px",
              borderRadius:"20px"
            }} type="button" onClick={()=>{
              props.ucKofteliSecenek()}}>
            Üç Köfteli
            </button>
            <button style={{
              backgroundColor:"tomato",
              border:"none",
              height:"44px",
              color: "#fff",
              paddingRight: "20px",
              paddingLeft:"20px",
              borderRadius:"20px"
            }} type="button" onClick={()=> {
              props.malzemeleriSifirla()}}>
              Sıfırla
            </button>
          </div>
        </div>
    );
}

export default TotalPrice;
