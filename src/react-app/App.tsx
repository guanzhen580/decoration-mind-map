// src/App.tsx

import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import honoLogo from "./assets/hono.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import "./App.css";

/**
 * App 主组件
 * 包含计数器功能和API调用示例，已适配GitHub Pages环境
 */
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("unknown");
  
  /**
   * 调用API函数
   * 在GitHub Pages环境中会优雅降级为使用模拟数据
   */
  const callApi = async (): Promise<void> => {
    try {
      // 尝试调用API - 在GitHub Pages环境下这将失败
      const response = await fetch("./api/"); // 使用相对路径
      if (response.ok) {
        const data = await response.json();
        setName(data.name);
      } else {
        // API调用失败，使用模拟数据
        console.log("API调用失败，使用模拟数据");
        setName("模拟API数据 - GitHub Pages环境");
      }
    } catch (error) {
      // 捕获网络错误，使用模拟数据
      console.log("网络错误，使用模拟数据:", error);
      setName("模拟API数据 - GitHub Pages环境");
    }
  };

  return (
    <React.Fragment>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://hono.dev/" target="_blank">
          <img src={honoLogo} className="logo cloudflare" alt="Hono logo" />
        </a>
        <a href="https://workers.cloudflare.com/" target="_blank">
          <img
            src={cloudflareLogo}
            className="logo cloudflare"
            alt="Cloudflare logo"
          />
        </a>
      </div>
      <h1>Decoration Mind Map</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          aria-label="increment"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={callApi}
          aria-label="get name"
        >
          Name from API is: {name}
        </button>
        <p>
          Edit <code>worker/index.ts</code> to change the name
        </p>
      </div>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </React.Fragment>
  );
};

export default App;
