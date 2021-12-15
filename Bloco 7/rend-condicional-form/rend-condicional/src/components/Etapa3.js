import React from 'react'
import styled from 'styled-components'


class Etapa3 extends React.Component {
  render(){
    return(
      <div>
      <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <form>
        <div>
            <label>5. Por que você não terminou um curso de graduação?</label>
            <input type="text"/>
        </div>
        <div>
            <label>6. Qual a instituição de ensino?</label>
            <input type="text"/>
        </div>
        </form>
        </div>
    )
    
  }
}
  
  export default Etapa3;