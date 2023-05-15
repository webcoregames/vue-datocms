'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hypenateStyleName = require('hyphenate-style-name');
var vueDemi = require('vue-demi');
var datocmsStructuredTextGenericHtmlRenderer = require('datocms-structured-text-generic-html-renderer');
var datocmsStructuredTextUtils = require('datocms-structured-text-utils');
var datocmsListen = require('datocms-listen');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hypenateStyleName__default = /*#__PURE__*/_interopDefaultLegacy(hypenateStyleName);

const isSsr = () => {
  return typeof window === "undefined";
};
const isIntersectionObserverAvailable = () => {
  return isSsr() ? false : !!window.IntersectionObserver;
};

const useInView = ({ threshold, rootMargin }) => {
  const observer = vueDemi.ref(null);
  const elRef = vueDemi.ref(null);
  const inView = vueDemi.ref(false);
  vueDemi.onMounted(() => {
    if (isIntersectionObserverAvailable()) {
      observer.value = new IntersectionObserver(
        (entries) => {
          if (entries.some(({ isIntersecting }) => isIntersecting) && observer.value) {
            inView.value = true;
            observer.value.disconnect();
          }
        },
        {
          threshold,
          rootMargin
        }
      );
      if (elRef.value) {
        observer.value.observe(elRef.value);
      }
    }
  });
  vueDemi.onBeforeUnmount(() => {
    if (isIntersectionObserverAvailable() && observer.value) {
      observer.value.disconnect();
    }
  });
  return { inView, elRef };
};

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
const Source = vueDemi.defineComponent({
  props: {
    srcset: {
      type: String
    },
    sizes: {
      type: String
    },
    type: {
      type: String
    }
  },
  setup({ srcset, sizes, type }) {
    return () => vueDemi.h("source", __spreadValues$5(__spreadValues$5({}, vueDemi.isVue2 && {
      attrs: {
        srcset,
        sizes,
        type
      }
    }), vueDemi.isVue3 && {
      srcset,
      sizes,
      type
    }));
  }
});

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
const universalBtoa = (str) => isSsr() ? Buffer.from(str.toString(), "binary").toString("base64") : window.btoa(str);
const Sizer = vueDemi.defineComponent({
  props: {
    sizerClass: {
      type: String
    },
    sizerStyle: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    explicitWidth: {
      type: Boolean
    }
  },
  setup({ sizerClass, sizerStyle, width, height, explicitWidth }) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"></svg>`;
    return () => vueDemi.h("img", __spreadValues$4(__spreadValues$4({
      class: sizerClass,
      style: __spreadValues$4({
        display: "block",
        width: explicitWidth ? `${width}px` : "100%"
      }, sizerStyle)
    }, vueDemi.isVue2 && {
      attrs: {
        src: `data:image/svg+xml;base64,${universalBtoa(svg)}`,
        role: "presentation"
      }
    }), vueDemi.isVue3 && {
      src: `data:image/svg+xml;base64,${universalBtoa(svg)}`,
      role: "presentation"
    }));
  }
});

