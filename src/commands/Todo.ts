

import { Command } from '@oclif/core';
import inquirer from 'inquirer';
import axios from 'axios';
import fs from 'fs';

export default class Todo extends Command {
  static description = 'Create a new todo in Lens ToDo service';

  async run(): Promise<void> {
    const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
    const { description } = await inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: 'Enter your todo description:',
      },
    ]);
    try {
      const response = await axios.post(
        `${config.baseURL}/todos`,
        { description },
        { headers: { 'Authorization': config.authKey } }
      );
      console.log('Todo created:', response.data);
    } catch (err: any) {
      console.error('Failed to create todo:', err.response?.data || err.message);
    }
  }
}
