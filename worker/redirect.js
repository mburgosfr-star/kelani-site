const TARGET = 'https://mburgosfr-star.github.io/kelani-site/';

export default {
  async fetch() {
    return Response.redirect(TARGET, 301);
  },
};
