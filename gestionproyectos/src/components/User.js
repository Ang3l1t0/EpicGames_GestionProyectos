import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt="Admin"
                className="rounded-circle p-1 bg-primary"
                width="110"
              />
              <div className="mt-3">
                <h4>Juan Molina</h4>
                <p className="text-muted font-size-sm">Usuario Lider</p>
                <p className="text-secondary mb-1">Número de proyectos: 20</p>
                <p className="text-secondary mb-1">Completados: 12</p>
                <p className="text-secondary mb-1">Iniciados: 8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
