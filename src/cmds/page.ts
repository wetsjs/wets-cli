export const command = 'page <command>';

export const desc = 'Manage wets page.';

export const builder = (yargs: any) => yargs.commandDir('page_cmds');

export const handler = (argv: any) => { };