let chartData = {};
let timestampStr = msg.payload['dataUpdate'];
let date = new Date(timestampStr);
let dates = [];
for (let i = 0; i < 5; i++) {
    dates.push(new Date(date.setDate(date.getDate() +
        1)).toISOString().split('T')[0]);
}
chartData.labels = dates;
chartData.series = ['Probabilidade de chuva', 'Temperatura máxima',
    'Temperatura mínima'];
chartData.data = [];
let rainProb = [], tempMax = [], tempMin = [];
for (let data of msg.payload.data) {
    rainProb.push(data.precipitaProb);
    tempMax.push(data.tMax);
    tempMin.push(data.tMin);
}
chartData.data.push(rainProb);
chartData.data.push(tempMax);
chartData.data.push(tempMin);
msg.payload = [chartData];

return msg;