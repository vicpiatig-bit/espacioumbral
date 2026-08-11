import { CTA_LABEL, whatsappUrl } from "@/config/umbral";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "quiet";

const styles: Record<Variant, string> = {
  solid:
    "bg-foreground text-background hover:bg-foreground/88 border border-transparent",
  outline:
    "border border-foreground/25 text-foreground hover:border-foreground/60 hover:bg-foreground/[0.03]",
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
        "inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
        styles[variant],
        className,
      )}
    >
      {label}
    </a>
  );
}