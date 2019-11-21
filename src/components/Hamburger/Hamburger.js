import React from 'react';

function Hamburger(props) {
    return (
        <div>
            <div className="BreadTop" style={{
                height: "100px"
            }}/>
            {
                props.ingredients.length < 1 && <div style={{
                    textAlign: "center"
                }}>
                    Malzeme Ekleyin
                </div>
            }
            {
                props.ingredients.map((ingredient) => {
                   return <div key={ingredient.displayId} style={{
                       height: "20px",
                       backgroundColor: ingredient.color,
                       width: "30%",
                       margin: "0 auto",
                       marginTop: "5px",
                       borderRadius:"20px"
                   }}></div>
                })
            }
            <div className="BreadBottom" style={{
                height: "50px"
            }}/>
        </div>
    );
}

export default Hamburger;
