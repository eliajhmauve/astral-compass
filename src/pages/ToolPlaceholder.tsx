import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import StarfieldBg from "@/components/layout/StarfieldBg";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft } from "lucide-react";

const toolMeta: Record<string, { emoji: string; zh: string; en: string }> = {
  "/numerology": { emoji: "🔢", zh: "生命靈數計算器", en: "Life Path Number" },
  "/tarot": { emoji: "🃏", zh: "AI 塔羅占卜", en: "AI Tarot Reading" },
  "/bazi": { emoji: "📜", zh: "八字排盤", en: "BaZi Chart" },
  "/ziwei": { emoji: "⭐", zh: "紫微斗數", en: "Zi Wei Dou Shu" },
  "/name": { emoji: "✍️", zh: "姓名學分析", en: "Name Analysis" },
  "/zodiac": { emoji: "♈", zh: "星座運勢", en: "Horoscope" },
  "/auspicious": { emoji: "📅", zh: "擇日工具", en: "Date Selection" },
  "/calendar": { emoji: "🌙", zh: "農曆萬年曆", en: "Lunar Calendar" },
  "/daily": { emoji: "🌅", zh: "每日運勢", en: "Daily Fortune" },
  "/match": { emoji: "💕", zh: "合婚配對", en: "Compatibility" },
  "/palm": { emoji: "✋", zh: "手面相 AI", en: "Palm Reading AI" },
  "/annual": { emoji: "📊", zh: "流年報告", en: "Annual Report" },
};

const ToolPlaceholder = () => {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const meta = toolMeta[pathname] || { emoji: "🔮", zh: "工具", en: "Tool" };

  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBg />
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-16">
        <div className="glass-card rounded-2xl p-12 text-center max-w-md animate-fade-in-up">
          <div className="text-6xl mb-6">{meta.emoji}</div>
          <h1 className="font-serif-zh text-2xl font-bold gold-text mb-2">
            {t(meta.zh, meta.en)}
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            {t("此工具正在開發中，敬請期待！", "This tool is coming soon!")}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            {t("返回首頁", "Back to Home")}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ToolPlaceholder;
