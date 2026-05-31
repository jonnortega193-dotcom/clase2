import React,{Component} from "react";

export default class Perfil extends Component {
  render() {
    return <h3>Usuario: {this.props.nombre}</h3>;
  }
}