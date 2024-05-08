import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HyperLink`.
 */
export type HyperLinkProps = SliceComponentProps<Content.HyperLinkSlice>;

/**
 * Component for "HyperLink" Slices.
 */
const HyperLink = ({ slice }: HyperLinkProps): JSX.Element => {
  return (
    <PrismicNextLink field={slice.primary.hyperlink}>Click to view project</PrismicNextLink>
  );
};

export default HyperLink;
