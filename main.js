const core = require('@actions/core');
const fs = require('node:fs/promises');
const path = require('node:path');

async function run() {
    try {
        const packagePath = core.getInput('package-path', { required: true });
        const packageJsonFilePath = path.join(process.cwd(), packagePath, 'package.json');
        const { version: packageVersion } = JSON.parse(await fs.readFile(packageJsonFilePath, 'utf8'));

        if (!packageVersion)
            throw new Error('Your package.json doesn\'t have a version key');

        const [major, minor, patch] = packageVersion.split('.');
        core.setOutput('major-version', major);
        core.setOutput('minor-version', minor);
        core.setOutput('patch-version', patch);
        core.setOutput('package-version', packageVersion);
    } catch (error) {
        core.setFailed(`Error: ${error.message}`);
    }
}

run();
