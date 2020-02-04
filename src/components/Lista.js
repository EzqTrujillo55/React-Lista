import React from 'react';
import { List, Typography } from 'antd';
import Info from './Info';



class Lista extends React.Component{
    
    state={
        elt: 0 
    }
    
    render(){
        const data = this.props.lista.map((item,index)=>[
            <h4>{index+1}.{item.titulo}</h4>
        ])
        
        return(
            <div>
            <List
            size="small"
            header={<h3>Lista de tareas</h3>}
            bordered
            dataSource={data}
            renderItem={item =><List.Item>{item} <button onClick={this.mostrar}>Ver detalle</button></List.Item>}
            />
            
            </div>
            
        )
    }
  
}

export default Lista; 