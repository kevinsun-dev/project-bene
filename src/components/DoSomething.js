import React, { Component } from 'react';
import './DoSomething.css';
import logo from './../bene-logo-extended.png';
import './TimeSelect.css';
import events from '../data.json';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import {
  ActionButton,
  IButtonStyles,
  Icon,
  IIconStyles,
  Image,
  Persona,
  Stack,
  IStackTokens,
  Text,
  ITextStyles,
} from 'office-ui-fabric-react';

const alertClicked = (): void => {
    alert('Clicked');
};

const siteTextStyles: ITextStyles = {
root: {
    color: '#025F52',
    fontWeight: FontWeights.semibold,
},
};
const descriptionTextStyles: ITextStyles = {
root: {
    color: '#333333',
    fontWeight: FontWeights.semibold,
},
};
const helpfulTextStyles: ITextStyles = {
root: {
    color: '#333333',
    fontWeight: FontWeights.regular,
},
};
const iconStyles: IIconStyles = {
root: {
    color: '#0078D4',
    fontSize: 16,
    fontWeight: FontWeights.regular,
},
};
const footerCardSectionStyles: ICardSectionStyles = {
root: {
    borderTop: '1px solid #F3F2F1',
},
};
const backgroundImageCardSectionStyles: ICardSectionStyles = {
root: {
    backgroundImage: 'url(https://placehold.it/256x144)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: 144,
},
};
const dateTextStyles: ITextStyles = {
root: {
    color: '#505050',
    fontWeight: 600,
},
};
const subduedTextStyles: ITextStyles = {
root: {
    color: '#666666',
},
};
const actionButtonStyles: IButtonStyles = {
root: {
    border: 'none',
    color: '#333333',
    height: 'auto',
    minHeight: 0,
    minWidth: 0,
    padding: 0,

    selectors: {
    ':hover': {
        color: '#0078D4',
    },
    },
},
textContainer: {
    fontSize: 12,
    fontWeight: FontWeights.semibold,
},
};

const sectionStackTokens: IStackTokens = { childrenGap: 30 };
const cardTokens: ICardTokens = { childrenMargin: 12 };
const footerCardSectionTokens: ICardSectionTokens = { padding: '12px 0px 0px' };
const backgroundImageCardSectionTokens: ICardSectionTokens = { padding: 12 };
const agendaCardSectionTokens: ICardSectionTokens = { childrenGap: 0 };
const attendantsCardSectionTokens: ICardSectionTokens = { childrenGap: 6 };

class DoSomething extends Component {
    constructor(props){
        super(props);
        this.state = {
            events : events
        };
    }
    render() {
        const {events} = this.state;
        var index = 0;
        if (events.length > 3){
            for (index = 0; index < events.length; index++) {
                if (index == 2) {
                    var remaining = events.length - (index + 1)
                    events.splice(index + 1, remaining);
                }
            }
        }
        return(
            <div className="App-header">
            <img src={logo} className="App-logo-DS" alt="logo" />
            <p>Based on your availability these suggestions can help you achieve so much!</p>
            <hr />
            <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row" dir="ltr">
                {
                    events.map((event, i) => ( //TODO: move outside
                        <div className="ms-Grid-col" key={i}>
                        <Card
                        aria-label="Clickable vertical card with image bleeding at the top of the card"
                        //onClick={alertClicked}
                        tokens={cardTokens}
                        style={{ boxShadow: Depths.depth16 }}
                        key ={i}
                        onClick={() => {window.open(event.Website) }}
                        >
                        <Card.Section
                        fill
                        verticalAlign="end"
                        styles={backgroundImageCardSectionStyles}
                        tokens={backgroundImageCardSectionTokens}
                        >
                        </Card.Section>
                        <div className="square">
                            <img src={event.Picture} alt="Image" /> 
                        </div>
                        <Card.Section>
                        <Text variant="small" styles={subduedTextStyles}>
                            {event.Categories.join(", ")}
                        </Text>
                    <Text styles={descriptionTextStyles}>{event.EventHeader}</Text>
                        </Card.Section>
                        <Card.Section tokens={agendaCardSectionTokens}>
                        <Text variant="small" styles={descriptionTextStyles}>
                            {event.EventDuration} minutes
                        </Text>
                        <Text variant="small" styles={subduedTextStyles}>
                            Virtual
                        </Text>
                        </Card.Section>
                        <Card.Item grow={1}>
                        <span />
                        </Card.Item>
                        <Card.Section horizontal tokens={attendantsCardSectionTokens}>
                        <ActionButton text="12 Volunteers" styles={actionButtonStyles} />
                        <ActionButton text="4 New Volunteers" styles={actionButtonStyles} />
                        </Card.Section>
                        <Card.Section horizontal styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
                        <Icon iconName="RedEye" styles={iconStyles} />
                        <Icon iconName="SingleBookmark" styles={iconStyles} />
                        <Stack.Item grow={1}>
                            <span />
                        </Stack.Item>
                        <Icon iconName="MoreVertical" styles={iconStyles} />
                        </Card.Section>
                        </Card>
                        </div>
                    ))
                }
            </div>
            </div>
            </div>
        );
    }
}


export default DoSomething;