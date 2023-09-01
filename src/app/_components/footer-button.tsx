"use client";

import Button from "@/ui/button";

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
      <Button image={{ src, alt: name }} onClick={() => {}}>
        {name}
      </Button>
    </a>
  );
}
