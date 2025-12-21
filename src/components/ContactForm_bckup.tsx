"use client";

import { useEffect } from "react";

export default function ContactFormBackup() {
  useEffect(() => {
    try {
      const containerId = "zf_div_S0H5jG2zFAzdCf57Q6MGHKPqiIsp2GhOYdFXpmdVmPI";
      const container = document.getElementById(containerId);

      // Prevent multiple injections if component re-renders
      if (container && container.innerHTML.trim() !== "") {
        return;
      }

      const f = document.createElement("iframe");
      const ifrmSrc =
        "https://forms.zohopublic.in/financethe1/form/ContactUs/formperma/S0H5jG2zFAzdCf57Q6MGHKPqiIsp2GhOYdFXpmdVmPI?zf_rszfm=1";

      f.src = ifrmSrc;
      f.style.border = "none";
      f.style.height = "1519px"; // Initial height from script
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";
      f.setAttribute("aria-label", "Contact Us");

      if (container) {
        container.appendChild(f);
      }

      const handleMessage = (event: MessageEvent) => {
        const evntData = event.data;
        if (evntData && typeof evntData === "string") {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";

            if (container) {
              const iframe = container.getElementsByTagName("iframe")[0];
              if (
                iframe &&
                iframe.src.indexOf("formperma") > 0 &&
                iframe.src.indexOf(zf_perma) > 0
              ) {
                const prevIframeHeight = iframe.style.height;
                let zf_tout = false;
                if (zf_ifrm_data.length === 3) {
                  iframe.scrollIntoView();
                  zf_tout = true;
                }
                if (prevIframeHeight !== zf_ifrm_ht_nw) {
                  if (zf_tout) {
                    setTimeout(() => {
                      iframe.style.height = zf_ifrm_ht_nw;
                    }, 500);
                  } else {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }
                }
              }
            }
          }
        }
      };

      window.addEventListener("message", handleMessage, false);

      return () => {
        window.removeEventListener("message", handleMessage);
        if (container) {
          container.innerHTML = ""; // Cleanup on unmount
        }
      };
    } catch (e) {
      console.error("Zoho Form Error:", e);
    }
  }, []);

  return (
    <div className="mt-8 w-full flex justify-center">
      <div
        id="zf_div_S0H5jG2zFAzdCf57Q6MGHKPqiIsp2GhOYdFXpmdVmPI"
        className="w-full flex justify-center"
      ></div>
    </div>
  );
}
