import { start } from "single-spa";
// import { registerAllCoreApplications } from "@openmrs/esm-root-config";
import { registerAllCoreApplications } from "@openmrs/esm-root-config/dist/openmrs-esm-root-config.lib.js";
import { provide } from "@openmrs/esm-module-config";
import config from "./config.json";

provide(config);
registerAllCoreApplications();

start();
