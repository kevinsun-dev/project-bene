import React, {Component} from 'react';
import * as typeformEmbed from '@typeform/embed';

class FormView extends Component{
    componentDidMount(){
        var el = document.getElementById("embedded-typeform");
        typeformEmbed.makeWidget(el, "https://lurachel18.typeform.com/to/eyDbQByc", {
            hideFooter: true,
            hideHeaders: true,
            opacity: 0
        });
    }

    render(){

        return (

                <div id="embedded-typeform"></div>

        )
    }
}

export default FormView;