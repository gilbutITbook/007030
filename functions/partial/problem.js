/* eslint-disable no-unused-vars */

import { building, manager, program, exhibit } from './partial';

// START:func
function mergeProgramInformation(building, manager, event) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone,
  };

  return { ...defaults, ...event };
}
// END:func

// START:implement
const programInfo = mergeProgramInformation(building, manager, program);

const exhibitInfo = mergeProgramInformation(building, manager, exhibit);
// END:implement

export { mergeProgramInformation };
