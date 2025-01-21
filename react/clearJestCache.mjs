import { exec } from 'child_process';

exec('npx jest --clearCache', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error clearing Jest cache: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
