# docker-slack-test-stack
A Selenium Driven Test Stack for the Slack Electron Application


# Nightwatch test that
- connect to 4444 on docker,
- start a session,
- start slack app (inside the docker),
- login, join group and send HelloWorld that will be great,
- if too much let me know where there is a problem and will reduce scope
- Write a Test that uses Chromedriver with diffrent user agent
- Write a Test that Installs and uses Flash Pipa with Chrome Stable


# Run Selenium Chrome Standalone (Could use chromedriver Standalone?)
```
docker run --name selenium-standalone-chrome-3 -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.0.1-aluminum
git clone
cd working
npm install
npm test
docker rm -f selenium-standalone-chrome-3
```


# Conclusion
- Adding headers via Selenium isn't Possible in a Easy way so we use a Workaround via Custom NodeJS Proxy as we already use NODEJS this is the most stable and easy way  https://github.com/SeleniumHQ/selenium-google-code-issue-archive/issues/2047
- Flash Works Like a Charm Out of The Box
