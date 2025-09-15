import { Command } from '@oclif/core';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import inquirer from 'inquirer';
export default class ConfigSetup extends Command {
  static description = 'Setup and store URL and basic key in config JSON';
  
  static examples = ['danylmnas config setup']


  async run() {
    const answers = await inquirer.prompt<any>([
      {
        type: 'input',
        name: 'url',
        message: 'Enter the URL:',
       validate: function (value) {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (urlRegex.test(value)) {
          return true;
        }
        return 'Please enter a valid URL (e.g., https://example.com)';
      }
      },
      {
        type: 'input',
        name: 'key',
        message: 'Enter the basic key:',
        validate: (input) => input ? true : 'Key cannot be empty',
      }
    ]);
    const configDir = path.join(os.homedir(), '.danylmnas');
    const configFile = path.join(configDir, 'config.json');

    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
    const configData = {
      url: answers.url,
      key: answers.key
    };
    fs.writeFileSync(configFile, JSON.stringify(configData, null, 2), { encoding: 'utf8' });

    this.log(`Configuration saved to ${configFile}`);
  }
}
