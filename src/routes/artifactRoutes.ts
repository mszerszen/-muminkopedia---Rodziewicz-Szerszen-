import express from "express";
import {getArtifacts} from "../controllers/artifact.controller";

const artifactRouter = express.Router();

artifactRouter.get("/", getArtifacts)

export default artifactRouter