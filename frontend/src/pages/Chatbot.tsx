import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  Send,
  Bot,
  User,
  Leaf,
  CloudRain,
  Bug,
  Tractor,
  Paperclip,
  BarChart2,
  Phone,
  Heart,
  Mail,
  CheckCheck,
} from "lucide-react";

import { groq } from "../lib/groq";

interface ChatBotProps {
  onBack: () => void;
}

interface Message {
  id: number;
  type: "user" | "bot";
  text: string;
  time: string;
}

const QUICK_QUESTIONS = [
  {
    icon: <Leaf size={14} />,
    text: "Best crop for summer?",
  },
  {
    icon: <CloudRain size={14} />,
    text: "How much irrigation needed?",
  },
  {
    icon: <Bug size={14} />,
    text: "How to control pests?",
  },
  {
    icon: <Tractor size={14} />,
    text: "Modern farming tips",
  },
];

const SIDEBAR_TOPICS = [
  {
    emoji: "🌾",
    text: "Yield Prediction Help",
  },
  {
    emoji: "🦠",
    text: "Disease Detection",
  },
  {
    emoji: "💧",
    text: "Irrigation Planning",
  },
  {
    emoji: "📊",
    text: "Dashboard Setup",
  },
  {
    emoji: "💳",
    text: "Billing & Plans",
  },
  {
    emoji: "🔧",
    text: "Technical Issues",
  },
];

const SUPPORT_STATS = [
  {
    label: "Tickets Today",
    value: "142",
  },
  {
    label: "Resolved",
    value: "98%",
  },
  {
    label: "Avg. Response",
    value: "47s",
  },
  {
    label: "Satisfaction",
    value: "4.9 ★",
  },
];

function nowTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const INITIAL_MESSAGE: Message = {
  id: 1,
  type: "bot",
  text:
    "Hello farmer 👋\n\nI'm AgroBot, your FarmPredict AI assistant.\n\nAsk me about:\n• Crop recommendations\n• Fertilizers & soil health\n• Irrigation scheduling\n• Pest & disease control\n• Weather impact\n• Smart farming tips",
  time: nowTime(),
};

function AgentCard() {
  return (
    <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-3xl p-6 shadow-xl">
      <div className="flex flex-col items-center text-center">

        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-4xl shadow-xl shadow-green-900/30">
          🤖
        </div>

        <h2 className="text-white font-bold text-xl mt-4">
          AgroBot
        </h2>

        <p className="text-green-400 text-sm mt-1">
          AI Farming Assistant
        </p>

        <div className="flex items-center gap-2 mt-4 text-sm font-medium text-green-400">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
          Online · Avg. reply &lt; 1 min
        </div>
      </div>
    </div>
  );
}

function QuickTopics({
  onTopicClick,
}: {
  onTopicClick: (text: string) => void;
}) {
  return (
    <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-3xl p-5 shadow-xl">
      <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-semibold">
        Quick Topics
      </h3>

      <div className="flex flex-col gap-3">
        {SIDEBAR_TOPICS.map((topic) => (
          <button
            key={topic.text}
            onClick={() =>
              onTopicClick(topic.text)
            }
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#252525] hover:bg-[#303030] transition text-left text-gray-200 text-sm"
          >
            <span className="text-lg">
              {topic.emoji}
            </span>

            {topic.text}
          </button>
        ))}
      </div>
    </div>
  );
}

