import React, { Component } from "react";
import { Link } from "react-router-dom";


class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="d-flex align-items-center mb-3 titulo">
            Projecto de Elaboración de Juego de Fortnite
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
          <p>Fecha de inicio: 10/11/2021</p>
          <p>Status: Iniciado</p>
          <Link to="/project" className="stretched-link">
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
