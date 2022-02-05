/* eslint-disable @typescript-eslint/naming-convention */

import { join } from 'desm';
import { getProjectName, runDavinciScript } from '../utils/davinci.js';

await runDavinciScript({
	scriptPath: join(import.meta.url, './python/export-project.py'),
	envVars: {
		PROJECT_NAME: getProjectName(),
	},
});
