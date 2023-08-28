"use client";

export default function Content({ children }: { children: React.ReactNode }) {
  return <div className={`content flex justify-center pt-32`}>{children}</div>;
}
