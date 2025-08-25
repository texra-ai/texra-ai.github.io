import DefaultTheme from 'vitepress/theme';
import LaunchPage from '../components/LaunchPage.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('LaunchPage', LaunchPage);
  },
};