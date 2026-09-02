// components/Eyebrow.tsx
export default function Eyebrow({ text = "About us" }: { text?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 text-[12px] uppercase tracking-[0.18em] text-primary my-4">
      {/* left marker */}
      <span className="relative inline-flex items-center">
        <span className="h-[2px] w-8 bg-gradient-to-r from-transparent via-current to-current/90" />
        <span className="ml-1 h-2 w-2 rotate-45 bg-current rounded-[1px]" />
      </span>

      <span className="text-[10px] md:text-sm text-text-muted">{text}</span>

      {/* right marker (mirrors left) */}
      <span className="relative inline-flex items-center rotate-180">
        <span className="h-[2px] w-8 bg-gradient-to-r from-transparent via-current to-current/90" />
        <span className="ml-1 h-2 w-2 rotate-45 bg-current rounded-[1px]" />
      </span>
    </div>
  );
}
