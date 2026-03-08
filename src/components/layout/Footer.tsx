import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif-zh font-bold gold-text text-lg mb-3">
              {t("福青施老師", "Master Fu Qing Shi")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "融合中西命理智慧的現代數位占卜平台",
                "A modern digital fortune platform blending Eastern & Western wisdom"
              )}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">
              {t("熱門工具", "Popular Tools")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/numerology" className="hover:text-primary transition-colors">{t("生命靈數", "Life Path Number")}</a></li>
              <li><a href="/tarot" className="hover:text-primary transition-colors">{t("AI 塔羅占卜", "AI Tarot")}</a></li>
              <li><a href="/bazi" className="hover:text-primary transition-colors">{t("八字排盤", "BaZi Chart")}</a></li>
              <li><a href="/ziwei" className="hover:text-primary transition-colors">{t("紫微斗數", "Zi Wei Dou Shu")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">
              {t("關於平台", "About")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">{t("品牌故事", "Our Story")}</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">{t("平台特色", "Features")}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 福青施老師 Master Fu Qing Shi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
