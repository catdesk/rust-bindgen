#![crate_name = "bindgen_plugin"]
#![crate_type = "dylib"]
#![feature(plugin, plugin_registrar, rustc_private)]
#![plugin(easy_plugin)]

extern crate bindgen;
extern crate rustc_plugin;
extern crate syntax;
extern crate easy_plugin;
extern crate clang_sys;

mod bgmacro;
mod parser;

use rustc_plugin::Registry;

#[doc(hidden)]
#[plugin_registrar]
pub fn plugin_registrar(reg: &mut Registry) {
    reg.register_macro("bindgen", bgmacro::bindgen_macro);
}