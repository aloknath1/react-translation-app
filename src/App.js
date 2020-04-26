import React, {Component} from 'react';
import './App.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import de from './lang/de';


counterpart.registerTranslations('en',en);
counterpart.registerTranslations('de',de);

counterpart.setLocale('en');

const Link = (props) => {
  return (
      <Translate 
        component="a"
        content={props.content}
        href="https://www.google.com/"
        target="_blank"
      />
    );
}
class App extends Component {
 state = {
   lang: 'en'
 }; 
  onLangChange = (e) => {
    e.preventDefault();
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }  

  render(){
    const link = <Link content="link" />;
    
    const placeholder = counterpart.translate('placeholder');
  return (
    <div className="App">      
      <Translate content="lang" component="label" className="label" />
      <select value={this.state.lang} onChange={this.onLangChange}>
        <option value="en">en</option>
        <option value="de">de</option>
      </select>
      <Translate content="title" component="h1" className="title" />
      <Translate content="copy.p1" component="p" unsafe={true} />     
      <Translate content="copy.p2" component="p" with={{ link }} /> 
      <Translate component="input" type="text" attributes={{placeholder: 'placeholder'}} /> 
    </div>
  );
  }
}

export default App;
