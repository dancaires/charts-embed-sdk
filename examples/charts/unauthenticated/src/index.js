import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "@alenaksu/json-viewer";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-vave-management-gcocu", 
});

const chart = sdk.createChart({
  chartId: "636eca04-f4e1-4244-8493-2b183b62100f", 
  height: "700px",
});

async function renderChart() {
  await chart.render(document.getElementById("chart"));

  document
    .getElementById("themeSwitch")
    .addEventListener("change", async function () {
      if (this.checked) {
        await chart.setTheme("dark");
        document.body.classList.toggle("dark-mode", true);
      } else {
        await chart.setTheme("light");
        document.body.classList.toggle("dark-mode", false);
      }

      var currentTheme = await chart.getTheme();
      document.getElementById("currentTheme").innerText = currentTheme;
    });

}

renderChart().catch((e) => window.alert(e.message));
