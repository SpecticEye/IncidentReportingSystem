export default function getReport(id) {
    var report;
    fetch(`http://localhost:3001/reports/${id}`)
        .then(res => res.json())
        .then(data => report = data);

    return report;
}