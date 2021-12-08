import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt="Admin"
                class="rounded-circle p-1 bg-primary"
                width="110"
              />
              <div class="mt-3">
                <h4>Juan Molina</h4>
                <p class="text-muted font-size-sm">Usuario Lider</p>
                <p class="text-secondary mb-1">Número de proyectos: 20</p>
                <p class="text-secondary mb-1">Completados: 12</p>
                <p class="text-secondary mb-1">Iniciados: 8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
