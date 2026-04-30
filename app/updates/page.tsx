"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Legacy WordPress news URL — redirects client-side for static export. */
export default function UpdatesRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/news");
  }, [router]);
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted">
      <Link href="/news" className="underline-offset-2 hover:underline">
        Continue to news →
      </Link>
    </div>
  );
}
