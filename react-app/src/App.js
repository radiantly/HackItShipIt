import React, { useState } from 'react';
import ReactGlobe from 'react-globe';

import markers from './markers';
import './App.css';

import img1 from './assets/img1.jpeg';

function getTooltipContent(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

function App() {
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: 'CLICK',
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(getTooltipContent(marker));
  }
  function onDefocus(previousCoordinates, event) {
    setEvent({
      type: 'DEFOCUS',
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(null);
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
      {details && (
        <>
        <div
          style={{
            background: 'rgba(0,0,0,0.6)',
            fontFamily: 'Chelsea Market',
            position: 'absolute',
            fontSize: 20,
            top: 20,
            right: 20,
            width: 300,
            padding: 12,
            color: 'white',
            borderRadius: 20
          }}>
          <button style={{
            background: 'rgba(20,20,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            top: 20,
            right: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 0
          }}>BERMUDA TRASHANGLE</button> 
          <br />
          <p style={{textAlign: 'center'}}>Bermuda Trashangle was known for swallowing everything that it encountered, until it encoutered its mightiest enemy : PLASTIC!</p>
          <p style={{textAlign: 'center'}}>Prove your worth to help Bermuda trashangle become the beautiful and mysterious 'Triangle' it once was!</p>
          <button style={{
            background: 'rgba(20,255,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          }}>GAME ON!</button> 
          <button style={{
            background: 'rgba(47,96,235,0.9)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            width: '100%',
            padding: 12,
            marginTop: 10,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          }}>GO BACK</button> 
          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
        </div>

        <div
          style={{
            background: 'rgba(0,0,0,0.6)',
            fontFamily: 'Chelsea Market',
            position: 'absolute',
            fontSize: 20,
            top: 20,
            left: 20,
            width: 450,
            padding: 12,
            color: 'white',
            borderRadius: 20
          }}>
          <button style={{
            background: 'rgba(20,20,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            top: 20,
            right: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 0
          }}>Some facts you ought to know!</button> 
          <br />
          <p style={{textAlign: 'center'}}>Plastic pollution is the most widespread problem affecting the marine environment. It also threatens ocean health, food safety and quality, human health, coastal tourism, and contributes to climate change. </p>
          <img src={img1} style={{margin: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
        </div>
        </>
      )}
    </div>
  );
}

export default App;
