import { start } from "single-spa";
import { registerAllCoreApplications } from "@openmrs/esm-root-config";
import { provide } from "@openmrs/esm-module-config";
import config from "./config.json";

provide(config);
registerAllCoreApplications();

start();
