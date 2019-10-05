import { start } from "single-spa";
// import { registerAllCoreApplications } from "@openmrs/esm-root-config";
import {
  registerAllCoreApplications,
  provide
} from "@openmrs/esm-root-config/dist/openmrs-esm-root-config.lib.js";
import * as config from "./config.json";

provide(config);
registerAllCoreApplications();

start();
