#[no_mangle]

pub extern "C" fn rust_add(left: i32, right: i32) -> i32 {
    left + right
}

/// cdbindgen:ignore
#[cfg(target_os = "android")]
pub mod android {
    use crate::rust_add;
    use jni::JNIEnv;
    use jni::objects::JClass;
    use jni::sys::jint;

    #[no_mangle]
    // This name must be equal to your path in java/expo/modules/myrustmodule/MyRustModule.kt
    pub unsafe extern "C" fn Java_expo_modules_myrustmodule_MyRustModule_rustAdd(
        _env: JNIEnv,
        _class: JClass,
        left: jint,
        right: jint,
    ) -> jint {
        rust_add(left, right)
    }
}
