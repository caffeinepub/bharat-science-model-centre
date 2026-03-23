import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
}

export function useSEO({ title, description }: SEOConfig) {
  useEffect(() => {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }
  }, [title, description]);
}
