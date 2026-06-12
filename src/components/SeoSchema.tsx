type SeoSchemaProps = {
  data: Record<string, unknown>;
};

export default function SeoSchema({ data }: SeoSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}