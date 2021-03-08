import React from 'react';
/* import ApiReact from '../ApiReact'; */

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

    state = {
        data: []
    }

    async componentDidMount(){
        await this.fetchData()
    }

    fetchData = async () => {
        let res = await fetch('http://localhost:3002/users');
        let data = await res.json();
        this.setState({
            data
        })
        console.log(data)
    }

    render(){
        /* if(this.state.loading === true){
            return 'Loading...'
        }; */

        return(
            <section>
                <h1>Product</h1>
                <ul>
                    {this.state.data.map((demo) => {
                        return(
                            <li key={demo.id}>
                                <p>{demo.id}</p>
                                <p>{demo.nombre}</p>
                            </li>
                        )
                    })}
                </ul>
                {/* <div>
                    <ul>
                        {this.pruebaProducts.data.map((demo) => {
                            return(
                                <li>
                                    <p>{demo.id}</p>
                                    <p>{demo.nombre}</p>
                                    <p>{demo.apellido}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <table>
                        {this.pruebaProducts.data.map((demo) => {
                            return(
                                <tr>
                                    <td>{demo.id}</td>
                                    <td>{demo.nombre}</td>
                                    <td>{demo.apellido}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div> */}
            </section>
        );
    }
}

export default Product;