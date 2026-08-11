import { CTA_LABEL, whatsappUrl } from "@/config/umbral";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "quiet";

const styles: Record<Variant, string> = {
  solid:
    "bg-foreground text-background border border-foreground shadow-[0_10px_28px_-14px_color-mix(in_oklab,var(--foreground)_55%,transparent)] hover:bg-foreground/90",
  outline:
    "border border-foreground/70 bg-sand/60 text-foreground hover:bg-foreground hover:text-background hover:border-foreground",
  quiet:
    "border border-transparent text-foreground underline underline-offset-[6px] decoration-foreground/25 hover:decoration-foreground/70",
};

export function WhatsappCta({
  variant = "solid",
  className,
  label = CTA_LABEL,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-9 py-4 text-[0.72rem] font-normal uppercase tracking-[0.22em] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
        styles[variant],
        className,
      )}
    >
      {label}
    </a>
  );
}