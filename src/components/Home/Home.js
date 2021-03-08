import React from 'react';
import Navbar from './../Navbar';
import './Home.css';
class Home extends React.Component{
    /* obtenerDatos = () => {
        var name = document.getElementById('nombre').value;
        var lastName = document.getElementById('apellido').value;
        var resultado = name + ' ' +  lastName;
        document.getElementById('result').value = resultado;
        console.log(resultado);
    } */
    state = {
        firstName: '',
        lastName: '',
        email: ''
    }
    handleChange = e => {
        /* console.log({ name: e.target.name, value: e.target.value }); */
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleClick = () => {
        console.log("Mensaje enviado")
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('Estas detenido');
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <Navbar />
                <form className="Formulario" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" 
                name="firstName" placeholder="Nombre" value={this.state.firstName} /><br/>
                <input onChange={this.handleChange} type="text" 
                name="lastName" placeholder="apellido" value={this.state.lastName}/><br/>
                <input onChange={this.handleChange} type="email" 
                name="email" placeholder="Email" value={this.state.email} /><br/>
                {/* <input type="text" id="result"/><br/> */}
                <button type="submit" onClick={this.handleClick} 
                className="btn btn-primary" >Enviar</button>
            </form>
            <p>{this.state.firstName}</p>
            <p>{this.state.lastName}</p>
            <p>{this.state.email}</p>
            </div>
        )
    }
}

export default Home;