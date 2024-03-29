"use client";

import Button from "../_ui/button";

export default function FooterButton({
  href,
  src,
  name,
}: {
  href: string;
  src: string;
  name: string;
}) {
  return (
    <a href={href} target="_blank">
      <Button image={{ src, alt: name }}>{name}</Button>
    </a>
  );
}
