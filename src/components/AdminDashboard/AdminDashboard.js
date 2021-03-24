import React from 'react';
import axios from 'axios';

const url2 = "http://localhost:3002/products/add"; 
class AdminDashboard extends React.Component{
    state = {
            id: '',
            nombre: '',
            descripcion: '',
    }

    peticionPost= async ()=>{
        await axios.post(url2, this.state).then(response=>{
        }).catch(error=>{
            console.log(error.message)
        })
    }

    handleChange = async e => {
        
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    };

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state);
    };

    render(){
        return(
            <div className="formData">
                    <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} type="text" name="id" placeholder='id' value={this.state.id} /><br/>
                    <input onChange={this.handleChange} type="text" name="nombre" placeholder='nombre' value={this.state.nombre} /><br/>
                    <input onChange={this.handleChange} type="text" name="descripcion" placeholder='descripcion' value={this.state.descripcion} /><br/>
                    <button type="submit" onClick={this.peticionPost} >Aceptar</button>
                    </form>
                    <p>{this.state.nombre}</p>
                    </div>
        )
    }
}

export default AdminDashboard;