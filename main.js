let score = document.querySelector("#score")

let gameboard = document.querySelector("#gameboard")

let result = document.querySelector("#result")

let win = document.querySelector("#win")


let mainscore = 0;
let arr;
let boxes;


let myarr = async () => {
  arr = await [10, 50, 100, 200, 500, 10, 50, 100, 200, 500, 10, 50, 100, 200, 500, 10, 50, 0, 0, 0]

}


let buttongen = async () => {
  // Genrate Buttons.
  for (var i = 0; i < arr.length; i++) {
    let button = document.createElement("button")
    gameboard.append(button)

  }

  boxes = document.querySelectorAll("#gameboard button")
}









let main = async () => {

  Array.from(boxes).forEach((box) => {
    box.addEventListener("click", (e) => {

      let randomIndex = Math.floor(Math.random() * arr.length);
      e.currentTarget.textContent = arr[randomIndex]
      arr.splice(randomIndex, 1)
      e.currentTarget.disabled = true
      e.currentTarget.style.background = "#222222"


      if (e.currentTarget.textContent == 0) {

        Array.from(boxes).forEach((box) => {
          box.disabled = true
          e.currentTarget.style.background = "#3498db"
          e.currentTarget.innerHTML = "💣"
          win.innerHTML = mainscore
          result.style.display = "flex"

          resetfun()
        })
      }
      else {
        sound("sounds/get.wav")
      }


      mainscore += Number(e.currentTarget.textContent)
      score.innerHTML = mainscore

    })
  })

}







let balance = async () => {
  await myarr()
  await buttongen()
  await main()


}

balance()


let resetfun = () => {
  let showreset = document.querySelector("#reset").style.display = "flex"

  let resetme = document.querySelector("#reset i")

  resetme.addEventListener("click", () => {
    gameboard.innerHTML = null
    arr = null
    score.innerHTML = 0
    mainscore = 0
    let showreset = document.querySelector("#reset").style.display = "none"
    result.style.display = "none"
    balance()

  })



}



let sound = (somg) => {
  let audio = new Audio(somg)
  audio.play()
}