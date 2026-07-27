"use client";

import { useEffect, useRef } from "react";

export default function ChatWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.innerHTML = `
      <div data-chat-widget data-widget-id="6a43ec3f55ef5e64139c329c" data-location-id="e39iT4786XKRpq8l9uga"></div>
      <script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="6a43ec3f55ef5e64139c329c"><\/script>
    `;

    return () => {
      el.innerHTML = "";
    };
  }, []);

  return <div ref={ref} />;
}
