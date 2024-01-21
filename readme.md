# Get Node Package Version

## Overview
"Get Node Package Version" is a GitHub Action that allows you to extract version information from a `package.json` file. It reads the major, minor, and patch versions, as well as the complete version string from the specified `package.json` file.

## Usage
This action can be integrated into your workflows to automatically fetch version details from a Node.js project's `package.json` file. 

### Inputs
- **`package-path`**: The path to your `package.json` file. 
  - Default: `"."` (current directory)
  - This is an optional input. If not specified, it defaults to the `package.json` in the current directory.

### Outputs
- **`major-version`**: The major version of your package.
- **`minor-version`**: The minor version of your package.
- **`patch-version`**: The patch version of your package.
- **`package-version`**: The full version string from your `package.json`.

### Example Workflow
Add the following step to your GitHub Actions workflow to use this action:

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v2

  - name: Get Node Package Version
    id: package-version
    uses: Mohmn/node-package-version@v1
    with:
      package-path: 'path/to/package.json' # Optional

  - name: Use Versions
    run: |
      echo "Major Version: ${{ steps.package-version.outputs.major-version }}"
      echo "Minor Version: ${{ steps.package-version.outputs.minor-version }}"
      echo "Patch Version: ${{ steps.package-version.outputs.patch-version }}"
      echo "Package Version: ${{ steps.package-version.outputs.package-version }}"
