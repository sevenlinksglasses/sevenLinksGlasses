// src/components/HeroBackground.tsx
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-[#0D0F13]" />

      {/* dotted halftone wedge (top-left) – smaller area */}
      <div className="hero-dots absolute -top-[6cqh] left-[6cqw] w-[68cqw] h-[40cqh] opacity-60" />

      {/* grid block (right-middle) */}
      <div className="hero-grid absolute right-[10cqw] top-[12cqh] w-[52cqw] h-[50cqh] opacity-55" />

      {/* blue rays (top-right) */}
      <div className="hero-rays absolute -right-[6cqw] -top-[6cqh] w-[70cqw] h-[46cqh]" />
    </div>
  );
}
