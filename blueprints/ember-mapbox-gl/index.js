/* eslint-env node */
module.exports = {
  description: 'add mapbox-gl npm package',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter to us)
  },

  afterInstall() {
    return this.addPackageToProject('mapbox-gl', '^0.39.0');
  }
};
