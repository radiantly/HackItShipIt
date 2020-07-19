import React, { useState } from 'react';
import ReactGlobe from 'react-globe';
import Modal from 'react-modal';

import Quiz from './quiz/Quiz1'
import markers from './markers';
import './App.css';



import img1 from './assets/img1.jpeg';
import plastic_patch from './assets/plastic_patch.jpg';
import microplastics from './assets/microplastics.jpg';
import albatross from './assets/albatross.jpg';
import plastic_debris from './assets/plastic_debris.jpg';
import bathroom from './assets/bathroom.png';
import bamboo from './assets/bamboo.png';
import reef_safe from './assets/reef_safe.jpg';
import shampoo_bars from './assets/shampoo_bars.jpg';
import clean_seas from './assets/clean_seas.svg';
import nat_geo from './assets/nat_geo.svg';
import plogging from './assets/plogging.jpg';
import ocean_cleanup from './assets/ocean_cleanup.png';

function App() {

  

  function getTooltipContent(marker) {
  
    return `CITY: ${marker.city} (Value: ${marker.value})`;
  }

  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(0);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: 'CLICK',
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(marker.id);
  }

  function onDefocus(previousCoordinates, event) {
    setEvent({
      type: 'DEFOCUS',
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(0);
  }

  function onDeFocus() {
    setEvent({
      type: 'DEFOCUS',
      previousCoordinates: [-16.6084543,143.6005968],
      pointerEventPosition: { x: -16.6084543, y: 143.6005968},
    });
    setDetails(0);
  }

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      borderRadius: 20,
      border : 'none',
    }
  };

  return (
    <div>
    <div>

    <Modal
    isOpen={visible1}
    onRequestClose={()=>setVisible1(false)}
    style={customStyles}
    >
        <Quiz setVisible1={setVisible1}/>
    </Modal>

    <Modal
    isOpen={visible2}
    onRequestClose={()=>setVisible2(false)}
    style={customStyles}
    >
        <Quiz setVisible1={setVisible2}/>
    </Modal>

    <Modal
    isOpen={visible3}
    onRequestClose={()=>setVisible3(false)}
    style={customStyles}
    >
        <Quiz setVisible1={setVisible3}/>
    </Modal>

    <Modal
    isOpen={visible4}
    onRequestClose={()=>setVisible4(false)}
    style={customStyles}
    >
        <Quiz setVisible1={setVisible4}/>
    </Modal>

    <Modal
    isOpen={visible5}
    onRequestClose={()=>setVisible5(false)}
    style={customStyles}
    >
        <Quiz setVisible1={setVisible5}/>
    </Modal>

    </div>
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
        style={{position: 'static'}}
        globeOptions={{
          glowCoefficient: 0.1,
          glowColor: 'turquoise',
          glowPower: 6,
          glowRadiusScale: 0.5,
          enableGlow: true,
        }}
      />

      {details===1 && (
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
          }}>GREAT ACRYLIC REEF</button> 
          <br />
          <p style={{textAlign: 'center'}}>Once home to the rarest marine species in the planet and the serene Great Barrier Reef, the plastic takeover has transformed this area into the GREAT ACRYLIC REEF</p>
          <p style={{textAlign: 'center'}}>Reviving the Great Barrier Reef is the toughest challenge yet, are you ready?</p>
          <button style={{
            background: 'rgba(20,255,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          }}
          onClick={()=>setVisible1(true)}>YES LETS DO IT!</button> 
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
          }}
          onClick={()=>onDeFocus()}>NO, RETREAT</button> 
          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
        </div>

        
      )}

      {details===2 && (
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
          }}>GULF OF NYLON</button> 
          <br />
          <p style={{textAlign: 'center'}}>Reckless plastic use has transformed the Gulf of Mexico into the Gulf of Nylon, and its overflowing with plastic! </p>
          <p style={{textAlign: 'center'}}>Are you ready to take up the challenge to save the oceans from the plastic mayhem?</p>
          <button style={{
            background: 'rgba(20,255,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          }}
          onClick={()=>setVisible1(true)}>YES!</button> 
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
          }}
          onClick={()=>onDeFocus()}>NO!</button> 
          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
        </div>

        
      )}

      {details===3 && (
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
          }}
          onClick={()=>setVisible1(true)}>GAME ON!</button> 
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
          }}
          onClick={()=>onDeFocus()}>GO BACK</button> 
          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
        </div>

        
      )}

      {details===4 && (
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
          }}>BAKELITE PENINSULA</button> 
          <br />
          <p style={{textAlign: 'center'}}>The arabian peninsula long served as the oil reserve of the world. The oil dried up and the plastics started building up. The Bakelite peninsula is its new identity.</p>
          <p style={{textAlign: 'center'}}>Are you ready to restore the peninsula?</p>
          <button style={{
            background: 'rgba(20,255,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          }}
          onClick={()=>setVisible1(true)}>OF COURSE!</button> 
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
          }}
          onClick={()=>onDeFocus()}>CANCEL</button> 
          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
        </div>

        
      )}


      {details===5 && (
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
          }}>PLASTIC LAGOON</button> 
          <br />
          <p style={{textAlign: 'center'}}>The English Channel is now overflowing with plastic. The Plastic Lagoon needs your help!</p>
          <p style={{textAlign: 'center'}}>Are you ready to become the warrior Mother Nature needs?</p>
          <button style={{
            background: 'rgba(20,255,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          }}
          onClick={()=>setVisible1(true)}>YES! LETS GO!</button> 
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
          }}
          onClick={()=>onDeFocus()}>NOPE</button> 
          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
        </div>

        
      )}

      <button style={{height: 30, width: 30, borderRadius: 30, background: 'tomato', margin: 20, border: 'none', fontFamily: 'Chelsea Market', position: 'absolute', fontSize: 20, top: 0, left: 20, color: 'white',}} onClick={() => setPage(1)}>1</button>
      <button style={{height: 30, width: 30, borderRadius: 30, background: 'orange', margin: 20, border: 'none', fontFamily: 'Chelsea Market', position: 'absolute', fontSize: 20, top: 0, left: 70, color: 'white'}} onClick={() => setPage(2)}>2</button>
      <button style={{height: 30, width: 30, borderRadius: 30, background: 'mediumseagreen', margin: 20, border: 'none', fontFamily: 'Chelsea Market', position: 'absolute', fontSize: 20, top: 0, left: 120, color: 'white'}} onClick={() => setPage(3)}>3</button>

      {(page===1) && (
        <div
          style={{
            background: 'rgba(0,0,0,0.6)',
            fontFamily: 'Chelsea Market',
            position: 'absolute',
            fontSize: 20,
            top: 70,
            left: 20,
            width: 450,
            padding: 12,
            color: 'white',
            borderRadius: 20,
            overflow: 'auto',
            height: '90vh'
          }}>
          <button style={{
            background: 'rgba(255,20,20,0.6)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            top: 0,
            right: 20,
            width: '100%',
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 0,
            position:'sticky',
          }}>THE GREAT PACIFIC GARBAGE PATCH</button> 
          <br />
          <p style={{textAlign: 'center',fontSize: 16,}}>The Great Pacific Garbage Patch is a collection of marine debris in the North Pacific Ocean. Also known as the Pacific trash vortex, the garbage patch is actually two distinct collections of debris bounded by the massive North Pacific Subtropical Gyre.</p>
          <img alt="_" src={plastic_patch} style={{marginLeft: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
          <img alt="_" src={img1} style={{marginLeft: 22.5,marginTop: 10, width: '90%', height: 'auto', borderRadius: 10}}></img>
          <p style={{textAlign: 'center',fontSize: 16,}}>MICROPLASTICS<br />Most debris in the Great Pacific Garbage Patch is plastic. Plastic is not biodegradable, meaning it does not disintegrate—it simply breaks into tinier and tinier pieces, known as microplastics. Microplastics of the Great Pacific Garbage Patch can simply make the water look like a cloudy soup.</p>
          <img alt="_" src={microplastics} style={{marginLeft: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
          <p style={{textAlign: 'center',fontSize: 16,}}>PLASTIC DEBRIS<br />Mixed in with microplastics are larger pieces of plastic. Most plastics are refuse from land activities in North American and Asia. Some plastics are accidentally dumped from oceangoing vessels. All the plastics on this page were culled from the Great Pacific Garbage Patch.</p>
          <img alt="_" src={plastic_debris} style={{marginLeft: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
          <p style={{textAlign: 'center',fontSize: 16,}}>The marine debris of the Great Pacific Garbage Patch can devastate marine life in the North Pacific Subtropical Gyre. The stomach contents of this unfortunate albatross include plastic marine debris fed to the chick by its parents.</p>
          <img alt="_" src={albatross} style={{marginLeft: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
          </div>
          )}


          {(page===2) && (
            <div
              style={{
                background: 'rgba(0,0,0,0.6)',
                fontFamily: 'Chelsea Market',
                position: 'absolute',
                fontSize: 20,
                top: 70,
                left: 20,
                width: 450,
                padding: 12,
                color: 'white',
                borderRadius: 20,
                overflow: 'auto',
                height: '90vh'
              }}>
              <button style={{
                background: 'rgba(225,173,1,0.6)',
                fontFamily: 'Chelsea Market',
                fontSize: 20,
                top: 0,
                right: 20,
                width: '100%',
                padding: 12,
                color: 'white',
                borderRadius: 14,
                border: 0,
                position:'sticky',
              }}>WHAT'S YOUR PLASTIC FOOTPRINT?</button> 
              <br />
              <p style={{textAlign: 'center',fontSize: 16,}}>Each year, an estimated 8 million tonnes of plastic end up in the ocean. Did you know that personal care products are a major source of microplastics? They get washed away into the oceans through our bathrooms.</p>
              <img alt="_" src={bathroom} style={{marginLeft: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
              <p style={{textAlign: 'center',fontSize: 16,}}>WHAT CAN YOU DO?<br />Heres a list of actions you can take to decrease your plastic footprint!</p>
              <ul style={{fontSize: 16,}}>
                <li>Switch to bamboo toothbrushes and straws</li>
                <img alt="_" src={bamboo} style={{margin: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
                <li>Try making your own toothpaste using baking soda, coconut oil and essential oils</li>
                <li>Use a shampoo bar instead of shampoo bottles!</li>
                <img alt="_" src={shampoo_bars} style={{margin: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
                <li>Check the ingredients of beauty products for plastics, stop using products with glitter in, and switch to plastic free products. </li>
                <li>Switch to reef-safe sunscreen which contains no plastic ingredients</li>
                <img alt="_" src={reef_safe} style={{margin: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
                <li>You can get a razor to last a lifetime by using a safety razor instead of disposable ones. </li>

              </ul>
              </div>
              )}

              {(page===3) && (
                <div
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    fontFamily: 'Chelsea Market',
                    position: 'absolute',
                    fontSize: 20,
                    top: 70,
                    left: 20,
                    width: 450,
                    padding: 12,
                    color: 'white',
                    borderRadius: 20,
                    overflow: 'auto',
                    height: '90vh'
                  }}>
                  <div style={{position:'sticky',}}>
                  <button style={{
                    background: 'rgba(0,100,0,0.6)',
                    fontFamily: 'Chelsea Market',
                    fontSize: 20,
                    top: 0,
                    right: 20,
                    width: '100%',
                    padding: 12,
                    color: 'white',
                    borderRadius: 14,
                    border: 0,
                    position:'sticky',
                  }}>TAKE THE CLEAN SEAS PLEDGE</button> 
                  </div>
                  <br />
                  <img alt="_" src={clean_seas} style={{margin: 22.5, width: '90%', height: 'auto', borderRadius: 10}}></img>
                  <button style={{
                    background: 'rgba(0,0,100,0.6)',
                    fontFamily: 'Chelsea Market',
                    fontSize: 20,
                    top: 0,
                    right: 20,
                    width: '100%',
                    padding: 12,
                    color: 'white',
                    borderRadius: 14,
                    border: 0,
                    position:'sticky',
                  }}>
                  <a href="https://www.cleanseas.org/pledge" style={{ color: 'white', textDecoration: 'none'}}>MAKE A PLEDGE NOW!</a></button> <br/>
                  <a href="https://www.nationalgeographic.org/encyclopedia/great-pacific-garbage-patch/" style={{ color: 'white', textDecoration: 'none', marginTop: 20, textAlign: 'center'}}><br/>Read more about the upcoming Plastic 'Pandemic' on National Geographic</a>
                  <img alt="_" src={nat_geo} style={{margin: 20, width: '90%', height: 'auto', background: 'white', padding: 10, borderRadius: 10}}></img>
                  <a href="https://www.goplogging.org/welcome" style={{ color: 'white', textDecoration: 'none', marginTop: 20, textAlign: 'center'}}><br/>Start Plogging !</a>
                  <img alt="_" src={plogging} style={{margin: 20, width: '90%', height: 'auto', borderRadius: 10}}></img>
                  <a href="https://www.nationalgeographic.org/encyclopedia/great-pacific-garbage-patch/" style={{ color: 'white', textDecoration: 'none', marginTop: 20, textAlign: 'center'}}><br/>Read about the OceanCleanup movement</a>
                  <img alt="_" src={ocean_cleanup} style={{margin: 20, width: '90%', height: 'auto', borderRadius: 10}}></img>
                  </div>
                  )}
        

          {
          // <p>{details}</p>
          // <p>
          //   EVENT: type={event.type}, position=
          //   {JSON.stringify(event.pointerEventPosition)})
          // </p>
        }
    </div>
    </div>
  );
}

export default App;
