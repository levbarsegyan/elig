# Installing elioWay
## Prerequisites
- yarn is installed
  - Recommended over npm for package management.
```shell
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt upgrade -y
sudo apt install yarn -y
yarn global add npm
export PATH="$(yarn global bin):$PATH"
# OR... fish people
set -U fish_user_paths /home/tim/.yarn/bin $fish_user_paths
```
- node and npm are installed.
  - If not using yarn, We recommended using [nvm](https://github.com/creationix/nvm) to install both.
  - If using yarn - node is already installed: just run `yarn global add npm`
- yo qunit mocha prettier and gulp-cli are installed globally.
```shell
yarn global add yo qunit mocha gulp-cli prettier
```
or
```shell
npm i -g yo qunit mocha gulp-cli prettier
```
## Install
## Development Setup
```shell
mkdir elio
cd elio
git clone git@gitlab.com:elioway/eliosin.git
cd eliosin
yarn
git clone git@gitlab.com:eliobelievers/god.git
# yarn
git clone git@gitlab.com:eliobelievers/eve.git
# yarn
git clone git@gitlab.com:eliobelievers/adon.git
# yawn
git clone git@gitlab.com:eliobelievers/generator-sin.git
# yawn
```
## More
- [elioWay Index](index.md)
