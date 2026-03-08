import { useI18n } from "@/lib/i18n";
import ToolCard from "@/components/layout/ToolCard";

const tools = [
  { emoji: "🔢", titleZh: "生命靈數計算器", titleEn: "Life Path Number", descZh: "輸入生日，揭開你的靈魂密碼", descEn: "Enter your birthday to reveal your soul code", route: "/numerology" },
  { emoji: "🃏", titleZh: "AI 塔羅占卜", titleEn: "AI Tarot Reading", descZh: "AI 解讀你的塔羅牌陣", descEn: "AI interprets your tarot spread", route: "/tarot" },
  { emoji: "📜", titleZh: "八字排盤", titleEn: "BaZi Chart", descZh: "四柱八字，解析命運格局", descEn: "Four Pillars of Destiny analysis", route: "/bazi" },
  { emoji: "⭐", titleZh: "紫微斗數", titleEn: "Zi Wei Dou Shu", descZh: "帝王之術，星曜命盤導航", descEn: "Imperial astrology, star chart navigation", route: "/ziwei" },
  { emoji: "✍️", titleZh: "姓名學分析", titleEn: "Name Analysis", descZh: "筆畫五格，解讀姓名能量", descEn: "Stroke count & name energy reading", route: "/name" },
  { emoji: "♈", titleZh: "星座運勢", titleEn: "Horoscope", descZh: "12 星座每日/週/月運勢", descEn: "Daily/weekly/monthly horoscope", route: "/zodiac" },
  { emoji: "📅", titleZh: "擇日工具", titleEn: "Date Selection", descZh: "婚嫁、搬遷、開業吉日查詢", descEn: "Find auspicious dates for events", route: "/auspicious" },
  { emoji: "🌙", titleZh: "農曆萬年曆", titleEn: "Lunar Calendar", descZh: "國曆農曆轉換 + 節氣", descEn: "Solar-Lunar conversion & solar terms", route: "/calendar" },
  { emoji: "🌅", titleZh: "每日運勢", titleEn: "Daily Fortune", descZh: "生肖 + 星座今日運勢", descEn: "Today's fortune by zodiac & sign", route: "/daily" },
  { emoji: "💕", titleZh: "合婚配對", titleEn: "Compatibility", descZh: "兩人八字/靈數配對分析", descEn: "BaZi & numerology compatibility", route: "/match" },
  { emoji: "✋", titleZh: "手面相 AI", titleEn: "Palm Reading AI", descZh: "AI 辨識手掌紋路解讀", descEn: "AI palm line recognition & reading", route: "/palm" },
  { emoji: "📊", titleZh: "流年報告", titleEn: "Annual Report", descZh: "生成你的年度運勢 PDF", descEn: "Generate your annual fortune PDF", route: "/annual" },
];

const ToolGrid = () => {
  const { t } = useI18n();

  return (
    <section id="tools" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif-zh font-bold text-center mb-2 gold-text">
          {t("命理工具", "Fortune Tools")}
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12">
          {t("12 種中西命理工具，探索你的命運密碼", "12 tools blending Eastern & Western wisdom")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <ToolCard key={tool.route} {...tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolGrid;
