"use client";
import { useEffect, useRef } from "react";

export default function AdUnit() {
    const adRef = useRef(null);

    useEffect(() => {
        if (window.adsbygoogle && adRef.current && !adRef.current.innerHTML.trim()) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {
                console.error("AdSense error:", err);
            }
        }
    }, []);

    return (
        <div className="my-10 flex justify-center w-full overflow-hidden min-h-[120px]">
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: "block", textAlign: "center", width: "100%" }}
                data-ad-client="ca-pub-9802160883492803"
                data-ad-slot="3872129805"
                data-ad-format="fluid"
                data-ad-layout-key="-gs-3+1f-3d+2z"
            ></ins>
        </div>
    );
}