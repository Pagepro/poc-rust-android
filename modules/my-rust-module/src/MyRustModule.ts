import { NativeModule, requireNativeModule } from "expo";

import { MyRustModuleEvents } from "./MyRustModule.types";

declare class MyRustModule extends NativeModule<MyRustModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  rustAdd(left: number, right: number): Promise<number>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<MyRustModule>("MyRustModule");
