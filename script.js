<![CDATA[// Simulated data updates
function updateMetrics() {
    const cpu = Math.floor(Math.random() * 101);
    const memory = Math.floor(Math.random() * 101);
    const disk = Math.floor(Math.random() * 101);
    
    document.getElementById('cpuFill').style.width = `${cpu}%`;
    document.getElementById('cpuValue').textContent = `${cpu}%`;
    
    document.getElementById('memoryFill').style.width = `${memory}%`;
    document.getElementById('memoryValue').textContent = `${memory}%`;
    
    document.getElementById('diskFill').style.width = `${disk}%`;
    document.getElementById('diskValue').textContent = `${disk}%`;
}

function updateServices() {
    const statuses = ['green', 'yellow', 'red'];
    document.querySelector('#apiService .status-indicator').className = 'status-indicator ' + statuses[Math.floor(Math.random() * 3)];
    document.querySelector('#dbService .status-indicator').className = 'status-indicator ' + statuses[Math.floor(Math.random() * 3)];
    document.querySelector('#cacheService .status-indicator').className = 'status-indicator ' + statuses[Math.floor(Math.random() * 3)];
}

const sampleLogs = [
    'INFO: System started',
    'WARN: High load detected',
    'ERROR: Connection timeout',
    'INFO: Backup completed',
    'DEBUG: User logged in'
];

function addLog() {
    const log = document.createElement('p');
    log.textContent = `${new Date().toISOString()} - ${sampleLogs[Math.floor(Math.random() * sampleLogs.length)]}`;
    const logStream = document.getElementById('logStream');
    logStream.appendChild(log);
    logStream.scrollTop = logStream.scrollHeight;
}

const sampleAlerts = [
    'High CPU Usage',
    'Low Disk Space',
    'Service Downtime',
    'Memory Leak Detected'
];

function addAlert() {
    if (Math.random() < 0.2) { // 20% chance
        const alert = document.createElement('li');
        alert.textContent = `${new Date().toISOString()} - ${sampleAlerts[Math.floor(Math.random() * sampleAlerts.length)]}`;
        document.getElementById('alertList').appendChild(alert);
    }
}

// Initial updates
updateMetrics();
updateServices();
addLog();
addAlert();

// Live updates
setInterval(updateMetrics, 2000);
setInterval(updateServices, 5000);
setInterval(addLog, 3000);
setInterval(addAlert, 5000);]]>