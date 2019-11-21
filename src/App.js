import React from 'react';
import './App.css';
import {Hamburger, TotalPrice, ItemList} from "./components";
import ingrediends from "./data";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: []
        };
        this.malzemeEkle = this.malzemeEkle.bind(this);
        this.malzemeCikar = this.malzemeCikar.bind(this);
        this.malzemeleriSifirla = this.malzemeleriSifirla.bind(this);
        this.ikiKofteliSecenek = this.ikiKofteliSecenek.bind(this);
        this.ucKofteliSecenek = this.ucKofteliSecenek.bind(this);
    }

    malzemeEkle(malzeme){
        this.setState({
            ingredients: [...this.state.ingredients].concat([
                {...malzeme, displayId: Math.random()}
            ])
        })

    }

    malzemeCikar(malzeme){
        // Cikarılması gereken malzemeyi alalım.
        const selectedMalzeme = this.state.ingredients.find((ingredient) => {
           return ingredient.name === malzeme.name;
        });

        // Elimizde olan ilk malzemenin displayId alalım
        const targetId = selectedMalzeme.displayId;

        // Display Id üzerinden bu malzemeyi silelim.
        this.setState({
            ingredients: this.state.ingredients.filter((ingredient) => {
                return ingredient.displayId !== targetId;
            })
        })
    }

    malzemeleriSifirla(){
      this.setState({ingredients: this.state.ingredients = []})
    }


    ikiKofteliSecenek(){
      this.setState({ingredients: this.state.ingredients = []})
      this.setState({
        ingredients: [...this.state.ingredients].concat([
          ingrediends[0],ingrediends[3],ingrediends[2],ingrediends[1],ingrediends[2]
      ])
    })
    }

    ucKofteliSecenek(){
      this.setState({ingredients: this.state.ingredients = []})
      this.setState({
        ingredients: [...this.state.ingredients].concat([
          ingrediends[0],ingrediends[3],ingrediends[2],ingrediends[1],ingrediends[2],ingrediends[1],ingrediends[2]
      ])
    })
    }

    fiyatHesapla(){
      let total = 0;
      this.state.ingredients.forEach((item) => {
        console.log(this.state.ingredients)
        return total += item.price

      })
      return total

    }

    render(){
        return (
            <div>
                <Hamburger ingredients = {this.state.ingredients} />
                <TotalPrice ikiKofteliSecenek={this.ikiKofteliSecenek} ucKofteliSecenek={this.ucKofteliSecenek} price={this.fiyatHesapla()}  malzemeleriSifirla={this.malzemeleriSifirla}/>
                <ItemList items={ingrediends}
                          malzemeEkle={this.malzemeEkle}
                          malzemeCikar={this.malzemeCikar}
                          selectedIngredients={this.state.ingredients}
                />
            </div>
        );
    }
}
export default App;
