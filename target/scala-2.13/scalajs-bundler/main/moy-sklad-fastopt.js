'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.0.1",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $throwClassCastException(instance, classFullName) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), $ct_jl_ClassCastException__T__(new $c_jl_ClassCastException(), ((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      const v = (instance | 0);
      if ((v === instance)) {
        if ($isByte(v)) {
          return $d_jl_Byte.getClassOf()
        } else if ($isShort(v)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return $objectGetClass(instance)
}
function $dp_clone__O(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.clone__O()
  } else {
    throw $ct_jl_CloneNotSupportedException__(new $c_jl_CloneNotSupportedException())
  }
}
function $dp_notify__V(instance) {
  if ((instance === null)) {
    instance.notify__V()
  }
}
function $dp_notifyAll__V(instance) {
  if ((instance === null)) {
    instance.notifyAll__V()
  }
}
function $dp_finalize__V(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    instance.finalize__V()
  }
}
function $dp_equals__O__Z(instance, rhs) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(rhs)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, rhs)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, rhs)
  } else {
    return (instance === rhs)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $systemIdentityHashCode(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, rhs) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, rhs)
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, rhs)
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, rhs)
    }
    default: {
      if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance, rhs)
      } else {
        return instance.compareTo__O__I(rhs)
      }
    }
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, index) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, index)
  } else {
    return instance.charAt__I__C(index)
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, start, end) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, start, end)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(start, end)
  }
}
function $dp_byteValue__B(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__byteValue__B(instance)
  } else {
    return instance.byteValue__B()
  }
}
function $dp_shortValue__S(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__shortValue__S(instance)
  } else {
    return instance.shortValue__S()
  }
}
function $dp_intValue__I(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__intValue__I(instance)
  } else {
    return instance.intValue__I()
  }
}
function $dp_longValue__J(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__longValue__J(instance)
  } else {
    return instance.longValue__J()
  }
}
function $dp_floatValue__F(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__floatValue__F(instance)
  } else {
    return instance.floatValue__F()
  }
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $moduleDefault(m) {
  return (((m && ((typeof m) === "object")) && ("default" in m)) ? m["default"] : m)
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.parentData = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.parentData = parentData;
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      get(i) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        return this.u[i]
      };
      set(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        this.u[i] = v
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.parentData = $d_O;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
      $throwClassCastException(obj, this.name)
    }
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
const $i_resources$002fApp$002ecss = require("resources/App.css");
const $i_resources$002findex$002ecss = require("resources/index.css");
const $i_react = require("react");
const $i_react$002dproxy = require("react-proxy");
const $i_react$002ddom = require("react-dom");
const $ct_O__ = (function($thiz) {
  return $thiz
});
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectGetClass(this).getName__T();
    const i = this.hashCode__I();
    return (($$x1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
class $c_Lhello_world_Main$ extends $c_O {
  constructor() {
    super();
    this.Lhello_world_Main$__f_css = null;
    $n_Lhello_world_Main$ = this;
    this.Lhello_world_Main$__f_css = $moduleDefault($i_resources$002findex$002ecss)
  };
  main__V() {
    $m_Lslinky_hot_package$().initialize__V();
    const this$2 = $m_s_Option$().apply__O__s_Option($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("root"));
    let container;
    if (this$2.isEmpty__Z()) {
      const elem = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElement("div");
      elem.id = "root";
      $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().body.appendChild(elem);
      container = elem
    } else {
      container = this$2.get__O()
    };
    const $$x3 = $i_react$002ddom;
    const $$x2 = $m_Lhello_world_App$();
    const this$3 = $m_s_$less$colon$less$();
    const $$x1 = this$3.s_$less$colon$less$__f_singleton;
    const constructor = $a_Lhello_world_App();
    const stage = $$x2.apply__s_$eq$colon$eq__sjs_js_Dynamic__sjs_js_Array($$x1, constructor);
    if ((stage[0] === null)) {
      throw new $c_jl_IllegalStateException("This component has already been built into a ReactElement, and cannot be reused")
    };
    const ret = $i_react.createElement.apply($i_react, stage);
    stage[0] = null;
    $$x3.render(ret, container)
  };
}
const $d_Lhello_world_Main$ = new $TypeData().initClass({
  Lhello_world_Main$: 0
}, false, "hello.world.Main$", {
  Lhello_world_Main$: 1,
  O: 1
});
$c_Lhello_world_Main$.prototype.$classData = $d_Lhello_world_Main$;
let $n_Lhello_world_Main$ = (void 0);
function $m_Lhello_world_Main$() {
  if ((!$n_Lhello_world_Main$)) {
    $n_Lhello_world_Main$ = new $c_Lhello_world_Main$()
  };
  return $n_Lhello_world_Main$
}
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isInterface__Z() {
    return $uZ(this.jl_Class__f_data.isInterface)
  };
  isPrimitive__Z() {
    return $uZ(this.jl_Class__f_data.isPrimitive)
  };
  getName__T() {
    return $as_T(this.jl_Class__f_data.name)
  };
  getSimpleName__T() {
    const name = $as_T(this.jl_Class__f_data.name);
    let idx = (((-1) + $uI(name.length)) | 0);
    while (true) {
      let $$x1;
      if ((idx >= 0)) {
        const index = idx;
        $$x1 = ((65535 & $uI(name.charCodeAt(index))) === 36)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        idx = (((-1) + idx) | 0)
      } else {
        break
      }
    };
    while (true) {
      let $$x2;
      if ((idx >= 0)) {
        const index$1 = idx;
        const currChar = (65535 & $uI(name.charCodeAt(index$1)));
        $$x2 = ((currChar !== 46) && (currChar !== 36))
      } else {
        $$x2 = false
      };
      if ($$x2) {
        idx = (((-1) + idx) | 0)
      } else {
        break
      }
    };
    const beginIndex = ((1 + idx) | 0);
    return $as_T(name.substring(beginIndex))
  };
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
    const value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
class $c_jl_Long$StringRadixInfo extends $c_O {
  constructor(chunkLength, radixPowLength, paddingZeros, overflowBarrier) {
    super();
    this.jl_Long$StringRadixInfo__f_chunkLength = 0;
    this.jl_Long$StringRadixInfo__f_radixPowLength = $L0;
    this.jl_Long$StringRadixInfo__f_paddingZeros = null;
    this.jl_Long$StringRadixInfo__f_overflowBarrier = $L0;
    this.jl_Long$StringRadixInfo__f_chunkLength = chunkLength;
    this.jl_Long$StringRadixInfo__f_radixPowLength = radixPowLength;
    this.jl_Long$StringRadixInfo__f_paddingZeros = paddingZeros;
    this.jl_Long$StringRadixInfo__f_overflowBarrier = overflowBarrier
  };
}
function $as_jl_Long$StringRadixInfo(obj) {
  return (((obj instanceof $c_jl_Long$StringRadixInfo) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long$StringRadixInfo"))
}
function $isArrayOf_jl_Long$StringRadixInfo(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long$StringRadixInfo)))
}
function $asArrayOf_jl_Long$StringRadixInfo(obj, depth) {
  return (($isArrayOf_jl_Long$StringRadixInfo(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long$StringRadixInfo;", depth))
}
const $d_jl_Long$StringRadixInfo = new $TypeData().initClass({
  jl_Long$StringRadixInfo: 0
}, false, "java.lang.Long$StringRadixInfo", {
  jl_Long$StringRadixInfo: 1,
  O: 1
});
$c_jl_Long$StringRadixInfo.prototype.$classData = $d_jl_Long$StringRadixInfo;
const $p_jl_System$SystemProperties$__loadSystemProperties__O = (function($thiz) {
  const result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  const value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
});
class $c_jl_System$SystemProperties$ extends $c_O {
  constructor() {
    super();
    this.jl_System$SystemProperties$__f_dict = null;
    this.jl_System$SystemProperties$__f_properties = null;
    $n_jl_System$SystemProperties$ = this;
    this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
    this.jl_System$SystemProperties$__f_properties = null
  };
  getProperty__T__T__T(key, default$1) {
    return ((this.jl_System$SystemProperties$__f_dict !== null) ? $as_T($m_jl_Utils$().dictGetOrElse__O__T__O__O(this.jl_System$SystemProperties$__f_dict, key, default$1)) : this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1))
  };
}
const $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
let $n_jl_System$SystemProperties$ = (void 0);
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
class $c_jl_Utils$ extends $c_O {
  dictGetOrElse__O__T__O__O(dict, key, default$1) {
    return ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1)
  };
}
const $d_jl_Utils$ = new $TypeData().initClass({
  jl_Utils$: 0
}, false, "java.lang.Utils$", {
  jl_Utils$: 1,
  O: 1
});
$c_jl_Utils$.prototype.$classData = $d_jl_Utils$;
let $n_jl_Utils$ = (void 0);
function $m_jl_Utils$() {
  if ((!$n_jl_Utils$)) {
    $n_jl_Utils$ = new $c_jl_Utils$()
  };
  return $n_jl_Utils$
}
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
const $f_jl_Void__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Void__hashCode__I = (function($thiz) {
  return 0
});
const $f_jl_Void__toString__T = (function($thiz) {
  return "undefined"
});
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_ju_Arrays$ extends $c_O {
  binarySearch__AI__I__I(a, key) {
    let startIndex = 0;
    let endIndex = a.u.length;
    while (true) {
      if ((startIndex === endIndex)) {
        return (((-1) - startIndex) | 0)
      } else {
        const mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
        const elem = a.get(mid);
        if ((key < elem)) {
          endIndex = mid
        } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
          return mid
        } else {
          startIndex = ((1 + mid) | 0)
        }
      }
    }
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
const $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window = (function($thiz) {
  if (((134217728 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_window = window;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (134217728 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_window
});
const $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument = (function($thiz) {
  if (((268435456 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_document = $thiz.window__Lorg_scalajs_dom_raw_Window().document;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (268435456 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_document
});
class $c_Lorg_scalajs_dom_package$ extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_package$__f_ApplicationCache = null;
    this.Lorg_scalajs_dom_package$__f_Blob = null;
    this.Lorg_scalajs_dom_package$__f_BlobPropertyBag = null;
    this.Lorg_scalajs_dom_package$__f_ClipboardEventInit = null;
    this.Lorg_scalajs_dom_package$__f_DOMException = null;
    this.Lorg_scalajs_dom_package$__f_Event = null;
    this.Lorg_scalajs_dom_package$__f_EventException = null;
    this.Lorg_scalajs_dom_package$__f_EventSource = null;
    this.Lorg_scalajs_dom_package$__f_FileReader = null;
    this.Lorg_scalajs_dom_package$__f_FormData = null;
    this.Lorg_scalajs_dom_package$__f_KeyboardEvent = null;
    this.Lorg_scalajs_dom_package$__f_MediaError = null;
    this.Lorg_scalajs_dom_package$__f_MutationEvent = null;
    this.Lorg_scalajs_dom_package$__f_MutationObserverInit = null;
    this.Lorg_scalajs_dom_package$__f_Node = null;
    this.Lorg_scalajs_dom_package$__f_NodeFilter = null;
    this.Lorg_scalajs_dom_package$__f_PerformanceNavigation = null;
    this.Lorg_scalajs_dom_package$__f_PositionError = null;
    this.Lorg_scalajs_dom_package$__f_Range = null;
    this.Lorg_scalajs_dom_package$__f_TextEvent = null;
    this.Lorg_scalajs_dom_package$__f_TextTrack = null;
    this.Lorg_scalajs_dom_package$__f_URL = null;
    this.Lorg_scalajs_dom_package$__f_VisibilityState = null;
    this.Lorg_scalajs_dom_package$__f_WebSocket = null;
    this.Lorg_scalajs_dom_package$__f_WheelEvent = null;
    this.Lorg_scalajs_dom_package$__f_XMLHttpRequest = null;
    this.Lorg_scalajs_dom_package$__f_XPathResult = null;
    this.Lorg_scalajs_dom_package$__f_window = null;
    this.Lorg_scalajs_dom_package$__f_document = null;
    this.Lorg_scalajs_dom_package$__f_console = null;
    this.Lorg_scalajs_dom_package$__f_bitmap$0 = 0
  };
  window__Lorg_scalajs_dom_raw_Window() {
    return (((134217728 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window(this) : this.Lorg_scalajs_dom_package$__f_window)
  };
  document__Lorg_scalajs_dom_raw_HTMLDocument() {
    return (((268435456 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument(this) : this.Lorg_scalajs_dom_package$__f_document)
  };
}
const $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
let $n_Lorg_scalajs_dom_package$ = (void 0);
function $m_Lorg_scalajs_dom_package$() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$()
  };
  return $n_Lorg_scalajs_dom_package$
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth))
}
function $is_F2(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F2)))
}
function $as_F2(obj) {
  return (($is_F2(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function2"))
}
function $isArrayOf_F2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F2)))
}
function $asArrayOf_F2(obj, depth) {
  return (($isArrayOf_F2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function2;", depth))
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
const $f_sc_IterableOnceOps__foreach__F1__V = (function($thiz, f) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    f.apply__O__O(it.next__O())
  }
});
const $f_sc_IterableOnceOps__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
const $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const jsb = b.scm_StringBuilder__f_underlying;
  if (($uI(start.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    const obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      const obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if (($uI(end.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
});
class $c_sc_StringOps$ extends $c_O {
  head$extension__T__C(this$) {
    if ((this$ === "")) {
      throw new $c_ju_NoSuchElementException("head of empty String")
    } else {
      return (65535 & $uI(this$.charCodeAt(0)))
    }
  };
}
const $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
let $n_sc_StringOps$ = (void 0);
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
const $p_sci_IndexedSeqDefaults$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 64
    } else {
      throw e
    }
  }
});
class $c_sci_IndexedSeqDefaults$ extends $c_O {
  constructor() {
    super();
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
    $n_sci_IndexedSeqDefaults$ = this;
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
  };
}
const $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
let $n_sci_IndexedSeqDefaults$ = (void 0);
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = $as_jl_Number(x);
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = $as_jl_Character(x);
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = $as_jl_Number(y);
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = $as_jl_Character(y);
      if (((typeof xn) === "number")) {
        const x2$1 = $uD(xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = $uD(xn);
      if (((typeof yn) === "number")) {
        const x2$2 = $uD(yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = $as_s_math_ScalaNumber(yn);
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = $uD(yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = $as_s_math_ScalaNumber(yn);
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = $as_jl_Character(y);
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = $as_jl_Number(y);
      if (((typeof x3) === "number")) {
        const x2$1 = $uD(x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
class $c_sr_ScalaRunTime$ extends $c_O {
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
  ioobe__I__O(n) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sjs_js_$bar$ extends $c_O {
  undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any(value, ev) {
    if ((value === (void 0))) {
      return (void 0)
    } else {
      const a = ev.apply__O__O(value);
      return a
    }
  };
}
const $d_sjs_js_$bar$ = new $TypeData().initClass({
  sjs_js_$bar$: 0
}, false, "scala.scalajs.js.$bar$", {
  sjs_js_$bar$: 1,
  O: 1
});
$c_sjs_js_$bar$.prototype.$classData = $d_sjs_js_$bar$;
let $n_sjs_js_$bar$ = (void 0);
function $m_sjs_js_$bar$() {
  if ((!$n_sjs_js_$bar$)) {
    $n_sjs_js_$bar$ = new $c_sjs_js_$bar$()
  };
  return $n_sjs_js_$bar$
}
class $c_sjs_js_package$ extends $c_O {
  isUndefined__O__Z(v) {
    return (v === (void 0))
  };
}
const $d_sjs_js_package$ = new $TypeData().initClass({
  sjs_js_package$: 0
}, false, "scala.scalajs.js.package$", {
  sjs_js_package$: 1,
  O: 1
});
$c_sjs_js_package$.prototype.$classData = $d_sjs_js_package$;
let $n_sjs_js_package$ = (void 0);
function $m_sjs_js_package$() {
  if ((!$n_sjs_js_package$)) {
    $n_sjs_js_package$ = new $c_sjs_js_package$()
  };
  return $n_sjs_js_package$
}
class $c_sjs_js_special_package$ extends $c_O {
  objectLiteral__sci_Seq__sjs_js_Object(properties) {
    const result = {};
    properties.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$1, result$1) => ((pair$2) => {
      const pair = $as_T2(pair$2);
      result$1[pair.T2__f__1] = pair.T2__f__2
    }))(this, result)));
    return result
  };
}
const $d_sjs_js_special_package$ = new $TypeData().initClass({
  sjs_js_special_package$: 0
}, false, "scala.scalajs.js.special.package$", {
  sjs_js_special_package$: 1,
  O: 1
});
$c_sjs_js_special_package$.prototype.$classData = $d_sjs_js_special_package$;
let $n_sjs_js_special_package$ = (void 0);
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$()
  };
  return $n_sjs_js_special_package$
}
class $c_sjsr_package$ extends $c_O {
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
  toScalaVarArgs__sjs_js_Array__sci_Seq(array) {
    return new $c_sjsr_WrappedVarArgs(array)
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
  };
  scala$util$hashing$MurmurHash3$$avalanche__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  productHash__s_Product__I__Z__I(x, seed, ignorePrefix) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      if ((!ignorePrefix)) {
        h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
      };
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  orderedHash__sc_IterableOnce__I__I(xs, seed) {
    const it = xs.iterator__sc_Iterator();
    let h = seed;
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(h, 0)
    };
    const x0 = it.next__O();
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
    };
    const x1 = it.next__O();
    const initial = $m_sr_Statics$().anyHash__O__I(x0);
    h = this.mix__I__I__I(h, initial);
    const h0 = h;
    let prev = $m_sr_Statics$().anyHash__O__I(x1);
    const rangeDiff = ((prev - initial) | 0);
    let i = 2;
    while (it.hasNext__Z()) {
      h = this.mix__I__I__I(h, prev);
      const x = it.next__O();
      const hash = $m_sr_Statics$().anyHash__O__I(x);
      if ((rangeDiff !== ((hash - prev) | 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while (it.hasNext__Z()) {
          const $$x1 = h;
          const x$1 = it.next__O();
          h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0)
        };
        return this.finalizeHash__I__I__I(h, i)
      };
      prev = hash;
      i = ((1 + i) | 0)
    };
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
  };
  rangeHash__I__I__I__I__I(start, step, last, seed) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
  };
  indexedSeqHash__sc_IndexedSeq__I__I(a, seed) {
    let h = seed;
    const l = a.length__I();
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = a.apply__I__O(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = a.apply__I__O(0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = a.apply__I__O(1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = a.apply__I__O(i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = a.apply__I__O(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let rangeState = 0;
    let rangeDiff = 0;
    let prev = 0;
    let initial = 0;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const this$1 = elems;
      this$1.head__E()
    };
    return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
  };
}
const $p_Lslinky_core_BaseComponentWrapper__getPatchedConstructor__sjs_js_Dynamic__sjs_js_Dynamic = (function($thiz, constructorTag) {
  if (($thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor === null)) {
    const componentPrototype = constructorTag.prototype;
    const x = componentPrototype.componentWillMount;
    const y = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillMount;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x, y)) {
      const $$x1 = $m_sjs_js_$bar$();
      const this$2 = $m_s_$less$colon$less$();
      componentPrototype.componentWillMount = $$x1.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$2.s_$less$colon$less$__f_singleton)
    };
    const x$1 = componentPrototype.componentDidMount;
    const y$1 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentDidMount;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y$1)) {
      const $$x2 = $m_sjs_js_$bar$();
      const this$4 = $m_s_$less$colon$less$();
      componentPrototype.componentDidMount = $$x2.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$4.s_$less$colon$less$__f_singleton)
    };
    const x$2 = componentPrototype.componentWillReceiveProps;
    const y$2 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillReceiveProps;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$2))) {
      const orig = componentPrototype.componentWillReceiveProps;
      componentPrototype.componentWillReceiveProps = ((arg$outer, orig$1) => (function(arg1$2) {
        arg$outer.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$1__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction1__V(this, arg1$2, orig$1)
      }))($thiz, orig)
    } else {
      const $$x3 = $m_sjs_js_$bar$();
      const this$6 = $m_s_$less$colon$less$();
      componentPrototype.componentWillReceiveProps = $$x3.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$6.s_$less$colon$less$__f_singleton)
    };
    const x$3 = componentPrototype.shouldComponentUpdate;
    const y$3 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.shouldComponentUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y$3))) {
      const orig$2 = componentPrototype.shouldComponentUpdate;
      componentPrototype.shouldComponentUpdate = ((arg$outer$1, orig$2$1) => (function(arg1$2$1, arg2$2) {
        return arg$outer$1.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$3__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__Z(this, arg1$2$1, arg2$2, orig$2$1)
      }))($thiz, orig$2)
    } else {
      const $$x4 = $m_sjs_js_$bar$();
      const this$8 = $m_s_$less$colon$less$();
      componentPrototype.shouldComponentUpdate = $$x4.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$8.s_$less$colon$less$__f_singleton)
    };
    const x$4 = componentPrototype.componentWillUpdate;
    const y$4 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$4, y$4))) {
      const orig$3 = componentPrototype.componentWillUpdate;
      componentPrototype.componentWillUpdate = ((arg$outer$2, orig$3$1) => (function(arg1$2$2, arg2$2$1) {
        arg$outer$2.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$5__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__V(this, arg1$2$2, arg2$2$1, orig$3$1)
      }))($thiz, orig$3)
    } else {
      const $$x5 = $m_sjs_js_$bar$();
      const this$10 = $m_s_$less$colon$less$();
      componentPrototype.componentWillUpdate = $$x5.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$10.s_$less$colon$less$__f_singleton)
    };
    const x$5 = componentPrototype.getSnapshotBeforeUpdate;
    const y$5 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.getSnapshotBeforeUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$5, y$5))) {
      const orig$4 = componentPrototype.getSnapshotBeforeUpdate;
      componentPrototype.getSnapshotBeforeUpdate = ((arg$outer$3, orig$4$1) => (function(arg1$2$3, arg2$2$2) {
        return arg$outer$3.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$7__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__O(this, arg1$2$3, arg2$2$2, orig$4$1)
      }))($thiz, orig$4)
    } else {
      const $$x6 = $m_sjs_js_$bar$();
      const this$12 = $m_s_$less$colon$less$();
      componentPrototype.getSnapshotBeforeUpdate = $$x6.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$12.s_$less$colon$less$__f_singleton)
    };
    const x$6 = componentPrototype.componentDidUpdate;
    const y$6 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentDidUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$6, y$6))) {
      const orig$5 = componentPrototype.componentDidUpdate;
      componentPrototype.componentDidUpdateScala = orig$5;
      componentPrototype.componentDidUpdate = ((arg$outer$4, orig$5$1) => (function(arg1$2$4, arg2$2$3, arg3$2) {
        arg$outer$4.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$9__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_Any__sjs_js_Dynamic__V(this, arg1$2$4, arg2$2$3, arg3$2, orig$5$1)
      }))($thiz, orig$5)
    } else {
      const $$x7 = $m_sjs_js_$bar$();
      const this$14 = $m_s_$less$colon$less$();
      componentPrototype.componentDidUpdate = $$x7.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$14.s_$less$colon$less$__f_singleton)
    };
    const x$7 = componentPrototype.componentWillUnmount;
    const y$7 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillUnmount;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$7, y$7)) {
      const $$x8 = $m_sjs_js_$bar$();
      const this$16 = $m_s_$less$colon$less$();
      componentPrototype.componentWillUnmount = $$x8.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$16.s_$less$colon$less$__f_singleton)
    };
    const x$8 = componentPrototype.componentDidCatch;
    const y$8 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentDidCatch;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$8, y$8)) {
      const $$x9 = $m_sjs_js_$bar$();
      const this$18 = $m_s_$less$colon$less$();
      componentPrototype.componentDidCatch = $$x9.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$18.s_$less$colon$less$__f_singleton)
    };
    componentPrototype._base = $thiz;
    const descriptor = Object.getOwnPropertyDescriptor(componentPrototype, "initialState");
    let needsExtraApply;
    if ((descriptor !== (void 0))) {
      const v = descriptor.writable;
      needsExtraApply = (!(v === (void 0)))
    } else {
      needsExtraApply = false
    };
    $thiz.needsExtraApply = needsExtraApply;
    const s = $objectGetClass($thiz).getSimpleName__T();
    constructorTag.displayName = s;
    if (($thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps !== null)) {
      constructorTag.getDerivedStateFromProps = ((arg$outer$5) => ((arg1$2$5, arg2$2$4) => arg$outer$5.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$11__sjs_js_Object__sjs_js_Object__sjs_js_Object(arg1$2$5, arg2$2$4)))($thiz)
    };
    if (($thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError !== null)) {
      constructorTag.getDerivedStateFromError = ((arg$outer$6) => ((arg1$2$6) => arg$outer$6.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$15__sjs_js_Error__sjs_js_Object(arg1$2$6)))($thiz)
    };
    $thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = constructorTag
  };
  return $thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor
});
const $ct_Lslinky_core_BaseComponentWrapper__Lslinky_core_StateReaderProvider__Lslinky_core_StateWriterProvider__ = (function($thiz, sr, sw) {
  $thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps = null;
  $thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError = null;
  $thiz.Lslinky_core_BaseComponentWrapper__f_hot_stateReader = $as_Lslinky_readwrite_Reader(sr);
  $thiz.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter = $as_Lslinky_readwrite_Writer(sw);
  $thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = null;
  $thiz.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = null;
  return $thiz
});
class $c_Lslinky_core_BaseComponentWrapper extends $c_O {
  constructor() {
    super();
    this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps = null;
    this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError = null;
    this.Lslinky_core_BaseComponentWrapper__f_hot_stateReader = null;
    this.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter = null;
    this.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = null;
    this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = null
  };
  componentConstructor__Lslinky_readwrite_Reader__Lslinky_readwrite_Writer__Lslinky_readwrite_Reader__sjs_js_Dynamic__sjs_js_Object(propsReader, stateWriter, stateReader, constructorTag) {
    if ((propsReader !== null)) {
      this._propsReader = propsReader
    };
    if ((stateReader !== null)) {
      this._stateReader = stateReader
    };
    if ((stateWriter !== null)) {
      this._stateWriter = stateWriter
    };
    return $m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware.apply__O__O__O($p_Lslinky_core_BaseComponentWrapper__getPatchedConstructor__sjs_js_Dynamic__sjs_js_Dynamic(this, constructorTag), this)
  };
  apply__O__sjs_js_Dynamic__sjs_js_Array(p, constructorTag) {
    const array = [new $c_T2("__", p)];
    const properties = new $c_sjsr_WrappedVarArgs(array);
    const propsObj = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(properties);
    if ((this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance === null)) {
      this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = this.componentConstructor__Lslinky_readwrite_Reader__Lslinky_readwrite_Writer__Lslinky_readwrite_Reader__sjs_js_Dynamic__sjs_js_Object(null, this.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter, this.Lslinky_core_BaseComponentWrapper__f_hot_stateReader, constructorTag)
    };
    return [this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance, propsObj]
  };
  apply__s_$eq$colon$eq__sjs_js_Dynamic__sjs_js_Array(ev, constructorTag) {
    return this.apply__O__sjs_js_Dynamic__sjs_js_Array((void 0), constructorTag)
  };
  slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$1__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction1__V(self, props, orig$1) {
    const this$1 = $m_Lslinky_core_DefinitionBase$();
    orig$1.call(self, ((($as_T((typeof props)) === "object") && $uZ(props.hasOwnProperty("__"))) ? props.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), props)))
  };
  slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$3__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__Z(self, nextProps, nextState, orig$2) {
    const this$1 = $m_Lslinky_core_DefinitionBase$();
    const $$x2 = ((($as_T((typeof nextProps)) === "object") && $uZ(nextProps.hasOwnProperty("__"))) ? nextProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), nextProps));
    const this$2 = $m_Lslinky_core_DefinitionBase$();
    const $$x1 = orig$2.call(self, $$x2, ((($as_T((typeof nextState)) === "object") && $uZ(nextState.hasOwnProperty("__"))) ? nextState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), nextState)));
    return $uZ($$x1)
  };
  slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$5__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__V(self, nextProps, nextState, orig$3) {
    const this$1 = $m_Lslinky_core_DefinitionBase$();
    const $$x1 = ((($as_T((typeof nextProps)) === "object") && $uZ(nextProps.hasOwnProperty("__"))) ? nextProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), nextProps));
    const this$2 = $m_Lslinky_core_DefinitionBase$();
    orig$3.call(self, $$x1, ((($as_T((typeof nextState)) === "object") && $uZ(nextState.hasOwnProperty("__"))) ? nextState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), nextState)))
  };
  slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$7__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__O(self, prevProps, prevState, orig$4) {
    const this$1 = $m_Lslinky_core_DefinitionBase$();
    const $$x1 = ((($as_T((typeof prevProps)) === "object") && $uZ(prevProps.hasOwnProperty("__"))) ? prevProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), prevProps));
    const this$2 = $m_Lslinky_core_DefinitionBase$();
    return orig$4.call(self, $$x1, ((($as_T((typeof prevState)) === "object") && $uZ(prevState.hasOwnProperty("__"))) ? prevState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), prevState)))
  };
  slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$9__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_Any__sjs_js_Dynamic__V(self, prevProps, prevState, snapshot, orig$5) {
    const this$1 = $m_Lslinky_core_DefinitionBase$();
    const $$x1 = ((($as_T((typeof prevProps)) === "object") && $uZ(prevProps.hasOwnProperty("__"))) ? prevProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), prevProps));
    const this$2 = $m_Lslinky_core_DefinitionBase$();
    orig$5.call(self, $$x1, ((($as_T((typeof prevState)) === "object") && $uZ(prevState.hasOwnProperty("__"))) ? prevState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), prevState)), snapshot)
  };
  slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$11__sjs_js_Object__sjs_js_Object__sjs_js_Object(props, state) {
    const this$1 = $m_Lslinky_core_DefinitionBase$();
    const propsScala = ((($as_T((typeof props)) === "object") && $uZ(props.hasOwnProperty("__"))) ? props.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._propsReader), props));
    const this$2 = $m_Lslinky_core_DefinitionBase$();
    const stateScala = ((($as_T((typeof state)) === "object") && $uZ(state.hasOwnProperty("__"))) ? state.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._stateReader), state));
    const newState = this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps.apply__O__O__O(propsScala, stateScala);
    if ((newState === null)) {
      return null
    } else if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
      return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._stateWriter), newState)
    } else {
      const array = [new $c_T2("__", newState)];
      const fields = new $c_sjsr_WrappedVarArgs(array);
      return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
    }
  };
  slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$15__sjs_js_Error__sjs_js_Object(error) {
    const newState = this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError.apply__O__O(error);
    if ((newState === null)) {
      return null
    } else if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
      return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._stateWriter), newState)
    } else {
      const array = [new $c_T2("__", newState)];
      const fields = new $c_sjsr_WrappedVarArgs(array);
      return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
    }
  };
}
function $as_Lslinky_core_BaseComponentWrapper(obj) {
  return (((obj instanceof $c_Lslinky_core_BaseComponentWrapper) || (obj === null)) ? obj : $throwClassCastException(obj, "slinky.core.BaseComponentWrapper"))
}
function $isArrayOf_Lslinky_core_BaseComponentWrapper(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lslinky_core_BaseComponentWrapper)))
}
function $asArrayOf_Lslinky_core_BaseComponentWrapper(obj, depth) {
  return (($isArrayOf_Lslinky_core_BaseComponentWrapper(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lslinky.core.BaseComponentWrapper;", depth))
}
class $c_Lslinky_core_BaseComponentWrapper$ extends $c_O {
  constructor() {
    super();
    this.Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware = null;
    this.Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled = false;
    $n_Lslinky_core_BaseComponentWrapper$ = this;
    this.Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware = new $c_sjsr_AnonFunction2(((this$1) => ((constructor$2, x$1$2) => constructor$2))(this));
    this.Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled = false
  };
  scalaComponentWritingEnabled__Z() {
    return this.Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled
  };
  enableScalaComponentWriting__V() {
    this.Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled = true
  };
  insertMiddleware__F2__V(middleware) {
    const orig = this.Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware;
    this.Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware = new $c_sjsr_AnonFunction2(((this$1, middleware$1, orig$1) => ((constructor$2, componentObject$2) => middleware$1.apply__O__O__O(orig$1.apply__O__O__O(constructor$2, componentObject$2), componentObject$2)))(this, middleware, orig))
  };
}
const $d_Lslinky_core_BaseComponentWrapper$ = new $TypeData().initClass({
  Lslinky_core_BaseComponentWrapper$: 0
}, false, "slinky.core.BaseComponentWrapper$", {
  Lslinky_core_BaseComponentWrapper$: 1,
  O: 1
});
$c_Lslinky_core_BaseComponentWrapper$.prototype.$classData = $d_Lslinky_core_BaseComponentWrapper$;
let $n_Lslinky_core_BaseComponentWrapper$ = (void 0);
function $m_Lslinky_core_BaseComponentWrapper$() {
  if ((!$n_Lslinky_core_BaseComponentWrapper$)) {
    $n_Lslinky_core_BaseComponentWrapper$ = new $c_Lslinky_core_BaseComponentWrapper$()
  };
  return $n_Lslinky_core_BaseComponentWrapper$
}
class $c_Lslinky_core_DefinitionBase$ extends $c_O {
  constructor() {
    super();
    this.Lslinky_core_DefinitionBase$__f_defaultBase = null;
    $n_Lslinky_core_DefinitionBase$ = this;
    const super$1 = $a_Lslinky_core_DefinitionBase();
    const this$1 = new super$1(null);
    Object.defineProperty(this$1, "initialState", {
      "get": (function() {
        return (void 0)
      }),
      "configurable": true
    });
    this$1.render = (function() {
      return null
    });
    this.Lslinky_core_DefinitionBase$__f_defaultBase = this$1
  };
  readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O(reader, value) {
    const _\uff3fvalue = value.__value;
    return ($uZ(value.hasOwnProperty("__value")) ? $f_Lslinky_readwrite_Reader__read__sjs_js_Object__O(reader, _\uff3fvalue) : $f_Lslinky_readwrite_Reader__read__sjs_js_Object__O(reader, value))
  };
  writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object(writer, value) {
    const _\uff3fvalue = writer.write__O__sjs_js_Object(value);
    if (($as_T((typeof _\uff3fvalue)) === "object")) {
      return _\uff3fvalue
    } else {
      const array = [new $c_T2("__value", _\uff3fvalue)];
      const fields = new $c_sjsr_WrappedVarArgs(array);
      return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
    }
  };
}
const $d_Lslinky_core_DefinitionBase$ = new $TypeData().initClass({
  Lslinky_core_DefinitionBase$: 0
}, false, "slinky.core.DefinitionBase$", {
  Lslinky_core_DefinitionBase$: 1,
  O: 1
});
$c_Lslinky_core_DefinitionBase$.prototype.$classData = $d_Lslinky_core_DefinitionBase$;
let $n_Lslinky_core_DefinitionBase$ = (void 0);
function $m_Lslinky_core_DefinitionBase$() {
  if ((!$n_Lslinky_core_DefinitionBase$)) {
    $n_Lslinky_core_DefinitionBase$ = new $c_Lslinky_core_DefinitionBase$()
  };
  return $n_Lslinky_core_DefinitionBase$
}
class $c_Lslinky_core_annotations_react$ extends $c_O {
  bump__F0__V(thunk) {
    /*<skip>*/
  };
}
const $d_Lslinky_core_annotations_react$ = new $TypeData().initClass({
  Lslinky_core_annotations_react$: 0
}, false, "slinky.core.annotations.react$", {
  Lslinky_core_annotations_react$: 1,
  O: 1
});
$c_Lslinky_core_annotations_react$.prototype.$classData = $d_Lslinky_core_annotations_react$;
let $n_Lslinky_core_annotations_react$ = (void 0);
function $m_Lslinky_core_annotations_react$() {
  if ((!$n_Lslinky_core_annotations_react$)) {
    $n_Lslinky_core_annotations_react$ = new $c_Lslinky_core_annotations_react$()
  };
  return $n_Lslinky_core_annotations_react$
}
class $c_Lslinky_hot_package$ extends $c_O {
  initialize__V() {
    const dynamicReactProxyModule = $i_react$002dproxy;
    const v = dynamicReactProxyModule._proxies;
    let proxyObject;
    if ((v === (void 0))) {
      const fields = $m_sci_Nil$();
      const newProxyStore = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
      dynamicReactProxyModule._proxies = newProxyStore;
      proxyObject = newProxyStore
    } else {
      proxyObject = dynamicReactProxyModule._proxies
    };
    $m_Lslinky_core_BaseComponentWrapper$().insertMiddleware__F2__V(new $c_sjsr_AnonFunction2(((this$3, proxyObject$1) => ((constructor$2, component$2) => {
      const this$4 = $as_Lslinky_core_BaseComponentWrapper(component$2);
      const componentName = $objectGetClass(this$4).getName__T();
      const v$1 = component$2._hot;
      if ((v$1 === (void 0))) {
        component$2._hot = true;
        const v$2 = proxyObject$1[componentName];
        if ((v$2 === (void 0))) {
          proxyObject$1[componentName] = $i_react$002dproxy.createProxy(constructor$2)
        } else {
          const forceUpdate = $i_react$002dproxy.getForceUpdate($i_react);
          const array = proxyObject$1[componentName].update(constructor$2);
          const len = $uI(array.length);
          let i = 0;
          while ((i < len)) {
            const arg1 = array[i];
            forceUpdate(arg1);
            i = ((1 + i) | 0)
          }
        }
      };
      return proxyObject$1[componentName].get()
    }))(this, proxyObject)));
    $m_Lslinky_core_BaseComponentWrapper$().enableScalaComponentWriting__V()
  };
}
const $d_Lslinky_hot_package$ = new $TypeData().initClass({
  Lslinky_hot_package$: 0
}, false, "slinky.hot.package$", {
  Lslinky_hot_package$: 1,
  O: 1
});
$c_Lslinky_hot_package$.prototype.$classData = $d_Lslinky_hot_package$;
let $n_Lslinky_hot_package$ = (void 0);
function $m_Lslinky_hot_package$() {
  if ((!$n_Lslinky_hot_package$)) {
    $n_Lslinky_hot_package$ = new $c_Lslinky_hot_package$()
  };
  return $n_Lslinky_hot_package$
}
const $f_Lslinky_readwrite_Reader__read__sjs_js_Object__O = (function($thiz, o) {
  let $$x1;
  if ((($as_T((typeof o)) === "object") && (o !== null))) {
    const v = o.__;
    $$x1 = (!(v === (void 0)))
  } else {
    $$x1 = false
  };
  let ret;
  if ($$x1) {
    ret = o.__
  } else {
    ret = $thiz.forceRead__sjs_js_Object__O(o)
  };
  if ($is_Lslinky_readwrite_WithRaw(ret)) {
    ret.__slinky_raw = o
  };
  return ret
});
function $is_Lslinky_readwrite_Reader(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lslinky_readwrite_Reader)))
}
function $as_Lslinky_readwrite_Reader(obj) {
  return (($is_Lslinky_readwrite_Reader(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "slinky.readwrite.Reader"))
}
function $isArrayOf_Lslinky_readwrite_Reader(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lslinky_readwrite_Reader)))
}
function $asArrayOf_Lslinky_readwrite_Reader(obj, depth) {
  return (($isArrayOf_Lslinky_readwrite_Reader(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lslinky.readwrite.Reader;", depth))
}
function $is_Lslinky_readwrite_WithRaw(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lslinky_readwrite_WithRaw)))
}
function $as_Lslinky_readwrite_WithRaw(obj) {
  return (($is_Lslinky_readwrite_WithRaw(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "slinky.readwrite.WithRaw"))
}
function $isArrayOf_Lslinky_readwrite_WithRaw(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lslinky_readwrite_WithRaw)))
}
function $asArrayOf_Lslinky_readwrite_WithRaw(obj, depth) {
  return (($isArrayOf_Lslinky_readwrite_WithRaw(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lslinky.readwrite.WithRaw;", depth))
}
function $is_Lslinky_readwrite_Writer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lslinky_readwrite_Writer)))
}
function $as_Lslinky_readwrite_Writer(obj) {
  return (($is_Lslinky_readwrite_Writer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "slinky.readwrite.Writer"))
}
function $isArrayOf_Lslinky_readwrite_Writer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lslinky_readwrite_Writer)))
}
function $asArrayOf_Lslinky_readwrite_Writer(obj, depth) {
  return (($isArrayOf_Lslinky_readwrite_Writer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lslinky.readwrite.Writer;", depth))
}
const $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI = (function($thiz) {
  if (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = $makeNativeArrayWrapper($d_I.getArrayOf(), [1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]);
    $thiz.jl_Character$__f_bitmap$0 = (((16 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI = (function($thiz) {
  return (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
});
class $c_jl_Character$ extends $c_O {
  constructor() {
    super();
    this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
    this.jl_Character$__f_charTypeIndices = null;
    this.jl_Character$__f_charTypes = null;
    this.jl_Character$__f_isMirroredIndices = null;
    this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
    this.jl_Character$__f_bitmap$0 = 0
  };
  digitWithValidRadix__I__I__I(codePoint, radix) {
    let value;
    if ((codePoint < 256)) {
      value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
    } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
      value = (((-65303) + codePoint) | 0)
    } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
      value = (((-65335) + codePoint) | 0)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
      const zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
      if ((zeroCodePointIndex < 0)) {
        value = (-1)
      } else {
        const v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
        value = ((v > 9) ? (-1) : v)
      }
    };
    return ((value < radix) ? value : (-1))
  };
  isZeroDigit__C__Z(ch) {
    if ((ch < 256)) {
      return (ch === 48)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const key = ch;
      return ($m_ju_Arrays$().binarySearch__AI__I__I(a, key) >= 0)
    }
  };
}
const $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
let $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
const $p_jl_Integer$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
class $c_jl_Integer$ extends $c_O {
  parseInt__T__I__I(s, radix) {
    const len = ((s === null) ? 0 : $uI(s.length));
    if ((((len === 0) || (radix < 2)) || (radix > 36))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    const firstChar = (65535 & $uI(s.charCodeAt(0)));
    const negative = (firstChar === 45);
    const maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
    let i = ((negative || (firstChar === 43)) ? 1 : 0);
    if ((i >= $uI(s.length))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    let result = 0.0;
    while ((i !== len)) {
      const $$x1 = $m_jl_Character$();
      const index = i;
      const digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s.charCodeAt(index))), radix);
      result = ((result * radix) + digit);
      if (((digit === (-1)) || (result > maxAbsValue))) {
        $p_jl_Integer$__fail$1__T__E(this, s)
      };
      i = ((1 + i) | 0)
    };
    if (negative) {
      const n = (-result);
      return $uI((n | 0))
    } else {
      const n$1 = result;
      return $uI((n$1 | 0))
    }
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
const $p_jl_Long$__StringRadixInfos$lzycompute__O = (function($thiz) {
  if ((!$thiz.jl_Long$__f_bitmap$0)) {
    const r = [];
    let radix = 0;
    while ((radix < 2)) {
      r.push(null);
      radix = ((1 + radix) | 0)
    };
    while ((radix <= 36)) {
      const barrier = $intDiv(2147483647, radix);
      let radixPowLength = radix;
      let chunkLength = 1;
      let paddingZeros = "0";
      while ((radixPowLength <= barrier)) {
        radixPowLength = $imul(radixPowLength, radix);
        chunkLength = ((1 + chunkLength) | 0);
        paddingZeros = (paddingZeros + "0")
      };
      const value = radixPowLength;
      const hi = (value >> 31);
      const this$2 = $m_RTLong$();
      const lo = this$2.divideUnsignedImpl__I__I__I__I__I((-1), (-1), value, hi);
      const hi$1 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      r.push(new $c_jl_Long$StringRadixInfo(chunkLength, new $c_RTLong(value, hi), paddingZeros, new $c_RTLong(lo, hi$1)));
      radix = ((1 + radix) | 0)
    };
    $thiz.jl_Long$__f_StringRadixInfos = r;
    $thiz.jl_Long$__f_bitmap$0 = true
  };
  return $thiz.jl_Long$__f_StringRadixInfos
});
const $p_jl_Long$__StringRadixInfos__O = (function($thiz) {
  return ((!$thiz.jl_Long$__f_bitmap$0) ? $p_jl_Long$__StringRadixInfos$lzycompute__O($thiz) : $thiz.jl_Long$__f_StringRadixInfos)
});
const $p_jl_Long$__parseLongError__T__E = (function($thiz, s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""))
});
const $p_jl_Long$__parseChunkAsUInt$1__I__I__T__I__I = (function($thiz, chunkStart, chunkEnd, s$1, radix$1) {
  let result = 0;
  let i = chunkStart;
  while ((i !== chunkEnd)) {
    const $$x1 = $m_jl_Character$();
    const index = i;
    const digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s$1.charCodeAt(index))), radix$1);
    if ((digit === (-1))) {
      $p_jl_Long$__parseLongError__T__E($thiz, s$1)
    };
    result = (($imul(result, radix$1) + digit) | 0);
    i = ((1 + i) | 0)
  };
  return result
});
class $c_jl_Long$ extends $c_O {
  constructor() {
    super();
    this.jl_Long$__f_StringRadixInfos = null;
    this.jl_Long$__f_bitmap$0 = false
  };
  parseLong__T__I__J(s, radix) {
    if ((s === "")) {
      $p_jl_Long$__parseLongError__T__E(this, s)
    };
    let start = 0;
    let neg = false;
    const x1 = (65535 & $uI(s.charCodeAt(0)));
    switch (x1) {
      case 43: {
        start = 1;
        break
      }
      case 45: {
        start = 1;
        neg = true;
        break
      }
    };
    const t = this.parseUnsignedLongInternal__T__I__I__J(s, radix, start);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    if (neg) {
      const lo$1 = ((-lo) | 0);
      const hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      if (((hi$1 === 0) ? (lo$1 !== 0) : (hi$1 > 0))) {
        $p_jl_Long$__parseLongError__T__E(this, s)
      };
      return new $c_RTLong(lo$1, hi$1)
    } else {
      if ((hi < 0)) {
        $p_jl_Long$__parseLongError__T__E(this, s)
      };
      return new $c_RTLong(lo, hi)
    }
  };
  parseUnsignedLongInternal__T__I__I__J(s, radix, start) {
    const length = $uI(s.length);
    if ((((start >= length) || (radix < 2)) || (radix > 36))) {
      $p_jl_Long$__parseLongError__T__E(this, s)
    } else {
      const radixInfo = $as_jl_Long$StringRadixInfo($p_jl_Long$__StringRadixInfos__O(this)[radix]);
      const chunkLen = radixInfo.jl_Long$StringRadixInfo__f_chunkLength;
      let firstChunkStart = start;
      while (true) {
        let $$x1;
        if ((firstChunkStart < length)) {
          const $$x2 = $m_jl_Character$();
          const index = firstChunkStart;
          $$x1 = $$x2.isZeroDigit__C__Z((65535 & $uI(s.charCodeAt(index))))
        } else {
          $$x1 = false
        };
        if ($$x1) {
          firstChunkStart = ((1 + firstChunkStart) | 0)
        } else {
          break
        }
      };
      if ((((length - firstChunkStart) | 0) > $imul(3, chunkLen))) {
        $p_jl_Long$__parseLongError__T__E(this, s)
      };
      const firstChunkLength = ((1 + $intMod((((-1) + ((length - firstChunkStart) | 0)) | 0), chunkLen)) | 0);
      const firstChunkEnd = ((firstChunkStart + firstChunkLength) | 0);
      const chunkStart = firstChunkStart;
      const x = $p_jl_Long$__parseChunkAsUInt$1__I__I__T__I__I(this, chunkStart, firstChunkEnd, s, radix);
      if ((firstChunkEnd === length)) {
        return new $c_RTLong(x, 0)
      } else {
        const t = radixInfo.jl_Long$StringRadixInfo__f_radixPowLength;
        const lo = t.RTLong__f_lo;
        const hi$1 = t.RTLong__f_hi;
        const secondChunkEnd = ((firstChunkEnd + chunkLen) | 0);
        const a0 = (65535 & x);
        const a1 = ((x >>> 16) | 0);
        const b0 = (65535 & lo);
        const b1 = ((lo >>> 16) | 0);
        const a0b0 = $imul(a0, b0);
        const a1b0 = $imul(a1, b0);
        const a0b1 = $imul(a0, b1);
        const lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
        const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
        const hi$2 = (((((($imul(x, hi$1) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
        const x$1 = $p_jl_Long$__parseChunkAsUInt$1__I__I__T__I__I(this, firstChunkEnd, secondChunkEnd, s, radix);
        const lo$2 = ((lo$1 + x$1) | 0);
        const hi$4 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ lo$1)) ? ((1 + hi$2) | 0) : hi$2);
        if ((secondChunkEnd === length)) {
          return new $c_RTLong(lo$2, hi$4)
        } else {
          const t$1 = radixInfo.jl_Long$StringRadixInfo__f_overflowBarrier;
          const lo$3 = t$1.RTLong__f_lo;
          const hi$5 = t$1.RTLong__f_hi;
          const x$2 = $p_jl_Long$__parseChunkAsUInt$1__I__I__T__I__I(this, secondChunkEnd, length, s, radix);
          if (((hi$4 === hi$5) ? (((-2147483648) ^ lo$2) > ((-2147483648) ^ lo$3)) : (hi$4 > hi$5))) {
            $p_jl_Long$__parseLongError__T__E(this, s)
          };
          const a0$1 = (65535 & lo$2);
          const a1$1 = ((lo$2 >>> 16) | 0);
          const b0$1 = (65535 & lo);
          const b1$1 = ((lo >>> 16) | 0);
          const a0b0$1 = $imul(a0$1, b0$1);
          const a1b0$1 = $imul(a1$1, b0$1);
          const a0b1$1 = $imul(a0$1, b1$1);
          const lo$4 = ((a0b0$1 + (((a1b0$1 + a0b1$1) | 0) << 16)) | 0);
          const c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
          const hi$7 = (((((((($imul(lo$2, hi$1) + $imul(hi$4, lo)) | 0) + $imul(a1$1, b1$1)) | 0) + ((c1part$1 >>> 16) | 0)) | 0) + (((((65535 & c1part$1) + a1b0$1) | 0) >>> 16) | 0)) | 0);
          const lo$5 = ((lo$4 + x$2) | 0);
          const hi$8 = ((((-2147483648) ^ lo$5) < ((-2147483648) ^ lo$4)) ? ((1 + hi$7) | 0) : hi$7);
          const hi$9 = ((-2147483648) ^ hi$8);
          if (((hi$9 === (-2147483648)) && (((-2147483648) ^ lo$5) < ((-2147483648) ^ x$2)))) {
            $p_jl_Long$__parseLongError__T__E(this, s)
          };
          return new $c_RTLong(lo$5, hi$8)
        }
      }
    }
  };
}
const $d_jl_Long$ = new $TypeData().initClass({
  jl_Long$: 0
}, false, "java.lang.Long$", {
  jl_Long$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Long$.prototype.$classData = $d_jl_Long$;
let $n_jl_Long$ = (void 0);
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$()
  };
  return $n_jl_Long$
}
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else if ((Error.captureStackTrace === (void 0))) {
      const e = new Error();
      this.jl_Throwable__f_stackTraceStateInternal = e
    } else {
      Error.captureStackTrace(this);
      this.jl_Throwable__f_stackTraceStateInternal = this
    };
    return this
  };
  toString__T() {
    const className = $objectGetClass(this).getName__T();
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectGetClass(this).getName__T()
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = $uI((x | 0));
      const x$1 = (x / 4.294967296E9);
      const hi$7 = $uI((x$1 | 0));
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const $$x1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  divideUnsignedImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === 0)) {
      if ((bhi === 0)) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        if ((blo === 0)) {
          return $intDiv(0, 0)
        } else {
          const n = ($uD((alo >>> 0)) / $uD((blo >>> 0)));
          return $uI((n | 0))
        }
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi)
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
class $c_s_$less$colon$less$ extends $c_O {
  constructor() {
    super();
    this.s_$less$colon$less$__f_singleton = null;
    $n_s_$less$colon$less$ = this;
    this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
  };
}
const $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
let $n_s_$less$colon$less$ = (void 0);
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
class $c_s_Option$ extends $c_O {
  apply__O__s_Option(x) {
    return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
  };
}
const $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
let $n_s_Option$ = (void 0);
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
const $p_sci_Range$__description__I__I__I__Z__T = (function($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
});
class $c_sci_Range$ extends $c_O {
  scala$collection$immutable$Range$$fail__I__I__I__Z__E(start, end, step, isInclusive) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
  };
  scala$collection$immutable$Range$$emptyRangeError__T__jl_Throwable(what) {
    return new $c_ju_NoSuchElementException((what + " on empty Range"))
  };
}
const $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
let $n_sci_Range$ = (void 0);
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_AbstractFunction2 extends $c_O {
  toString__T() {
    return "<function2>"
  };
}
class $c_sjs_js_Dynamic$literal$ extends $c_O {
  applyDynamicNamed__T__sci_Seq__sjs_js_Object(name, fields) {
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  };
}
const $d_sjs_js_Dynamic$literal$ = new $TypeData().initClass({
  sjs_js_Dynamic$literal$: 0
}, false, "scala.scalajs.js.Dynamic$literal$", {
  sjs_js_Dynamic$literal$: 1,
  O: 1,
  s_Dynamic: 1
});
$c_sjs_js_Dynamic$literal$.prototype.$classData = $d_sjs_js_Dynamic$literal$;
let $n_sjs_js_Dynamic$literal$ = (void 0);
function $m_sjs_js_Dynamic$literal$() {
  if ((!$n_sjs_js_Dynamic$literal$)) {
    $n_sjs_js_Dynamic$literal$ = new $c_sjs_js_Dynamic$literal$()
  };
  return $n_sjs_js_Dynamic$literal$
}
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set")
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sc_IndexedSeq(xs)) {
      const x2 = $as_sc_IndexedSeq(xs);
      return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else if ((xs instanceof $c_sci_List)) {
      const x3 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
class $c_Lslinky_core_StatelessComponentWrapper extends $c_Lslinky_core_BaseComponentWrapper {
}
class $c_Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__Z(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$booleanReader$1__sjs_js_Object__Z(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__Z(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$booleanReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__B(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$byteReader$1__sjs_js_Object__B(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__B(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$byteReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$charReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$charReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$charReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__C(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$charReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$charReader$1__sjs_js_Object__C(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return $bC(this.forceRead__sjs_js_Object__C(o))
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$charReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$charReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$charReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$charReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$charReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$charReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__D(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$doubleReader$1__sjs_js_Object__D(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__D(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$doubleReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__F(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$floatReader$1__sjs_js_Object__F(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__F(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$floatReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$intReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$intReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$intReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__I(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$intReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$intReader$1__sjs_js_Object__I(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__I(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$intReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$intReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$intReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$intReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$intReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$intReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$longReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$longReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$longReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__J(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$longReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$longReader$1__sjs_js_Object__J(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__J(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$longReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$longReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$longReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$longReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$longReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$longReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__sci_Range(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$rangeReader$1__sjs_js_Object__sci_Range(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__sci_Range(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$rangeReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__S(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$shortReader$1__sjs_js_Object__S(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__S(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$shortReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__T(o) {
    const this$1 = this.Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2__f_$outer;
    return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$stringReader$1__sjs_js_Object__T(this$1, o)
  };
  forceRead__sjs_js_Object__O(o) {
    return this.forceRead__sjs_js_Object__T(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$stringReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2;
class $c_Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2 extends $c_O {
  constructor(outer) {
    super();
    this.Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2__f_$outer = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2__f_$outer = outer
    }
  };
  forceRead__sjs_js_Object__V(o) {
    /*<skip>*/
  };
  forceRead__sjs_js_Object__O(o) {
    this.forceRead__sjs_js_Object__V(o)
  };
}
const $d_Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$unitReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$10 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$10__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$10__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$10__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$10 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$10: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$10", {
  Lslinky_readwrite_CoreWriters$$Lambda$10: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$10.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$10;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$11 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$11__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$11__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$11__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$11 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$11: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$11", {
  Lslinky_readwrite_CoreWriters$$Lambda$11: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$11.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$11;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$12 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$12__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$12__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$12__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$12 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$12: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$12", {
  Lslinky_readwrite_CoreWriters$$Lambda$12: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$12.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$12;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$13 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$13__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$13__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$13__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$13 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$13: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$13", {
  Lslinky_readwrite_CoreWriters$$Lambda$13: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$13.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$13;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$14 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$14__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$14__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$14__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$14 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$14: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$14", {
  Lslinky_readwrite_CoreWriters$$Lambda$14: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$14.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$14;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$15 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$15__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$15__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$15__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$15 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$15: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$15", {
  Lslinky_readwrite_CoreWriters$$Lambda$15: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$15.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$15;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$16 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$16__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$16__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$16__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$16 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$16: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$16", {
  Lslinky_readwrite_CoreWriters$$Lambda$16: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$16.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$16;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$17 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$17__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$17__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$17__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$17 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$17: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$17", {
  Lslinky_readwrite_CoreWriters$$Lambda$17: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$17.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$17;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$18 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$18__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$18__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$18__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$18 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$18: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$18", {
  Lslinky_readwrite_CoreWriters$$Lambda$18: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$18.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$18;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$19 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$19__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$19__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$19__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$19 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$19: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$19", {
  Lslinky_readwrite_CoreWriters$$Lambda$19: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$19.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$19;
class $c_Lslinky_readwrite_CoreWriters$$Lambda$20 extends $c_O {
  constructor(f) {
    super();
    this.Lslinky_readwrite_CoreWriters$$Lambda$20__f_f = null;
    this.Lslinky_readwrite_CoreWriters$$Lambda$20__f_f = f
  };
  write__O__sjs_js_Object(p) {
    return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$20__f_f)(p)
  };
}
const $d_Lslinky_readwrite_CoreWriters$$Lambda$20 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$20: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$20", {
  Lslinky_readwrite_CoreWriters$$Lambda$20: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$20.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$20;
class $c_Lhello_world_App$ extends $c_Lslinky_core_StatelessComponentWrapper {
  constructor() {
    super();
    $ct_Lslinky_core_BaseComponentWrapper__Lslinky_core_StateReaderProvider__Lslinky_core_StateWriterProvider__(this, $m_Lslinky_readwrite_Reader$().Lslinky_readwrite_Reader$__f_unitReader, $m_Lslinky_readwrite_Writer$().Lslinky_readwrite_Writer$__f_unitWriter)
  };
}
const $d_Lhello_world_App$ = new $TypeData().initClass({
  Lhello_world_App$: 0
}, false, "hello.world.App$", {
  Lhello_world_App$: 1,
  Lslinky_core_StatelessComponentWrapper: 1,
  Lslinky_core_BaseComponentWrapper: 1,
  O: 1
});
$c_Lhello_world_App$.prototype.$classData = $d_Lhello_world_App$;
let $n_Lhello_world_App$ = (void 0);
function $m_Lhello_world_App$() {
  if ((!$n_Lhello_world_App$)) {
    $n_Lhello_world_App$ = new $c_Lhello_world_App$()
  };
  return $n_Lhello_world_App$
}
class $c_Lhello_world_ProductItemList$ extends $c_Lslinky_core_StatelessComponentWrapper {
  constructor() {
    super();
    $ct_Lslinky_core_BaseComponentWrapper__Lslinky_core_StateReaderProvider__Lslinky_core_StateWriterProvider__(this, $m_Lslinky_readwrite_Reader$().Lslinky_readwrite_Reader$__f_unitReader, $m_Lslinky_readwrite_Writer$().Lslinky_readwrite_Writer$__f_unitWriter)
  };
  apply__T__sjs_js_Array(item) {
    const $$x1 = new $c_Lhello_world_ProductItemList$Props(item);
    const constructor = $a_Lhello_world_ProductItemList();
    return this.apply__O__sjs_js_Dynamic__sjs_js_Array($$x1, constructor)
  };
}
const $d_Lhello_world_ProductItemList$ = new $TypeData().initClass({
  Lhello_world_ProductItemList$: 0
}, false, "hello.world.ProductItemList$", {
  Lhello_world_ProductItemList$: 1,
  Lslinky_core_StatelessComponentWrapper: 1,
  Lslinky_core_BaseComponentWrapper: 1,
  O: 1
});
$c_Lhello_world_ProductItemList$.prototype.$classData = $d_Lhello_world_ProductItemList$;
let $n_Lhello_world_ProductItemList$ = (void 0);
function $m_Lhello_world_ProductItemList$() {
  if ((!$n_Lhello_world_ProductItemList$)) {
    $n_Lhello_world_ProductItemList$ = new $c_Lhello_world_ProductItemList$()
  };
  return $n_Lhello_world_ProductItemList$
}
const $f_jl_Boolean__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Boolean__hashCode__I = (function($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
});
const $f_jl_Boolean__toString__T = (function($thiz) {
  const b = $uZ($thiz);
  return ("" + b)
});
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
const $f_jl_Character__hashCode__I = (function($thiz) {
  return $uC($thiz)
});
const $f_jl_Character__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $Char)) {
    const $$x1 = $uC($thiz);
    const this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
});
const $f_jl_Character__toString__T = (function($thiz) {
  const c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
});
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
class $c_s_$less$colon$less extends $c_O {
}
const $f_s_Product2__productElement__I__O = (function($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
});
const $f_sc_Iterator__drop__I__sc_Iterator = (function($thiz, n) {
  let i = 0;
  while (((i < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    i = ((1 + i) | 0)
  };
  return $thiz
});
const $f_sc_Iterator__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
});
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
class $c_s_math_ScalaNumber {
}
function $as_s_math_ScalaNumber(obj) {
  return (((obj instanceof $c_s_math_ScalaNumber) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
class $c_sjs_js_Any$ extends $c_O {
  fromFunction0__F0__sjs_js_Function0(f) {
    return ((f$1) => (() => f$1.apply__O()))(f)
  };
  fromFunction1__F1__sjs_js_Function1(f) {
    return ((f$2) => ((arg1$2) => f$2.apply__O__O(arg1$2)))(f)
  };
}
const $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
let $n_sjs_js_Any$ = (void 0);
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
class $c_sjsr_AnonFunction2 extends $c_sr_AbstractFunction2 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction2__f_f = null;
    this.sjsr_AnonFunction2__f_f = f
  };
  apply__O__O__O(arg1, arg2) {
    return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
  };
}
const $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$stringReader$1__sjs_js_Object__T = (function($thiz, v) {
  if (($as_T((typeof v)) === "string")) {
    return $as_T(v)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a string"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$charReader$1__sjs_js_Object__C = (function($thiz, v) {
  if (($as_T((typeof v)) === "string")) {
    const $$x1 = $m_sc_StringOps$();
    const x = $as_T(v);
    return $$x1.head$extension__T__C(x)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a string (trying to get a char)"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$byteReader$1__sjs_js_Object__B = (function($thiz, v) {
  if (($as_T((typeof v)) === "number")) {
    return $uB(v)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a number"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$shortReader$1__sjs_js_Object__S = (function($thiz, v) {
  if (($as_T((typeof v)) === "number")) {
    return $uS(v)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a number"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$intReader$1__sjs_js_Object__I = (function($thiz, v) {
  if (($as_T((typeof v)) === "number")) {
    return $uI(v)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a number"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$longReader$1__sjs_js_Object__J = (function($thiz, v) {
  if (($as_T((typeof v)) === "string")) {
    const x = $as_T(v);
    const this$3 = $m_jl_Long$();
    return this$3.parseLong__T__I__J(x, 10)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a string (trying to get a long)"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$booleanReader$1__sjs_js_Object__Z = (function($thiz, v) {
  if (($as_T((typeof v)) === "boolean")) {
    return $uZ(v)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a boolean"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$doubleReader$1__sjs_js_Object__D = (function($thiz, v) {
  if (($as_T((typeof v)) === "number")) {
    return $uD(v)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a number"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$floatReader$1__sjs_js_Object__F = (function($thiz, v) {
  if (($as_T((typeof v)) === "number")) {
    return $uF(v)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("The value " + v) + " is not a number"))
  }
});
const $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$rangeReader$1__sjs_js_Object__sci_Range = (function($thiz, o) {
  if ($uZ(o.inclusive)) {
    const x = $uI(o.start);
    const end = $uI(o.end);
    const isEmpty = (x > end);
    const step = $uI(o.step);
    return new $c_sci_Range$Inclusive(x, end, step)
  } else {
    const x$1 = $uI(o.start);
    const end$1 = $uI(o.end);
    const isEmpty$1 = (x$1 >= end$1);
    const step$1 = $uI(o.step);
    return new $c_sci_Range$Exclusive(x$1, end$1, step$1)
  }
});
const $f_Lslinky_readwrite_CoreReaders__$init$__V = (function($thiz) {
  $thiz.Lslinky_readwrite_Reader$__f_unitReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$unitReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_stringReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$stringReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_charReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$charReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_byteReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$byteReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_shortReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$shortReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_intReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$intReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_longReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$longReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_booleanReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$booleanReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_doubleReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$doubleReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_floatReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$floatReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_rangeReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2($thiz);
  $thiz.Lslinky_readwrite_Reader$__f_inclusiveRangeReader = $thiz.Lslinky_readwrite_Reader$__f_rangeReader
});
const $f_Lslinky_readwrite_CoreWriters__$init$__V = (function($thiz) {
  $thiz.Lslinky_readwrite_Writer$__f_unitWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$10(((this$1) => ((x$3$2) => {
    $as_jl_Void(x$3$2);
    const fields = $m_sci_Nil$();
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_stringWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$11(((this$2$1) => ((x$4$2) => {
    const x$4 = $as_T(x$4$2);
    return x$4
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_charWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$12(((this$3) => ((x$5$2) => {
    const x$5 = $uC(x$5$2);
    return $as_T(String.fromCharCode(x$5))
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_byteWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$13(((this$4$1) => ((x$6$2) => {
    const x$6 = $uB(x$6$2);
    return x$6
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_shortWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$14(((this$5) => ((x$7$2) => {
    const x$7 = $uS(x$7$2);
    return x$7
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_intWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$15(((this$6) => ((x$8$2) => {
    const x$8 = $uI(x$8$2);
    return x$8
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_longWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$16(((this$7) => ((x$9$2) => {
    const t = $uJ(x$9$2);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_booleanWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$17(((this$8) => ((x$10$2) => {
    const x$10 = $uZ(x$10$2);
    return x$10
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_doubleWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$18(((this$9) => ((x$11$2) => {
    const x$11 = $uD(x$11$2);
    return x$11
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_floatWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$19(((this$10) => ((x$12$2) => {
    const x$12 = $uF(x$12$2);
    return x$12
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_rangeWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$20(((this$11) => ((r$2) => {
    const r = $as_sci_Range(r$2);
    const value = r.sci_Range__f_start;
    const $$x3 = new $c_T2("start", value);
    const value$1 = r.sci_Range__f_end;
    const $$x2 = new $c_T2("end", value$1);
    const value$2 = r.sci_Range__f_step;
    const $$x1 = new $c_T2("step", value$2);
    const value$3 = r.isInclusive__Z();
    const array = [$$x3, $$x2, $$x1, new $c_T2("inclusive", value$3)];
    const fields$1 = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1)
  }))($thiz));
  $thiz.Lslinky_readwrite_Writer$__f_inclusiveRangeWriter = $thiz.Lslinky_readwrite_Writer$__f_rangeWriter
});
class $c_Lhello_world_ProductItemList$Props extends $c_O {
  constructor(item) {
    super();
    this.Lhello_world_ProductItemList$Props__f_item = null;
    this.Lhello_world_ProductItemList$Props__f_item = item
  };
  productPrefix__T() {
    return "Props"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lhello_world_ProductItemList$Props__f_item : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lhello_world_ProductItemList$Props)) {
      const Props$1 = $as_Lhello_world_ProductItemList$Props(x$1);
      return (this.Lhello_world_ProductItemList$Props__f_item === Props$1.Lhello_world_ProductItemList$Props__f_item)
    } else {
      return false
    }
  };
}
function $as_Lhello_world_ProductItemList$Props(obj) {
  return (((obj instanceof $c_Lhello_world_ProductItemList$Props) || (obj === null)) ? obj : $throwClassCastException(obj, "hello.world.ProductItemList$Props"))
}
function $isArrayOf_Lhello_world_ProductItemList$Props(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lhello_world_ProductItemList$Props)))
}
function $asArrayOf_Lhello_world_ProductItemList$Props(obj, depth) {
  return (($isArrayOf_Lhello_world_ProductItemList$Props(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lhello.world.ProductItemList$Props;", depth))
}
const $d_Lhello_world_ProductItemList$Props = new $TypeData().initClass({
  Lhello_world_ProductItemList$Props: 0
}, false, "hello.world.ProductItemList$Props", {
  Lhello_world_ProductItemList$Props: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lhello_world_ProductItemList$Props.prototype.$classData = $d_Lhello_world_ProductItemList$Props;
const $f_jl_Byte__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Byte__hashCode__I = (function($thiz) {
  return $uB($thiz)
});
const $f_jl_Byte__toString__T = (function($thiz) {
  const b = $uB($thiz);
  return ("" + b)
});
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
const $ct_jl_CloneNotSupportedException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_CloneNotSupportedException extends $c_jl_Exception {
}
const $d_jl_CloneNotSupportedException = new $TypeData().initClass({
  jl_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", {
  jl_CloneNotSupportedException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_CloneNotSupportedException.prototype.$classData = $d_jl_CloneNotSupportedException;
const $f_jl_Double__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Double__hashCode__I = (function($thiz) {
  const value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Double__toString__T = (function($thiz) {
  const d = $uD($thiz);
  return ("" + d)
});
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Float__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Float__hashCode__I = (function($thiz) {
  const value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Float__toString__T = (function($thiz) {
  const f = $uF($thiz);
  return ("" + f)
});
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Integer__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Integer__hashCode__I = (function($thiz) {
  return $uI($thiz)
});
const $f_jl_Integer__toString__T = (function($thiz) {
  const i = $uI($thiz);
  return ("" + i)
});
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
const $f_jl_Long__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = $as_jl_Long(that);
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
});
const $f_jl_Long__hashCode__I = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
});
const $f_jl_Long__toString__T = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
});
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $f_jl_Short__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Short__hashCode__I = (function($thiz) {
  return $uS($thiz)
});
const $f_jl_Short__toString__T = (function($thiz) {
  const s = $uS($thiz);
  return ("" + s)
});
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
const $f_T__hashCode__I = (function($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
});
const $f_T__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_T__toString__T = (function($thiz) {
  return $thiz
});
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = ""
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $uI(this$1.length)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & $uI(this$1.charCodeAt(index)))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = $as_RTLong(that);
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = $as_jl_Long(x$1);
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
class $c_s_$eq$colon$eq extends $c_s_$less$colon$less {
}
class $c_sc_AbstractIterator extends $c_O {
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
}
const $f_sc_SeqOps__isEmpty__Z = (function($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
});
const $f_sc_SeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const thisKnownSize = $thiz.knownSize__I();
  let knownSizeDifference;
  if ((thisKnownSize !== (-1))) {
    const thatKnownSize = that.knownSize__I();
    knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    const this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
});
let $b_Lslinky_core_AttrPair = (void 0);
function $a_Lslinky_core_AttrPair() {
  if ((!$b_Lslinky_core_AttrPair)) {
    class $c_Lslinky_core_AttrPair extends Object {
      constructor(arg, arg$2) {
        const prep0 = $as_T(arg);
        const prep1 = arg$2;
        const name = prep0;
        const value = prep1;
        super();
        Object.defineProperty(this, "name", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "value", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.name = name;
        this.value = value
      };
    }
    $b_Lslinky_core_AttrPair = $c_Lslinky_core_AttrPair
  };
  return $b_Lslinky_core_AttrPair
}
const $s_Lslinky_core_DefinitionBase__stateWriter__Lslinky_core_DefinitionBase__Lslinky_readwrite_Writer = (function(this$1) {
  return $as_Lslinky_readwrite_Writer(this$1._base._stateWriter)
});
const $s_Lslinky_core_DefinitionBase__props__Lslinky_core_DefinitionBase__O = (function(this$1) {
  const value = this$1.props;
  const this$2 = $m_Lslinky_core_DefinitionBase$();
  return ((($as_T((typeof value)) === "object") && $uZ(value.hasOwnProperty("__"))) ? value.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._propsReader), value))
});
const $s_Lslinky_core_DefinitionBase__state__Lslinky_core_DefinitionBase__O = (function(this$1) {
  const value = this$1.state;
  const this$2 = $m_Lslinky_core_DefinitionBase$();
  return ((($as_T((typeof value)) === "object") && $uZ(value.hasOwnProperty("__"))) ? value.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._stateReader), value))
});
const $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__O__V = (function(this$1, s) {
  let stateObject;
  if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    stateObject = $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$1._base._stateWriter), s)
  } else {
    const array = [new $c_T2("__", s)];
    const fields = new $c_sjsr_WrappedVarArgs(array);
    stateObject = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  };
  this$1.setState(stateObject)
});
const $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F1__V = (function(this$1, fn) {
  this$1.setState($m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((this$2, fn$1) => ((ps$2) => {
    const this$3 = $m_Lslinky_core_DefinitionBase$();
    const s = fn$1.apply__O__O(((($as_T((typeof ps$2)) === "object") && $uZ(ps$2.hasOwnProperty("__"))) ? ps$2.__ : this$3.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$2._base._stateReader), ps$2)));
    if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
      return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$2._base._stateWriter), s)
    } else {
      const array = [new $c_T2("__", s)];
      const fields = new $c_sjsr_WrappedVarArgs(array);
      return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
    }
  }))(this$1, fn))))
});
const $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F2__V = (function(this$1, fn) {
  this$1.setState(((arg$outer, fn$2) => ((arg1$2, arg2$2) => $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$2__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object(arg$outer, arg1$2, arg2$2, fn$2)))(this$1, fn))
});
const $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__O__F0__V = (function(this$1, s, callback) {
  let stateObject;
  if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    stateObject = $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$1._base._stateWriter), s)
  } else {
    const array = [new $c_T2("__", s)];
    const fields = new $c_sjsr_WrappedVarArgs(array);
    stateObject = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  };
  this$1.setState(stateObject, $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(callback))
});
const $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F1__F0__V = (function(this$1, fn, callback) {
  this$1.setState($m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((this$2, fn$1) => ((ps$2) => {
    const this$3 = $m_Lslinky_core_DefinitionBase$();
    const s = fn$1.apply__O__O(((($as_T((typeof ps$2)) === "object") && $uZ(ps$2.hasOwnProperty("__"))) ? ps$2.__ : this$3.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$2._base._stateReader), ps$2)));
    if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
      return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$2._base._stateWriter), s)
    } else {
      const array = [new $c_T2("__", s)];
      const fields = new $c_sjsr_WrappedVarArgs(array);
      return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
    }
  }))(this$1, fn))), $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(callback))
});
const $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F2__F0__V = (function(this$1, fn, callback) {
  this$1.setState(((arg$outer, fn$4) => ((arg1$2, arg2$2) => $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$5__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object(arg$outer, arg1$2, arg2$2, fn$4)))(this$1, fn), $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(callback))
});
const $s_Lslinky_core_DefinitionBase__componentWillMount__Lslinky_core_DefinitionBase__V = (function(this$1) {
  /*<skip>*/
});
const $s_Lslinky_core_DefinitionBase__componentDidMount__Lslinky_core_DefinitionBase__V = (function(this$1) {
  /*<skip>*/
});
const $s_Lslinky_core_DefinitionBase__componentWillReceiveProps__Lslinky_core_DefinitionBase__O__V = (function(this$1, nextProps) {
  /*<skip>*/
});
const $s_Lslinky_core_DefinitionBase__shouldComponentUpdate__Lslinky_core_DefinitionBase__O__O__Z = (function(this$1, nextProps, nextState) {
  return true
});
const $s_Lslinky_core_DefinitionBase__componentWillUpdate__Lslinky_core_DefinitionBase__O__O__V = (function(this$1, nextProps, nextState) {
  /*<skip>*/
});
const $s_Lslinky_core_DefinitionBase__getSnapshotBeforeUpdate__Lslinky_core_DefinitionBase__O__O__O = (function(this$1, prevProps, prevState) {
  return null
});
const $s_Lslinky_core_DefinitionBase__componentDidUpdate__Lslinky_core_DefinitionBase__O__O__V = (function(this$1, prevProps, prevState) {
  /*<skip>*/
});
const $s_Lslinky_core_DefinitionBase__componentDidUpdate__Lslinky_core_DefinitionBase__O__O__O__V = (function(this$1, prevProps, prevState, snapshot) {
  this$1.componentDidUpdateScala(prevProps, prevState)
});
const $s_Lslinky_core_DefinitionBase__componentWillUnmount__Lslinky_core_DefinitionBase__V = (function(this$1) {
  /*<skip>*/
});
const $s_Lslinky_core_DefinitionBase__componentDidCatch__Lslinky_core_DefinitionBase__sjs_js_Error__Lslinky_core_facade_ErrorBoundaryInfo__V = (function(this$1, error, info) {
  /*<skip>*/
});
const $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$2__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object = (function(this$1, ps, p, fn$2) {
  const this$2 = $m_Lslinky_core_DefinitionBase$();
  const $$x1 = ((($as_T((typeof ps)) === "object") && $uZ(ps.hasOwnProperty("__"))) ? ps.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._stateReader), ps));
  const this$3 = $m_Lslinky_core_DefinitionBase$();
  const s = fn$2.apply__O__O__O($$x1, ((($as_T((typeof p)) === "object") && $uZ(p.hasOwnProperty("__"))) ? p.__ : this$3.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._propsReader), p)));
  if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$1._base._stateWriter), s)
  } else {
    const array = [new $c_T2("__", s)];
    const fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }
});
const $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$5__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object = (function(this$1, ps, p, fn$4) {
  const this$2 = $m_Lslinky_core_DefinitionBase$();
  const $$x1 = ((($as_T((typeof ps)) === "object") && $uZ(ps.hasOwnProperty("__"))) ? ps.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._stateReader), ps));
  const this$3 = $m_Lslinky_core_DefinitionBase$();
  const s = fn$4.apply__O__O__O($$x1, ((($as_T((typeof p)) === "object") && $uZ(p.hasOwnProperty("__"))) ? p.__ : this$3.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._propsReader), p)));
  if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$1._base._stateWriter), s)
  } else {
    const array = [new $c_T2("__", s)];
    const fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }
});
let $b_Lslinky_core_DefinitionBase = (void 0);
function $a_Lslinky_core_DefinitionBase() {
  if ((!$b_Lslinky_core_DefinitionBase)) {
    class $c_Lslinky_core_DefinitionBase extends $i_react.Component {
      constructor(arg) {
        const prep0 = arg;
        const jsProps = prep0;
        super(jsProps);
        if ((!$m_sjs_js_package$().isUndefined__O__Z(this._base))) {
          const initialStateValue = this.initialState;
          const stateWithExtraApplyFix = ($uZ(this._base.needsExtraApply) ? initialStateValue() : initialStateValue);
          this.state = ($m_Lslinky_core_BaseComponentWrapper$().scalaComponentWritingEnabled__Z() ? $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($s_Lslinky_core_DefinitionBase__stateWriter__Lslinky_core_DefinitionBase__Lslinky_readwrite_Writer(this), stateWithExtraApplyFix) : $m_sjs_js_Dynamic$literal$().applyDynamicNamed__T__sci_Seq__sjs_js_Object("apply", $m_sjsr_package$().toScalaVarArgs__sjs_js_Array__sci_Seq([new $c_T2("__", stateWithExtraApplyFix)])))
        }
      };
      get "props_scala"() {
        return $s_Lslinky_core_DefinitionBase__props__Lslinky_core_DefinitionBase__O(this)
      };
      get "state_scala"() {
        return $s_Lslinky_core_DefinitionBase__state__Lslinky_core_DefinitionBase__O(this)
      };
      "setState_scala_1"(arg) {
        const prep0 = arg;
        $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__O__V(this, prep0)
      };
      "setState_scala_2"(arg) {
        const prep0 = $as_F1(arg);
        $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F1__V(this, prep0)
      };
      "setState_scala_3"(arg) {
        const prep0 = $as_F2(arg);
        $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F2__V(this, prep0)
      };
      "setState_scala_4"(arg, arg$2) {
        const prep0 = arg;
        const prep1 = $as_F0(arg$2);
        $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__O__F0__V(this, prep0, prep1)
      };
      "setState_scala_5"(arg, arg$2) {
        const prep0 = $as_F1(arg);
        const prep1 = $as_F0(arg$2);
        $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F1__F0__V(this, prep0, prep1)
      };
      "setState_scala_6"(arg, arg$2) {
        const prep0 = $as_F2(arg);
        const prep1 = $as_F0(arg$2);
        $s_Lslinky_core_DefinitionBase__setState__Lslinky_core_DefinitionBase__F2__F0__V(this, prep0, prep1)
      };
      "componentWillMount"() {
        $s_Lslinky_core_DefinitionBase__componentWillMount__Lslinky_core_DefinitionBase__V(this)
      };
      "componentDidMount"() {
        $s_Lslinky_core_DefinitionBase__componentDidMount__Lslinky_core_DefinitionBase__V(this)
      };
      "componentWillReceiveProps"(arg) {
        const prep0 = arg;
        $s_Lslinky_core_DefinitionBase__componentWillReceiveProps__Lslinky_core_DefinitionBase__O__V(this, prep0)
      };
      "shouldComponentUpdate"(arg, arg$2) {
        const prep0 = arg;
        const prep1 = arg$2;
        return $s_Lslinky_core_DefinitionBase__shouldComponentUpdate__Lslinky_core_DefinitionBase__O__O__Z(this, prep0, prep1)
      };
      "componentWillUpdate"(arg, arg$2) {
        const prep0 = arg;
        const prep1 = arg$2;
        $s_Lslinky_core_DefinitionBase__componentWillUpdate__Lslinky_core_DefinitionBase__O__O__V(this, prep0, prep1)
      };
      "getSnapshotBeforeUpdate"(arg, arg$2) {
        const prep0 = arg;
        const prep1 = arg$2;
        return $s_Lslinky_core_DefinitionBase__getSnapshotBeforeUpdate__Lslinky_core_DefinitionBase__O__O__O(this, prep0, prep1)
      };
      "componentDidUpdate"(arg, arg$2, ...rest) {
        switch ($uI(rest.length)) {
          case 0: {
            const prep0 = arg;
            const prep1 = arg$2;
            $s_Lslinky_core_DefinitionBase__componentDidUpdate__Lslinky_core_DefinitionBase__O__O__V(this, prep0, prep1);
            return (void 0);
            break
          }
          case 1: {
            const prep0$2 = arg;
            const prep1$2 = arg$2;
            const prep2 = rest[0];
            $s_Lslinky_core_DefinitionBase__componentDidUpdate__Lslinky_core_DefinitionBase__O__O__O__V(this, prep0$2, prep1$2, prep2);
            return (void 0);
            break
          }
          default: {
            throw "No matching overload"
          }
        }
      };
      "componentWillUnmount"() {
        $s_Lslinky_core_DefinitionBase__componentWillUnmount__Lslinky_core_DefinitionBase__V(this)
      };
      "componentDidCatch"(arg, arg$2) {
        const prep0 = arg;
        const prep1 = arg$2;
        $s_Lslinky_core_DefinitionBase__componentDidCatch__Lslinky_core_DefinitionBase__sjs_js_Error__Lslinky_core_facade_ErrorBoundaryInfo__V(this, prep0, prep1)
      };
    }
    $b_Lslinky_core_DefinitionBase = $c_Lslinky_core_DefinitionBase
  };
  return $b_Lslinky_core_DefinitionBase
}
let $b_Lslinky_core_OptionalAttrPair = (void 0);
function $a_Lslinky_core_OptionalAttrPair() {
  if ((!$b_Lslinky_core_OptionalAttrPair)) {
    class $c_Lslinky_core_OptionalAttrPair extends Object {
      constructor(arg, arg$2) {
        const prep0 = $as_T(arg);
        const prep1 = $as_s_Option(arg$2);
        const name = prep0;
        const value = prep1;
        super();
        Object.defineProperty(this, "name", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "value", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.name = name;
        this.value = value
      };
    }
    $b_Lslinky_core_OptionalAttrPair = $c_Lslinky_core_OptionalAttrPair
  };
  return $b_Lslinky_core_OptionalAttrPair
}
class $c_Lslinky_readwrite_Reader$ extends $c_O {
  constructor() {
    super();
    this.Lslinky_readwrite_Reader$__f_unitReader = null;
    this.Lslinky_readwrite_Reader$__f_stringReader = null;
    this.Lslinky_readwrite_Reader$__f_charReader = null;
    this.Lslinky_readwrite_Reader$__f_byteReader = null;
    this.Lslinky_readwrite_Reader$__f_shortReader = null;
    this.Lslinky_readwrite_Reader$__f_intReader = null;
    this.Lslinky_readwrite_Reader$__f_longReader = null;
    this.Lslinky_readwrite_Reader$__f_booleanReader = null;
    this.Lslinky_readwrite_Reader$__f_doubleReader = null;
    this.Lslinky_readwrite_Reader$__f_floatReader = null;
    this.Lslinky_readwrite_Reader$__f_rangeReader = null;
    this.Lslinky_readwrite_Reader$__f_inclusiveRangeReader = null;
    $n_Lslinky_readwrite_Reader$ = this;
    $f_Lslinky_readwrite_CoreReaders__$init$__V(this)
  };
}
const $d_Lslinky_readwrite_Reader$ = new $TypeData().initClass({
  Lslinky_readwrite_Reader$: 0
}, false, "slinky.readwrite.Reader$", {
  Lslinky_readwrite_Reader$: 1,
  O: 1,
  Lslinky_readwrite_CoreReaders: 1,
  Lslinky_readwrite_MacroReaders: 1,
  Lslinky_readwrite_FallbackReaders: 1
});
$c_Lslinky_readwrite_Reader$.prototype.$classData = $d_Lslinky_readwrite_Reader$;
let $n_Lslinky_readwrite_Reader$ = (void 0);
function $m_Lslinky_readwrite_Reader$() {
  if ((!$n_Lslinky_readwrite_Reader$)) {
    $n_Lslinky_readwrite_Reader$ = new $c_Lslinky_readwrite_Reader$()
  };
  return $n_Lslinky_readwrite_Reader$
}
class $c_Lslinky_readwrite_Writer$ extends $c_O {
  constructor() {
    super();
    this.Lslinky_readwrite_Writer$__f_unitWriter = null;
    this.Lslinky_readwrite_Writer$__f_stringWriter = null;
    this.Lslinky_readwrite_Writer$__f_charWriter = null;
    this.Lslinky_readwrite_Writer$__f_byteWriter = null;
    this.Lslinky_readwrite_Writer$__f_shortWriter = null;
    this.Lslinky_readwrite_Writer$__f_intWriter = null;
    this.Lslinky_readwrite_Writer$__f_longWriter = null;
    this.Lslinky_readwrite_Writer$__f_booleanWriter = null;
    this.Lslinky_readwrite_Writer$__f_doubleWriter = null;
    this.Lslinky_readwrite_Writer$__f_floatWriter = null;
    this.Lslinky_readwrite_Writer$__f_rangeWriter = null;
    this.Lslinky_readwrite_Writer$__f_inclusiveRangeWriter = null;
    $n_Lslinky_readwrite_Writer$ = this;
    $f_Lslinky_readwrite_CoreWriters__$init$__V(this)
  };
}
const $d_Lslinky_readwrite_Writer$ = new $TypeData().initClass({
  Lslinky_readwrite_Writer$: 0
}, false, "slinky.readwrite.Writer$", {
  Lslinky_readwrite_Writer$: 1,
  O: 1,
  Lslinky_readwrite_CoreWriters: 1,
  Lslinky_readwrite_MacroWriters: 1,
  Lslinky_readwrite_FallbackWriters: 1
});
$c_Lslinky_readwrite_Writer$.prototype.$classData = $d_Lslinky_readwrite_Writer$;
let $n_Lslinky_readwrite_Writer$ = (void 0);
function $m_Lslinky_readwrite_Writer$() {
  if ((!$n_Lslinky_readwrite_Writer$)) {
    $n_Lslinky_readwrite_Writer$ = new $c_Lslinky_readwrite_Writer$()
  };
  return $n_Lslinky_readwrite_Writer$
}
const $ct_jl_ArithmeticException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
const $ct_jl_ClassCastException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_SecurityException {
}
function $as_jl_SecurityException(obj) {
  return (((obj instanceof $c_jl_SecurityException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
const $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__ = (function($thiz, cause) {
  const message = ((cause === null) ? null : cause.toString__T());
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, message, cause, true, true);
  return $thiz
});
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
}
const $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
class $c_s_$less$colon$less$$anon$1 extends $c_s_$eq$colon$eq {
  apply__O__O(x) {
    return x
  };
  toString__T() {
    return "generalized constraint"
  };
}
const $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
class $c_s_Option extends $c_O {
  isEmpty__Z() {
    return (this === $m_s_None$())
  };
  knownSize__I() {
    return (this.isEmpty__Z() ? 0 : 1)
  };
  iterator__sc_Iterator() {
    if (this.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      $m_sc_Iterator$();
      const a = this.get__O();
      return new $c_sc_Iterator$$anon$20(a)
    }
  };
}
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"))
}
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)))
}
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth))
}
class $c_T2 extends $c_O {
  constructor(_1, _2) {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null;
    this.T2__f__1 = _1;
    this.T2__f__2 = _2
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  toString__T() {
    return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = $as_T2(x$1);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
    } else {
      return false
    }
  };
}
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
const $f_sc_Iterable__toString__T = (function($thiz) {
  const start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
});
class $c_sc_Iterator$$anon$19 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw new $c_ju_NoSuchElementException("next on empty iterator")
  };
  knownSize__I() {
    return 0
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
class $c_sc_Iterator$$anon$20 extends $c_sc_AbstractIterator {
  constructor(a$1) {
    super();
    this.sc_Iterator$$anon$20__f_consumed = false;
    this.sc_Iterator$$anon$20__f_a$1 = null;
    this.sc_Iterator$$anon$20__f_a$1 = a$1;
    this.sc_Iterator$$anon$20__f_consumed = false
  };
  hasNext__Z() {
    return (!this.sc_Iterator$$anon$20__f_consumed)
  };
  next__O() {
    if (this.sc_Iterator$$anon$20__f_consumed) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      this.sc_Iterator$$anon$20__f_consumed = true;
      return this.sc_Iterator$$anon$20__f_a$1
    }
  };
}
const $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
const $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const this$1 = a;
      let $$x1;
      if ((!this$1.isEmpty__Z())) {
        const this$2 = b;
        $$x1 = (!this$2.isEmpty__Z())
      } else {
        $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sc_LinearSeq(a.tail__O());
        const temp$b = $as_sc_LinearSeq(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
});
const $f_sc_LinearSeqOps__apply__I__O = (function($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  const skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
});
const $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
});
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
const $s_Lslinky_core_StatelessDefinition__initialState__Lslinky_core_StatelessDefinition__V = (function(this$1) {
  /*<skip>*/
});
let $b_Lslinky_core_StatelessDefinition = (void 0);
function $a_Lslinky_core_StatelessDefinition() {
  if ((!$b_Lslinky_core_StatelessDefinition)) {
    class $c_Lslinky_core_StatelessDefinition extends $a_Lslinky_core_DefinitionBase() {
      constructor(arg) {
        const prep0 = arg;
        const jsProps = prep0;
        super(jsProps)
      };
      get "initialState"() {
        $s_Lslinky_core_StatelessDefinition__initialState__Lslinky_core_StatelessDefinition__V(this)
      };
    }
    $b_Lslinky_core_StatelessDefinition = $c_Lslinky_core_StatelessDefinition
  };
  return $b_Lslinky_core_StatelessDefinition
}
const $r_Lhello_world_App__css = Symbol("css");
const $s_Lhello_world_App__render__Lhello_world_App__Lslinky_core_facade_ReactElement = (function(this$1) {
  const pair = new ($a_Lslinky_core_AttrPair())("className", "App");
  const array = [pair];
  const mods = new $c_sjsr_WrappedVarArgs(array);
  const fields = $m_sci_Nil$();
  const inst = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)];
  const this$12 = new $c_sc_IndexedSeqView$Id(mods);
  const it = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$12);
  while (it.hasNext__Z()) {
    const arg1 = it.next__O();
    if ($uZ((arg1 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict = inst[1];
      const key = $as_T(arg1.name);
      const value = arg1.value;
      dict[key] = value
    } else if ($uZ((arg1 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$14 = $as_s_Option(arg1.value);
      if ((!this$14.isEmpty__Z())) {
        const dict$1 = inst[1];
        const key$1 = $as_T(arg1.name);
        const value$1 = $as_s_Option(arg1.value).get__O();
        dict$1[key$1] = value$1
      }
    } else {
      $uI(inst.push(arg1))
    }
  };
  const pair$1 = new ($a_Lslinky_core_AttrPair())("className", "column col-12");
  const array$1 = [pair$1];
  const mods$1 = new $c_sjsr_WrappedVarArgs(array$1);
  const fields$1 = $m_sci_Nil$();
  const inst$1 = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1)];
  const this$26 = new $c_sc_IndexedSeqView$Id(mods$1);
  const it$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$26);
  while (it$1.hasNext__Z()) {
    const arg1$1 = it$1.next__O();
    if ($uZ((arg1$1 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$2 = inst$1[1];
      const key$2 = $as_T(arg1$1.name);
      const value$2 = arg1$1.value;
      dict$2[key$2] = value$2
    } else if ($uZ((arg1$1 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$28 = $as_s_Option(arg1$1.value);
      if ((!this$28.isEmpty__Z())) {
        const dict$3 = inst$1[1];
        const key$3 = $as_T(arg1$1.name);
        const value$3 = $as_s_Option(arg1$1.value).get__O();
        dict$3[key$3] = value$3
      }
    } else {
      $uI(inst$1.push(arg1$1))
    }
  };
  const pair$2 = new ($a_Lslinky_core_AttrPair())("className", "App-title");
  const array$2 = [pair$2];
  const mods$2 = new $c_sjsr_WrappedVarArgs(array$2);
  const fields$2 = $m_sci_Nil$();
  const inst$2 = ["h1", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2)];
  const this$40 = new $c_sc_IndexedSeqView$Id(mods$2);
  const it$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$40);
  while (it$2.hasNext__Z()) {
    const arg1$2 = it$2.next__O();
    if ($uZ((arg1$2 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$4 = inst$2[1];
      const key$4 = $as_T(arg1$2.name);
      const value$4 = arg1$2.value;
      dict$4[key$4] = value$4
    } else if ($uZ((arg1$2 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$42 = $as_s_Option(arg1$2.value);
      if ((!this$42.isEmpty__Z())) {
        const dict$5 = inst$2[1];
        const key$5 = $as_T(arg1$2.name);
        const value$5 = $as_s_Option(arg1$2.value).get__O();
        dict$5[key$5] = value$5
      }
    } else {
      $uI(inst$2.push(arg1$2))
    }
  };
  const array$3 = ["\u041c\u043e\u0439C\u043a\u043b\u0430\u0434 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"];
  const children = new $c_sjsr_WrappedVarArgs(array$3);
  if ((inst$2[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const this$49 = new $c_sc_IndexedSeqView$Id(children);
  const it$3 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$49);
  while (it$3.hasNext__Z()) {
    const arg1$3 = it$3.next__O();
    $uI(inst$2.push(arg1$3))
  };
  if ((inst$2[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret = $i_react.createElement.apply($i_react, inst$2);
  inst$2[0] = null;
  const array$4 = [ret];
  const children$1 = new $c_sjsr_WrappedVarArgs(array$4);
  if ((inst$1[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const this$55 = new $c_sc_IndexedSeqView$Id(children$1);
  const it$4 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$55);
  while (it$4.hasNext__Z()) {
    const arg1$4 = it$4.next__O();
    $uI(inst$1.push(arg1$4))
  };
  if ((inst$1[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$1 = $i_react.createElement.apply($i_react, inst$1);
  inst$1[0] = null;
  const pair$3 = new ($a_Lslinky_core_AttrPair())("className", "column col-9");
  const array$5 = [pair$3];
  const mods$3 = new $c_sjsr_WrappedVarArgs(array$5);
  const fields$3 = $m_sci_Nil$();
  const inst$3 = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3)];
  const this$67 = new $c_sc_IndexedSeqView$Id(mods$3);
  const it$5 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$67);
  while (it$5.hasNext__Z()) {
    const arg1$5 = it$5.next__O();
    if ($uZ((arg1$5 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$6 = inst$3[1];
      const key$6 = $as_T(arg1$5.name);
      const value$6 = arg1$5.value;
      dict$6[key$6] = value$6
    } else if ($uZ((arg1$5 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$69 = $as_s_Option(arg1$5.value);
      if ((!this$69.isEmpty__Z())) {
        const dict$7 = inst$3[1];
        const key$7 = $as_T(arg1$5.name);
        const value$7 = $as_s_Option(arg1$5.value).get__O();
        dict$7[key$7] = value$7
      }
    } else {
      $uI(inst$3.push(arg1$5))
    }
  };
  const pair$4 = new ($a_Lslinky_core_AttrPair())("className", "App-intro");
  const array$6 = [pair$4];
  const mods$4 = new $c_sjsr_WrappedVarArgs(array$6);
  const fields$4 = $m_sci_Nil$();
  const inst$4 = ["h2", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$4)];
  const this$81 = new $c_sc_IndexedSeqView$Id(mods$4);
  const it$6 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$81);
  while (it$6.hasNext__Z()) {
    const arg1$6 = it$6.next__O();
    if ($uZ((arg1$6 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$8 = inst$4[1];
      const key$8 = $as_T(arg1$6.name);
      const value$8 = arg1$6.value;
      dict$8[key$8] = value$8
    } else if ($uZ((arg1$6 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$83 = $as_s_Option(arg1$6.value);
      if ((!this$83.isEmpty__Z())) {
        const dict$9 = inst$4[1];
        const key$9 = $as_T(arg1$6.name);
        const value$9 = $as_s_Option(arg1$6.value).get__O();
        dict$9[key$9] = value$9
      }
    } else {
      $uI(inst$4.push(arg1$6))
    }
  };
  const array$7 = ["\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"];
  const children$2 = new $c_sjsr_WrappedVarArgs(array$7);
  if ((inst$4[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const this$90 = new $c_sc_IndexedSeqView$Id(children$2);
  const it$7 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$90);
  while (it$7.hasNext__Z()) {
    const arg1$7 = it$7.next__O();
    $uI(inst$4.push(arg1$7))
  };
  if ((inst$4[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$2 = $i_react.createElement.apply($i_react, inst$4);
  inst$4[0] = null;
  const array$8 = [ret$2];
  const children$3 = new $c_sjsr_WrappedVarArgs(array$8);
  if ((inst$3[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const this$96 = new $c_sc_IndexedSeqView$Id(children$3);
  const it$8 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$96);
  while (it$8.hasNext__Z()) {
    const arg1$8 = it$8.next__O();
    $uI(inst$3.push(arg1$8))
  };
  if ((inst$3[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$3 = $i_react.createElement.apply($i_react, inst$3);
  inst$3[0] = null;
  const stage = $m_Lhello_world_ProductItemList$().apply__T__sjs_js_Array("");
  if ((stage[0] === null)) {
    throw new $c_jl_IllegalStateException("This component has already been built into a ReactElement, and cannot be reused")
  };
  const ret$4 = $i_react.createElement.apply($i_react, stage);
  stage[0] = null;
  const array$9 = [ret$1, ret$3, ret$4];
  const children$4 = new $c_sjsr_WrappedVarArgs(array$9);
  if ((inst[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const this$103 = new $c_sc_IndexedSeqView$Id(children$4);
  const it$9 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$103);
  while (it$9.hasNext__Z()) {
    const arg1$9 = it$9.next__O();
    $uI(inst.push(arg1$9))
  };
  if ((inst[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$5 = $i_react.createElement.apply($i_react, inst);
  inst[0] = null;
  return ret$5
});
const $ps_Lhello_world_App__$anonfun$new$2__Lhello_world_App__V = (function(this$1) {
  /*<skip>*/
});
let $b_Lhello_world_App = (void 0);
function $a_Lhello_world_App() {
  if ((!$b_Lhello_world_App)) {
    class $c_Lhello_world_App extends $a_Lslinky_core_StatelessDefinition() {
      constructor(arg) {
        const prep0 = arg;
        const jsProps = prep0;
        super(jsProps);
        this[$r_Lhello_world_App__css] = null;
        $m_Lslinky_core_annotations_react$().bump__F0__V(new $c_sjsr_AnonFunction0(((this\u00f8) => (() => {
          $ps_Lhello_world_App__$anonfun$new$2__Lhello_world_App__V(this\u00f8)
        }))(this)));
        this[$r_Lhello_world_App__css] = $moduleDefault($i_resources$002fApp$002ecss)
      };
      "render"() {
        return $s_Lhello_world_App__render__Lhello_world_App__Lslinky_core_facade_ReactElement(this)
      };
    }
    $b_Lhello_world_App = $c_Lhello_world_App
  };
  return $b_Lhello_world_App
}
const $s_Lhello_world_ProductItemList__render__Lhello_world_ProductItemList__Lslinky_core_facade_ReactElement = (function(this$1) {
  const elem = $asArrayOf_T(this$1.ListArray, 1).get(0);
  const array = [elem];
  const mods = new $c_sjsr_WrappedVarArgs(array);
  const fields = $m_sci_Nil$();
  const inst = ["li", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)];
  const this$11 = new $c_sc_IndexedSeqView$Id(mods);
  const it = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
  while (it.hasNext__Z()) {
    const arg1 = it.next__O();
    if ($uZ((arg1 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict = inst[1];
      const key = $as_T(arg1.name);
      const value = arg1.value;
      dict[key] = value
    } else if ($uZ((arg1 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$13 = $as_s_Option(arg1.value);
      if ((!this$13.isEmpty__Z())) {
        const dict$1 = inst[1];
        const key$1 = $as_T(arg1.name);
        const value$1 = $as_s_Option(arg1.value).get__O();
        dict$1[key$1] = value$1
      }
    } else {
      $uI(inst.push(arg1))
    }
  };
  if ((inst[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret = $i_react.createElement.apply($i_react, inst);
  inst[0] = null;
  const elem$1 = $asArrayOf_T(this$1.ListArray, 1).get(1);
  const array$1 = [elem$1];
  const mods$1 = new $c_sjsr_WrappedVarArgs(array$1);
  const fields$1 = $m_sci_Nil$();
  const inst$1 = ["li", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1)];
  const this$25 = new $c_sc_IndexedSeqView$Id(mods$1);
  const it$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
  while (it$1.hasNext__Z()) {
    const arg1$1 = it$1.next__O();
    if ($uZ((arg1$1 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$2 = inst$1[1];
      const key$2 = $as_T(arg1$1.name);
      const value$2 = arg1$1.value;
      dict$2[key$2] = value$2
    } else if ($uZ((arg1$1 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$27 = $as_s_Option(arg1$1.value);
      if ((!this$27.isEmpty__Z())) {
        const dict$3 = inst$1[1];
        const key$3 = $as_T(arg1$1.name);
        const value$3 = $as_s_Option(arg1$1.value).get__O();
        dict$3[key$3] = value$3
      }
    } else {
      $uI(inst$1.push(arg1$1))
    }
  };
  if ((inst$1[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$1 = $i_react.createElement.apply($i_react, inst$1);
  inst$1[0] = null;
  const elem$2 = $asArrayOf_T(this$1.ListArray, 1).get(2);
  const array$2 = [elem$2];
  const mods$2 = new $c_sjsr_WrappedVarArgs(array$2);
  const fields$2 = $m_sci_Nil$();
  const inst$2 = ["li", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2)];
  const this$39 = new $c_sc_IndexedSeqView$Id(mods$2);
  const it$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$39);
  while (it$2.hasNext__Z()) {
    const arg1$2 = it$2.next__O();
    if ($uZ((arg1$2 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$4 = inst$2[1];
      const key$4 = $as_T(arg1$2.name);
      const value$4 = arg1$2.value;
      dict$4[key$4] = value$4
    } else if ($uZ((arg1$2 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$41 = $as_s_Option(arg1$2.value);
      if ((!this$41.isEmpty__Z())) {
        const dict$5 = inst$2[1];
        const key$5 = $as_T(arg1$2.name);
        const value$5 = $as_s_Option(arg1$2.value).get__O();
        dict$5[key$5] = value$5
      }
    } else {
      $uI(inst$2.push(arg1$2))
    }
  };
  if ((inst$2[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$2 = $i_react.createElement.apply($i_react, inst$2);
  inst$2[0] = null;
  const elem$3 = $asArrayOf_T(this$1.ListArray, 1).get(3);
  const array$3 = [elem$3];
  const mods$3 = new $c_sjsr_WrappedVarArgs(array$3);
  const fields$3 = $m_sci_Nil$();
  const inst$3 = ["li", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3)];
  const this$53 = new $c_sc_IndexedSeqView$Id(mods$3);
  const it$3 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$53);
  while (it$3.hasNext__Z()) {
    const arg1$3 = it$3.next__O();
    if ($uZ((arg1$3 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$6 = inst$3[1];
      const key$6 = $as_T(arg1$3.name);
      const value$6 = arg1$3.value;
      dict$6[key$6] = value$6
    } else if ($uZ((arg1$3 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$55 = $as_s_Option(arg1$3.value);
      if ((!this$55.isEmpty__Z())) {
        const dict$7 = inst$3[1];
        const key$7 = $as_T(arg1$3.name);
        const value$7 = $as_s_Option(arg1$3.value).get__O();
        dict$7[key$7] = value$7
      }
    } else {
      $uI(inst$3.push(arg1$3))
    }
  };
  if ((inst$3[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$3 = $i_react.createElement.apply($i_react, inst$3);
  inst$3[0] = null;
  const elem$4 = $asArrayOf_T(this$1.ListArray, 1).get(4);
  const array$4 = [elem$4];
  const mods$4 = new $c_sjsr_WrappedVarArgs(array$4);
  const fields$4 = $m_sci_Nil$();
  const inst$4 = ["li", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$4)];
  const this$67 = new $c_sc_IndexedSeqView$Id(mods$4);
  const it$4 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$67);
  while (it$4.hasNext__Z()) {
    const arg1$4 = it$4.next__O();
    if ($uZ((arg1$4 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$8 = inst$4[1];
      const key$8 = $as_T(arg1$4.name);
      const value$8 = arg1$4.value;
      dict$8[key$8] = value$8
    } else if ($uZ((arg1$4 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$69 = $as_s_Option(arg1$4.value);
      if ((!this$69.isEmpty__Z())) {
        const dict$9 = inst$4[1];
        const key$9 = $as_T(arg1$4.name);
        const value$9 = $as_s_Option(arg1$4.value).get__O();
        dict$9[key$9] = value$9
      }
    } else {
      $uI(inst$4.push(arg1$4))
    }
  };
  if ((inst$4[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$4 = $i_react.createElement.apply($i_react, inst$4);
  inst$4[0] = null;
  const array$5 = [ret, ret$1, ret$2, ret$3, ret$4];
  const mods$5 = new $c_sjsr_WrappedVarArgs(array$5);
  const fields$5 = $m_sci_Nil$();
  const inst$5 = ["ul", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$5)];
  const this$79 = new $c_sc_IndexedSeqView$Id(mods$5);
  const it$5 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$79);
  while (it$5.hasNext__Z()) {
    const arg1$5 = it$5.next__O();
    if ($uZ((arg1$5 instanceof $a_Lslinky_core_AttrPair()))) {
      const dict$10 = inst$5[1];
      const key$10 = $as_T(arg1$5.name);
      const value$10 = arg1$5.value;
      dict$10[key$10] = value$10
    } else if ($uZ((arg1$5 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
      const this$81 = $as_s_Option(arg1$5.value);
      if ((!this$81.isEmpty__Z())) {
        const dict$11 = inst$5[1];
        const key$11 = $as_T(arg1$5.name);
        const value$11 = $as_s_Option(arg1$5.value).get__O();
        dict$11[key$11] = value$11
      }
    } else {
      $uI(inst$5.push(arg1$5))
    }
  };
  if ((inst$5[0] === null)) {
    throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
  };
  const ret$5 = $i_react.createElement.apply($i_react, inst$5);
  inst$5[0] = null;
  return ret$5
});
const $ps_Lhello_world_ProductItemList__$anonfun$new$1__Lhello_world_ProductItemList__V = (function(this$1) {
  /*<skip>*/
});
let $b_Lhello_world_ProductItemList = (void 0);
function $a_Lhello_world_ProductItemList() {
  if ((!$b_Lhello_world_ProductItemList)) {
    class $c_Lhello_world_ProductItemList extends $a_Lslinky_core_StatelessDefinition() {
      constructor(arg) {
        const prep0 = arg;
        const jsProps = prep0;
        super(jsProps);
        Object.defineProperty(this, "ListArray", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        $m_Lslinky_core_annotations_react$().bump__F0__V(new $c_sjsr_AnonFunction0(((this\u00f8) => (() => {
          $ps_Lhello_world_ProductItemList__$anonfun$new$1__Lhello_world_ProductItemList__V(this\u00f8)
        }))(this)));
        this.ListArray = $asArrayOf_T($makeNativeArrayWrapper($d_T.getArrayOf(), ["\u0425\u043b\u0435\u0431", "\u0413\u0440\u0435\u0447\u043a\u0430", "\u0421\u043f\u0438\u0447\u043a\u0438", "\u041c\u043e\u043b\u043e\u043a\u043e", "\u041c\u044b\u043b\u043e"]), 1)
      };
      "render"() {
        return $s_Lhello_world_ProductItemList__render__Lhello_world_ProductItemList__Lslinky_core_facade_ReactElement(this)
      };
    }
    $b_Lhello_world_ProductItemList = $c_Lhello_world_ProductItemList
  };
  return $b_Lhello_world_ProductItemList
}
const $ct_jl_ArrayIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
class $c_s_None$ extends $c_s_Option {
  get__E() {
    throw new $c_ju_NoSuchElementException("None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
  get__O() {
    this.get__E()
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_s_Some extends $c_s_Option {
  constructor(value) {
    super();
    this.s_Some__f_value = null;
    this.s_Some__f_value = value
  };
  get__O() {
    return this.s_Some__f_value
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_Some)) {
      const Some$1 = $as_s_Some(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
    } else {
      return false
    }
  };
}
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_sc_AbstractIterable extends $c_O {
  className__T() {
    return this.stringPrefix__T()
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
}
class $c_sc_IndexedSeqView$IndexedSeqViewIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = self.length__I()
  };
  knownSize__I() {
    return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
      const b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder - n) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
}
const $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
class $c_sci_RangeIterator extends $c_sc_AbstractIterator {
  constructor(start, step, lastElement, initiallyEmpty) {
    super();
    this.sci_RangeIterator__f_step = 0;
    this.sci_RangeIterator__f_lastElement = 0;
    this.sci_RangeIterator__f__hasNext = false;
    this.sci_RangeIterator__f__next = 0;
    this.sci_RangeIterator__f_step = step;
    this.sci_RangeIterator__f_lastElement = lastElement;
    this.sci_RangeIterator__f__hasNext = (!initiallyEmpty);
    this.sci_RangeIterator__f__next = start
  };
  knownSize__I() {
    return (this.sci_RangeIterator__f__hasNext ? ((1 + $intDiv(((this.sci_RangeIterator__f_lastElement - this.sci_RangeIterator__f__next) | 0), this.sci_RangeIterator__f_step)) | 0) : 0)
  };
  hasNext__Z() {
    return this.sci_RangeIterator__f__hasNext
  };
  next__I() {
    if ((!this.sci_RangeIterator__f__hasNext)) {
      $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    };
    const value = this.sci_RangeIterator__f__next;
    this.sci_RangeIterator__f__hasNext = (value !== this.sci_RangeIterator__f_lastElement);
    this.sci_RangeIterator__f__next = ((value + this.sci_RangeIterator__f_step) | 0);
    return value
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const value = this.sci_RangeIterator__f__next;
      const hi = (value >> 31);
      const value$1 = $imul(this.sci_RangeIterator__f_step, n);
      const hi$1 = (value$1 >> 31);
      const lo = ((value + value$1) | 0);
      const hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
      if ((this.sci_RangeIterator__f_step > 0)) {
        const value$2 = this.sci_RangeIterator__f_lastElement;
        const hi$3 = (value$2 >> 31);
        let this$6__lo;
        let this$6__hi;
        if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
          const $$x1__lo = value$2;
          const $$x1__hi = hi$3;
          this$6__lo = $$x1__lo;
          this$6__hi = $$x1__hi
        } else {
          const $$x2__lo = lo;
          const $$x2__hi = hi$2;
          this$6__lo = $$x2__lo;
          this$6__hi = $$x2__hi
        };
        this.sci_RangeIterator__f__next = this$6__lo;
        const value$3 = this.sci_RangeIterator__f_lastElement;
        const hi$4 = (value$3 >> 31);
        this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4))
      } else if ((this.sci_RangeIterator__f_step < 0)) {
        const value$4 = this.sci_RangeIterator__f_lastElement;
        const hi$5 = (value$4 >> 31);
        let this$10__lo;
        let this$10__hi;
        if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
          const $$x3__lo = value$4;
          const $$x3__hi = hi$5;
          this$10__lo = $$x3__lo;
          this$10__hi = $$x3__hi
        } else {
          const $$x4__lo = lo;
          const $$x4__hi = hi$2;
          this$10__lo = $$x4__lo;
          this$10__hi = $$x4__hi
        };
        this.sci_RangeIterator__f__next = this$10__lo;
        const value$5 = this.sci_RangeIterator__f_lastElement;
        const hi$6 = (value$5 >> 31);
        this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6))
      }
    };
    return this
  };
  next__O() {
    return this.next__I()
  };
}
const $d_sci_RangeIterator = new $TypeData().initClass({
  sci_RangeIterator: 0
}, false, "scala.collection.immutable.RangeIterator", {
  sci_RangeIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_RangeIterator.prototype.$classData = $d_sci_RangeIterator;
const $f_sc_View__toString__T = (function($thiz) {
  return "IndexedSeqView(<not computed>)"
});
class $c_sjs_js_JavaScriptException {
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
const $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq = (function($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      const temp$n = (((-1) + n) | 0);
      const temp$s = $as_sc_LinearSeq(s.tail__O());
      n = temp$n;
      s = temp$s
    }
  }
});
class $c_sc_AbstractView extends $c_sc_AbstractIterable {
  toString__T() {
    return $f_sc_View__toString__T(this)
  };
}
const $f_sc_Seq__equals__O__Z = (function($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Seq(o)) {
    const x2 = $as_sc_Seq(o);
    return ((x2 === $thiz) || (x2.canEqual__O__Z($thiz) && $thiz.sameElements__sc_IterableOnce__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
}
class $c_sc_AbstractSeqView extends $c_sc_AbstractView {
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
const $ct_sc_SeqView$Id__sc_SeqOps__ = (function($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
});
class $c_sc_SeqView$Id extends $c_sc_AbstractSeqView {
  constructor() {
    super();
    this.sc_SeqView$Id__f_underlying = null
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
  };
  length__I() {
    return this.sc_SeqView$Id__f_underlying.length__I()
  };
  isEmpty__Z() {
    return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
  };
}
class $c_sc_IndexedSeqView$Id extends $c_sc_SeqView$Id {
  constructor(underlying) {
    super();
    $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
}
const $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
class $c_sci_AbstractSeq extends $c_sc_AbstractSeq {
}
const $f_sci_IndexedSeq__canEqual__O__Z = (function($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    const x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === x2.length__I())
  }
});
const $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z = (function($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    const x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      const length = $thiz.length__I();
      let equal = (length === x2.length__I());
      if (equal) {
        let index = 0;
        const a = $thiz.applyPreferredMaxLength__I();
        const b = x2.applyPreferredMaxLength__I();
        const preferredLength = ((a < b) ? a : b);
        const hi = (length >> 31);
        const hi$1 = (preferredLength >> 31);
        const lo = (preferredLength << 1);
        const hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        let maxApplyCompare;
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          maxApplyCompare = preferredLength
        } else {
          maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          const thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          const thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
});
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_sjsr_WrappedVarArgs extends $c_O {
  constructor(array) {
    super();
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  foreach__F1__V(f) {
    $f_sc_IterableOnceOps__foreach__F1__V(this, f)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  length__I() {
    return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
  };
  apply__I__O(idx) {
    return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
  };
  className__T() {
    return "WrappedVarArgs"
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
const $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
const $p_sci_Range__gap__J = (function($thiz) {
  const value = $thiz.sci_Range__f_end;
  const hi = (value >> 31);
  const value$1 = $thiz.sci_Range__f_start;
  const hi$1 = (value$1 >> 31);
  const lo = ((value - value$1) | 0);
  const hi$2 = ((((-2147483648) ^ lo) > ((-2147483648) ^ value)) ? (((-1) + ((hi - hi$1) | 0)) | 0) : ((hi - hi$1) | 0));
  return new $c_RTLong(lo, hi$2)
});
const $p_sci_Range__isExact__Z = (function($thiz) {
  const t = $p_sci_Range__gap__J($thiz);
  const lo = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  const value = $thiz.sci_Range__f_step;
  const hi = (value >> 31);
  const this$2 = $m_RTLong$();
  const lo$1 = this$2.remainderImpl__I__I__I__I__I(lo, hi$1, value, hi);
  const hi$2 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return ((lo$1 === 0) && (hi$2 === 0))
});
const $p_sci_Range__hasStub__Z = (function($thiz) {
  return ($thiz.isInclusive__Z() || (!$p_sci_Range__isExact__Z($thiz)))
});
const $p_sci_Range__longLength__J = (function($thiz) {
  const t = $p_sci_Range__gap__J($thiz);
  const lo = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  const value = $thiz.sci_Range__f_step;
  const hi = (value >> 31);
  const this$2 = $m_RTLong$();
  const lo$1 = this$2.divideImpl__I__I__I__I__I(lo, hi$1, value, hi);
  const hi$2 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  const value$1 = ($p_sci_Range__hasStub__Z($thiz) ? 1 : 0);
  const hi$3 = (value$1 >> 31);
  const lo$2 = ((lo$1 + value$1) | 0);
  const hi$4 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ lo$1)) ? ((1 + ((hi$2 + hi$3) | 0)) | 0) : ((hi$2 + hi$3) | 0));
  return new $c_RTLong(lo$2, hi$4)
});
const $ct_sci_Range__I__I__I__ = (function($thiz, start, end, step) {
  $thiz.sci_Range__f_start = start;
  $thiz.sci_Range__f_end = end;
  $thiz.sci_Range__f_step = step;
  $thiz.sci_Range__f_isEmpty = ((((start > end) && (step > 0)) || ((start < end) && (step < 0))) || ((start === end) && (!$thiz.isInclusive__Z())));
  let $$x1;
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
  } else if ($thiz.sci_Range__f_isEmpty) {
    $$x1 = 0
  } else {
    const t = $p_sci_Range__longLength__J($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    $$x1 = (((hi === 0) ? (((-2147483648) ^ lo) > (-1)) : (hi > 0)) ? (-1) : lo)
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = $$x1;
  let $$x2;
  switch (step) {
    case 1: {
      $$x2 = ($thiz.isInclusive__Z() ? end : (((-1) + end) | 0));
      break
    }
    case (-1): {
      $$x2 = ($thiz.isInclusive__Z() ? end : ((1 + end) | 0));
      break
    }
    default: {
      const t$1 = $p_sci_Range__gap__J($thiz);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$2 = t$1.RTLong__f_hi;
      const hi$1 = (step >> 31);
      const this$2 = $m_RTLong$();
      const lo$2 = this$2.remainderImpl__I__I__I__I__I(lo$1, hi$2, step, hi$1);
      $$x2 = ((lo$2 !== 0) ? ((end - lo$2) | 0) : ($thiz.isInclusive__Z() ? end : ((end - step) | 0)))
    }
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$lastElement = $$x2;
  return $thiz
});
class $c_sci_Range extends $c_sci_AbstractSeq {
  constructor() {
    super();
    this.sci_Range__f_start = 0;
    this.sci_Range__f_end = 0;
    this.sci_Range__f_step = 0;
    this.sci_Range__f_isEmpty = false;
    this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
    this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  iterator__sc_Iterator() {
    return new $c_sci_RangeIterator(this.sci_Range__f_start, this.sci_Range__f_step, this.sci_Range__f_scala$collection$immutable$Range$$lastElement, this.sci_Range__f_isEmpty)
  };
  isEmpty__Z() {
    return this.sci_Range__f_isEmpty
  };
  length__I() {
    return ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z()) : this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements)
  };
  last__I() {
    if (this.sci_Range__f_isEmpty) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($m_sci_Range$().scala$collection$immutable$Range$$emptyRangeError__T__jl_Throwable("last"))
    } else {
      return this.sci_Range__f_scala$collection$immutable$Range$$lastElement
    }
  };
  scala$collection$immutable$Range$$validateMaxLength__V() {
    if ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0)) {
      $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z())
    }
  };
  foreach__F1__V(f) {
    if ((!this.sci_Range__f_isEmpty)) {
      let i = this.sci_Range__f_start;
      while (true) {
        f.apply__O__O(i);
        if ((i === this.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
          break
        };
        i = ((i + this.sci_Range__f_step) | 0)
      }
    }
  };
  sameElements__sc_IterableOnce__Z(that) {
    if ((that instanceof $c_sci_Range)) {
      const x2 = $as_sci_Range(that);
      const x1$2 = this.length__I();
      switch (x1$2) {
        case 0: {
          return x2.sci_Range__f_isEmpty;
          break
        }
        case 1: {
          return ((x2.length__I() === 1) && (this.sci_Range__f_start === x2.sci_Range__f_start));
          break
        }
        default: {
          return ((x2.length__I() === x1$2) && ((this.sci_Range__f_start === x2.sci_Range__f_start) && (this.sci_Range__f_step === x2.sci_Range__f_step)))
        }
      }
    } else {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that)
    }
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_Range)) {
      const x2 = $as_sci_Range(other);
      if (this.sci_Range__f_isEmpty) {
        return x2.sci_Range__f_isEmpty
      } else if (((!x2.sci_Range__f_isEmpty) && (this.sci_Range__f_start === x2.sci_Range__f_start))) {
        const l0 = this.last__I();
        return ((l0 === x2.last__I()) && ((this.sci_Range__f_start === l0) || (this.sci_Range__f_step === x2.sci_Range__f_step)))
      } else {
        return false
      }
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  hashCode__I() {
    if ((this.length__I() >= 2)) {
      const this$1 = $m_s_util_hashing_MurmurHash3$();
      const start = this.sci_Range__f_start;
      const step = this.sci_Range__f_step;
      const last = this.sci_Range__f_scala$collection$immutable$Range$$lastElement;
      return this$1.rangeHash__I__I__I__I__I(start, step, last, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
    }
  };
  toString__T() {
    const preposition = (this.isInclusive__Z() ? "to" : "until");
    const stepped = ((this.sci_Range__f_step === 1) ? "" : (" by " + this.sci_Range__f_step));
    const prefix = (this.sci_Range__f_isEmpty ? "empty " : ((!$p_sci_Range__isExact__Z(this)) ? "inexact " : ""));
    return (((((((prefix + "Range ") + this.sci_Range__f_start) + " ") + preposition) + " ") + this.sci_Range__f_end) + stepped)
  };
  className__T() {
    return "Range"
  };
  apply$mcII$sp__I__I(idx) {
    this.scala$collection$immutable$Range$$validateMaxLength__V();
    if (((idx < 0) || (idx >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + (((-1) + this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements) | 0)) + ")"))
    } else {
      return ((this.sci_Range__f_start + $imul(this.sci_Range__f_step, idx)) | 0)
    }
  };
  apply__O__O(v1) {
    const idx = $uI(v1);
    return this.apply$mcII$sp__I__I(idx)
  };
  apply__I__O(i) {
    return this.apply$mcII$sp__I__I(i)
  };
}
function $as_sci_Range(obj) {
  return (((obj instanceof $c_sci_Range) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Range"))
}
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Range)))
}
function $asArrayOf_sci_Range(obj, depth) {
  return (($isArrayOf_sci_Range(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth))
}
class $c_sci_Range$Exclusive extends $c_sci_Range {
  constructor(start, end, step) {
    super();
    $ct_sci_Range__I__I__I__(this, start, end, step)
  };
  isInclusive__Z() {
    return false
  };
}
const $d_sci_Range$Exclusive = new $TypeData().initClass({
  sci_Range$Exclusive: 0
}, false, "scala.collection.immutable.Range$Exclusive", {
  sci_Range$Exclusive: 1,
  sci_Range: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Exclusive.prototype.$classData = $d_sci_Range$Exclusive;
class $c_sci_Range$Inclusive extends $c_sci_Range {
  constructor(start, end, step) {
    super();
    $ct_sci_Range__I__I__I__(this, start, end, step)
  };
  isInclusive__Z() {
    return true
  };
}
const $d_sci_Range$Inclusive = new $TypeData().initClass({
  sci_Range$Inclusive: 0
}, false, "scala.collection.immutable.Range$Inclusive", {
  sci_Range$Inclusive: 1,
  sci_Range: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Inclusive.prototype.$classData = $d_sci_Range$Inclusive;
const $p_sci_List__loop$2__I__sci_List__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const this$1 = xs;
      this$1.tail__E()
    }
  }
});
const $p_sci_List__listEq$1__sci_List__sci_List__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const aEmpty = a.isEmpty__Z();
      const bEmpty = b.isEmpty__Z();
      let $$x1;
      if ((!(aEmpty || bEmpty))) {
        const $$x3 = $m_sr_BoxesRunTime$();
        const this$1 = a;
        let $$x2;
        this$1.head__E();
        const this$2 = b;
        $$x1 = $$x3.equals__O__O__Z($$x2, this$2.head__E())
      } else {
        $$x1 = false
      };
      if ($$x1) {
        const this$3 = a;
        this$3.tail__E()
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
});
class $c_sci_List extends $c_sci_AbstractSeq {
  stringPrefix__T() {
    return "LinearSeq"
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  isEmpty__Z() {
    return (this === $m_sci_Nil$())
  };
  foreach__F1__V(f) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      const this$1 = these;
      f.apply__O__O(this$1.head__E());
      const this$2 = these;
      this$2.tail__E()
    }
  };
  length__I() {
    let these = this;
    let len = 0;
    while ((!these.isEmpty__Z())) {
      len = ((1 + len) | 0);
      const this$1 = these;
      this$1.tail__E()
    };
    return len
  };
  lengthCompare__I__I(len) {
    return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
  };
  className__T() {
    return "List"
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_List)) {
      const x2 = $as_sci_List(o);
      return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
  };
}
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
class $c_sci_Nil$ extends $c_sci_List {
  constructor() {
    super();
    this.sci_Nil$__f_EmptyUnzip = null;
    $n_sci_Nil$ = this;
    this.sci_Nil$__f_EmptyUnzip = new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
  };
  head__E() {
    throw new $c_ju_NoSuchElementException("head of empty list")
  };
  tail__E() {
    throw new $c_jl_UnsupportedOperationException("tail of empty list")
  };
  knownSize__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    this.tail__E()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_StringBuilder__f_underlying.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  knownSize__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
  apply__I__O(i) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
$L0 = new $c_RTLong(0, 0);
exports.main = (function() {
  $m_Lhello_world_Main$().main__V()
});
//# sourceMappingURL=moy-sklad-fastopt.js.map
