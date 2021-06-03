import React, { Component } from 'react';
import DetalleCliente from '../../Componentes/DetalleCliente';
import './styles.css';

class Cliente extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
            clienteSeleccionado: 0,
            clienteEditar: 0
        };
    }

    componentDidMount() {
        this.recuperarClientes();
    }

    recuperarClientes = async () => {
        const clientes = await fetch('http://localhost:8080/clientes')
            .then(response => response.json());
        this.setState({ clientes });
    }

    restaurarClienteSeleccionado=()=>{
        this.setState({clienteSeleccionado:0});
    }

    activarDesactivarEditar=(index)=>{
        if(this.state.clienteEditar===0){
            this.setState({clienteEditar: index });
        }else{
            this.setState({clienteEditar: 0 });
        }
    }

    render() {
        const { clientes, clienteSeleccionado, clienteEditar } = this.state;
        return (
            <div className="cliente">
                {
                clienteSeleccionado!==0?
                <DetalleCliente cliente={clientes[clienteSeleccionado-1]} volverAccion={this.restaurarClienteSeleccionado}/>
                    :
                <table>
                    <thead>
                        <tr>
                            <th>Identificacion</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Fecha de nacimiento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.length===0&&<tr><td colspan="4">Sin clientes</td></tr>}
                        {clientes.map((cliente, index) =>
                            <tr 
                                key={index} 
                                style={{background: index%2!==0?"#e8f5ff":"white"}}
                            >
                                <td onClick={()=>this.setState({clienteSeleccionado: index+1 })} > 
                                    {clienteEditar!==0&&clienteEditar-1===index?
                                        <input type="number" defaultValue={cliente.identificacion}/>
                                        :
                                        cliente.identificacion
                                    }
                                </td>
                                <td onClick={()=>this.setState({clienteSeleccionado: index+1 })} >
                                    {clienteEditar!==0&&clienteEditar-1===index?
                                        <input defaultValue={cliente.nombre}/>
                                        :
                                        cliente.nombre
                                    }
                                </td>
                                <td onClick={()=>this.setState({clienteSeleccionado: index+1 })} >
                                    {clienteEditar!==0&&clienteEditar-1===index?
                                        <input type="number" defaultValue={cliente.edad}/>
                                        :
                                        cliente.edad
                                    }
                                </td>
                                <td onClick={()=>this.setState({clienteSeleccionado: index+1 })} >
                                    {clienteEditar!==0&&clienteEditar-1===index?
                                        <input defaultValue={cliente.fechaNacimiento}/>
                                        :
                                        cliente.fechaNacimiento
                                    }
                                </td>
                                <td>
                                    <button onClick={()=>this.activarDesactivarEditar(index+1)}>{clienteEditar!==0&&clienteEditar-1===index?"Cancelar":"Editar"}</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                }
            </div>
        );
    }
}

export default Cliente;