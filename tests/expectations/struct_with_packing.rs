/* automatically generated by rust-bindgen */


#![allow(non_snake_case)]


#[repr(C, packed)]
#[derive(Debug, Copy)]
pub struct a {
    pub b: ::std::os::raw::c_char,
    pub c: ::std::os::raw::c_short,
}
#[test]
fn bindgen_test_layout_a() {
    assert_eq!(::std::mem::size_of::<a>() , 3usize);
    assert_eq!(::std::mem::align_of::<a>() , 1usize);
}
impl Clone for a {
    fn clone(&self) -> Self { *self }
}
