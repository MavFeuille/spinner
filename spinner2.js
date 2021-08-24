// process.stdout.write('hello from spinner1.js... \rheyyy\n');

//iternate symbols
//need the \r thing to replace each symbol each time
//timeout for each will be 200++ (so each index * 200)


const symbols = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   ', '\n   '];

const spin = function(symbols) {
  for(let i = 0; i < symbols.length; i++) {
    setTimeout(() => process.stdout.write( "\r" + symbols[i]), 
    i * 200);
  }
} ;

spin(symbols);

