import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {
    return (
        <div>
            {
                props.items.map((item) => {
                    const icindeVarMi = props.selectedIngredients.find((ingredient) => {
                        return ingredient.name === item.name;
                    });
                    const kacTaneVar = props.selectedIngredients.filter((ingredient) => {
                      return ingredient.name === item.name;
                    });

                    return (
                              <Item key = {item.id} {...item}
                                malzemeEkle = {props.malzemeEkle}
                                malzemeCikar = {props.malzemeCikar}
                                butonGoster = {icindeVarMi}
                                sayi = {kacTaneVar.length}
                    />

                  )
                })
            }
        </div>
    );
}

export default ItemList;
