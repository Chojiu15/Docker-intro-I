# **Node.js Application: `node_app_to_dockerize`** 🚀🐳

This is a simple **Node.js application**, used to help you practice and learn **Docker basics**, including containerization and Dockerfile creation.

---

## **Pre-requires**:
[Docker installation](https://docs.docker.com/desktop/)

## **Commands to Run This App Locally** 📦

Before containerizing the application, you can run it locally by following these steps:

1. **Install Dependencies and run the app**:
   ```bash
   npm install
   npm run dev
   ```

---

## **Dockerizing the Application** 🐋

Now, let's containerize the **Node.js** app using Docker! Follow these steps to create a **Dockerfile**, build the Docker image, and run the app inside a Docker container.

### **Step 1: Create a Dockerfile** 📝

At the root of the application directory, create a file named **Dockerfile** (no file extension). Inside it, add the following instructions:

```Dockerfile
# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on (3000)
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js",]
```

### **Step 2: Build the Docker Image** 🔨
Once the Dockerfile is ready, build the Docker image using this command:
```bash
docker build -t node_app_to_dockerize .
```

### **Step 3: Run the Docker Container 🏗️** 🔨

Run the Docker container with the following command:
```bash
docker run -p 3000:3000 node_app_to_dockerize
```

---

## **Docker Container Management 🛠️** 🔨
Once your container is up and running, here are some useful commands to manage it:

#### View Running Containers 👀
To list all running containers, use:
```bash
docker ps
```

#### Stop a Running Container:  🛑
To stop a running container, use the container's ID or name:
```bash
docker stop <container_id_or_name>
```
#### Remove a Stopped Container 🧹
To remove a stopped container:

```bash
docker rm <container_id_or_name>
```

#### Remove the Docker Image 🗑️ (Optional)
To free up space, you can remove the image you built:

```bash
docker rmi <container_id_or_name>
```
#### Exploring Inside the Container 🔍
Want to see what’s happening inside the container? You can open a terminal session inside the running container using:

```bash
docker exec -it <container_id_or_name> /bin/bash
```

Once inside, you can run commands like ls to list the contents of the /app directory or explore further.


