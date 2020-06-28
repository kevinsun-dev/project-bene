import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed';

class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.el = null;
      }
      componentDidMount() {
        if (this.el) {
          typeformEmbed.makeWidget(this.el, "https://lurachel18.typeform.com/to/eyDbQByc", {
            hideFooter: true,
            hideHeaders: true,
            opacity: 0
          });
        }
      }
      render() {
        return (
          <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
        )
      }
}

export default GetStarted;