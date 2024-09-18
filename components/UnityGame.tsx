import React, { useEffect } from 'react';
import Script from 'next/script';

const UnityGame: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/Build/YourBuildName.loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="unity-container" className="unity-desktop">
      <canvas id="unity-canvas" width={960} height={600} style={{ width: '960px', height: '600px' }}></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"></div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button"></div>
        <div id="unity-build-title">YourBuildName</div>
      </div>
      <Script id="unity-loader" strategy="afterInteractive">
        {`
          var container = document.querySelector("#unity-container");
          var canvas = document.querySelector("#unity-canvas");
          var loadingBar = document.querySelector("#unity-loading-bar");
          var progressBarFull = document.querySelector("#unity-progress-bar-full");
          var fullscreenButton = document.querySelector("#unity-fullscreen-button");
          var warningBanner = document.querySelector("#unity-warning");

          // Show a fullscreen button for mobile devices when supported
          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            container.className = "unity-mobile";
          }

          // By default Unity keeps WebGL canvas render target size matched with
          // the DOM size of the canvas element (scaled by window.devicePixelRatio)
          // Set this to false if you want to decouple this synchronization from
          // happening inside the engine, and you would instead like to size up
          // the canvas DOM size and WebGL render target sizes yourself.
          // config.matchWebGLToCanvasSize = false;

          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            // Mobile device style: fill the whole browser client area with the game canvas:

            var meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
            document.getElementsByTagName('head')[0].appendChild(meta);
            container.className = "unity-mobile";
            canvas.className = "unity-mobile";

            // To lower canvas resolution on mobile devices to gain some
            // performance, uncomment the following line:
            // config.devicePixelRatio = 1;
          } else {
            // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

            canvas.style.width = "960px";
            canvas.style.height = "600px";
          }

          loadingBar.style.display = "block";

          var script = document.createElement("script");
          script.src = "/Build/YourBuildName.loader.js";
          script.onload = () => {
            createUnityInstance(document.querySelector("#unity-canvas"), {
              dataUrl: "/Build/YourBuildName.data.br",
              frameworkUrl: "/Build/YourBuildName.framework.js.br",
              codeUrl: "/Build/YourBuildName.wasm.br",
              streamingAssetsUrl: "StreamingAssets",
              companyName: "DefaultCompany",
              productName: "YourBuildName",
              productVersion: "0.1",
            }, (progress) => {
              progressBarFull.style.width = 100 * progress + "%";
            }).then((unityInstance) => {
              loadingBar.style.display = "none";
              fullscreenButton.onclick = () => {
                unityInstance.SetFullscreen(1);
              };
            }).catch((message) => {
              alert(message);
            });
          };
          document.body.appendChild(script);
        `}
      </Script>
    </div>
  );
};

export default UnityGame;