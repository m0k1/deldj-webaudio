var reverb = new Pizzicato.Effects.Reverb({
  time: 0.01,
  decay: 0.01,
  reverse: true,
  mix: 0.3
});

var samples = [ 'FACE_1', 'FACE_2', 'FACE_3', 'FACE_4', 'LEFT_TOP_SHOULDER', 'RIGHT_TOP_SHOULDER' ];

var banks = {};

var group = new Pizzicato.Group();
/*
 *  Load all banks at once
 */
function loadBank() {
  for(var i=0 ; i<samples.length ; i++) {
    var file = './audio/'+samples[i].toLocaleLowerCase()+'.wav';
    console.log("loading", file, samples[i]);

    banks[i] = new Pz.Sound({
      source: 'file',
      options: {
        path: file,
        attack: 0,
        loop: true
      }
    }, function() {
      console.log(`loaded`);
    });
    group.addSound(banks[i]);
  }
}

loadBank();

var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 400,
    peak: 10
});

group.addEffect(lowPassFilter);
