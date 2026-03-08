import { useI18n } from "@/lib/i18n";

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-serif-zh font-bold mb-6 gold-text">
          {t("關於福青施老師", "About Master Fu Qing Shi")}
        </h2>
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
            {t(
              "「福青施老師」是一個融合中西命理智慧的現代數位平台。我們相信，命理不是宿命論，而是一面鏡子——幫助你認識自己、理解他人、做出更好的選擇。",
              '"Master Fu Qing Shi" is a modern digital platform blending Eastern & Western fortune wisdom. We believe fortune-telling is not fatalism, but a mirror — helping you understand yourself, others, and make better decisions.'
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {t(
              "無論你是命理愛好者還是初次探索者，這裡都有適合你的工具。智慧而溫暖，神秘但不迷信。",
              "Whether you're a seasoned enthusiast or a curious beginner, there's a tool here for you. Wise yet warm, mystical but never superstitious."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
