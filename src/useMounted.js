import { useEffect, useState } from "react";

// False during prerender and the first client render (so hydration matches),
// true after mount. Gate anything that needs document.body, like portals.
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
