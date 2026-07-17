export function ChatbotWidget() {
  return (
    <button type="button" className="chatbot-widget" aria-label="Ask KuberPay AI Chatbot">
      <div className="chatbot-widget__icon">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="2" y="6" width="20" height="16" rx="3" fill="#fff" opacity="0.9" />
          <rect x="10" y="12" width="20" height="16" rx="3" fill="#4a7cff" />
          <circle cx="16" cy="20" r="1.5" fill="#fff" />
          <circle cx="21" cy="20" r="1.5" fill="#fff" />
          <circle cx="26" cy="20" r="1.5" fill="#fff" />
        </svg>
      </div>
      <div className="chatbot-widget__text">
        <span className="chatbot-widget__label">Ask KuberPay</span>
        <span className="chatbot-widget__badge">AI CHATBOT (BETA)</span>
      </div>
      <svg className="chatbot-widget__sparkle" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
      </svg>
    </button>
  )
}
