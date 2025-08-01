// src/components/GithubCalendar.jsx
import { useEffect, useRef } from "react";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";
import { timeParse } from "d3-time-format";

function GithubCalendar({ abhinavA4 = "abhinavsingh" }) {
  const calRef = useRef(null);

  useEffect(() => {
    async function fetchContributions() {
      const res = await fetch(`https://github-contributions-api.deno.dev/${abhinavA4}`);
      const data = await res.json();

      const flatData = {};
      for (const week of data.contributions) {
        for (const day of week.days) {
          const ts = new Date(day.date).getTime() / 1000;
          flatData[ts] = day.count;
        }
      }

      const cal = new CalHeatmap();
      cal.paint({
        itemSelector: calRef.current,
        domain: "month",
        subDomain: "day",
        range: 12,
        cellSize: 15,
        domainGutter: 15,
        data: {
          source: flatData,
          type: "json",
        },
        scale: {
          color: {
            type: "quantize",
            scheme: "Blues",
            domain: [0, 20],
          },
        },
        date: {
          start: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        },
        tooltip: {
          enabled: true,
          text: function (timestamp, value) {
            const date = new Date(timestamp * 1000).toDateString();
            return `${value || 0} contributions on ${date}`;
          },
        },
      });
    }

    fetchContributions();
  }, [abhinavA4]);

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-4">
        GitHub Contributions
      </h2>
      <div ref={calRef} className="overflow-x-auto"></div>
    </div>
  );
}

export default GithubCalendar;
