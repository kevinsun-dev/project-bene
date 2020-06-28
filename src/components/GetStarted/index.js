import React, { Component } from 'react';
import './styles.css';

class GetStarted extends Component {
      render() {
        let body = '<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <title>Start Volunteering</title> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/eyDbQByc"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> </body> </html>';
        //let body = '<a class="typeform-share button" href="https://form.typeform.com/to/eyDbQByc" data-mode="popup" data-auto-open=true data-submit-close-delay="0" target="_blank"> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>';
        return(
          <div>
            <div className="userForm" dangerouslySetInnerHTML={{__html:body}} />
          </div>
        )
      }
}

export default GetStarted;