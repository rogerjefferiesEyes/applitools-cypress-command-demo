import { defineConfig } from "cypress";
import eyesPlugin from '@applitools/eyes-cypress'

export default eyesPlugin(defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
        },
    },
    "reporter": "mochawesome",
    "reporterOptions": {
        "reportDir": "results/cypress/specs",
        "overwrite": false,
        "html": true,
        "json": true,
        "timestamp": "longDate",
        "reportFilename": "[datetime]-[name]-report_[status]",
    }
}));
