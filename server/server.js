const http = require('http')
const {Server} = require('socket.io')

const server = http.createServer();
const io  = new Server(server)


function generateTiles(){
  let tiles = []
  
  for(let i=0;i<=6;i++){
    for (let j=0;j<=6;j++){
      if (j<i) continue ;
      tiles.push([i,j])
    }
  }
  for (let i=0;i<tiles.length;i++){
    let j = Math.floor(Math.random()*tiles.length);
    [ tiles[i] , tiles[j] ] = [tiles [j] , tiles [ i]]
  }
  return tiles ;
} 





console.log('tiles')

console.log(tiles)


io.on('connection',(socket) => {
  console.log(`User connected` + socket )
  
})

// server.listen(1000,() => console.log(`Server started`) )