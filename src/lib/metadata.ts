export const BASE_URL = "https://www.thelaxm.com";

export function canonicalUrl(path: string) {
  const normalizedPath = path === "/" ? "" : path.replace(/\/+$|^\s+|\s+$/g, "");
  return `${BASE_URL}${normalizedPath.startsWith("/") || normalizedPath === "" ? normalizedPath : `/${normalizedPath}`}`;
}
