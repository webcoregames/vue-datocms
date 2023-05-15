import * as vue_demi from 'vue-demi';
import { PropType, VNodeProps, VNode, Ref } from 'vue-demi';
import { TransformedMeta, RenderMarkRule, TransformMetaFn } from 'datocms-structured-text-generic-html-renderer';
export { renderMarkRule, renderNodeRule, renderNodeRule as renderRule } from 'datocms-structured-text-generic-html-renderer';
import { Record as Record$1, RenderResult, StructuredText as StructuredText$1, Document, Node, RenderRule } from 'datocms-structured-text-utils';
export { RenderError, Document as StructuredTextDocument, StructuredText as StructuredTextGraphQlResponse } from 'datocms-structured-text-utils';
import { Options, ConnectionStatus } from 'datocms-listen';

type ResponsiveImageType = {
    /** The aspect ratio (width/height) of the image */
    aspectRatio?: number;
    /** A base64-encoded thumbnail to offer during image loading */
    base64?: string;
    /** The height of the image */
    height?: number;
    /** The width of the image */
    width: number;
    /** The HTML5 `sizes` attribute for the image */
    sizes?: string;
    /** The fallback `src` attribute for the image */
    src?: string;
    /** The HTML5 `srcSet` attribute for the image */
    srcSet?: string;
    /** The HTML5 `srcSet` attribute for the image in WebP format, for browsers that support the format */
    webpSrcSet?: string;
    /** The background color for the image placeholder */
    bgColor?: string;
    /** Alternate text (`alt`) for the image */
    alt?: string;
    /** Title attribute (`title`) for the image */
    title?: string;
};
declare const Image: vue_demi.DefineComponent<{
    /** The actual response you get from a DatoCMS `responsiveImage` GraphQL query */
    data: {
        type: PropType<ResponsiveImageType>;
        required: true;
    };
    /** Additional CSS class for the image inside the `<picture />` tag */
    pictureClass: {
        type: StringConstructor;
    };
    /** Duration (in ms) of the fade-in transition effect upoad image loading */
    fadeInDuration: {
        type: NumberConstructor;
    };
    /** @deprecated Use the intersectionThreshold prop */
    intersectionTreshold: {
        type: NumberConstructor;
        default: number;
    };
    /** Indicate at what percentage of the placeholder visibility the loading of the image should be triggered. A value of 0 means that as soon as even one pixel is visible, the callback will be run. A value of 1.0 means that the threshold isn't considered passed until every pixel is visible */
    intersectionThreshold: {
        type: NumberConstructor;
    };
    /** Margin around the placeholder. Can have values similar to the CSS margin property (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the placeholder element's bounding box before computing intersections */
    intersectionMargin: {
        type: StringConstructor;
        default: string;
    };
    /** Wheter enable lazy loading or not */
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Additional CSS rules to add to the root node */
    rootStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** Additional CSS rules to add to the image inside the `<picture />` tag */
    pictureStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** Wheter the image wrapper should explicitely declare the width of the image or keep it fluid */
    explicitWidth: {
        type: BooleanConstructor;
    };
    /**
     * The layout behavior of the image as the viewport changes size
     *
     * Possible values:
     *
     * * `intrinsic`: the image will scale the dimensions down for smaller viewports, but maintain the original dimensions for larger viewports
     * * `fixed`: the image dimensions will not change as the viewport changes (no responsiveness) similar to the native img element
     * * `responsive` (default): the image will sscasle the dimensions down for smaller viewports and scale up for larger viewports
     * * `fill`: image will stretch both width and height to the dimensions of the parent element, provided the parent element is `relative`
     **/
    layout: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Defines how the image will fit into its parent container when using layout="fill" */
    objectFit: {
        type: StringConstructor;
    };
    /** Defines how the image is positioned within its parent element when using layout="fill". */
    objectPosition: {
        type: StringConstructor;
    };
    /** Whether the component should use a blurred image placeholder */
    usePlaceholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The HTML5 `sizes` attribute for the image
     *
     * Learn more about srcset and sizes:
     * -> https://web.dev/learn/design/responsive-images/#sizes
     * -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
     **/
    sizes: {
        type: StringConstructor;
    };
    /**
     * When true, the image will be considered high priority. Lazy loading is automatically disabled, and fetchpriority="high" is added to the image.
     * You should use the priority property on any image detected as the Largest Contentful Paint (LCP) element. It may be appropriate to have multiple priority images, as different images may be the LCP element for different viewport sizes.
     * Should only be used when the image is visible above the fold.
     **/
    priority: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * If `data` does not contain `srcSet`, the candidates for the `srcset` of the image will be auto-generated based on these width multipliers
     *
     * Default candidate multipliers are [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]
     **/
    srcSetCandidates: {
        type: ArrayConstructor;
        validator: (values: any[]) => values is number[];
        default: () => number[];
    };
}, {
    inView: vue_demi.Ref<boolean>;
    elRef: vue_demi.Ref<HTMLElement | null>;
    loaded: vue_demi.Ref<boolean>;
    handleLoad: () => void;
    computedLazyLoad: vue_demi.Ref<boolean>;
    imageRef: vue_demi.Ref<HTMLImageElement | undefined>;
}, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, {}, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<vue_demi.ExtractPropTypes<{
    /** The actual response you get from a DatoCMS `responsiveImage` GraphQL query */
    data: {
        type: PropType<ResponsiveImageType>;
        required: true;
    };
    /** Additional CSS class for the image inside the `<picture />` tag */
    pictureClass: {
        type: StringConstructor;
    };
    /** Duration (in ms) of the fade-in transition effect upoad image loading */
    fadeInDuration: {
        type: NumberConstructor;
    };
    /** @deprecated Use the intersectionThreshold prop */
    intersectionTreshold: {
        type: NumberConstructor;
        default: number;
    };
    /** Indicate at what percentage of the placeholder visibility the loading of the image should be triggered. A value of 0 means that as soon as even one pixel is visible, the callback will be run. A value of 1.0 means that the threshold isn't considered passed until every pixel is visible */
    intersectionThreshold: {
        type: NumberConstructor;
    };
    /** Margin around the placeholder. Can have values similar to the CSS margin property (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the placeholder element's bounding box before computing intersections */
    intersectionMargin: {
        type: StringConstructor;
        default: string;
    };
    /** Wheter enable lazy loading or not */
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** Additional CSS rules to add to the root node */
    rootStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** Additional CSS rules to add to the image inside the `<picture />` tag */
    pictureStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    /** Wheter the image wrapper should explicitely declare the width of the image or keep it fluid */
    explicitWidth: {
        type: BooleanConstructor;
    };
    /**
     * The layout behavior of the image as the viewport changes size
     *
     * Possible values:
     *
     * * `intrinsic`: the image will scale the dimensions down for smaller viewports, but maintain the original dimensions for larger viewports
     * * `fixed`: the image dimensions will not change as the viewport changes (no responsiveness) similar to the native img element
     * * `responsive` (default): the image will sscasle the dimensions down for smaller viewports and scale up for larger viewports
     * * `fill`: image will stretch both width and height to the dimensions of the parent element, provided the parent element is `relative`
     **/
    layout: {
        type: StringConstructor;
        default: () => string;
        validator: (value: string) => boolean;
    };
    /** Defines how the image will fit into its parent container when using layout="fill" */
    objectFit: {
        type: StringConstructor;
    };
    /** Defines how the image is positioned within its parent element when using layout="fill". */
    objectPosition: {
        type: StringConstructor;
    };
    /** Whether the component should use a blurred image placeholder */
    usePlaceholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The HTML5 `sizes` attribute for the image
     *
     * Learn more about srcset and sizes:
     * -> https://web.dev/learn/design/responsive-images/#sizes
     * -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
     **/
    sizes: {
        type: StringConstructor;
    };
    /**
     * When true, the image will be considered high priority. Lazy loading is automatically disabled, and fetchpriority="high" is added to the image.
     * You should use the priority property on any image detected as the Largest Contentful Paint (LCP) element. It may be appropriate to have multiple priority images, as different images may be the LCP element for different viewport sizes.
     * Should only be used when the image is visible above the fold.
     **/
    priority: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * If `data` does not contain `srcSet`, the candidates for the `srcset` of the image will be auto-generated based on these width multipliers
     *
     * Default candidate multipliers are [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]
     **/
    srcSetCandidates: {
        type: ArrayConstructor;
        validator: (values: any[]) => values is number[];
        default: () => number[];
    };
}>>, {
    explicitWidth: boolean;
    lazyLoad: boolean;
    intersectionTreshold: number;
    intersectionMargin: string;
    rootStyle: Record<string, any>;
    pictureStyle: Record<string, any>;
    layout: string;
    usePlaceholder: boolean;
    priority: boolean;
    srcSetCandidates: unknown[];
}, {}>;
declare const DatocmsImagePlugin: {
    install: (Vue: any) => void;
};

