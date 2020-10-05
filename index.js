const bg = $("#particles-js")
// let name

$("img").click(function() {
  const name = $(this).attr("name") 
  console.log (title(name))
  
  // afficher nom 
  $(".titre").text(title(name))
  
  // animer le portrait correspondant
  $(this).css("border", "1px solid skyblue")

  // changer le fond 
  $("#particles-js").css("background-color", getRandomColor)
  
  // jouer extrait
  playArtist(name)
} ) 
// getName()
const title = str => {
  return str.charAt(0).toUpperCase() + str.slice(1) 
}

function playArtist(val) {
  const audio = new Audio(`${val}.mp3`)
  audio.play()
}

$(document).keydown(e => {
  bg.css("background-color" , getRandomColor)
  
  playMusic(e)
  
})

console.log("tape b, d, r ou s")
const playMusic = e => {
  var key = e.key
  const controlPlayer = data => {

    // getName()
      $(".img").attr("name", data).css("border", "1px solid cyan")
    console.log(data)

    let audio = new Audio(`${data}.mp3`)

    $(".titre").text(title(data))
    audio.play()
    if (key == "p") audio.pause()
  }
  $(".titre").text(key)
  $("button").text("playing...")
  // let audio
  switch (key) {
    case "s": 
      
      controlPlayer("sting")
      break
      
    case "b": 
      controlPlayer("booba")
      break
    case "d": 
      controlPlayer("dave" || "drake")
      break
    case "r": 
      controlPlayer("rick")
      break
    default:
      const msg = ("choisis un artiste")
      console.log(msg)
      $(".titre").text(title(msg))
  }
}
const getRandomColor = () => {
  const hexStr  = "0123456789ABCDEF"
  
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += (Math.floor(Math.random() * hexStr.length))

  }

  console.log(color)
  return color
}
