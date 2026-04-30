"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Legacy path from WordPress — static export cannot use next.config redirects. */
export default function PortfolioRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted">
      <Link href="/" className="underline-offset-2 hover:underline">
        Continue to portfolio →
      </Link>
    </div>
  );
}
