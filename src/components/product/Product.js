
import React from 'react';
import './Product.css'
import abrigo from '../../assets/abrigo.jpg';
/* import ApiReact from '../ApiReact'; */

const url = "http://localhost:3002/products";
class Product extends React.Component{
    //Inicialisamos el estado
    /* state = {
        loading: true,
        error: null,
        data: undefined
    }

    pruebaProducts = {
        data: [
            {
                id: 1,
                nombre: "Lian",
                apellido: "Mejia",
            },
            {
                id: 2,
                nombre: "Roberto",
                apellido: "Gutierrez",
            }
        ]
    }

    //Empezar peticion a API
    componentDidMount() {
        this.fetchData();
    };

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        //Llamada API
        try{
            const data = await ApiReact.badges.list();
            this.setState({ loading: false, data: data })
            console.log("Hola")
        }catch(error){
            this.setState({ loading: false, error: error })
        }
    }; */

    /* 
    nombre producto
    descripcion producto
    precio producto
    talla producto
    cantidad del producto
    Imagen producto
    */

    state = {
        data: []
    }

    async componentDidMount(){
        await this.fetchData()
    }

    fetchData = async () => {
        let res = await fetch(url);
        let data = await res.json();
        this.setState({
            data
        })
        console.log(data)
    }

    handleSubmit = () => {
        return(
            console.log("Okey")
        )
    }

    render(){

        return(
                <div className="cajaProducts">
                    <div className="subCajaProducts">
                            {this.state.data.map((demo) => {
                                return(
                                    <ul key={demo.id}>
                                    <li onClick={this.handleSubmit}>
                                        <img src={abrigo} alt="abrigo"/>
                                        <p className="parrafoNombre">{demo.nombre}</p>
                                        <p>${demo.precio}.00</p>
                                    </li>
                                    </ul>
                        )
                        })}
                        
                    </div>
                </div>
        );
    }
}

export default Product;