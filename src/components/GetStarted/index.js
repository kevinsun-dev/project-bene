import React, { Component } from 'react';

class GetStarted extends Component {
      render() {
        let body = '<html> <head> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/eyDbQByc"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> <button> Get Matched! </button> </body> </html>';
        return(
          <div>
            <div className="userForm" dangerouslySetInnerHTML={{__html:body}} />
          </div>
        )
      }
}

export default GetStarted;