var __defProp$3 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const escape = (s) => {
  s = "" + s;
  s = s.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/"/g, "&quot;");
  s = s.replace(/'/g, "&#39;");
  return s;
};
const toCss = (object) => {
  if (!object) {
    return null;
  }
  let result = "";
  for (var styleName in object) {
    if (Object.prototype.hasOwnProperty.call(object, styleName) && object[styleName]) {
      result += `${hypenateStyleName__default["default"](styleName)}: ${object[styleName]}; `;
    }
  }
  return result.length > 0 ? result : null;
};
const tag = (tagName, attrs, content) => {
  const serializedAttrs = [];
  if (attrs) {
    for (var attrName in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, attrName)) {
        const value = attrs[attrName];
        if (value) {
          serializedAttrs.push(`${escape(attrName)}="${escape(value)}"`);
        }
      }
    }
  }
  const attrsString = serializedAttrs.length > 0 ? ` ${serializedAttrs.join(" ")}` : "";
  return content ? `<${tagName}${attrsString}>${content.join("")}</${tagName}>` : `<${tagName}${attrsString} />`;
};
const absolutePositioning = {
  position: "absolute",
  left: "0px",
  top: "0px",
  width: "100%",
  height: "100%"
};
const imageAddStrategy = ({ lazyLoad, inView, loaded }) => {
  if (!lazyLoad) {
    return true;
  }
  if (isSsr()) {
    return false;
  }
  if (isIntersectionObserverAvailable()) {
    return inView || loaded;
  }
  return true;
};
const imageShowStrategy = ({ lazyLoad, loaded }) => {
  if (!lazyLoad) {
    return true;
  }
  if (isSsr()) {
    return false;
  }
  if (isIntersectionObserverAvailable()) {
    return loaded;
  }
  return true;
};
const buildSrcSet = (src, width, candidateMultipliers) => {
  if (!src || !width) {
    return void 0;
  }
  return candidateMultipliers.map((multiplier) => {
    const url = new URL(src);
    if (multiplier !== 1) {
      url.searchParams.set("dpr", `${multiplier}`);
      const maxH = url.searchParams.get("max-h");
      const maxW = url.searchParams.get("max-w");
      if (maxH) {
        url.searchParams.set(
          "max-h",
          `${Math.floor(parseInt(maxH) * multiplier)}`
        );
      }
      if (maxW) {
        url.searchParams.set(
          "max-w",
          `${Math.floor(parseInt(maxW) * multiplier)}`
        );
      }
    }
    const finalWidth = Math.floor(width * multiplier);
    if (finalWidth < 50) {
      return null;
    }
    return `${url.toString()} ${finalWidth}w`;
  }).filter(Boolean).join(",");
};
const Image = vueDemi.defineComponent({
  name: "DatocmsImage",
  props: {
    data: {
      type: Object,
      required: true
    },
    pictureClass: {
      type: String
    },
    fadeInDuration: {
      type: Number
    },
    intersectionTreshold: {
      type: Number,
      default: 0
    },
    intersectionThreshold: {
      type: Number
    },
    intersectionMargin: {
      type: String,
      default: "0px 0px 0px 0px"
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    rootStyle: {
      type: Object,
      default: () => ({})
    },
    pictureStyle: {
      type: Object,
      default: () => ({})
    },
    explicitWidth: {
      type: Boolean
    },
    layout: {
      type: String,
      default: () => "responsive",
      validator: (value) => ["intrinsic", "fixed", "responsive", "fill"].includes(value)
    },
    objectFit: {
      type: String
    },
    objectPosition: {
      type: String
    },
    usePlaceholder: {
      type: Boolean,
      default: true
    },
    sizes: {
      type: String
    },
    priority: {
      type: Boolean,
      default: false
    },
    srcSetCandidates: {
      type: Array,
      validator: (values) => values.every((value) => {
        return typeof value === "number";
      }),
      default: () => [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]
    }
  },
  setup(props) {
    const loaded = vueDemi.ref(false);
    function handleLoad() {
      loaded.value = true;
    }
    const { inView, elRef } = useInView({
      threshold: props.intersectionThreshold || props.intersectionTreshold || 0,
      rootMargin: props.intersectionMargin || "0px 0px 0px 0px"
    });
    const computedLazyLoad = vueDemi.ref(props.priority ? false : props.lazyLoad);
    const imageRef = vueDemi.ref();
    vueDemi.watchEffect(() => {
      if (!imageRef.value) {
        return;
      }
      if (imageRef.value.complete && imageRef.value.naturalWidth) {
        handleLoad();
      }
    });
    return {
      inView,
      elRef,
      loaded,
      handleLoad,
      computedLazyLoad,
      imageRef
    };
  },
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const addImage = imageAddStrategy({
      lazyLoad: this.computedLazyLoad,
      inView: this.inView,
      loaded: this.loaded
    });
    const showImage = imageShowStrategy({
      lazyLoad: this.computedLazyLoad,
      inView: this.inView,
      loaded: this.loaded
    });
    const webpSource = this.data.webpSrcSet && vueDemi.h(Source, __spreadValues$3(__spreadValues$3({}, vueDemi.isVue2 && {
      props: {
        srcset: this.data.webpSrcSet,
        sizes: (_b = (_a = this.sizes) != null ? _a : this.data.sizes) != null ? _b : void 0,
        type: "image/webp"
      }
    }), vueDemi.isVue3 && {
      srcset: this.data.webpSrcSet,
      sizes: (_d = (_c = this.sizes) != null ? _c : this.data.sizes) != null ? _d : void 0,
      type: "image/webp"
    }));
    const regularSource = this.data.srcSet && vueDemi.h(Source, __spreadValues$3(__spreadValues$3({}, vueDemi.isVue2 && {
      props: {
        srcset: (_e = this.data.srcSet) != null ? _e : buildSrcSet(this.data.src, this.data.width, this.srcSetCandidates),
        sizes: (_g = (_f = this.sizes) != null ? _f : this.data.sizes) != null ? _g : void 0
      }
    }), vueDemi.isVue3 && {
      srcset: (_h = this.data.srcSet) != null ? _h : buildSrcSet(this.data.src, this.data.width, this.srcSetCandidates),
      sizes: (_j = (_i = this.sizes) != null ? _i : this.data.sizes) != null ? _j : void 0
    }));
    const transition = typeof this.fadeInDuration === "undefined" || this.fadeInDuration > 0 ? `opacity ${this.fadeInDuration || 500}ms ${this.fadeInDuration || 500}ms` : void 0;
    const placeholder = this.usePlaceholder && (this.data.bgColor || this.data.base64) ? vueDemi.h("div", {
      "aria-hidden": "true",
      style: {
        backgroundImage: this.data.base64 ? `url(${this.data.base64})` : null,
        backgroundColor: this.data.bgColor,
        backgroundSize: "cover",
        opacity: showImage ? 0 : 1,
        objectFit: this.objectFit,
        objectPosition: this.objectPosition,
        transition,
        position: "absolute",
        left: "-5%",
        top: "-5%",
        width: "110%",
        height: "110%"
      }
    }) : null;
    const { width, aspectRatio } = this.data;
    const height = (_k = this.data.height) != null ? _k : aspectRatio ? width / aspectRatio : 0;
    const sizer = this.layout !== "fill" ? vueDemi.h(Sizer, __spreadValues$3(__spreadValues$3({}, vueDemi.isVue2 && {
      props: {
        sizerClass: this.pictureClass,
        sizerStyle: this.pictureStyle,
        width,
        height,
        explicitWidth: this.explicitWidth
      }
    }), vueDemi.isVue3 && {
      sizerClass: this.pictureClass,
      sizerStyle: this.pictureStyle,
      width,
      height,
      explicitWidth: this.explicitWidth
    })) : null;
    return vueDemi.h(
      "div",
      {
        style: __spreadValues$3(__spreadValues$3({
          display: this.explicitWidth ? "inline-block" : "block",
          overflow: "hidden"
        }, this.layout === "fill" ? absolutePositioning : this.layout === "intrinsic" ? { position: "relative", width: "100%", maxWidth: `${width}px` } : this.layout === "fixed" ? { position: "relative", width: `${width}px` } : { position: "relative" }), this.rootStyle),
        ref: "elRef"
      },
      [
        sizer,
        placeholder,
        addImage && vueDemi.h("picture", null, [
          webpSource,
          regularSource,
          this.data.src && vueDemi.h("img", __spreadProps$2(__spreadValues$3(__spreadValues$3({}, vueDemi.isVue2 && {
            attrs: {
              src: this.data.src,
              alt: this.data.alt,
              title: this.data.title,
              fetchpriority: this.priority ? "high" : void 0
            },
            on: {
              load: this.handleLoad
            }
          }), vueDemi.isVue3 && {
            src: this.data.src,
            alt: this.data.alt,
            title: this.data.title,
            fetchpriority: this.priority ? "high" : void 0,
            onLoad: this.handleLoad
          }), {
            ref: "imageRef",
            class: this.pictureClass,
            style: __spreadValues$3(__spreadProps$2(__spreadValues$3({
              opacity: showImage ? 1 : 0,
              transition
            }, absolutePositioning), {
              objectFit: this.objectFit,
              objectPosition: this.objectPosition
            }), this.pictureStyle)
          }))
        ]),
        vueDemi.h("noscript", __spreadValues$3(__spreadValues$3({}, vueDemi.isVue2 && {
          domProps: {
            innerHTML: tag("picture", {}, [
              this.data.webpSrcSet && tag("source", {
                srcset: this.data.webpSrcSet,
                sizes: this.data.sizes,
                type: "image/webp"
              }),
              this.data.srcSet && tag("source", {
                srcset: this.data.srcSet,
                sizes: this.data.sizes
              }),
              tag("img", {
                src: this.data.src,
                alt: this.data.alt,
                title: this.data.title,
                class: this.pictureClass,
                style: toCss(__spreadValues$3(__spreadProps$2(__spreadValues$3({}, absolutePositioning), {
                  objectFit: this.objectFit,
                  objectPosition: this.objectPosition
                }), this.pictureStyle)),
                loading: this.computedLazyLoad ? "lazy" : void 0,
                fetchpriority: this.priority ? "high" : void 0
              })
            ])
          }
        }), vueDemi.isVue3 && {
          innerHTML: tag("picture", {}, [
            this.data.webpSrcSet && tag("source", {
              srcset: this.data.webpSrcSet,
              sizes: this.data.sizes,
              type: "image/webp"
            }),
            this.data.srcSet && tag("source", {
              srcset: this.data.srcSet,
              sizes: this.data.sizes
            }),
            tag("img", {
              src: this.data.src,
              alt: this.data.alt,
              title: this.data.title,
              class: this.pictureClass,
              style: toCss(__spreadValues$3(__spreadValues$3({}, this.pictureStyle), absolutePositioning)),
              loading: this.computedLazyLoad ? "lazy" : void 0,
              fetchpriority: this.priority ? "high" : void 0
            })
          ])
        }))
      ]
    );
  }
});
const DatocmsImagePlugin = {
  install: (Vue) => {
    Vue.component("DatocmsImage", Image);
  }
};

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const hAdapter = (tagName, props, childOrChildren) => {
  const _a = props || {}, { href } = _a, rest = __objRest$1(_a, ["href"]);
  return vueDemi.h(
    tagName,
    __spreadValues$2(__spreadValues$2({}, vueDemi.isVue2 && __spreadValues$2({ attrs: { href } }, rest)), vueDemi.isVue3 && props),
    typeof childOrChildren === "undefined" || Array.isArray(childOrChildren) ? childOrChildren : [childOrChildren]
  );
};
const defaultAdapter = {
  renderNode: hAdapter,
  renderMark: hAdapter,
  renderFragment: (children, key) => children,
  renderText: (text, key) => text
};
function appendKeyToValidElement(element, key) {
  if (element !== null && typeof element !== "string" && element.key === null) {
    element.key = key;
  }
  return element;
}
const StructuredText = vueDemi.defineComponent({
  name: "DatocmsStructuredText",
  props: {
    data: {
      type: Object
    },
    customRules: {
      type: Array
    },
    customNodeRules: {
      type: Array
    },
    customMarkRules: {
      type: Array
    },
    renderInlineRecord: {
      type: Function
    },
    renderLinkToRecord: {
      type: Function
    },
    renderBlock: {
      type: Function
    },
    metaTransformer: { type: Function },
    renderText: { type: Function },
    renderNode: { type: Function },
    renderFragment: { type: Function }
  },
  setup(props) {
    return () => {
      return datocmsStructuredTextGenericHtmlRenderer.render(props.data, {
        adapter: {
          renderText: props.renderText || defaultAdapter.renderText,
          renderNode: props.renderNode || defaultAdapter.renderNode,
          renderFragment: props.renderFragment || defaultAdapter.renderFragment
        },
        metaTransformer: props.metaTransformer,
        customMarkRules: props.customMarkRules,
        customNodeRules: [
          datocmsStructuredTextGenericHtmlRenderer.renderNodeRule(
            datocmsStructuredTextUtils.isRoot,
            ({ adapter: { renderNode }, key, children }) => {
              return renderNode("div", { key }, children);
            }
          ),
          datocmsStructuredTextGenericHtmlRenderer.renderNodeRule(datocmsStructuredTextUtils.isInlineItem, ({ node, key }) => {
            if (!props.renderInlineRecord) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains an 'inlineItem' node, but no 'renderInlineRecord' prop is specified!`,
                node
              );
            }
            if (!datocmsStructuredTextUtils.isStructuredText(props.data) || !props.data.links) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains an 'inlineItem' node, but .links is not present!`,
                node
              );
            }
            const item = props.data.links.find((item2) => item2.id === node.item);
            if (!item) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains an 'inlineItem' node, but cannot find a record with ID ${node.item} inside .links!`,
                node
              );
            }
            return appendKeyToValidElement(
              props.renderInlineRecord({ record: item }),
              key
            );
          }),
          datocmsStructuredTextGenericHtmlRenderer.renderNodeRule(datocmsStructuredTextUtils.isItemLink, ({ node, key, children }) => {
            if (!props.renderLinkToRecord) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains an 'itemLink' node, but no 'renderLinkToRecord' prop is specified!`,
                node
              );
            }
            if (!datocmsStructuredTextUtils.isStructuredText(props.data) || !props.data.links) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains an 'itemLink' node, but .links is not present!`,
                node
              );
            }
            const item = props.data.links.find((item2) => item2.id === node.item);
            if (!item) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains an 'itemLink' node, but cannot find a record with ID ${node.item} inside .links!`,
                node
              );
            }
            return appendKeyToValidElement(
              props.renderLinkToRecord({
                record: item,
                children,
                transformedMeta: node.meta ? (props.metaTransformer || datocmsStructuredTextGenericHtmlRenderer.defaultMetaTransformer)({
                  node,
                  meta: node.meta
                }) : null
              }),
              key
            );
          }),
          datocmsStructuredTextGenericHtmlRenderer.renderNodeRule(datocmsStructuredTextUtils.isBlock, ({ node, key }) => {
            if (!props.renderBlock) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains a 'block' node, but no 'renderBlock' prop is specified!`,
                node
              );
            }
            if (!datocmsStructuredTextUtils.isStructuredText(props.data) || !props.data.blocks) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains a 'block' node, but .blocks is not present!`,
                node
              );
            }
            const item = props.data.blocks.find(
              (item2) => item2.id === node.item
            );
            if (!item) {
              throw new datocmsStructuredTextUtils.RenderError(
                `The Structured Text document contains a 'block' node, but cannot find a record with ID ${node.item} inside .blocks!`,
                node
              );
            }
            return appendKeyToValidElement(
              props.renderBlock({ record: item }),
              key
            );
          }),
          ...props.customNodeRules || props.customRules || []
        ]
      });
    };
  }
});
const DatocmsStructuredTextPlugin = {
  install: (Vue) => {
    Vue.component("DatocmsStructuredText", StructuredText);
  }
};

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async$1 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const useQuerySubscription = (_a) => {
  var _b = _a, { enabled = true, initialData, query, token } = _b, other = __objRest(_b, ["enabled", "initialData", "query", "token"]);
  const error = vueDemi.ref(null);
  const data = vueDemi.ref(vueDemi.unref(initialData) || null);
  const status = vueDemi.ref(vueDemi.unref(enabled) ? "connecting" : "closed");
  const subscribeToQueryOptions = other;
  vueDemi.watchEffect((onCleanup) => __async$1(void 0, null, function* () {
    if (query && token && vueDemi.unref(enabled)) {
      const unsubscribe = yield datocmsListen.subscribeToQuery(__spreadProps$1(__spreadValues$1({}, subscribeToQueryOptions), {
        query,
        token,
        onStatusChange: (connectionStatus) => {
          status.value = connectionStatus;
        },
        onUpdate: ({ response }) => {
          const resdata = response.data;
          error.value = null;
          data.value = resdata;
        },
        onChannelError: (errorData) => {
          data.value = null;
          error.value = errorData;
        }
      }));
      onCleanup(unsubscribe);
    }
  }));
  return { data, status, error };
};

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const highlightPieces = (textWithHighlightMarker) => {
  return textWithHighlightMarker.split(/\[h\](.+?)\[\/h\]/g).map((text, index) => ({
    text,
    isMatch: index % 2 === 1
  }));
};
function useSiteSearch(config) {
  var _a, _b, _c;
  const state = vueDemi.reactive({
    query: ((_a = config.initialState) == null ? void 0 : _a.query) || "",
    page: ((_b = config.initialState) == null ? void 0 : _b.page) || 0,
    locale: (_c = config.initialState) == null ? void 0 : _c.locale
  });
  const error = vueDemi.ref();
  const response = vueDemi.reactive({
    data: [],
    meta: { total_count: 0 }
  });
  error.value = void 0;
  const resultsPerPage = config.resultsPerPage || 8;
  vueDemi.watchEffect((onCleanup) => {
    let isCancelled = false;
    const run = () => __async(this, null, function* () {
      try {
        if (!state.query) {
          response.data = [];
          response.meta = { total_count: 0 };
          return;
        }
        const request = {
          filter: {
            query: state.query,
            locale: state.locale,
            build_trigger_id: config.buildTriggerId
          },
          page: {
            limit: resultsPerPage,
            offset: resultsPerPage * state.page
          }
        };
        if (config.fuzzySearch) {
          request.fuzzy = "true";
        }
        const results = yield config.client.searchResults.rawList(request);
        if (!isCancelled) {
          response.data = results.data;
          response.meta.total_count = results.meta.total_count;
        }
      } catch (e) {
        if (isCancelled) {
          return;
        }
        if (e instanceof Error) {
          error.value = e.message;
        } else {
          error.value = "Unknown error!";
        }
      }
    });
    run();
    onCleanup(() => {
      isCancelled = true;
    });
  });
  const data = vueDemi.computed(() => {
    return state.query && response.data.length > 0 ? {
      pageResults: response.data.map((rawSearchResult) => ({
        id: rawSearchResult.id,
        url: rawSearchResult.attributes.url,
        title: rawSearchResult.attributes.title,
        titleHighlights: rawSearchResult.attributes.highlight.title ? rawSearchResult.attributes.highlight.title.map(highlightPieces) : [],
        bodyExcerpt: rawSearchResult.attributes.body_excerpt,
        bodyHighlights: rawSearchResult.attributes.highlight.body ? rawSearchResult.attributes.highlight.body.map(highlightPieces) : [],
        raw: vueDemi.toRaw(rawSearchResult)
      })),
      totalResults: response.meta.total_count,
      totalPages: Math.ceil(response.meta.total_count / resultsPerPage)
    } : {
      pageResults: [],
      totalResults: 0,
      totalPages: 0
    };
  });
  return {
    state,
    error,
    data
  };
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const toHead = (...args) => {
  const tags = [].concat(...args);
  const titleTag = tags && tags.find((t) => t.tag === "title");
  const metaTags = tags ? tags.filter((t) => t.tag === "meta") : [];
  const linkTags = tags ? tags.filter((t) => t.tag === "link") : [];
  return {
    title: titleTag && titleTag.content,
    meta: metaTags.map((tag) => {
      var _a, _b, _c, _d;
      return __spreadProps(__spreadValues({}, tag.attributes), {
        hid: ((_a = tag.attributes) == null ? void 0 : _a.name) || ((_b = tag.attributes) == null ? void 0 : _b.property),
        vmid: ((_c = tag.attributes) == null ? void 0 : _c.name) || ((_d = tag.attributes) == null ? void 0 : _d.property)
      });
    }),
    link: linkTags.map((tag) => {
      var _a, _b, _c, _d, _e, _f;
      return __spreadProps(__spreadValues({}, tag.attributes), {
        hid: ((_a = tag.attributes) == null ? void 0 : _a.name) || `${(_b = tag.attributes) == null ? void 0 : _b.rel}-${(_c = tag.attributes) == null ? void 0 : _c.sizes}`,
        vmid: ((_d = tag.attributes) == null ? void 0 : _d.name) || `${(_e = tag.attributes) == null ? void 0 : _e.rel}-${(_f = tag.attributes) == null ? void 0 : _f.sizes}`
      });
    })
  };
};

Object.defineProperty(exports, 'renderMarkRule', {
  enumerable: true,
  get: function () { return datocmsStructuredTextGenericHtmlRenderer.renderMarkRule; }
});
Object.defineProperty(exports, 'renderNodeRule', {
  enumerable: true,
  get: function () { return datocmsStructuredTextGenericHtmlRenderer.renderNodeRule; }
});
Object.defineProperty(exports, 'renderRule', {
  enumerable: true,
  get: function () { return datocmsStructuredTextGenericHtmlRenderer.renderNodeRule; }
});
Object.defineProperty(exports, 'RenderError', {
  enumerable: true,
  get: function () { return datocmsStructuredTextUtils.RenderError; }
});
exports.DatocmsImagePlugin = DatocmsImagePlugin;
exports.DatocmsStructuredTextPlugin = DatocmsStructuredTextPlugin;
exports.Image = Image;
exports.StructuredText = StructuredText;
exports.appendKeyToValidElement = appendKeyToValidElement;
exports.defaultAdapter = defaultAdapter;
exports.toHead = toHead;
exports.useQuerySubscription = useQuerySubscription;
exports.useSiteSearch = useSiteSearch;
