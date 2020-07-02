#/bin/bash
sudo apt update -y 
sudo apt install ruby -y 
sudo apt install ruby-railties -y
sudo apt install nodejs -y
sudo apt install ruby-bundler -y

# Most of these are dependencies to get rails to install properly because of nokogiri
sudo apt install ruby-dev -y
sudo apt install make -y
sudo apt install build-essential -y
sudo apt install libxslt-dev libxml2-dev -y
sudo apt install libsqlite3-dev -y

# Install Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn -y

# Install node modules
yarn install

# Install gems
bundle config build.nokogiri --use-system-libraries
bundle install
