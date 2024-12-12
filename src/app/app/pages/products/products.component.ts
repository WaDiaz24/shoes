import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {
      "id": 1,
      "name": "Zapato Deportivo 1",
      "description": "Ideal para correr y entrenar.",
      "image": "https://i.pinimg.com/736x/c8/4a/2e/c84a2e86f96ad18e0454bdf042689ee1.jpg"
    },
    {
      "id": 2,
      "name": "Zapato Deportivo 2",
      "description": "Comodidad y estilo garantizados.",
      "image": "https://i.pinimg.com/474x/60/5b/06/605b06ee28475d4cbf47b287ebeb42a5.jpg"
    },
    {
      "id": 3,
      "name": "Zapato Deportivo 3",
      "description": "Perfectos para tu día a día.",
      "image": "https://leaked.cl/store/8787-medium_default/zapatillas-nike-dunk-low-laser-blue.jpg"
    },
    {
      "id": 4,
      "name": "Zapato Deportivo 4",
      "description": "Ligero y resistente.",
      "image": "https://standshop.com.co/wp-content/uploads/2023/07/418d082e-0094-49e0-bcf9-289df47189ef.jpg"
    },
    {
      "id": 5,
      "name": "Zapato Deportivo 5",
      "description": "Estilo casual para todo momento.",
      "image": "https://i0.wp.com/templosneakers.com/wp-content/uploads/2024/05/NIKE-SB-DUNK-AZUL-CELESTE.jpg?fit=600%2C600&ssl=1"
    },
    {
      "id": 6,
      "name": "Zapato Deportivo 6",
      "description": "Diseño ergonómico y cómodo.",
      "image": "https://i5.walmartimages.com/asr/f3c2829b-e24a-499a-8745-3c4d2957229c.182820aaaf9a98b8ae97599186761ac2.jpeg"
    },
    {
      "id": 7,
      "name": "Zapato Deportivo 7",
      "description": "Material resistente al agua.",
      "image": "https://chilangoskate.com/tienda/30146-large_default/tenis-nike-sb-dunk-low-pro-black-white.jpg"
    },
    {
      "id": 8,
      "name": "Zapato Deportivo 8",
      "description": "Estilo moderno y elegante.",
      "image": "https://unitedstorecolombia.com/cdn/shop/files/PhotoRoom_20231025_142313.jpg?v=1733855515&width=1946"
    },
    {
      "id": 9,
      "name": "Zapato Deportivo 9",
      "description": "Perfectos para todas las estaciones.",
      "image": "https://www.basketballemotion.com/imagesarticulos/226570/grandes/zapatilla-nike-dunk-low-midnight-navy-lt-smoke-grey-summit-white-0.webp"
    }
  ];

  constructor(private router: Router) { }

  goToCheckout(product: any) {
    this.router.navigate(['/purchase'], { state: {product} });
  }
}
