import { useI18n } from "@/lib/i18n";

const features = [
  {
    emoji: "🔮",
    titleZh: "中西合璧",
    titleEn: "East Meets West",
    descZh: "結合八字、紫微、塔羅、靈數等中西命理體系",
    descEn: "Combining BaZi, Zi Wei, Tarot, Numerology and more",
  },
  {
    emoji: "🌐",
    titleZh: "雙語支援",
    titleEn: "Bilingual",
    descZh: "繁體中文 + English 完整切換",
    descEn: "Full Traditional Chinese & English support",
  },
  {
    emoji: "🔒",
    titleZh: "隱私保護",
    titleEn: "Privacy First",
    descZh: "你的個人資料絕不外洩",
    descEn: "Your personal data stays private and secure",
  },
];

const FeatureSection = () => {
  const { t } = useI18n();

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif-zh font-bold text-center mb-12 gold-text">
          {t("平台特色", "Why Us")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-serif-zh font-bold text-lg text-foreground mb-2">
                {t(f.titleZh, f.titleEn)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(f.descZh, f.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
