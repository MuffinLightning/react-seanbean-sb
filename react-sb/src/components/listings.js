import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const style = {
  margin: 12
};

let music = AudioFX('../src/assets/audio/animalhusbandry.mp3', {
                      formats: ['mp3', 'm4a', 'wav'],
                      volume:   1.0 });
let play = (clip) => {

  console.log('play ' + clip);
  
  music.stop();

  switch(clip) {
    case 'pottery':
        music = AudioFX('../src/assets/audio/pottery.mp3', {volume: 0.8 });
        break;
    case 'animal husbandry':
        music = AudioFX('../src/assets/audio/animalhusbandry.mp3', {volume: 0.8 });
        break;
    case 'mining':
        music = AudioFX('../src/assets/audio/mining.mp3', {volume: 0.8 });
        break;
    case 'irrigation':
        music = AudioFX('../src/assets/audio/irrigation.mp3', {volume: 0.8 });
        break;
    case 'sailing':
        music = AudioFX('../src/assets/audio/sailing.mp3', {volume: 0.8 });
        break;
    case 'astrology':
        music = AudioFX('../src/assets/audio/astrology.mp3', {volume: 0.8 });
        break;
     case 'writing':
        music = AudioFX('../src/assets/audio/writing.mp3', {volume: 0.8 });
        break;
    case 'archery':
        music = AudioFX('../src/assets/audio/archery.mp3', {volume: 0.8 });
        break;
    case 'masonry':
        music = AudioFX('../src/assets/audio/masonry.mp3', {volume: 0.8 });
        break;
     case 'bronzeworking':
        music = AudioFX('../src/assets/audio/bronzeworking.mp3', {volume: 0.8 });
        break;
     case 'wheel':
        music = AudioFX('../src/assets/audio/wheel.mp3', {volume: 0.8 });
        break;
    default:
        console.log('error');
}
  music.play();
}


const ButtonList = () => (
  <div>
    <RaisedButton label="Pottery" style={style} onTouchTap={() => { play('pottery') }} />
    <RaisedButton label="Animal Husbandry" primary={true} style={style} onTouchTap={() => { play('animal husbandry') }} />
    <RaisedButton label="Mining" secondary={true} style={style} onTouchTap={() => { play('mining') }} />
    <div/>
    <RaisedButton label="Sailing" style={style} onTouchTap={() => { play('sailing') }} />
    <RaisedButton label="Astrology" primary={true} style={style} onTouchTap={() => { play('astrology') }} />
    <RaisedButton label="Irrigation" secondary={true} style={style} onTouchTap={() => { play('irrigation') }} />
    <div/>
    <RaisedButton label="Writing" style={style} onTouchTap={() => { play('writing') }} />
    <RaisedButton label="Archery" primary={true} style={style} onTouchTap={() => { play('archery') }} />
    <RaisedButton label="Masonry" secondary={true} style={style} onTouchTap={() => { play('masonry') }} />
    <div/>
    <RaisedButton label="Bronze Working" style={style} onTouchTap={() => { play('bronzeworking') }} />
    <RaisedButton label="Wheel" primary={true} style={style} onTouchTap={() => { play('wheel') }} />
  </div>
);

const Listings = () => {
  return (
    <div>
      <AppBar title="SEAN BEAN SOUNDBOARD" showMenuIconButton={false} />
      <ul className="col-md-4 list-group">
        <h1>Sean Bean on...</h1>
        <ButtonList />
      </ul>
    </div>
  );
};

export default Listings;
