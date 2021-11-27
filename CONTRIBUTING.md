# Contribution Guidelines

DAO Job Board is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and enhancements are all listed on the [issues](https://github.com/Developer-DAO/DAO-job-board/issues) tab and labeled accordingly. Feel free to open bug tickets and make feature requests. Easy bugs and features will be tagged with the `good first issue` label.

If you're a member of Developer DAO then please request to be invited over into the [GitHub Organization](https://github.com/Developer-DAO), this will allow your pull requests to have Vercel preview builds which makes reviewing pull requests easier. Reach out over Discord on **_#github-org-invitations_** channel at **Development Guild** category

## Issues

If you encounter a bug, please file a bug report. If you have a feature to request, please open a feature request. If you would like to work on an issue or feature, there is no need to request permission. Please add tests to any new features.

## Pull Requests

In order to create a pull request for DAO Job Board, follow the GitHub instructions for [Creating a pull request from a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Please link your pull request to an existing issue.

## Installation

1. [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install) if you haven't already.

2. Clone this repository and install dependencies.

   ```bash
   git clone https://github.com/Developer-DAO/DAO-job-board

   npm install # or `yarn install`
   ```

3. Ask an invite to the Doppler Developer DAO workspace from [carlomigueldy.eth](https://github.com/carlomigueldy) or [angelgomez.eth](https://github.com/angeljgomezc)

4. Install Doppler CLI into your local machine

   ```bash
   # [macOS]
   brew install dopplerhq/cli/doppler

   # -----------------------------

   # [Windows]

   # Add Doppler's scoop repo
   scoop bucket add doppler https://github.com/DopplerHQ/scoop-doppler.git

   # Install latest doppler cli
   scoop install doppler

   # -----------------------------

   # [Debian/Ubuntu]

   # Install pre-reqs
   sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates curl gnupg

   # Add Doppler's GPG key
   curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | sudo apt-key add -

   # Add Doppler's apt repo
   echo "deb https://packages.doppler.com/public/cli/deb/debian any-version main" | sudo tee /etc/apt/sources.list.d/doppler-cli.list

   # Fetch and install latest doppler cli
   sudo apt-get update && sudo apt-get install doppler
   ```

   For a thorough complete guide, read more from the [official docs](https://docs.doppler.com/docs/enclave-installation).

5. Verify if Doppler CLI has been installed
   ```bash
   doppler --version
   ```

6. Authenticate to Doppler.
   ```bash
   doppler login
   ```
   It will ask you to open a URL and gives you a auth code, so make sure to copy that and paste it into Doppler, and from there select "Developer DAO" workspace when it asks you to select one.

7. Setting up Doppler. (Select "Development")
   ```bash
   doppler setup
   ```

8. Start the development server with
   ```bash
   npm run dev # or `yarn dev`
   ```

9. Open to browser `http://localhost:3000`
