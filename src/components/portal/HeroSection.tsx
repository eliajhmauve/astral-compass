import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <div className="animate-fade-in-up">
        <h1 className="font-serif-zh text-4xl md:text-6xl font-bold gold-text text-glow-gold mb-2">
          {t("福青施老師", "Master Fu Qing Shi")}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 font-display italic">
          {t("Master Fu Qing Shi", "福青施老師")}
        </p>
      </div>

      <div className="w-12 h-px bg-primary/40 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }} />

      <h2
        className="text-2xl md:text-4xl font-serif-zh font-bold text-foreground mb-3 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        {t("探索你的命運密碼", "Decode Your Destiny")}
      </h2>

      <p
        className="text-muted-foreground text-sm md:text-lg max-w-xl mb-10 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        {t(
          "12 種中西命理工具 · 一站式自我探索平台",
          "12 Fortune Tools · One Platform"
        )}
      </p>

      <a
        href="#tools"
        className="gold-gradient text-primary-foreground font-semibold px-8 py-3 rounded-xl text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all animate-fade-in-up"
        style={{ animationDelay: "0.5s" }}
      >
        ✨ {t("開始探索", "Start Exploring")}
      </a>

      <p
        className="mt-8 text-xs text-muted-foreground animate-pulse-gold animate-fade-in-up"
        style={{ animationDelay: "0.7s" }}
      >
        {t("累計已服務 45,678 人", "45,678+ readings served")}
      </p>
    </section>
  );
};

export default HeroSection;
