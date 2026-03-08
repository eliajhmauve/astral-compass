import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  emoji: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  route: string;
  index: number;
}

const ToolCard = ({ emoji, titleZh, titleEn, descZh, descEn, route, index }: ToolCardProps) => {
  const { t } = useI18n();

  return (
    <Link
      to={route}
      className="glass-card rounded-2xl p-6 group block animate-fade-in-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-serif-zh font-bold text-foreground mb-0.5">
        {t(titleZh, titleEn)}
      </h3>
      <p className="text-xs text-muted-foreground mb-3">
        {t(titleEn, titleZh)}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {t(descZh, descEn)}
      </p>
      <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:text-gold-light transition-colors">
        {t("開始使用", "Start")}
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
};

export default ToolCard;
