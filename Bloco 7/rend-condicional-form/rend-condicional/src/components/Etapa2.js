import React from 'react'
import styled from 'styled-components'


class Etapa2 extends React.Component {
  render(){
    return (
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <form>
        <div>
            <label>5. Qual o curso?</label>
            <input type="text"/>
        </div>
        <div>
            <label>6. Qual a instituição de ensino?</label>
            <select>
              <option value = "Curso técnico">Curso técnico</option>
              <option value = "Curso de inglês">Curso de inglês</option>
              <option value = "Não fiz curso complementar">Não fiz curso complementar</option>
            </select>
        </div>
        </form>
      </div>
    )
  }
  
}
  
  export default Etapa2;