From node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install axios
RUN npm install react-router-dom
RUN npm install @tensorflow/tfjs @tensorflow-models/face-landmarks-detection react-webcam
RUN npm install react-icons
COPY . .
EXPOSE 3000
CMD ["npm","start"]