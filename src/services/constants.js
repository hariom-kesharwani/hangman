export const Guessed_Keys = "Guessed_Keys"
var keywords = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
    "ruby",
    "fortran"
]

function randomWord() {
  return keywords[Math.floor(Math.random() * keywords.length)]
}

export { randomWord }