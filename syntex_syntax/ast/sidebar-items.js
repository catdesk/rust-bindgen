initSidebarItems({"constant":[["CRATE_NODE_ID","Node id used to represent the root of the crate."],["DUMMY_NODE_ID","When parsing and doing expansions, we initially give all AST nodes this AST node value. Then later, in the renumber pass, we renumber them to have small, positive ids."],["EMPTY_CTXT",""]],"enum":[["AsmDialect",""],["AttrStyle","Distinguishes between Attributes that decorate items and Attributes that are contained as statements within items. These two cases need to be distinguished for pretty-printing."],["BinOpKind",""],["BindingMode",""],["BlockCheckMode",""],["CaptureBy","A capture clause"],["Constness",""],["DeclKind",""],["Defaultness",""],["ExprKind",""],["FloatTy",""],["ForeignItemKind","An item within an `extern` block"],["FunctionRetTy",""],["ImplItemKind",""],["ImplPolarity",""],["IntTy",""],["ItemKind",""],["KleeneOp","A Kleene-style repetition operator for token sequences."],["LitIntType",""],["LitKind",""],["MacStmtStyle",""],["MetaItemKind",""],["Mutability",""],["PatKind",""],["PathListItemKind",""],["PathParameters",""],["RangeLimits","Limit types of a range (inclusive or exclusive)"],["SelfKind","Represents the kind of 'self' associated with a method"],["StmtKind",""],["StrStyle",""],["TokenTree","When the main rust parser encounters a syntax-extension invocation, it parses the arguments to the invocation as a token-tree. This is a very loose structure, such that all sorts of different AST-fragments can be passed to syntax extensions using a uniform type."],["TraitBoundModifier","A modifier on a bound, currently this is only used for `?Sized`, where the modifier is `Maybe`. Negative bounds should also be handled here."],["TraitItemKind",""],["TyKind","The different kinds of types recognized by the compiler"],["TyParamBound","The AST represents all type param bounds as types. typeck::collect::compute_bounds matches these against the \"special\" built-in traits (see middle::lang_items) and detects Copy, Send and Sync."],["UintTy",""],["UnOp",""],["UnsafeSource",""],["Unsafety",""],["VariantData","Fields and Ids of enum variants and structs"],["ViewPath_",""],["Visibility",""],["WherePredicate","A single predicate in a `where` clause"]],"struct":[["AngleBracketedParameterData","A path like `Foo<'a, T>`"],["Arg","represents an argument in a function header"],["Arm","represents one arm of a 'match'"],["AttrId",""],["Attribute_","Doc-comments are promoted to attributes that have is_sugared_doc = true"],["BareFnTy",""],["Block",""],["Crate",""],["Delimited","A delimited sequence of token trees"],["EnumDef",""],["Expr","An expression"],["Field",""],["FieldPat","A single field in a struct pattern"],["FnDecl","Represents the header (not the body) of a function declaration"],["ForeignItem",""],["ForeignMod",""],["Generics","Represents lifetimes and type parameters attached to a declaration of a function, enum, trait, etc."],["Ident","An identifier contains a Name (index into the interner table) and a SyntaxContext to track renaming and macro expansion per Flatt et al., \"Macros That Work Together\""],["ImplItem",""],["InlineAsm",""],["InlineAsmOutput",""],["Item","An item"],["Lifetime",""],["LifetimeDef","A lifetime definition, eg `'a: 'b+'c+'d`"],["Local","Local represents a `let` statement, e.g., `let <pat>:<ty> = <expr>;`"],["Mac_","Represents a macro invocation. The Path indicates which macro is being invoked, and the vector of token-trees contains the source of the macro invocation."],["MacroDef","A macro definition, in this crate or imported from another."],["MethodSig","Represents a method's signature in a trait declaration, or in an implementation."],["Mod",""],["MutTy",""],["Name","A name is a part of an identifier, representing a string or gensym. It's the result of interning."],["ParenthesizedParameterData","A path like `Foo(A,B) -> C`"],["Pat",""],["Path","A \"Path\" is essentially Rust's notion of a name; for instance: std::cmp::PartialEq  .  It's represented as a sequence of identifiers, along with a bunch of supporting information."],["PathSegment","A segment of a path: an identifier, an optional lifetime, and a set of types."],["PolyTraitRef",""],["QSelf","The explicit Self type in a \"qualified path\". The actual path, including the trait and the associated item, is stored separately. `position` represents the index of the associated item qualified with this Self type."],["SequenceRepetition","A sequence of token trees"],["StructField",""],["SyntaxContext","A SyntaxContext represents a chain of macro-expandings and renamings. Each macro expansion corresponds to a fresh u32. This u32 is a reference to a table stored in thread-local storage. The special value EMPTY_CTXT is used to indicate an empty syntax context."],["TraitItem","Represents an item declaration within a trait declaration, possibly including a default implementation. A trait item is either required (meaning it doesn't have an implementation, just a signature) or provided (meaning it has a default implementation)."],["TraitRef","TraitRef's appear in impls."],["Ty",""],["TyParam",""],["TypeBinding",""],["Variant_",""],["WhereBoundPredicate","A type bound, e.g. `for<'c> Foo: Send+Clone+'c`"],["WhereClause","A `where` clause in a definition"],["WhereEqPredicate","An equality predicate (unsupported), e.g. `T=int`"],["WhereRegionPredicate","A lifetime predicate, e.g. `'a: 'b+'c`"]],"trait":[["NodeIdAssigner",""]],"type":[["Attribute","Meta-data associated with an item"],["BinOp",""],["CrateConfig","The set of MetaItems that define the compilation environment of the crate, used to drive conditional compilation"],["CrateNum",""],["Decl",""],["ExplicitSelf",""],["Lit","A literal"],["Mac",""],["MetaItem",""],["Mrk","A mark represents a unique id associated with a macro expansion"],["NodeId",""],["PathListItem",""],["SpannedIdent",""],["Stmt","A statement"],["TyParamBounds",""],["Variant",""],["ViewPath",""]]});