function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6evKDhkH01N":
        Script1();
        break;
      case "5ndsDqnUuwm":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.1;
}

function Script2()
{
  const url = "https://script.google.com/macros/s/AKfycbxj3bdnWYimLi4WVwzyep2KzYQnb7JTcnQhUKfnoEE2nzEdRr1SvTKONcTuwo-ePH6-/exec";
const player = GetPlayer();
const data = {
  namakelompoklevel1: player.GetVar("namakelompoklevel1"),
  ketuakelompok1: player.GetVar("ketuakelompok1"),
  presenter1: player.GetVar("presenter1"),
  peneliti1: player.GetVar("peneliti1"),
  desainer1: player.GetVar("desainer1"),
  produk1: player.GetVar("produk1"),
  alatbahan1: player.GetVar("alatbahan1"),
  jadwal1: player.GetVar("jadwal1")
};

fetch(url, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
}

