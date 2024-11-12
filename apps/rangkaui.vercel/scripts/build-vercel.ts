import { spawn } from 'child_process';

function runCommand(command: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { stdio: 'inherit' });

    process.on('error', (error) => reject(error));
    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });
}

async function buildWorkspaces() {
  try {
    console.log('Building workspace: rangkaui-next');
    await runCommand('yarn', ['workspace', 'rangkaui-next', 'build']);
    console.log('rangkaui-next build completed.');

    console.log('Building workspace: rangkaui-docs');
    await runCommand('yarn', ['workspace', 'rangkaui-docs', 'build']);
    console.log('rangkaui-docs build completed.');
  } catch (error) {
    console.error('Error during build:', error);
    process.exit(1);
  }
}

buildWorkspaces();
