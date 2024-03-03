import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { client } from '../../../services/sanity/sanityClient';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const serializers = {
  types: {
    image: ({ node }) => (
      <figure>
        <img
          src={urlFor(node.asset).url()}
          alt={node.alt}
          style={{ maxWidth: '100%' }}
        />
        {node.caption && <pre>{node.caption}</pre>}
      </figure>
    ),
  },
};

const MarketInsightBlogContent = ({ content }) => (
  <BlockContent
    blocks={content}
    serializers={serializers}
    projectId = {import.meta.env.VITE_PROJECT_ID}
    dataset="production"

  />
);

export default MarketInsightBlogContent;
