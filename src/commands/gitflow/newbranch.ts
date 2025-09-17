import { Command, ux } from '@oclif/core'
import { execSync } from 'child_process'
import inquirer from 'inquirer';

export default class BranchCreate extends Command {
  static description = 'Create a new branch from a specified base branch'
  static example =['b_ch']

  async run(): Promise<void> {
    const  baseBranch  = await inquirer.prompt<{ basebranch: string }>([
      {
        type: 'input',
        name: 'basebranch',
        message: 'Enter the name of the base branch:',
        validate: (value: string) => value.trim() !== '' || 'Base branch name cannot be empty',
      },
    ])
    const  newBranch  = await inquirer.prompt<{ newbranch: string }>([
      {
        type: 'input',
        name: 'newbranch',
        message: 'Enter the new branch name:',
        validate: (value: string) => value.trim() !== '' || 'New branch name cannot be empty',
      },
    ])
    try {

      execSync('git fetch --all', { stdio: 'ignore' })
      execSync(`git checkout -b ${newBranch} ${baseBranch}`, { stdio: 'inherit' })
      this.log(`Branch '${newBranch}' created from '${baseBranch}' and checked out.`)
    } catch (error: any) {
      this.error('Failed to create branch: ' + error.message)
    }
  }
}
