import React, {Component} from 'react'
import Select from 'react-select'
import styled from 'styled-components'



class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <form>
                <label>1. Qual o seu nome?</label>
                <input type="text"/>

                <label>2. Qual sua idade?</label>
                <input type="text"/>

                <label>3. Qual seu email?</label>
                <input type="text"/>

                <label>4. Qual a sua escolaridade?</label>
                <select>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
                    
                </form>

                <button onClick>Próxima etapa</button>
            </div>
        )
    
      }

}
  
  export default Etapa1