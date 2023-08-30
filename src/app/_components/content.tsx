"use client";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`content min-h-screen min-w-full flex flex-col items-center pt-32`}
    >
      {children}
    </div>
  );
}
