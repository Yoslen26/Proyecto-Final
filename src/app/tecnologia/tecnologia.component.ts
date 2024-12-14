import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [],
  templateUrl: './tecnologia.component.html',
  styleUrl: './tecnologia.component.css'
})
export class TecnologiaComponent {
  contadorCarrito: number = 0; // Contador inicializado en 0

  constructor() {
    // Recuperar el contador del carrito desde sessionStorage al cargar el componente
    const savedCount = sessionStorage.getItem("contadorCarrito");
    if (savedCount) {
      this.contadorCarrito = parseInt(savedCount, 10);
    }
  }

  // Método para manejar el evento de agregar producto al carrito
  notificar(): void {
    const preguntar: boolean = confirm("¿Desea agregar este producto?");
    if (preguntar) {
      this.contadorCarrito++; // Incrementar el contador
      sessionStorage.setItem("contadorCarrito", this.contadorCarrito.toString()); // Guardar en sessionStorage
      alert("Se ha agregado el producto al carrito");
    } else {
      alert("El producto no se ha agregado");
    }
  }
}
