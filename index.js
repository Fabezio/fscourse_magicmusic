const bg = $("#particles-js")


$("img").click(function() {
  const name = $(this).attr("name") 
  // console.log (title(name))
  // $(".titre").text(title(name))
  
  // animer le portrait correspondant
  $(this).css("border", "1px solid skyblue")
  
  // jouer extrait
  playArtist(name)
  
} ) 
// getName()
const title = str => {
  return str.charAt(0).toUpperCase() + str.slice(1) 
}

function playArtist(val) {
  const audio = new Audio(`${val}.mp3`)
  // afficher nom sous le titre
  $(".titre").text(title(val))
  // changer le fond
  $("#particles-js").css("background-color", getRandomColor)
  // lancer lecture
  audio.play()
}

$("button").click(function() {
  const getName = $("#input").val()
  // animer le portrait correspondant
  // $(this).css("border", "1px solid skyblue")
  playArtist(getName)
})
$("input").keydown(function(e) {
  // console.log(e.key)
  const getName = $("#input").val()
  console.log(getName)
  if (e.key == "Enter") {
    // animer le portrait correspondant
    // $(this).css("border", "1px solid skyblue")
    // $("#particles-js").css("background-color", getRandomColor)
    playArtist(getName)
  } else return
})

$(document).keydown(e => {
  bg.css("background-color" , getRandomColor)
  
  playMusic(e)  
  
})
const getRandomColor = () => {
  const hexStr  = "0123456789ABCDEF"
  
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += (Math.floor(Math.random() * hexStr.length))

  }

  console.log(color)
  return color
}
