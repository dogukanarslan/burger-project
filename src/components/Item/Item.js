/**
 * Created by mehmetyurtar on 11/9/19.
 */
import React from 'react';

function Item(props) {
    return (
        <div className="BuildControl">
            <div className="Label">
              {props.name}

            </div>
            {props.sayi}
            {
                props.butonGoster ? <button className="Less" onClick={() => {
                    props.malzemeCikar(props);
                }}>Çıkar</button> : <button className="Less disabled">Çıkar</button>
            }
            <button className="more" onClick={() => {
                props.malzemeEkle(props);
            }}>Ekle {props.price}₺</button>
        </div>
    );
}

export default Item;
