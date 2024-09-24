# **Next.js Dockerization Exercise** 🚀

In this exercise, you will **Dockerize** a simple **Next.js** app. Follow these steps to complete the exercise and enhance your understanding of containerization.

---

## **Steps** 📝

1. **Create a `Dockerfile`** in this directory.
2. Your `Dockerfile` should:
   - Use the **official Node.js base image**.
   - Set the **working directory** inside the container.
   - Copy the `package.json` and `package-lock.json` files.
   - Install the dependencies using `npm install`.
   - Copy the rest of the application code.
   - Expose port 3000 (Next.js default).
   - Run the app with `npm run dev`.
   
3. **Build the Docker image** using the `docker build` command.
4. **Run the container** using the `docker run` command.

---

## **Hints** 💡

<details> 
<summary>Click to reveal hints</summary>

- Look at the `node_app/Dockerfile` for a reference on how to structure your Dockerfile.
- Use `EXPOSE 3000` because Next.js listens on port 3000 by default.
- For the base image, search for the **Node.js official image** on Docker Hub.
- To run the app, you'll need to use `npm run dev` for the development server.
  
</details>

---

Good luck, and happy containerizing! 🐳


## **BONUS Challenge: Capture the Flag (CTF) Edition** 🚩

💡 Someone has left behind a **secret key** in the source code! Your mission is to **find the flag** inside the running container.  
Use your **Docker skills** to enter the container and retrieve the flag! 

---

