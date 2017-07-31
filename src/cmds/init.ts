export const command = 'init <appName>';

export const desc = 'Create wets project.';

export const builder = (yargs: any) => yargs
  .option('template', {
    alias: 'tpl',
    describe: 'Template',
    default: 'html',
    choices: ['html', 'pug', 'tsx'],
  });

export const handler = (argv: any) => {
  console.log(argv);
};