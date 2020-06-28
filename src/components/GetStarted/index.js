import React, { Component } from 'react';

function typeformFunc () { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } }

class GetStarted extends Component {

    render(){
        return (
            <div>
            <div className="typeform-widget" dataUrl="https://form.typeform.com/to/eyDbQByc" dataTransparency="100" dataHideHeaders="true" dataHideFooter="true"></div> 
            </div>
        )
    }
}

export default GetStarted;