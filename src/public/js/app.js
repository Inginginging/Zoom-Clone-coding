const socket = new WebSocket(`ws://${window.location.host}`); //connection된 server의 socket

//socket의 event handler. bakend로 부터 영향을 받음. browser console에 보임.
socket.addEventListener("open", () => console.log("Connected to Server :)"));
socket.addEventListener("message", (message) =>
  console.log(`New Message from Server: ${message.data}`)
);
socket.addEventListener("close", () =>
  console.log("Disconnected to Server :(")
);

//backend에 영향을 주는 eventhandler. backend console에 보임
setTimeout(() => socket.send("Hello From Browser"), 10000);
