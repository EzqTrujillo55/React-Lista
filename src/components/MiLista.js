import React from 'react';

class MiLista extends React.Component{
state= {
    arr:[]
}

    async componentWillMount(){
        const datos = await fetch('https://tupaginaonline.net/api/games/v1');
        const datosJson = await datos.json();
        console.log(datosJson);
        this.setState({arr:datosJson});  
    }

    render(){
        return(
            this.state.arr.map((item,index)=>(
              <p>{item.nombre}</p>
            ))
        )
    }
}



export default MiLista;