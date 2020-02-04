import React from 'react';
import { Input, Button} from 'antd';
import { DatePicker } from 'antd';
import Lista from './Lista';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class Formulario extends React.Component{
    state={
        titulo: '',
        descripcion: '',
        fechaCumplir: '',
        tareas:[]
    }

    render(){
        return(
            <div>
            <Input placeholder="Título" onChange={(e)=>this.handleChangeInput(e, 'titulo')} />
            <Input placeholder="Descripción" onChange={(e)=>this.handleChangeInput(e, 'descripcion')}/>
            <DatePicker onChange={this.onChange} /> <br></br>
            <Button onClick={this.handleTarea}>Agregar</Button>
            <br></br>
            <br></br>
            <Lista lista={this.state.tareas}/> 
            </div>
        )
    }

    handleChangeInput = ($e, input) => {
        const newState = {};
        newState[input] = $e.target.value;
        this.setState(newState);
    };

    handleTarea = () => {
        this.setState((currentState) => ({
                tareas: [
                    ...currentState.tareas,
                    {
                        titulo: currentState.titulo,
                        descripcion: currentState.descripcion,
                        fechaCumplir: currentState.fechaCumplir
                    }
                ]
            })
        )
    };
    onChange=(date, dateString) =>{
    this.state.fechaCumplir= dateString; 
  }
}



export default Formulario;