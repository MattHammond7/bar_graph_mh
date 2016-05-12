// generate the graph's bars using this data array

data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]

var x = 0;

for (var i = 0; i < data.length; i ++ ) {
        var bar = document.createElement('div');              // create an empty div
        bar.setAttribute('class', 'bar');                     // assign the div class="piece"
        document.getElementById('frame').appendChild(bar);    // add the div to the id="board"
        bar.style.left = i*20 + 'px';                             // assign the left/x position
        bar.style.height = (data[i])*4 + 'px';
        
        if (i % 2 === 0) {}
        
        else {
           bar.style.backgroundColor = (data[x]);
            x += 2;     
        }

}

    