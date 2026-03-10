'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const WEBHOOK_URL = 'https://joenazz.app.n8n.cloud/webhook/jls-chat';
const BRAND_COLOR = '#1a1a2e';
const ACCENT_COLOR = '#22c55e';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const SUGGESTIONS = [
    { emoji: '💰', label: 'Pricing' },
    { emoji: '📍', label: 'Coverage areas' },
    { emoji: '⚡', label: 'Same-day service' },
    { emoji: '📋', label: 'What is process serving?' },
];

const WELCOME_MESSAGE =
    "Hi! I'm the Just Legal Solutions assistant. I can answer questions about process serving, pricing, coverage areas, and how we can help with your legal documents. What can I help you with?";

export function ChatWidget() {
    const pathname = usePathname();

    // Don't render on /card routes
    if (pathname.startsWith('/card')) return null;

    return <ChatWidgetInner />;
}

function ChatWidgetInner() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Show notification badge after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowBadge(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const toggleChat = useCallback(() => {
        setIsOpen((prev) => {
            const next = !prev;
            if (next) {
                setShowBadge(false);
                if (messages.length === 0) {
                    setMessages([{ role: 'assistant', content: WELCOME_MESSAGE }]);
                }
                setTimeout(() => inputRef.current?.focus(), 100);
            }
            return next;
        });
    }, [messages.length]);

    const sendMessage = useCallback(
        async (text: string) => {
            const trimmed = text.trim();
            if (!trimmed || isLoading) return;

            setIsLoading(true);
            setShowSuggestions(false);
            setInput('');

            const userMsg: Message = { role: 'user', content: trimmed };
            setMessages((prev) => [...prev, userMsg]);

            try {
                const historyForApi = messages.map((m) => ({
                    role: m.role,
                    content: m.content,
                }));

                const res = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: trimmed,
                        history: historyForApi,
                    }),
                });

                if (!res.ok) throw new Error('HTTP ' + res.status);
                const data = await res.json();
                const reply =
                    data.reply ||
                    "I'm having trouble right now. Please call (539) 367-6832 for immediate help.";

                setMessages((prev) => [
                    ...prev,
                    { role: 'assistant', content: reply },
                ]);
            } catch {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content:
                            "Sorry, I'm having a connection issue. Please call or text us directly at (539) 367-6832.",
                    },
                ]);
            }

            setIsLoading(false);
            inputRef.current?.focus();
        },
        [isLoading, messages]
    );

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <>
            <style jsx global>{`
        /* ── Chat Button ─────────────────────────── */
        .jls-chat-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: ${BRAND_COLOR};
          color: white;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          z-index: 99998;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          transition: transform 0.2s;
        }
        .jls-chat-btn:hover {
          transform: scale(1.08);
        }

        /* ── Badge ────────────────────────────────── */
        .jls-chat-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: ${ACCENT_COLOR};
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 11px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Chat Window ──────────────────────────── */
        .jls-chat-window {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 370px;
          max-width: calc(100vw - 32px);
          height: 520px;
          max-height: calc(100vh - 120px);
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
          z-index: 99999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          animation: jls-slide-up 0.25s ease-out;
        }
        @keyframes jls-slide-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Header ───────────────────────────────── */
        .jls-chat-header {
          background: ${BRAND_COLOR};
          color: white;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .jls-chat-header-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: ${ACCENT_COLOR};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .jls-chat-header-info {
          flex: 1;
          min-width: 0;
        }
        .jls-chat-header-name {
          font-weight: 600;
          font-size: 14px;
        }
        .jls-chat-header-status {
          font-size: 11px;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .jls-chat-header-status::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${ACCENT_COLOR};
          display: inline-block;
          flex-shrink: 0;
        }
        .jls-chat-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 20px;
          padding: 4px;
          opacity: 0.8;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .jls-chat-close:hover {
          opacity: 1;
        }

        /* ── Messages ─────────────────────────────── */
        .jls-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #f8f9fa;
          -webkit-overflow-scrolling: touch;
        }
        .jls-msg {
          max-width: 85%;
          padding: 10px 13px;
          border-radius: 12px;
          line-height: 1.5;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .jls-msg-bot {
          background: white;
          color: #1a1a2e;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
        }
        .jls-msg-user {
          background: ${BRAND_COLOR};
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        .jls-typing {
          align-self: flex-start;
          background: white;
          color: #888;
          padding: 10px 14px;
          border-radius: 12px;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
          font-style: italic;
          font-size: 13px;
        }

        /* ── Suggestions ──────────────────────────── */
        .jls-chat-suggestions {
          padding: 8px 16px 4px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          background: #f8f9fa;
          flex-shrink: 0;
        }
        .jls-suggestion {
          background: white;
          border: 1px solid #dee2e6;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 12px;
          cursor: pointer;
          color: ${BRAND_COLOR};
          white-space: nowrap;
          min-height: 36px;
          display: flex;
          align-items: center;
          transition: background 0.15s, color 0.15s;
        }
        .jls-suggestion:hover {
          background: ${BRAND_COLOR};
          color: white;
        }

        /* ── Input Row ────────────────────────────── */
        .jls-chat-input-row {
          display: flex;
          padding: 10px 12px;
          gap: 8px;
          background: white;
          border-top: 1px solid #e9ecef;
          flex-shrink: 0;
        }
        .jls-chat-input {
          flex: 1;
          border: 1px solid #dee2e6;
          border-radius: 22px;
          padding: 9px 14px;
          font-size: 16px; /* 16px prevents iOS zoom */
          outline: none;
          resize: none;
          font-family: inherit;
          line-height: 1.4;
          max-height: 80px;
        }
        .jls-chat-input:focus {
          border-color: ${BRAND_COLOR};
        }
        .jls-chat-send {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: ${BRAND_COLOR};
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          align-self: flex-end;
          transition: opacity 0.15s;
        }
        .jls-chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Footer ───────────────────────────────── */
        .jls-chat-footer {
          text-align: center;
          font-size: 10px;
          color: #aaa;
          padding: 4px 0 8px;
          background: white;
        }

        /* ── Mobile ───────────────────────────────── */
        @media (max-width: 480px) {
          .jls-chat-window {
            bottom: 0;
            right: 0;
            width: 100vw;
            max-width: 100vw;
            height: 100vh;
            height: 100dvh;
            max-height: 100vh;
            max-height: 100dvh;
            border-radius: 0;
          }
          .jls-chat-btn {
            bottom: 20px;
            right: 16px;
          }
        }
      `}</style>

            {/* ── Floating Button ─────────────────────── */}
            <button
                className="jls-chat-btn"
                onClick={toggleChat}
                aria-label="Chat with us"
            >
                {isOpen ? '✕' : '💬'}
                {showBadge && !isOpen && <span className="jls-chat-badge">1</span>}
            </button>

            {/* ── Chat Window ─────────────────────────── */}
            {isOpen && (
                <div className="jls-chat-window" role="dialog" aria-label="Just Legal Solutions Chat">
                    {/* Header */}
                    <div className="jls-chat-header">
                        <div className="jls-chat-header-avatar">⚖️</div>
                        <div className="jls-chat-header-info">
                            <div className="jls-chat-header-name">Just Legal Solutions</div>
                            <div className="jls-chat-header-status">
                                Online — typically replies instantly
                            </div>
                        </div>
                        <button
                            className="jls-chat-close"
                            onClick={toggleChat}
                            aria-label="Close chat"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="jls-chat-messages">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`jls-msg ${msg.role === 'user' ? 'jls-msg-user' : 'jls-msg-bot'
                                    }`}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && <div className="jls-typing">Typing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions */}
                    {showSuggestions && (
                        <div className="jls-chat-suggestions">
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s.label}
                                    className="jls-suggestion"
                                    onClick={() => sendMessage(s.label)}
                                >
                                    {s.emoji} {s.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <div className="jls-chat-input-row">
                        <textarea
                            ref={inputRef}
                            className="jls-chat-input"
                            placeholder="Ask a question…"
                            rows={1}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className="jls-chat-send"
                            onClick={() => sendMessage(input)}
                            disabled={isLoading}
                            aria-label="Send"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>

                    {/* Footer / Disclaimer */}
                    <div className="jls-chat-footer">
                        AI Assistant · Not legal advice · Call (539) 367-6832 for official help
                    </div>
                </div>
            )}
        </>
    );
}
