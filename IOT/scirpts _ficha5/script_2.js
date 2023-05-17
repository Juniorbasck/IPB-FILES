let data = msg.payload;
let keys = Object.keys(data);
let sortedKeys = keys.sort((v1, v2) => new Date(v1).getTime() - new
    Date(v2).getTime());
let newData = {};
let stationCode = '1200576';
newData.labels = sortedKeys;
newData.series = ['Temperature', 'Humidity'];
newData.data = [];
let tempValues = [], humValues = [];
for (let k of sortedKeys) {
    tempValues.push(data[k][stationCode]['temperatura']);
    humValues.push(data[k][stationCode]['humidade']);
}
newData.data.push(tempValues);
newData.data.push(humValues);
msg.payload = [newData];

return msg;
