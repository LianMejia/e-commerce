import React from 'react';

class AddProduct extends React.Component{
    render(){
        return(
            <section>
                <div>
                    <form>
                        <input type="text" name="id" placeholder="id" />
                        <input type="text" name="nombre" placeholder="nombre" />
                        <input type="text" name="apellido" placeholder="apellido" />
                    </form>
                </div>
            </section>
        )
    }
}

export default AddProduct;