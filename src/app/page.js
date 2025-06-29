"use client";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    // Dynamically load the WURFL script
    const script = document.createElement("script");
    script.src = "https://wurfl.io/wurfl.js"; // use HTTPS
    script.defer = true;
    script.onload = () => {
      if (typeof WURFL !== "undefined") {
        console.log(WURFL);
        setDeviceInfo(WURFL);
      } else {
        setDeviceInfo({ error: "Device info not available" });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Device Detection</title>
      </Head>
      <div style={{ fontSize: "2em", padding: "20px" }}>
        {deviceInfo ? (
          <pre>{JSON.stringify(deviceInfo, null, 2)}</pre>
        ) : (
          "Loading device info..."
        )}
      </div>
    </>
  );
}
