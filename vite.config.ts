// NOTE: configuration en CommonJS pour supporter `__dirname` sans `import.meta`.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// Pour GitHub Pages, définissez `base` sur le nom du repo, ex: "/mon-repo/"
// (Aucune référence/dépendance à Lovable)

module.exports = {
  base: "/website/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [require("@vitejs/plugin-react-swc")()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
