FROM node:12

RUN apt-get update && apt-get install -y git \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /usr/src/automation

WORKDIR /usr/src/automation

# Chrome dependencies
RUN apt-get update

ENV CHROME_VERSION 87.0.4280.88
RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}-1_amd64.deb" && \
  dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
  apt-get install -f -y && \
  rm -f /usr/src/google-chrome-stable_current_amd64.deb
RUN google-chrome --version
# "fake" dbus address to prevent errors
# https://github.com/SeleniumHQ/docker-selenium/issues/87
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null
EXPOSE 8080

RUN git clone --branch main --single-branch --depth 1 https://github.com/singh-sukhpreet/WebDriverIO---Salesfloor.git

WORKDIR /usr/src/automation/WebDriverIO---Salesfloor

RUN npm install

