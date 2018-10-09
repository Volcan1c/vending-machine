import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  mockUpData: Array<Product> = [
    {
      name: "Cheese",
      quantity: 5,
      price: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/41Ip5NBRyEL._SX355_.jpg",
      description: "Yellow with holes",
      category: ["food", "all"]
    },{
      name: "Meat",
      quantity: 7,
      price: 10,
      image: "https://www.comidaereceitas.com.br/images/stories/2013/10/steack_chicago.jpg",
      description: "Red and tasty",
      category: ["food", "all"]
    },{
      name: "Lettuce",
      quantity: 9,
      price: 1,
      image: "https://www.highmowingseeds.com/pub/media/catalog/product/cache/image/675x675/e9c3970ab036de70892d86c6d221abfe/2/6/2606.jpg",
      description: "Green and healthy",
      category: ["food", "all"]
    },{
      name: "Egg",
      quantity: 13,
      price: 1,
      image: "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_900x675/public/field/image/sunny-side-up-eggs-hero.jpg?itok=5EoRIqk3",
      description: "Protein ball",
      category: ["food", "all"]
    },{
      name: "Mayonese",
      quantity: 7,
      price: 2,
      image: "https://www.fifteenspatulas.com/wp-content/uploads/2018/03/Homemade-Mayonnaise-Fifteen-Spatulas-2-640x427.jpg",
      description: "Necessary ingredient",
      category: ["food", "all"]
    },{
      name: "Coca-cola",
      quantity: 5,
      price: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpHA3aPWv3NgSJvmTecm1DSLqg4hWVJoyVkZAaYprlhy3zNrz9g",
      description: "Black gold",
      category: ["drink", "all"]
    },{
      name: "Sprite",
      quantity: 5,
      price: 2,
      image: "https://polarmart.com.sg/wp-content/uploads/2018/01/sprite-canned.png",
      description: "Other name for lemonade",
      category: ["drink", "all"]
    }
  ]

  filterByCategory(category) {
    return this.mockUpData.filter(item => item.category.includes(category));
  }

  constructor() { }
}
