import express from "express";
import { registerView, createComment, deleteCommentRes } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment)
apiRouter.post("/comment/:id([0-9a-f]{24})/delete", deleteCommentRes)

export default apiRouter;