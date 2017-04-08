var canvas = document.getElementById ("canvas")
var cx = canvas.getContext("2d")

canvas.width=1000
canvas.height=1000

var img_player = document.createElement("img")
img_player.src = "http://static.tvtropes.org/pmwiki/pub/images/sans_sprite.jpg"

var x = 500
var y = 500

function animate () {
  requestAnimationFrame(animate)
 cx.clearRect(0,0,canvas.width, canvas.height)
 cx.drawImage(img_player, x,y)
  x++; y++;
}

animate();