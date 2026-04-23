import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function HwrapLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  // No-cache headers are set via next.config or middleware for HWRAP routes
  return <>{children}</>;
}
