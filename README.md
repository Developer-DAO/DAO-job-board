# DAO-job-board
A job board to connect Web3 talent with Web3 opportunities 

[Link to the Discord channel](https://discord.com/channels/883478451850473483/888867921089138729/888877424257925200)

## The motive
Finding meaningful work, giving people new opportunities, and helping organizations find the talent they need. 

## **What is this repo?**

This is the code for the job board at [Vercel](https://job-board-sage.vercel.app)

Job board for the DAO in development

# **Development**

## **How's this Built?**

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [NPM](https://www.npmjs.com/)
- [Yarn Workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [Chakra UI](https://chakra-ui.com/)

### Local Development Environment

1. Clone this repo with Git
2. Install dependencies by running `npm install` or `yarn install`
3. Ask an invite to the Doppler Developer DAO workspace from [carlomigueldy.eth](https://github.com/carlomigueldy) or [angelgomez.eth](https://github.com/angeljgomezc)
4. Install Doppler CLI into your local machine
   ```bash
   # [macOS]
   brew install dopplerhq/cli/doppler

   # -----

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
   
5. Verify if Doppler CLI has been installed completely running `doppler --version`
6. Authenticate to Doppler by running `doppler login`. It will ask you to open a URL and gives you a auth code, so make sure to copy that and paste it into Doppler, and from there select "Developer DAO" workspace when it asks you to select one.
7. Run `doppler setup` and select "development"
8. Start the development server with `npm run dev` or `yarn dev`
9.  Open development site by going to `http//:localhost:3000`

## **How to Contribute**

1. Check the [ISSUES](https://github.com/Developer-DAO/DAO-job-board/issues) for a TO-DO list of problems to fix and things to add to the website.

2. Ask other contributors to see if no one has taken the issue yet. If you're interested in tackling such a feature and it's still available, we will assign you to the task.

3. Fork the repo and create your own branch using `git checkout -b your_branch_name`. Remember to use a branch name that describes WHAT you're doing/fixing.

4. Once your work is done with the local copy of the repo, don't hesitate to draw a pull request. We'll gladly revise and push as deemed fit.

5. Feel free to add new issues as you read the code and find inconsistencies and/or possible features that may add up to the website. Follow the labeling standards to make it easier to understand what you're proposing.

6. Document changes and/or issues clearly. Make it easy for everyone involved to understand your ideas/changes.

**NOTE**: The [ISSUES](https://github.com/Developer-DAO/DAO-job-board/issues) page will work as the TO-DO list with everything you need to start contributing. Read every issue to understand what's needed and whether it's something you can help with. Try to go through the [CONTRIBUTING GUIDELINES](https://github.com/Developer-DAO/developerdao.com/blob/main/CONTRIBUTING.md) beforehand.
