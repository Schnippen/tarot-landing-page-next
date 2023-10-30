import React from "react";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: "sdad",
  };
}

function page({ params }: { params: any }) {
  return (
    <div style={{ height: "800px", display: "flex", alignItems: "center" }}>
      page {params.slug}
    </div>
  );
}

export default page;
