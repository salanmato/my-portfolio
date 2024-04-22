import { Link } from 'react-router-dom';
import returnArrowSVG from './../../images/return-arrow.svg'
import filtrosArrowSVG from './../../images/filtros-arrow.svg'
import './index.css'
import { useState } from 'react';
import filtrosButton from '../../images/filtros-button.svg'
import Items from './Items'

const Library = () => {
  const [hideForm, setHideForm] = useState(false)
  const [itemsPage, setItemsPage] = useState(false)
  const [arrFilters, setArrFilters] = useState(['Em Andamento', 'Concluído', 'JavaScript', 'React.JS', 'React Native', 'CSS', 'HTML', 'UI'])

  const [emAndamentoChecked, setEmAndamentoChecked] = useState(false);
  const [concluidoChecked, setConcluidoChecked] = useState(false);

  const [javascriptChecked, setJavaScriptChecked] = useState(false);
  const [reactJSChecked, setReactJsChecked] = useState(false);
  const [reactNativeChecked, setReactNativeChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [HTMLChecked, setHTMLChecked] = useState(false);
  const [UIChecked, setUIChecked] = useState(false);

  const getFormsInfo = (e) => {
    e.preventDefault()
    let selectedFilters = []
    setArrFilters([])
    if (!emAndamentoChecked && !concluidoChecked && !javascriptChecked && !reactJSChecked && !reactNativeChecked && !checkboxChecked && !HTMLChecked && !UIChecked) selectedFilters.push("Em Andamento", "Concluído", "JavaScript", "React.JS", "React Native", "CSS", "HTML", "UI")

    if (emAndamentoChecked) selectedFilters.push("Em Andamento")
    if (concluidoChecked) selectedFilters.push("Concluído")

    if (javascriptChecked) selectedFilters.push("JavaScript")
    if (reactJSChecked) selectedFilters.push("React.JS")
    if (reactNativeChecked) selectedFilters.push("React Native")
    if (checkboxChecked) selectedFilters.push("CSS")
    if (HTMLChecked) selectedFilters.push("HTML")
    if (UIChecked) selectedFilters.push("UI")

    setArrFilters(selectedFilters)
    console.log(arrFilters)

    setItemsPage(true)
  }

  const formVisible = () => {
    setHideForm(!hideForm)

  }

  return (
    <div >
      <Link to="/"><img className="returnArrow" src={returnArrowSVG} alt="seta apontando para a esquerda"></img></Link>
      <div className='library-container'>
        <div className='library-title-div'>
          <div onClick={formVisible} className='library-title-container'>
          <img className={`returnArrow ${hideForm ? '' : 'show-form'}`} src={filtrosArrowSVG} alt="seta apontando para a direita"></img>
            <h1 className='library-title'>FILTROS</h1>
          </div>
          <div className='form-container'>
            <form id="form-filtros" onSubmit={getFormsInfo} className={`${hideForm ? '' : 'formHidden'}`}>
                <div className='form-status'>
                  <h4>Status</h4>
                  <div>
                    <input type="checkbox" id="emAndamento" onChange={(event) => setEmAndamentoChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="em-andamento">Em Andamento</label>
                  </div>
                  <div>
                    <input type="checkbox" id='concluido' onChange={(event) => setConcluidoChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="concluido">Concluído</label>
                  </div>
                </div>

                <div className='form-tags'>
                  <h4>Tags</h4>
                  <div>
                    <input type="checkbox" id='javascript' onChange={(event) => setJavaScriptChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="javascript">JavaScript</label>
                  </div>
                  <div>
                    <input type="checkbox" id='reactjs' onChange={(event) => setReactJsChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="reactjs">React.JS</label>
                  </div>
                  <div>
                    <input type="checkbox" id='reactnative' onChange={(event) => setReactNativeChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="reactnative">React Native</label>
                  </div>
                  <div>
                    <input type="checkbox" id='css' onChange={(event) => setCheckboxChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="css">CSS</label>
                  </div>
                  <div>
                    <input type="checkbox" id='html' onChange={(event) => setHTMLChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="html">HTML</label>
                  </div>
                  <div>
                    <input type="checkbox" id='ui' onChange={(event) => setUIChecked(event.target.checked)} />
                    <label htmlFor="checkbox" id="ui">UI</label>
                  </div>
                </div>
              <button type="submit" >
                <img src={filtrosButton} alt="submit button" className="submit-button-svg" ></img>
              </button>
            </form>
          </div>
        </div>


        {<Items arrFilters={arrFilters}></Items>}
      </div>
    </div>
  );
};

export default Library;