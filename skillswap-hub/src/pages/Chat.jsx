import { useState, useEffect } from "react";

function Chat() {
  const selectedUser =
    JSON.parse(localStorage.getItem("selectedUser")) || {};

  const chatKey = `chat_${selectedUser.id}`;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem(chatKey)) || [];

    setMessages(saved);
  }, [chatKey]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = message;

    const updated = [
      ...messages,
      {
        text: userMessage,
        sender: "You",
        time: new Date().toLocaleTimeString(),
      },
    ];

    setMessages(updated);

    localStorage.setItem(
      chatKey,
      JSON.stringify(updated)
    );

    setMessage("");

    setTimeout(() => {
      let reply = "";

      const msg = userMessage.toLowerCase();

      if (msg.includes("react")) {
        reply =
          "React is a JavaScript library used for building user interfaces.";
      } 
      else if (msg.includes("java")) {
        reply =
          "Java is an object-oriented programming language widely used in software development.";
      } 
      else if (msg.includes("python")) {
        reply =
          "Python is beginner friendly and widely used in AI, Data Science and Web Development.";
      } 
      else if (msg.includes("html")) {
        reply =
          "HTML is used to structure web pages.";
      } 
      else if (msg.includes("css")) {
        reply =
          "CSS is used to style web pages and improve UI design.";
      } 
      else if (msg.includes("javascript")) {
        reply =
          "JavaScript is used to make web pages interactive.";
      } 
      else if (msg.includes("node")) {
        reply =
          "Node.js allows JavaScript to run on the server side.";
      } 
      else if (msg.includes("mongodb")) {
        reply =
          "MongoDB is a NoSQL database used to store application data.";
      } 
      else if (msg.includes("sql")) {
        reply =
          "SQL is used to manage and query relational databases.";
      } 
      else if (msg.includes("ui")) {
        reply =
          "UI stands for User Interface and focuses on design and appearance.";
      } 
      else if (msg.includes("ux")) {
        reply =
          "UX stands for User Experience and focuses on usability and user satisfaction.";
      } 
      else if (
        msg.includes("hello") ||
        msg.includes("hi")
      ) {
        reply = `Hi! How can I help you learn ${selectedUser.skill}?`;
      } 
      else if (
        msg.includes("thank") ||
        msg.includes("thanks")
      ) {
        reply =
          "You're welcome! Happy learning.";
      } 
      else if (
        msg.includes("project")
      ) {
        reply =
          "Try building a mini project to understand the concept better.";
      } 
      else if (
        msg.includes("help")
      ) {
        reply =
          "Sure! Tell me your doubt and I will guide you.";
      } 
      else {
        reply =
          "Can you explain your question in more detail?";
      }

      const finalChat = [
        ...updated,
        {
          text: reply,
          sender: selectedUser.name,
          time: new Date().toLocaleTimeString(),
        },
      ];

      setMessages(finalChat);

      localStorage.setItem(
        chatKey,
        JSON.stringify(finalChat)
      );
    }, 1000);
  };

  return (
    <div className="page">

      <div className="chat-header">

        <div className="chat-avatar">
          {selectedUser.name
            ? selectedUser.name.charAt(0)
            : "U"}
        </div>

        <div>
          <h2>
            {selectedUser.name || "User"}
          </h2>

          <p>
            {selectedUser.department}
          </p>

          <p style={{ color: "green" }}>
            🟢 Online
          </p>
        </div>

      </div>

      <div className="chat-box">

        {messages.length === 0 && (
          <p className="empty-chat">
            Start chatting with {selectedUser.name}
          </p>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "You"
                ? "message my-message"
                : "message other-message"
            }
          >
            <strong>
              {msg.sender}:
            </strong>{" "}
            {msg.text}

            <br />

            <small>
              {msg.time}
            </small>
          </div>
        ))}

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder={`Message ${selectedUser.name}`}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            sendMessage()
          }
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default Chat;