type AdapterReturn = VNode | string | null;
declare const defaultAdapter: {
    renderNode: (tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn;
    renderMark: (tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn;
    renderFragment: (children: AdapterReturn[], key: string) => AdapterReturn;
    renderText: (text: string, key: string) => AdapterReturn;
};
type H = typeof defaultAdapter.renderNode;
type T = typeof defaultAdapter.renderText;
type F = typeof defaultAdapter.renderFragment;
declare function appendKeyToValidElement(element: AdapterReturn, key: string): AdapterReturn;
type RenderInlineRecordContext = {
    record: Record$1;
};
type RenderRecordLinkContext = {
    record: Record$1;
    children: RenderResult<H, T, F>[];
    transformedMeta: TransformedMeta;
};
type RenderBlockContext = {
    record: Record$1;
};
declare const StructuredText: vue_demi.DefineComponent<{
    /** The actual field value you get from DatoCMS **/
    data: {
        type: PropType<StructuredText$1<Record$1, Record$1> | Document | Node | null | undefined>;
    };
    /** @deprecated use customNodeRules **/
    customRules: {
        type: PropType<RenderRule<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn, (text: string, key: string) => AdapterReturn, (children: AdapterReturn[], key: string) => AdapterReturn>[]>;
    };
    /** A set of additional rules to convert the document to JSX **/
    customNodeRules: {
        type: PropType<RenderRule<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn, (text: string, key: string) => AdapterReturn, (children: AdapterReturn[], key: string) => AdapterReturn>[]>;
    };
    /** A set of additional rules to convert the document to JSX **/
    customMarkRules: {
        type: PropType<RenderMarkRule<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn, (text: string, key: string) => AdapterReturn, (children: AdapterReturn[], key: string) => AdapterReturn>[]>;
    };
    /** Fuction that converts an 'inlineItem' node into React **/
    renderInlineRecord: {
        type: PropType<(context: RenderInlineRecordContext) => AdapterReturn>;
    };
    /** Fuction that converts an 'itemLink' node into React **/
    renderLinkToRecord: {
        type: PropType<(context: RenderRecordLinkContext) => AdapterReturn>;
    };
    /** Fuction that converts a 'block' node into React **/
    renderBlock: {
        type: PropType<(context: RenderBlockContext) => AdapterReturn>;
    };
    /** Function that converts 'link' and 'itemLink' `meta` into HTML props */
    metaTransformer: {
        type: PropType<TransformMetaFn>;
    };
    /** Fuction that converts a simple string text into React **/
    renderText: {
        type: PropType<(text: string, key: string) => AdapterReturn>;
    };
    /** React.createElement-like function to use to convert a node into React **/
    renderNode: {
        type: PropType<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn>;
    };
    /** Function to use to generate a React.Fragment **/
    renderFragment: {
        type: PropType<(children: AdapterReturn[], key: string) => AdapterReturn>;
    };
}, () => RenderResult<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn, (text: string, key: string) => AdapterReturn, (children: AdapterReturn[], key: string) => AdapterReturn>, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, {}, string, VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<vue_demi.ExtractPropTypes<{
    /** The actual field value you get from DatoCMS **/
    data: {
        type: PropType<StructuredText$1<Record$1, Record$1> | Document | Node | null | undefined>;
    };
    /** @deprecated use customNodeRules **/
    customRules: {
        type: PropType<RenderRule<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn, (text: string, key: string) => AdapterReturn, (children: AdapterReturn[], key: string) => AdapterReturn>[]>;
    };
    /** A set of additional rules to convert the document to JSX **/
    customNodeRules: {
        type: PropType<RenderRule<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn, (text: string, key: string) => AdapterReturn, (children: AdapterReturn[], key: string) => AdapterReturn>[]>;
    };
    /** A set of additional rules to convert the document to JSX **/
    customMarkRules: {
        type: PropType<RenderMarkRule<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn, (text: string, key: string) => AdapterReturn, (children: AdapterReturn[], key: string) => AdapterReturn>[]>;
    };
    /** Fuction that converts an 'inlineItem' node into React **/
    renderInlineRecord: {
        type: PropType<(context: RenderInlineRecordContext) => AdapterReturn>;
    };
    /** Fuction that converts an 'itemLink' node into React **/
    renderLinkToRecord: {
        type: PropType<(context: RenderRecordLinkContext) => AdapterReturn>;
    };
    /** Fuction that converts a 'block' node into React **/
    renderBlock: {
        type: PropType<(context: RenderBlockContext) => AdapterReturn>;
    };
    /** Function that converts 'link' and 'itemLink' `meta` into HTML props */
    metaTransformer: {
        type: PropType<TransformMetaFn>;
    };
    /** Fuction that converts a simple string text into React **/
    renderText: {
        type: PropType<(text: string, key: string) => AdapterReturn>;
    };
    /** React.createElement-like function to use to convert a node into React **/
    renderNode: {
        type: PropType<(tagName: string, props?: VNodeProps, childOrChildren?: AdapterReturn | AdapterReturn[]) => AdapterReturn>;
    };
    /** Function to use to generate a React.Fragment **/
    renderFragment: {
        type: PropType<(children: AdapterReturn[], key: string) => AdapterReturn>;
    };
}>>, {}, {}>;
declare const DatocmsStructuredTextPlugin: {
    install: (Vue: any) => void;
};

type SubscribeToQueryOptions<QueryResult, QueryVariables> = Omit<Options<QueryResult, QueryVariables>, 'onStatusChange' | 'onUpdate' | 'onChannelError'>;
type EnabledQueryListenerOptions<QueryResult, QueryVariables> = {
    /** Whether the subscription has to be performed or not */
    enabled?: true | Ref<boolean>;
    /** The initial data to use while the initial request is being performed */
    initialData?: QueryResult;
} & SubscribeToQueryOptions<QueryResult, QueryVariables>;
type DisabledQueryListenerOptions<QueryResult, QueryVariables> = {
    /** Whether the subscription has to be performed or not */
    enabled: false | Ref<false>;
    /** The initial data to use while the initial request is being performed */
    initialData?: QueryResult;
} & Partial<SubscribeToQueryOptions<QueryResult, QueryVariables>>;
type QueryListenerOptions<QueryResult, QueryVariables> = EnabledQueryListenerOptions<QueryResult, QueryVariables> | DisabledQueryListenerOptions<QueryResult, QueryVariables>;
declare const useQuerySubscription: <QueryResult = any, QueryVariables = Record<string, any>>({ enabled, initialData, query, token, ...other }: QueryListenerOptions<QueryResult, QueryVariables>) => {
    data: Ref<QueryResult | null>;
    status: Ref<ConnectionStatus>;
    error: Ref<{
        code: string;
        message: string;
        fatal: boolean;
        response?: any;
    } | null>;
};

type SearchResultInstancesHrefSchema = {
    page?: {
        offset?: number;
        limit?: number;
        [k: string]: unknown;
    };
    filter: {
        fuzzy?: string;
        query: string;
        build_trigger_id?: string;
        locale?: string;
        [k: string]: unknown;
    };
    [k: string]: unknown;
};
type SearchResultInstancesTargetSchema = {
    data: RawSearchResult[];
    meta: {
        total_count: number;
    };
};
type RawSearchResult = {
    type: 'search_result';
    id: string;
    attributes: {
        title: string;
        body_excerpt: string;
        url: string;
        score: number;
        highlight: {
            title?: string[] | null;
            body?: string[] | null;
        };
    };
};
declare class GenericClient {
    config: {
        apiToken: string | null;
    };
    searchResults: {
        rawList(queryParams: SearchResultInstancesHrefSchema): Promise<SearchResultInstancesTargetSchema>;
    };
}
type UseSiteSearchConfig<Client extends GenericClient> = {
    client: Client;
    buildTriggerId: string;
    fuzzySearch?: boolean;
    resultsPerPage?: number;
    initialState?: {
        locale?: string;
        page?: number;
        query?: string;
    };
};
type HighlightPiece = {
    text: string;
    isMatch: boolean;
};
type ResultHighlight = HighlightPiece[];
type SearchResult = {
    id: string;
    title: string;
    titleHighlights: ResultHighlight[];
    bodyExcerpt: string;
    bodyHighlights: ResultHighlight[];
    url: string;
    raw: RawSearchResult;
};
type UseSiteSearchData = {
    pageResults: SearchResult[];
    totalResults: number;
    totalPages: number;
};
type UseSiteSearchResult = {
    state: {
        query: string;
        locale: string | undefined;
        page: number;
    };
    data?: Ref<UseSiteSearchData>;
    error: Ref<string | undefined>;
};
declare function useSiteSearch<Client extends GenericClient>(config: UseSiteSearchConfig<Client>): UseSiteSearchResult;

type SeoMetaTagType = {
    /** the tag for the meta information */
    tag: string;
    /** the inner content of the meta tag */
    content: string | null;
    /** the HTML attributes to attach to the meta tag */
    attributes: Record<string, string> | null;
};
type ToMetaTagsType = SeoMetaTagType[];
declare const toHead: (...args: ToMetaTagsType[]) => {
    title: string | null | undefined;
    meta: {
        hid: string | undefined;
        vmid: string | undefined;
    }[];
    link: {
        hid: string;
        vmid: string;
    }[];
};

export { DatocmsImagePlugin, DatocmsStructuredTextPlugin, DisabledQueryListenerOptions, EnabledQueryListenerOptions, GenericClient, Image, QueryListenerOptions, RawSearchResult, RenderBlockContext, RenderInlineRecordContext, RenderRecordLinkContext, ResponsiveImageType, SeoMetaTagType, StructuredText, SubscribeToQueryOptions, ToMetaTagsType, UseSiteSearchConfig, UseSiteSearchData, UseSiteSearchResult, appendKeyToValidElement, defaultAdapter, toHead, useQuerySubscription, useSiteSearch };
