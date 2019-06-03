import React, { Component } from 'react'
import { getList, addItem, deleteItem, updateItem } from './ListFunctions'

class List extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            nome: '',
            sobrenome:'',
            endereco:'',
            cargo: '',
            arttitle: '',
            artbody: '',
            editDisabled: false,
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getAll()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState(
                {
                    nome: '',
                    sobrenome: '',
                    endereco: '',
                    cargo: '',
                    items: [...data]
                },
                () => {
                    console.log(this.state.items)
                }
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addItem(
            this.state.nome, 
            this.state.sobrenome, 
            this.state.endereco, 
            this.state.cargo).
            then(() => {
                this.getAll()
            })
            this.setState({
            nome: '',
            sobrenome: '',
            endereco: '',
            cargo: ''
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateItem(
            this.state.nome, 
            this.state.sobrenome, 
            this.state.endereco, 
            this.state.cargo, 
            this.state.id).
            then(() => {
                this.getAll()
            })
            this.setState({
            editDisabled: ''
        })
    }

    onEdit = (itemid, e) => {
        e.preventDefault()

        var data = [...this.state.items]
        data.forEach((item, index) => {
            if (item.id === itemid) {
                this.setState({
                    id: item.id,
                    nome: item.nome,
                    sobrenome: item.sobrenome,
                    endereco: item.endereco,
                    cargo: item.cargo,
                    editDisabled: true
                })
            }
        })
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.items]
        data.filter(function(item, index) {
            if (item.id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })
    }

    render() {
        return (
            <div className="col-md-12">
                < form noValidate onSubmit = {
                    this.onSubmit
                } >
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"
                                    value={this.state.nome || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                        </div>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="sobrenome"
                                    name="sobrenome"
                                    value={this.state.sobrenome || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                        </div>
                        <label htmlFor="endereco">Endereço</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="endereco"
                                    name="endereco"
                                    value={this.state.endereco || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                        </div>
                        <label htmlFor="cargo">Cargo</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cargo"
                                    name="cargo"
                                    value={this.state.cargo || ''}
                                    onChange={this.onChange.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                    {!this.state.editDisabled ? (
                        <button
                            type="submit"
                            onClick={this.onSubmit.bind(this)}
                            className="btn btn-success btn-block"
                        >
                            Enviar
                        </button>
                    ) : (
                        ''
                    )}
                    {this.state.editDisabled ? (
                        <button
                            type="submit"
                            onClick={this.onUpdate.bind(this)}
                            className="btn btn-primary btn-block"
                        >
                            Atualizar
                        </button>
                    ) : (
                        ''
                    )}
                </form>
                <table className="table">
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={index}>
                                <td className="text-left">{item.nome}</td>
                                <td className="text-left">{item.sobrenome}</td>
                                <td className="text-left">{item.endereco}</td>
                                <td className="text-left">{item.cargo}</td>
                                <td className="text-right">
                                    <button
                                        href=""
                                        className="btn btn-info mr-1"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onEdit.bind(
                                            this,
                                            item.id
                                        )}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        href=""
                                        className="btn btn-danger"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onDelete.bind(
                                            this,
                                            item.id
                                        )}
                                    >
                                        Apagar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List