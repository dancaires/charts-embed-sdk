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

}

renderChart().catch((e) => window.alert(e.message));
