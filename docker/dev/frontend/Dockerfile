FROM node:14.17
MAINTAINER operations@openproject.com

ARG DEV_UID=1000
ARG DEV_GID=1001

ENV USER=dev

RUN npm i -g npm

RUN usermod -l $USER -d /home/$USER -m node
RUN usermod -u $DEV_UID $USER
RUN groupadd $USER
RUN groupmod -g $DEV_GID $USER || true

EXPOSE 4200

RUN mkdir -p /home/$USER/openproject/public/assets/frontend
RUN chown $USER:$USER -R /home/$USER/openproject/public

VOLUME ["/home/$USER/openproject", "/home/$USER/openproject/public/assets/frontend"]

WORKDIR /home/$USER/openproject/frontend

USER $USER
