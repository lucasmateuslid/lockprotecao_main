import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
  }
}

export function useGTMPageView(enabled = true) {
  const location = useLocation();

  useEffect(() => {
    if (!enabled) return;

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [enabled, location]);
}
