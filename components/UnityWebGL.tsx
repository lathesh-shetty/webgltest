import React, { useEffect } from 'react';

interface UnityWebGLProps {
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
}

declare global {
  interface Window {
    createUnityInstance: any;
  }
}

const UnityWebGL: React.FC<UnityWebGLProps> = ({ loaderUrl, dataUrl, frameworkUrl, codeUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = loaderUrl;
    script.async = true;
    script.onload = () => {
      window.createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: dataUrl,
        frameworkUrl: frameworkUrl,
        codeUrl: codeUrl,
        streamingAssetsUrl: "StreamingAssets",
        companyName: "YourCompanyName",
        productName: "YourUnityProjectName",
        productVersion: "1.0",
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [loaderUrl, dataUrl, frameworkUrl, codeUrl]);

  return (
    <div className="unity-container">
      <canvas id="unity-canvas" width={960} height={600} style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}></canvas>
    </div>
  );
};

export default UnityWebGL;