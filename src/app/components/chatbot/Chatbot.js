'use client';
import React, { useState } from 'react';
import styles from './ChatBot.module.css';
import responses from './chatBotKnowledge';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hej! Hur kan jag hjälpa dig idag?' },
  ]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input };
    const botReply = getBotReply(input);

    setMessages([...messages, userMsg, { from: 'bot', text: botReply.text }]);
    setContext(botReply.context || null);
    setInput('');
  };

  const getBotReply = (text) => {
    const lower = text.toLowerCase().trim();

    if (context === 'awaiting_skin_type') {
      if (lower.includes('torr')) {
        return {
          text: '💧 För torr hud rekommenderar vi *HydraGlow-serien* med hyaluronsyra och jojobaolja – intensiv återfuktning för mjuk hud.',
        };
      }
      if (lower.includes('fet')) {
        return {
          text: '✨ För fet eller aknebenägen hud är *ClearSkin-serien* perfekt – med salicylsyra och tea tree som balanserar huden.',
        };
      }
      if (lower.includes('känslig')) {
        return {
          text: '🌸 Har du känslig hud? Då passar vår *CalmCare-serie* med kamomill och aloe vera – lugnar och stärker huden skonsamt.',
        };
      }
      if (lower.includes('kombinerad')) {
        return {
          text: '🔄 För kombinerad hud rekommenderar vi en balanserad rutin från *BalanceLine* – återfuktar utan att göra huden fet.',
        };
      }
      return {
        text: 'Jag hör dig – men kan du skriva om du har torr, fet, känslig eller kombinerad hud? 💡',
        context: 'awaiting_skin_type'
      };
    }

    const greetings = ["hej", "hejsan", "tjena", "hallå", "tja"];
    if (greetings.includes(lower)) {
      return { text: "Hej där! 👋 Vad vill du veta mer om – produkter, leverans eller kontakt?" };
    }

    if (["ja", "gärna", "javisst"].includes(lower) && context === 'recommend_product') {
      return {
        text: "Berätta gärna om din hudtyp (t.ex. torr, fet, känslig eller kombinerad) så hjälper jag dig 💆‍♀️",
        context: "awaiting_skin_type"
      };
    }

    if (["nej", "nej tack", "inte nu"].includes(lower) && context === 'recommend_product') {
      return {
        text: "Inga problem! 😊 Du kan alltid fråga senare.",
        context: null
      };
    }

    for (let r of responses) {
      if (r.keywords.some((kw) => lower.includes(kw))) {
        return {
          text: `${r.title}\n${r.body}`,
          context: r.id === 'products' ? 'recommend_product' : null
        };
      }
    }

    return {
      text: "🤔 Förlåt, jag förstod inte riktigt. Du kan fråga om produkter, leverans, kontakt eller retur.",
    };
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
      
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.8rem 1rem',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #ddd',
            fontWeight: 600,
            fontSize: '1rem',
            color: '#333',
          }}>
            <span>Assistent</span>
            <button
              onClick={toggleChat}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.2rem',
                color: '#111',
                cursor: 'pointer',
                padding: 0,
                margin: 0,
                lineHeight: '1',
              }}
              aria-label="Stäng chatt"
              title="Stäng"
            >
              ×
            </button>
          </div>

          <div className={styles.messages}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.from === 'bot' ? styles.botMessage : styles.userMessage}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Skriv ett meddelande..."
            />
            <button onClick={handleSend}>Skicka</button>
          </div>
        </div>
      )}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1001 }}>
        <button className={styles.toggleButton} onClick={toggleChat}>
          💬
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
