import React, { useState, useEffect } from 'react';
import logo from './bene-logo-extended.png';
import './TimeSelect.css';
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardStatus,
  DocumentCardImage
} from 'office-ui-fabric-react/lib/DocumentCard';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

function TimeSelect() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const coffeeBreakIcon: IIconProps = {
    iconName: 'CoffeeScript',
    styles: { root: { color: '#FC7B21', fontSize: '80px', width: '80px', height: '80px' } },
  };

  const spareTimeIcon: IIconProps = {
    iconName: 'DateTime2',
    styles: { root: { color: '#FC7B21', fontSize: '80px', width: '80px', height: '80px' } },
  };

  const freeHourIcon: IIconProps = {
    iconName: 'DateTime2',
    styles: { root: { color: '#FC7B21', fontSize: '80px', width: '80px', height: '80px' } },
  };

  const dayOffIcon: IIconProps = {
    iconName: 'Vacation',
    styles: { root: { color: '#FC7B21', fontSize: '80px', width: '80px', height: '80px' } },
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="ms-Grid" dir="ltr">
          <div class="ms-Grid-row">
            <div class="ms-Grid-col ms-sm3">
              <DocumentCard
                onClickHref="/getstarted"
              >
                <DocumentCardImage height={120} imageFit={ImageFit.cover} iconProps={coffeeBreakIcon} />
                <DocumentCardDetails>
                  <DocumentCardTitle title="Coffee Break" shouldTruncate />
                  <DocumentCardStatus statusIcon="recent" status=" ~ 15 minutes" />
                </DocumentCardDetails>
              </DocumentCard>
            </div>
            <div class="ms-Grid-col ms-sm3">
              <DocumentCard
                onClickHref="/getstarted"
              >
                <DocumentCardImage height={120} imageFit={ImageFit.cover} iconProps={spareTimeIcon} />
                <DocumentCardDetails>
                  <DocumentCardTitle title="Spare Time" shouldTruncate />
                  <DocumentCardStatus statusIcon="recent" status=" ~ 30 minutes" />
                </DocumentCardDetails>
              </DocumentCard>
            </div>
            <div class="ms-Grid-col ms-sm3">
              <DocumentCard
                onClickHref="/getstarted"
              >
                <DocumentCardImage height={120} imageFit={ImageFit.cover} iconProps={freeHourIcon} />
                <DocumentCardDetails>
                  <DocumentCardTitle title="Free Time" shouldTruncate />
                  <DocumentCardStatus statusIcon="recent" status=" ~ 1 hour" />
                </DocumentCardDetails>
              </DocumentCard>
            </div>
            <div class="ms-Grid-col ms-sm3">
              <DocumentCard
                onClickHref="/getstarted"
              >
                <DocumentCardImage height={120} imageFit={ImageFit.cover} iconProps={dayOffIcon} />
                <DocumentCardDetails>
                  <DocumentCardTitle title="Day Off" shouldTruncate />
                  <DocumentCardStatus statusIcon="recent" status=" ~ 1 day" />
                </DocumentCardDetails>
              </DocumentCard>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default TimeSelect;