function SupportStats() {
  return (
    <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-3xl p-5 shadow-xl">
      <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-semibold">
        Support Stats
      </h3>

      <div className="space-y-4">
        {SUPPORT_STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex justify-between items-center"
          >
            <span className="text-gray-400 text-sm">
              {stat.label}
            </span>

            <span className="text-green-400 font-bold text-sm">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="px-6 py-5 border-b border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-between">

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-xl shadow-lg">
          🌱
        </div>

        <div>
          <h2 className="text-white font-bold text-lg">
            FarmPredict Support
          </h2>

          <p className="text-gray-400 text-sm">
            AgroBot + Human Experts
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {[BarChart2, Phone, Heart, Mail].map(
          (Icon, i) => (
            <button
              key={i}
              className="w-11 h-11 rounded-2xl bg-[#252525] hover:bg-[#303030] flex items-center justify-center text-gray-400 hover:text-white transition"
            >
              <Icon size={18} />
            </button>
          )
        )}
      </div>
    </div>
  );
}

function QuickChips({
  onChipClick,
}: {
  onChipClick: (text: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 px-6 py-4 border-b border-[#2a2a2a] bg-[#1a1a1a]">
      {QUICK_QUESTIONS.map((q) => (
        <button
          key={q.text}
          onClick={() =>
            onChipClick(q.text)
          }
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#252525] hover:bg-[#303030] border border-[#333] text-gray-200 hover:text-white text-sm transition"
        >
          <span className="text-green-400">
            {q.icon}
          </span>

          {q.text}
        </button>
      ))}
    </div>
  );
}

function MessageBubble({
  message,
}: {
  message: Message;
}) {
  const isUser =
    message.type === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex w-full ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`flex gap-4 items-end max-w-[88%] ${
          isUser
            ? "flex-row-reverse"
            : ""
        }`}
      >

        {/* Avatar */}
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md flex-shrink-0 ${
            isUser
              ? "bg-green-600"
              : "bg-gradient-to-br from-green-500 to-emerald-700"
          }`}
        >
          {isUser ? (
            <User
              size={18}
              className="text-white"
            />
          ) : (
            <Bot
              size={18}
              className="text-white"
            />
          )}
        </div>

        {/* Bubble */}
        <div
          className={`flex flex-col ${
            isUser
              ? "items-end"
              : "items-start"
          }`}
        >

          <div
            className={`px-6 py-5 rounded-3xl shadow-lg border leading-8 text-[16px] md:text-[17px] ${
              isUser
                ? `
                  bg-gradient-to-r
                  from-green-600
                  to-emerald-500
                  text-white
                  border-green-500
                  rounded-br-md
                  max-w-[500px]
                `
                : `
                  bg-[#252525]
                  text-gray-100
                  border-[#333]
                  rounded-bl-md
                  max-w-[900px]
                `
            }`}
          >

            <p className="whitespace-pre-wrap">
              {message.text}
            </p>

          </div>

          <div
            className={`flex items-center gap-1 mt-2 px-2 ${
              isUser
                ? "flex-row-reverse"
                : ""
            }`}
          >

            <span className="text-xs text-gray-500">
              {message.time}
            </span>

            {isUser && (
              <CheckCheck
                size={13}
                className="text-green-400"
              />
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-4 items-end">

      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center">
        <Bot
          size={18}
          className="text-white"
        />
      </div>

      <div className="bg-[#252525] border border-[#333] rounded-3xl rounded-bl-md px-6 py-4 shadow-lg">
        <div className="flex gap-2">
          {[0, 150, 300].map((d) => (
            <span
              key={d}
              className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${d}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ChatBot = ({
  onBack,
}: ChatBotProps) => {
  const [messages, setMessages] =
    useState<Message[]>([
      INITIAL_MESSAGE,
    ]);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const textareaRef =
    useRef<HTMLTextAreaElement | null>(
      null
    );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [messages, loading]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);

    const ta = e.target;

    ta.style.height = "auto";

    ta.style.height =
      Math.min(
        ta.scrollHeight,
        120
      ) + "px";
  };

  const generateBotReply =
    async (
      question: string
    ): Promise<string> => {
      try {
        const completion =
          await groq.chat.completions.create(
            {
              model:
                "llama-3.3-70b-versatile",

              messages: [
                {
                  role: "system",
                  content:
                    "You are AgroBot, an expert agriculture assistant helping farmers with crop recommendations, irrigation, fertilizers, pest control, weather, and smart farming.",
                },
                {
                  role: "user",
                  content: question,
                },
              ],

              temperature: 0.7,

              max_completion_tokens: 1024,
            }
          );

        return (
          completion.choices?.[0]
            ?.message?.content ||
          "No response generated."
        );
      } catch (error) {
        console.error(error);

        return "⚠️ Failed to generate response.";
      }
    };

  const sendMessage = async (
    messageText?: string
  ) => {
    const text = (
      messageText ?? input
    ).trim();

    if (!text || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      text,
      time: nowTime(),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height =
        "auto";
    }

    setLoading(true);

    const reply =
      await generateBotReply(text);

    const botMessage: Message = {
      id: Date.now() + 1,
      type: "bot",
      text: reply,
      time: nowTime(),
    };

    setMessages((prev) => [
      ...prev,
      botMessage,
    ]);

    setLoading(false);
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-[#f4fff6] via-[#f8fffb] to-[#eef7ff] py-6 px-4 md:px-8">

  <div className="max-w-7xl mx-auto">

    {/* Back Button */}
    <button
      onClick={onBack}
      className="
        flex items-center gap-2
        text-green-700 hover:text-green-900
        font-semibold
        transition-all
        mb-6
      "
    >
      <ArrowLeft size={18} />
      Back to Home
    </button>

    {/* Heading */}
    <div className="mb-8">

      <h1 className="text-5xl font-bold tracking-tight text-gray-900">
        Chat{" "}
        <span className="text-green-600">
          Support
        </span>
      </h1>

      <p className="text-gray-500 text-lg mt-3">
        Get instant answers about crops,
        irrigation, fertilizers, disease control,
        and smart farming solutions.
      </p>

    </div>

    <div className="flex gap-6 items-start">

      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col gap-5 w-72 flex-shrink-0">

        <div className="
          bg-white/90
          backdrop-blur-xl
          border border-white
          rounded-[30px]
          shadow-xl
          p-6
        ">

          <div className="flex flex-col items-center text-center">

            <div className="
              w-24 h-24
              rounded-full
              bg-gradient-to-br
              from-green-500
              to-emerald-400
              flex items-center justify-center
              text-5xl
              shadow-lg
              shadow-green-200
            ">
              🤖
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              AgroBot
            </h2>

            <p className="text-green-600 mt-1 font-medium">
              AI Farming Assistant
            </p>

            <div className="
              mt-4
              flex items-center gap-2
              text-sm font-semibold text-green-700
            ">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Online · Avg reply &lt; 1 min
            </div>

          </div>
        </div>

        {/* Topics */}
        <div className="
          bg-white/90
          backdrop-blur-xl
          rounded-[30px]
          shadow-xl
          p-5
        ">

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            Quick Topics
          </h3>

          <div className="flex flex-col gap-3">

            {SIDEBAR_TOPICS.map((topic) => (
              <button
                key={topic.text}
                onClick={() =>
                  sendMessage(topic.text)
                }
                className="
                  flex items-center gap-3
                  px-4 py-4
                  rounded-2xl
                  bg-[#f5faf6]
                  hover:bg-green-50
                  transition-all
                  text-left
                  hover:scale-[1.02]
                "
              >
                <span className="text-lg">
                  {topic.emoji}
                </span>

                <span className="text-gray-700 font-medium">
                  {topic.text}
                </span>
              </button>
            ))}

          </div>
        </div>

        {/* Stats */}
        <div className="
          bg-white/90
          backdrop-blur-xl
          rounded-[30px]
          shadow-xl
          p-5
        ">

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            Support Stats
          </h3>

          <div className="space-y-4">

            {SUPPORT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between items-center"
              >
                <span className="text-gray-500">
                  {stat.label}
                </span>

                <span className="font-bold text-green-600">
                  {stat.value}
                </span>
              </div>
            ))}

          </div>

        </div>

      </aside>

      {/* Chat Container */}
      <div className="
        flex-1
        flex flex-col
        bg-white/90
        backdrop-blur-xl
        border border-white
        rounded-[35px]
        overflow-hidden
        shadow-2xl
        min-h-[820px]
      ">

        {/* Header */}
        <div className="
          px-8 py-5
          border-b border-gray-100
          bg-white/70
          flex items-center justify-between
        ">

          <div className="flex items-center gap-4">

            <div className="
              w-14 h-14
              rounded-full
              bg-gradient-to-br
              from-green-500
              to-emerald-400
              flex items-center justify-center
              text-2xl
              shadow-lg
            ">
              🌱
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                AgroBot + Human Experts
              </h2>

              <p className="text-gray-500">
                Smart AI agriculture support
              </p>
            </div>

          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">

            {[BarChart2, Phone, Heart, Mail].map(
              (Icon, i) => (
                <button
                  key={i}
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-[#f6f8f7]
                    hover:bg-green-50
                    flex items-center justify-center
                    transition-all
                    shadow-sm
                  "
                >
                  <Icon
                    size={20}
                    className="text-gray-600"
                  />
                </button>
              )
            )}

          </div>

        </div>

        {/* Quick Questions */}
        <div className="
          flex flex-wrap gap-3
          px-8 py-5
          border-b border-gray-100
          bg-[#fcfffd]
        ">

          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q.text}
              onClick={() =>
                sendMessage(q.text)
              }
              className="
                flex items-center gap-2
                px-5 py-3
                rounded-full
                bg-white
                border border-gray-200
                hover:border-green-300
                hover:bg-green-50
                transition-all
                shadow-sm
                text-gray-700
                font-medium
              "
            >
              <span className="text-green-600">
                {q.icon}
              </span>

              {q.text}
            </button>
          ))}

        </div>

        {/* Messages */}
        <div className="
          flex-1
          overflow-y-auto
          px-8 py-8
          space-y-10
          bg-[#f9fcfa]
        ">

          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
            />
          ))}

          {loading && (
            <TypingIndicator />
          )}

          <div ref={messagesEndRef} />

        </div>

        {/* Input Area */}
        <div className="
          px-6 py-5
          border-t border-gray-100
          bg-white
        ">

          <div className="flex items-end gap-4">

            {/* Attachment */}
            <button
              className="
                w-14 h-14
                rounded-2xl
                border border-gray-200
                bg-gray-50
                hover:bg-gray-100
                flex items-center justify-center
                transition-all
                shadow-sm
              "
            >
              <Paperclip
                size={20}
                className="text-gray-600"
              />
            </button>

            {/* Textarea */}
            <div className="flex-1">

              <textarea
                ref={textareaRef}
                value={input}
                rows={1}
                onChange={
                  handleInputChange
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault();

                    sendMessage();
                  }
                }}
                placeholder="Ask your farming question..."
                className="
                  w-full
                  resize-none
                  rounded-[28px]
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-4
                  text-[17px]
                  text-black
                  placeholder:text-gray-400
                  outline-none
                  shadow-sm
                  transition-all
                  focus:border-green-400
                  focus:ring-4
                  focus:ring-green-100
                  min-h-[60px]
                  max-h-[140px]
                "
              />

            </div>

            {/* Send Button */}
            <button
              onClick={() =>
                sendMessage()
              }
              disabled={
                loading ||
                !input.trim()
              }
              className="
                w-14 h-14
                rounded-2xl
                bg-green-500
                hover:bg-green-600
                disabled:opacity-40
                disabled:cursor-not-allowed
                text-white
                flex items-center justify-center
                shadow-lg
                hover:scale-105
                transition-all
              "
            >
              <Send size={20} />
            </button>

          </div>

          {/* Footer Hint */}
          <p className="
            text-sm
            text-gray-400
            mt-4
            text-center
          ">
            Press{" "}
            <span className="font-semibold text-gray-500">
              Enter
            </span>{" "}
            to send ·{" "}
            <span className="font-semibold text-gray-500">
              Shift + Enter
            </span>{" "}
            for new line
          </p>

        </div>

      </div>
    </div>
  </div>
</div>
  );
};

export default ChatBot;