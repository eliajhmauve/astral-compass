import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, toggleLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">☯</span>
          <span className="font-serif-zh text-lg font-bold gold-text">
            {t("福青施老師", "Master Fu Qing Shi")}
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t("工具", "Tools")}
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t("特色", "Features")}
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t("關於", "About")}
          </a>
          <button
            onClick={toggleLang}
            className="text-sm px-3 py-1 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            🌐 {lang === "zh" ? "EN" : "中"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs px-2 py-1 rounded-full border border-primary/30 text-primary"
          >
            🌐 {lang === "zh" ? "EN" : "中"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-border px-6 py-4 flex flex-col gap-3">
          <a href="#tools" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
            {t("工具", "Tools")}
          </a>
          <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
            {t("特色", "Features")}
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
            {t("關於", "About")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
