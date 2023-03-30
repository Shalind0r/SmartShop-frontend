// vite.config.ts
import { defineConfig } from "file:///D:/study/smart-shop/smart-shop/node_modules/vite/dist/node/index.js";
import react from "file:///D:/study/smart-shop/smart-shop/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/study/smart-shop/smart-shop/node_modules/vite-plugin-svgr/dist/index.mjs";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      app: "/src/app",
      pages: "/src/pages",
      widgets: "/src/widgets",
      features: "/src/features",
      entities: "/src/entities",
      shared: "/src/shared",
      icons: "/src/shared/static/images/icons",
      images: "/src/shared/static/images"
    }
  },
  plugins: [react(), svgr()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxzdHVkeVxcXFxzbWFydC1zaG9wXFxcXHNtYXJ0LXNob3BcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHN0dWR5XFxcXHNtYXJ0LXNob3BcXFxcc21hcnQtc2hvcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovc3R1ZHkvc21hcnQtc2hvcC9zbWFydC1zaG9wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdHJlc29sdmU6IHtcclxuXHRcdGFsaWFzOiB7XHJcblx0XHRcdGFwcDogJy9zcmMvYXBwJyxcclxuXHRcdFx0cGFnZXM6ICcvc3JjL3BhZ2VzJyxcclxuXHRcdFx0d2lkZ2V0czogJy9zcmMvd2lkZ2V0cycsXHJcblx0XHRcdGZlYXR1cmVzOiAnL3NyYy9mZWF0dXJlcycsXHJcblx0XHRcdGVudGl0aWVzOiAnL3NyYy9lbnRpdGllcycsXHJcblx0XHRcdHNoYXJlZDogJy9zcmMvc2hhcmVkJyxcclxuXHRcdFx0aWNvbnM6ICcvc3JjL3NoYXJlZC9zdGF0aWMvaW1hZ2VzL2ljb25zJyxcclxuXHRcdFx0aW1hZ2VzOiAnL3NyYy9zaGFyZWQvc3RhdGljL2ltYWdlcycsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0cGx1Z2luczogW3JlYWN0KCksIHN2Z3IoKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9SLFNBQVMsb0JBQW9CO0FBQ2pULE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFFakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ1Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUMxQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
