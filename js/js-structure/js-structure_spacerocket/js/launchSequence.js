// Implement the launch sequence function here and export it as the default export.
// ./js/launchSequence.js

// Step 1: Load Payload
import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";

// Step 2: Fueling
import { fuel } from "./core/fuel.js";

// Step 3: Countdown
import { countdown } from "./core/countdown.js";

// Step 4: Liftoff
import { liftoff } from "./core/liftoff.js";

// Step 5: Deploy Payload
import { deployPayload } from "./core/deploy.js";

// Launch function as default export
export default function launch() {
  // Step 1: Load Payload
  loadPayload([NFSAT, FISHSAT]);

  // Step 2: Fueling
  fuel();

  // Step 3: Countdown
  const countdownLength = 5; // agreed countdown length
  for (let i = 0; i < countdownLength; i++) {
    countdown();
  }

  // Step 4: Liftoff
  liftoff();

  // Step 5: Deploy Payload
  deployPayload();
}
