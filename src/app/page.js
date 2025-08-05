
import ChatBot from "./components/chatbot/Chatbot";
import Navbar from "./components/navbar/Navbar";
import Hero from "./Hero/page";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <ChatBot />
   </div>
  );
}
