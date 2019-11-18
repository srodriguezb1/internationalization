import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


let idioma= ()=>{
    console.log(navigator.language||navigator.browserLanguage)
    return navigator.language||navigator.browserLanguage;
}

let messages =() =>{

    if(idioma() ==="es" || idioma()==="es-ES"){
        return localeEsMessages;
    }
    else if(idioma() === "en"){
        return localeEnMessages;
    }
}

ReactDOM.render(
	<IntlProvider locale={idioma()} messages= {messages()}>
		<JobsList idm = {idioma()}/>
	</IntlProvider>, document.getElementById("root")
);