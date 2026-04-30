/** Mirrors `next.config` `basePath` for paths not rewritten by the bundler (e.g. JSON). */
export const publicBasePath =
  (typeof process.env.NEXT_PUBLIC_BASE_PATH === "string"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : ""
  ).replace(/\/$/, "") || "";

export function withBasePath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http") || path.startsWith("//")) return path;
  if (!publicBasePath || !path.startsWith("/")) return path;
  if (path === publicBasePath || path.startsWith(`${publicBasePath}/`))
    return path;
  return `${publicBasePath}${path}`;
}
