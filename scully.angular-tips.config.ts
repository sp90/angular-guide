import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-tips',
  distFolder: './dist/angular-tips',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {
    '/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './guides',
      },
    },
  },
};
