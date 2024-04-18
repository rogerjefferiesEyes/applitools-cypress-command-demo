module.exports = {
    appName: 'Applitools-Cypress-TS',
    // Specify the number of visual checkpoints Applitools will perform in parallel.
    // Warning: If you have a free account, then concurrency will be limited to 1.
    testConcurrency: 5,

    batchName: "Applitools-Cypress-TS",
    batch: {
        name: "Applitools-Cypress-TS",
        properties: [
            {name: "Cypress", value: "13.6.4"}
        ],
        notifyOnCompletion: true
    },
    notifyOnCompletion: true,

    // Select the browsers and devices to run your tests on via the Ultrafast Grid
    browser: [
        { width: 800, height: 600, name: 'chrome' },
        { width: 1600, height: 1200, name: 'firefox' },
        { width: 1024, height: 768, name: 'safari' },
        { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
        { deviceName: 'Nexus 10', screenOrientation: 'landscape' },
    ],

    // Set the concurrency that tests are rendered with on the UFG
    concurrentSessions: 5,
    sendDom: true
}
