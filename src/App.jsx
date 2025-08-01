// GithubCanvas.jsx
import { useEffect, useRef } from "react";
import { drawContributions, fetchGitHubContributions } from "github-contributions-canvas";

function GithubCalendar({ username = "abhinavA4" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    async function drawCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const data = await fetchGitHubContributions(username); // ✅ Fetch the proper data

      drawContributions(canvas, {
        data, // ✅ Required!
        username,
        themeName: "standard",
        footerText: `@${username} on GitHub`,
      });
    }

    drawCanvas();
  }, [username]);

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        GitHub Contributions
      </h2>
      <canvas ref={canvasRef} className="w-full max-w-full h-auto" />
    </div>
  );
}

export default GithubCalendar;
