/** Encode local paths so filenames with spaces work on Linux hosts (e.g. Vercel). */
export function resolveImageSrc(src: string): string {
  if (!src || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  if (!src.startsWith('/')) {
    return src;
  }

  try {
    const decoded = decodeURI(src);
    return decoded
      .split('/')
      .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
      .join('/');
  } catch {
    return src;
  }
}
