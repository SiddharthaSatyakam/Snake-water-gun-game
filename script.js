let a = prompt("enter either S or W or G");
let b = Math.floor(Math.random() * 3);
let c = ["S", "W", "G"][b];

const res = (a, c) => {
  if (a === c) { return "Match Tied" };
  if (a === "S" && c === "W") { return "USER" }
  if (a === "S" && c === "G") { return "CPU" }
  if (a === "W" && c === "S") { return "CPU" }
  if (a === "w" && c === "G") { return "USER" }
  if (a === "G" && c === "S") { return "USER" }
  if (a === "G" && c === "W") { return "CPU" }
}
let result = res(a, c)
document.write(`CPU: ${c} & USER: ${a} The winner is ${result}`)

// let user = prompt("Enter S, W or G")
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S", "W", "G"][cpuI]

// const match = (cpu, user)=>{
//   if(cpu === user){
//     return "Nobody"
//   }
//   else if(cpu === "S" && user==="W"){
//     return "cpu"
//   }
//   else if(cpu === "S" && user==="G"){
//     return "user"
//   }
//   else if(cpu === "G" && user==="W"){
//     return "user"
//   }
//   else if(cpu === "G" && user==="S"){
//     return "cpu"
//   }
//   else if(cpu === "W" && user==="S"){
//     return "user"
//   }
//   else if(cpu === "W" && user==="G"){
//     return "cpu"
//   }
// }
// let result = match(cpu, user)
// document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )