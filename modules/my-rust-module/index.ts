// Reexport the native module. On web, it will be resolved to MyRustModule.web.ts
// and on native platforms to MyRustModule.ts
export { default } from './src/MyRustModule';
export { default as MyRustModuleView } from './src/MyRustModuleView';
export * from  './src/MyRustModule.types';
